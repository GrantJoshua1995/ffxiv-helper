import { takeLatest, put } from "redux-saga/effects";
import { FFXIVApi } from "../../services/api";
import { fetchServersStart, fetchServersSuccess } from "./servers.slice";

function* fetchServersSaga() {
  try {
    const serverList = yield FFXIVApi.fetchServerList();
    yield put(fetchServersSuccess(serverList));
  } catch (error) {}
}

function* userSaga() {
  yield takeLatest(fetchServersStart, fetchServersSaga);
}

export default userSaga;
