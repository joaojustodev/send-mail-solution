import { configureStore } from "@reduxjs/toolkit";
// ...
import { mailReducer } from "./reducer/mailReducer";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
