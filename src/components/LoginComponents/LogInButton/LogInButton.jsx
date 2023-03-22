import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import style from "./LoginButton.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  useEffect(()=>{
    console.log(loginWithRedirect);
  },[])
  return (  
    <div className={style.ContainerLog}>
      <button onClick={loginWithRedirect} className={style.LogIn}>
        Log In
      </button>
    </div>
  );
};

export default LoginButton;
