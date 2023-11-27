import { all, fork } from "redux-saga/effects";
import { watchGetUsers } from "../features/Users/users.Saga";
import { watchUserDetails } from "../features/Users/userDetails.Saga";

export default function* rootSaga() {
  yield all([fork(watchGetUsers), fork(watchUserDetails)]);
}
