import * as actions from "./actionTypes";

export const setUser = (user) => {
  return {
    type: actions.SET_USER,
    payload: user,
  };
};

export const setLoading = (status) => ({
  type: actions.SET_LOADING_STATUS,
  payload: status, 
})

export const getArticles = (article) => ({
  type: actions.GAT_ARTICLES,
  payload: article,
})
