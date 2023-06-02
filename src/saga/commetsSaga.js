import {put, takeLeading, call} from "redux-saga/effects"
import { FETCH_COMMENTS,  requestCommentsError, setComments, putId } from "../store/commentsReducer"

// const items = select(state => state.commentReducer.commentId)

// console.log(items)

function* fetchCommentsDataWorker() {
  try {
    yield put (putId());
    const dataComments = yield call(() => {
      return fetch(`https://jsonplaceholder.typicode.com/comments`).then(res => res.json())/*?postId=${item}*/
      }
    );
    yield put(setComments(dataComments))
  } catch (error) {
    yield put(requestCommentsError());
  }
}

export function* commentsWatcher() {
  yield takeLeading(FETCH_COMMENTS, fetchCommentsDataWorker)
}
