import { createStore } from "redux";
import { rootReducer } from "./root-reducer";

//@ts-ignore
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;