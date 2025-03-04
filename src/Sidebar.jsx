/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { MainContext } from "./contexts/MainContext";
import style from "./style.module.css";
import { Link } from "react-router";

const Sidebar = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);

  return (
    <div
      className={`${style.sidebar_section} bg-secondary`}
      style={showMenu ? { right: 0 } : {}}
    >
      <ul className={`${style.sidebar_list} m-0 p-0`}>
        <li className={style.sidebar_avatar}>
          <img src="src/assets/images/user2.jpg" alt="" />
        </li>
        <li>
          <Link to="/user">کاربران</Link>
        </li>
        <li>
          <Link to="/posts">پست ها</Link>
        </li>
        <li>
          <Link to="/gallery">گالری</Link>
        </li>
        <li>
          <Link to="/todos">کارها</Link>
        </li>
        <li>
          <Link to="/others">سایر</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
