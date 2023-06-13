const defaultState = {
    users: [],
    posts: [],
    currentPage: 1,
    totalCount: 10,
    loading: false,
    error: false,
    activeUser: null,
}

export const SET_USERS = "SET_USERS"
export const FETCH_USERS = "FETCH_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_REPOS = "SET_REPOS"
const REQUESTED_USERS = "REQUESTED_USERS"
const SET_ACTIVE_USER =  "SET_ACTIVE_USER"

export default function userReducer(state = defaultState, action) {
  switch(action.type) {
    case REQUESTED_USERS:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload.dataUsers,
        posts: action.payload.dataPosts,
        loading: false,
      };

    case SET_REPOS:
      return {
        ...state,
        totalCount: action.payload,
      };

    case 'REQUESTED_USERS_FAILED':
        return {
          ...state,
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
    case SET_ACTIVE_USER:
      return{
        ...state,
        activeUser: action.payload,
      }
    default:
      return state;
  }
}

export const requestUsers = (payload) => {
  return { type: REQUESTED_USERS, payload }
};

export const requiestUsersError = () => {
  return { type: 'REQUESTED_USERS_FAILED' }
};

export const setRepos = (payload) => ({type: SET_REPOS, payload})

export const setUsers = payload => ({type: SET_USERS, payload})

export const fetchUsers = () => ({type: FETCH_USERS})

export const setCurrentPage = (payload) => ({type:SET_CURRENT_PAGE, payload})

export const activeUser = (payload) => ({type: SET_ACTIVE_USER, payload})