export const addUser = (user) => {
  return {
    payload: user,
    type: "ADD_USER",
  };
};
export const addRecent = (recent) => {
  return {
    payload: recent,
    type: "ADD_RECENT",
  };
};
export const currentId = (id) => {
  return {
    payload: id,
    type: "CURRENT_USER_ID",
  };
};
export const currentIndex = (index) => {
  return {
    payload: index,
    type: "CURRENT_INDEX",
  };
};
