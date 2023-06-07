const initialState = {
	comments: [],
	commentId: null,
};

const SET_COMMENTS = 'SET_COMMENTS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const REQUESTED_COMMENTS = 'REQUESTED_COMMENTS';
const REQUESTED_COMMENTS_FAILED = 'REQUESTED_COMMENTS_FAILED';
export const PUT_ID = 'putId';

const commentsReducer = (state = initialState, action) => {
	switch(action.type) {
		// case REQUESTED_COMMENTS:
        // return {
        //   comments: [],
        //   commentId: null,
        // };

		case PUT_ID:
			return {
			...state,
			commentId: action.commentId
			};

		case SET_COMMENTS: 
			return {
			...state,
			comments: action.payload,
			};
		case REQUESTED_COMMENTS_FAILED:
      return {
		...state
      }
		default:
			return state
	}
};

export const requestComments = () => {
	return {
		type: REQUESTED_COMMENTS,
	}
};

export const requestCommentsError = () => {
	return { type: REQUESTED_COMMENTS_FAILED}
};

export const setComments = (payload) => ({ type: SET_COMMENTS, payload});

export const fetchComments = () => {return({
	type: FETCH_COMMENTS,
})};

export const putId = (commentId) => {
	return { type: PUT_ID,
  	commentId
}}

export default commentsReducer;