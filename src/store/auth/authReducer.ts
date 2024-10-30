import { AuthActionsTypes, LOGIN, LOGOUT } from "./authActions";

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  firstName: string | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: sessionStorage.getItem("authToken") ? true : false,
  token: sessionStorage.getItem("authToken"),
  firstName: sessionStorage.getItem("firstName"),
};

export const authReducer = (
  state: AuthState = initialAuthState,
  action: AuthActionsTypes,
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        firstName: action.payload.firstName,
      };
    case LOGOUT:
      return { isAuthenticated: false, token: null, firstName: null };
    default:
      return state;
  }
};
