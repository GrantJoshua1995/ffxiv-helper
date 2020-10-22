import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

// TODO: Add in saga functionality. Will just directly call store for now...
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
});

export default store;

sagaMiddleware.run(sagas);
