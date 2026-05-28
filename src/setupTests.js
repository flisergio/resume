// jest-dom adds custom matchers for asserting on DOM nodes (toBeInTheDocument
// etc.). The /vitest entry point wires them into Vitest's expect.
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Globally stub the tsparticles ESM packages so Vitest doesn't have to load
// the real engine in jsdom (it has DOM/canvas requirements that don't matter
// for our assertions). Per-suite mocks can override these if they want
// different behaviour.
vi.mock("@tsparticles/react", () => ({
  default: () => null,
  initParticlesEngine: () => Promise.resolve(),
}));
vi.mock("@tsparticles/slim", () => ({ loadSlim: () => Promise.resolve() }));
