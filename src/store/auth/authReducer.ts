import { AuthActionsTypes, LOGIN, LOGOUT } from "./authActions";

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  firstName: string | null;
}

const initialAuthState: AuthState = {
  isAuthenticated: sessionStorage.getItem("authToken") ? true : false,
  token: sessionStorage.getItem("authToken"),
  firstName: sessionStorage.getItem("firstName"),
};

const authReducer = (state: AuthState = initialAuthState, action: AuthActionsTypes): AuthState => {
  switch (action.type) {
    case LOGIN:
      sessionStorage.setItem("authToken", action.payload.token);
      sessionStorage.setItem("firstName", action.payload.firstName);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        firstName: action.payload.firstName,
      };
    case LOGOUT:
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("firstName");
      return { isAuthenticated: false, token: null, firstName: null };
    default:
      return state;
  }
};

export { initialAuthState };
export default authReducer;
