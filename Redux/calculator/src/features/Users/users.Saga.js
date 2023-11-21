import { put, takeLatest } from "redux-saga/effects";
import {
  getUsersList,
  getUsersListFailure,
  getUsersListSuccess,
} from "./users.Slice";

const getRequest = async (url) => {
  try {
    const data = await fetch(url);
    const userData = await data.json();
    return userData;
  } catch (err) {
    return null;
  }
};

function* getUsers() {
  try {
    const userData = yield getRequest(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (!userData) {
      yield put(getUsersListFailure());
      return;
    }
    console.log("userData : ", userData);
    yield put(getUsersListSuccess({ results: userData }));
  } catch (err) {
    yield put(getUsersListFailure());
  }
}

export function* watchGetUsers() {
  yield takeLatest(getUsersList, getUsers);
}
