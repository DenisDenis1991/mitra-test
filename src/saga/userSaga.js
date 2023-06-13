import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_USERS, setUsers, requestUsers, requiestUsersError} from "../store/userReducer";
import { takeData, delay } from "../utils/utils";


function* fetchUserDataWorker() {
  try {
    yield put (requestUsers(true));
    yield (delay(500));
    const users = yield call(takeData, 'users', /*`?_start=0&_limit=${perPage}&_page=${currentPage}`*/'');
    const posts = yield call(takeData, 'posts', '')
    yield put(setUsers({'dataUsers': users, 'dataPosts': posts}))

  } catch (error) {
    yield put(requiestUsersError());
  }
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserDataWorker)
}
