import { useAuth0 } from "@auth0/auth0-react";
import style from "./LogInButton.module.css";

const LogInButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <div className={style.ContainerLog}>
      <button onClick={loginWithPopup} className={style.LogIn}>
        Log In
      </button>
    </div>
  );
};

export default LogInButton;
