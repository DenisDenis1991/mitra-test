import {put, takeEvery, call, select} from "redux-saga/effects"
import {FETCH_USERS, setUsers, requestUsers, requiestUsersError} from "../store/userReducer";
    // https://jsonplaceholder.typicode.com/users?_start=0&_limit=5&_page=2

export const takeData = async (getApi, page) => {

  const request = await fetch(`https://jsonplaceholder.typicode.com/${getApi}/${page}`);
  const data = await request.json();
  return data;
}

function* fetchUserDataWorker() {
  try {
    yield put (requestUsers());/* отправляет статус загрузки в редюьсер*/
    const users = yield call(takeData, 'users', `?_start=0&_limit=5&_page=1}`);
    const posts = yield call(takeData, 'posts', '')
    yield put(setUsers({'dataUsers': users, 'dataPosts': posts}))
  } catch (error) {
    yield put(requiestUsersError());
  }
}


export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserDataWorker)
}
