import {put, call, select, takeEvery} from "redux-saga/effects"
import { requestCommentsError, setComments, PUT_ID } from "../store/commentsReducer"
import { takeData, delay } from "../utils/utils";


function* fetchCommentsDataWorker() {
  const commentId = yield select(store => store.commentsReducer.commentId);
  try {
    const dataComments = yield call(takeData,`comments?postId=${commentId}`, '')
    yield delay(1000)
    yield put(setComments(dataComments))

  } catch (error) {
    yield put(requestCommentsError());
  }
}

export function* commentsWatcher() {
  yield takeEvery(PUT_ID, fetchCommentsDataWorker)
}
