import { ADD_NAME } from "../actions/actions";
import { ADD_CARD } from "../actions/actions";

if (!localStorage.getItem("columns")) {
  localStorage.setItem(
    "columns",
    JSON.stringify([
      { id: 1, title: "TODO" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Testing" },
      { id: 4, title: "Done" }
    ])
  );
}

const initialState = {
  name: localStorage.getItem("name") || "",
  comments: JSON.parse(localStorage.getItem("comments")) || [],
  nextCardId: JSON.parse(localStorage.getItem("nextCardId")) || 1,
  nextCommentId: JSON.parse(localStorage.getItem("nextCommentId")) || 1,

  popupCard: ""
};

const name = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.name
      };
    case ADD_CARD:
      return {
        ...state,
        nextCardId: state.nextCardId + 1
      };
    default:
      return state;
  }
};

export default name;
