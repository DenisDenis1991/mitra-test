const defaultState = {
    users: [],
    posts: [],
    currentPage: 1,
    perPage: 5,
    totalCount: 0,
    loading: false,
    error: false,
}

export const SET_USERS = "SET_USERS"
export const FETCH_USERS = "FETCH_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

export default function userReducer(state = defaultState, action) {
  switch(action.type) {
    case 'REQUESTED_USERS':
      return {
        users: [],
        posts: [],
        loading: true,
        error: false,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload.dataUsers,
        posts: action.payload.dataPosts,
        loading: false,
      };
    case 'REQUESTED_USERS_FAILED':
        return {
          users: [],
          posts: [],
          loading: false,
          error: true,
        }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
    default:
      return state;
  }
}

export const requestUsers = () => {
  return { type: 'REQUESTED_USERS' }
};

export const requiestUsersError = () => {
  return { type: 'REQUESTED_USERS_FAILED' }
};

export const setUsers = payload => ({type: SET_USERS, payload})

export const fetchUsers = () => ({type: FETCH_USERS})

export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, payload:page})