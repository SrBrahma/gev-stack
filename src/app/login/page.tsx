import { login, signup } from "./actions";

export default () => (
  <form>
    <label htmlFor="email">{"Email:"}</label>
    <input id="email" name="email" type="email" required />
    <label htmlFor="password">{"Password:"}</label>
    <input id="password" name="password" type="password" required />
    <button formAction={login} type="submit">
      {"Log in"}
    </button>
    <button formAction={signup} type="submit">
      {"Sign up"}
    </button>
  </form>
);
