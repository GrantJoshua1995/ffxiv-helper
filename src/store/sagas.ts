import { all } from "redux-saga/effects";
import userSaga from "./servers/servers.saga";

export default function* sagas() {
  yield all([userSaga()]);
}
