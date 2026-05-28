import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import rootReducer from "./reducers";

const isDev = import.meta.env.MODE !== "production";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  // redux-immutable-state-invariant is dev-only: it warns on accidental state
  // mutation but adds non-trivial runtime cost. Vite tree-shakes the dead
  // branch out of the production bundle because `import.meta.env.MODE` is a
  // compile-time constant under `vite build`.
  const middleware = isDev ? [thunk, reduxImmutableStateInvariant()] : [thunk];

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
