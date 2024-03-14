import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { bookmarkReducer } from "./bookmarksReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    bookmarks: bookmarkReducer
})

export const store = createStore(rootReducer, composeWithDevTools())