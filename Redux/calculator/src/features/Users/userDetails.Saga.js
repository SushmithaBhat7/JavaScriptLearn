import { put, takeLatest } from "redux-saga/effects";
import {
  getUsersDetailList,
  getUsersDetailListFailure,
  getUsersDetailListSuccess,
} from "./userDetails.Slice";

const getRequest = async (url) => {
  try {
    const data = await fetch(url);
    const userData = await data.json();
    return userData;
  } catch (err) {
    return null;
  }
};

function* getUserDetails(actions) {
  console.log("actions.payload.id :", actions.payload.id);
  try {
    const userDetail = yield getRequest(
      `https://jsonplaceholder.typicode.com/users/${actions.payload.id}`
    );
    console.log("userDetail :", userDetail);
    if (!userDetail) {
      yield put(getUsersDetailListFailure());
      return;
    }
    yield put(getUsersDetailListSuccess({ results: userDetail }));
  } catch (err) {
    console.log("err :", err);
    yield put(getUsersDetailListFailure());
  }
}

export function* watchUserDetails() {
  yield takeLatest(getUsersDetailList, getUserDetails);
}
