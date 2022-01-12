import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authreducer } from "./Auth/reducer";
import { reducer } from "./Todos/reducer";

const rootReducer = combineReducers({
  authReducer: authreducer,
  todoReducer: reducer,
});

/**
 *
 * @param {redux state} state
 */
const logger = (state) => (next) => (action) => {
  console.log("sipatching action", action, next, state);
  const val = next(action);
  console.log("Exiting Logger");
  return val;
};
const logger2 = (state) => (next) => (action) => {
  console.log("sipatching action logger2", action, next, state);
  const val = next(action);
  console.log("Exiting Logger 2");
  return val;
};
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(logger, logger2));
export const store = createStore(
  rootReducer,
  enhancer
  //window.__REDUX_DEVTOOLS_EXTENSION__()
);
