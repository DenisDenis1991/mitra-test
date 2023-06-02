import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_USERS, setUsers, requestUsers, requiestUsersError} from "../store/userReducer";


function* fetchUserDataWorker() {
  try {
    // const items = yield select(state => state.userReducer.loading)
    // yield console.log(items)
    yield put (requestUsers());/* отправляет статус загрузки в редюьсер*/
    const dataUsers = yield call(()=> {
      return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      }
    );
    const dataPosts = yield call (() => {
      return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    });
    yield put(setUsers({'dataUsers': dataUsers, 'dataPosts': dataPosts}))
  } catch (error) {
    yield put(requiestUsersError());
  }
}


export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserDataWorker)
}
