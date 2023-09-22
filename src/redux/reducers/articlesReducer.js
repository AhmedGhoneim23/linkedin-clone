import * as actions from "../actions/actionTypes";

export const initalState = {
  loading: false,
  aricles: [],
};

const articlesReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.payload,
      };
    case actions.GAT_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;
