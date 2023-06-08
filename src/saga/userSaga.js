import {put, takeEvery, call, select} from "redux-saga/effects"
import {FETCH_USERS, setUsers, requestUsers, requiestUsersError} from "../store/userReducer";
import { takeData, delay } from "../utils/utils";


function* fetchUserDataWorker() {
  const currentPage = yield select(store => store.userReducer.currentPage);
  const perPage = yield select(state => state.userReducer.perPage)
  try {
    yield put (requestUsers('true'));
    yield delay(300);
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
