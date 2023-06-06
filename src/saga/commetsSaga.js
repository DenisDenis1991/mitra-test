import {put, takeLeading, call, select} from "redux-saga/effects"
import { FETCH_COMMENTS,  requestCommentsError, setComments, PUT_ID } from "../store/commentsReducer"
import { takeData } from "./userSaga"


function* fetchCommentsDataWorker() {
  const commentId = yield select(store => store.commentsReducer.commentId);
  try {
    const dataComments = yield call(takeData,`comments?postId=${commentId}`)
    yield put(setComments(dataComments))

  } catch (error) {
    yield put(requestCommentsError());
  }
}

export function* commentsWatcher() {
  yield takeLeading(PUT_ID, fetchCommentsDataWorker)
}
