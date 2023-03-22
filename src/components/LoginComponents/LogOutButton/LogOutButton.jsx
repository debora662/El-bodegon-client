import { useAuth0 } from "@auth0/auth0-react";
import style from "./LogoutButton.module.css"

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button className={style.logout} onClick={logout}>Log Out</button>
    </div>
  );
};

export default LogoutButton;
