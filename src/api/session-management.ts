import { UserCredentialsModel } from "../intefaces/user";

class SessionManagement {
  private readonly ACCESS_TOKEN: string;
  private readonly CREDENTIALS: string;

  constructor() {
    this.ACCESS_TOKEN = "FITCONNECT:ACCESS-TOKEN";
    this.CREDENTIALS = "FITCONNECT:CREDENTIALS";
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  getCredentials(): UserCredentialsModel | null {
    const credentials = localStorage.getItem(this.CREDENTIALS);
    if (!credentials) return null;

    return JSON.parse(credentials);
  }

  setAccessToken(token: string) {
    localStorage.setItem(this.ACCESS_TOKEN, token);
  }

  setCredentials(data: UserCredentialsModel) {
    localStorage.setItem(this.CREDENTIALS, JSON.stringify(data));
  }

  clearAuthData() {
    localStorage.removeItem(this.ACCESS_TOKEN);
  }
}

export default new SessionManagement();
