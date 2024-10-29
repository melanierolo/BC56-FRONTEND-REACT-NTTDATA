import { AuthActionsTypes, LOGIN, LOGOUT } from "./AuthActions";

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  firstName: string | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  token: null,
  firstName: null,
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
      sessionStorage.removeItem("username");
      return { isAuthenticated: false, token: null, firstName: null };
    default:
      return state;
  }
};

export default authReducer;
