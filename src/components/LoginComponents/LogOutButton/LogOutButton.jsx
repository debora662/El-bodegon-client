import { useAuth0 } from "@auth0/auth0-react";
import style from "./LogoutButton.module.css"
import {FiLogOut} from "react-icons/fi"

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button className={style.logout} onClick={logout}>Log Out</button>
      <FiLogOut/>
    </div>
  );
};

export default LogoutButton;
