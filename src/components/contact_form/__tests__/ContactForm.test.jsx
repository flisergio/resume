import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect, beforeEach } from "vitest";

// Provide env vars BEFORE importing the component so init() picks them up.
// Vitest's vi.stubEnv mirrors values into import.meta.env.
vi.stubEnv("VITE_EMAILJS_USER_ID", "test_user_id");
vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "test_service_id");
vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "test_template_id");

// Mock both side-effecting libraries so the test stays in-process. Mock fns
// are declared via vi.hoisted so they're available both inside the mock
// factory (which is hoisted above imports) and in the test body.
const { sendMock, initMock, fireMock } = vi.hoisted(() => ({
  sendMock: vi.fn(() => Promise.resolve({ status: 200, text: "OK" })),
  initMock: vi.fn(),
  fireMock: vi.fn(() => Promise.resolve({ isConfirmed: true })),
}));

vi.mock("emailjs-com", () => {
  // Mirror the real emailjs-com shape (verified against
  // node_modules/emailjs-com/source/index.js): __esModule:true with named
  // exports `init`/`send` AND a default object that re-exposes both. The
  // component imports both: `import { init }` and `import emailjs from`.
  const defaultObj = { init: initMock, send: sendMock };
  return {
    init: initMock,
    send: sendMock,
    default: defaultObj,
  };
});

vi.mock("sweetalert2", () => ({
  default: { fire: fireMock },
}));

import ContactForm from "../ContactForm";
import { renderWithStore } from "../../../test-utils/renderWithStore";

describe("ContactForm", () => {
  beforeEach(() => {
    sendMock.mockClear();
    fireMock.mockClear();
  });

  it("renders the section with id and class", () => {
    renderWithStore(<ContactForm id="contact" />);
    const section = screen.getByTestId("ContactForm");
    expect(section).toHaveAttribute("id", "contact");
    expect(section).toHaveClass("contact-form_container");
  });

  it("renders four form fields and a submit button", () => {
    renderWithStore(<ContactForm id="contact" />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your message/)
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue("send")).toBeInTheDocument();
  });

  it("submitting the form calls emailjs.send with typed values and the configured ids", async () => {
    const user = userEvent.setup();
    renderWithStore(<ContactForm id="contact" />);

    await user.type(screen.getByPlaceholderText("Name"), "Ada Lovelace");
    await user.type(screen.getByPlaceholderText("E-mail"), "ada@example.com");
    await user.type(screen.getByPlaceholderText("Phone"), "+48123456789");
    await user.type(
      screen.getByPlaceholderText(/Enter your message/),
      "Hello there, this is a test message."
    );

    // Submit via the form element directly. JSDOM's `requestSubmit` triggers
    // the React onSubmit handler; user.click on the [type=submit] input works
    // too but is more brittle around HTML5 pattern validation.
    const form = screen.getByTestId("ContactForm").querySelector("form");
    expect(form).not.toBeNull();
    if (typeof form.requestSubmit === "function") {
      form.requestSubmit();
    } else {
      form.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }

    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(sendMock).toHaveBeenCalledWith(
      "test_service_id",
      "test_template_id",
      expect.objectContaining({
        from_name: "Ada Lovelace",
        from_email: "ada@example.com",
        from_phone: "+48123456789",
        message: "Hello there, this is a test message.",
      })
    );
  });
});
