import { useAuth0 } from "@auth0/auth0-react";
import style from "./LogInButton.module.css";

const LogInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={style.ContainerLog}>
      <button onClick={loginWithRedirect} className={style.LogIn}>
        Log In
      </button>
    </div>
  );
};

export default LogInButton;
