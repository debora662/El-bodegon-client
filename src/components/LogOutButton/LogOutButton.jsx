import { useAuth0 } from "@auth0/auth0-react";
import style from "./LogOutButton.module.css"

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button className={style.LogOut} onClick={logout}>Log Out</button>
    </div>
  );
};

export default LogOutButton;
