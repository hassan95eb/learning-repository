import { useContext } from "react";
import { MainContext } from "./contexts/MainContext";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import { Route, Routes } from "react-router";
import AddUser from "./users/AddUser";
import Others from "./other/Other";
import AddPost from "./posts/AddPost";

const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  //   const [isUser, setIsUser] = useState(true);

  const handleShowMenu = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div
      className={style.content_section}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
        onClick={handleShowMenu}
      ></i>

      <Routes>
        {/* <Route
          path="/"
          element={isUser ? <Users /> : <Navigate replace to="/posts" />}
        /> */}
        <Route path="/user" element={<Users />} />
        <Route path="/user/add" element={<AddUser />}>
          <Route path=":id" />
        </Route>
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/add" element={<AddPost />}>
          <Route path=":id" />
        </Route>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/others" element={<Others />} />
        <Route path="*" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Content;
