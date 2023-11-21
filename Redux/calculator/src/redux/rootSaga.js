import { all, fork } from "redux-saga/effects";
import { watchGetUsers } from "../features/Users/users.Saga";

export default function* rootSaga() {
  yield all([fork(watchGetUsers)]);
}
