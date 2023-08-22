import { AnyAction } from "@reduxjs/toolkit"
import { StateType } from "../types/state"
import { DELETE_POST, SET_POST } from "./type.redux"

const initialState: StateType = {
  posts: [],
  // loading: false,
  // count: 0
}

const PostReducer = (state = initialState, action: AnyAction) => {
  const {type, payload} = action

  switch (type) {
    case SET_POST:
      return { ...state, posts: payload}
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== payload)}
    default:
      return state
  }
}

export default PostReducer
