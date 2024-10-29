export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

interface LoginPayload {
  token: string;
  firstName: string;
}

interface LoginAction {
  type: typeof LOGIN;
  payload: LoginPayload;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionsTypes = LoginAction | LogoutAction;

export const loginAction = (token: string, firstName: string): LoginAction => ({
  type: LOGIN,
  payload: { token, firstName },
});

export const logoutAction = (): LogoutAction => ({ type: LOGOUT });
