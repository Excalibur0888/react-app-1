import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser, removeUser } from "./store/slices/userSlice"; // действия для работы с пользователем

export const initAuthListener = (store) => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      }));
    } else {
      store.dispatch(removeUser());
    }
  });
};
