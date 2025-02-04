/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import style from "../style.module.css";
import { Link } from "react-router";
import { jpAxios } from "../Service/jpAxios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [mainPosts, setMainPosts] = useState([]);
  const [uId, setUId] = useState("");

  const handleDelete = () => {};
  const getPosts = async () => {
    const result = await jpAxios.get("/posts");
    setPosts(result.data);
    setMainPosts(result.data);
  };
  function handleSearch() {
    setPosts(mainPosts.filter((t) => t.userId == uId));
  }
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    if (uId > 0) {
      handleSearch();
    } else {
      getPosts();
    }
  }, [uId]);

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت پست ها</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control shadow"
            placeholder="جستجو"
            onChange={(e) => {
              setUId(e.target.value);
            }}
            value={uId}
          />
        </div>
        <div className="col-2 text-start px-0">
          <Link to="/posts/add">
            <button className="btn btn-success">
              <i className="fas fa-plus text-light"></i>
            </button>
          </Link>
        </div>
      </div>
      {posts.length ? (
        <table className="table bg-light shadow">
          <thead>
            <tr>
              <th>#</th>
              <th> UId </th>
              <th> عنوان </th>
              <th> متن </th>
              <th> عملیات </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td
                  style={{ color: "#ff0000" }}
                  onClick={() => setUId(t.userId)}
                >
                  {t.userId}
                </td>
                <td>{t.title}</td>
                <td>{t.body}</td>
                <td>
                  <Link to={`/posts/add/${t.id}`}>
                    <i className="fas fa-edit text-warning mx-2 pointer"></i>
                  </Link>
                  <i
                    className="fas fa-trash text-danger mx-2 pointer"
                    onClick={() => handleDelete(t.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <br />
          <div className="text-center h3"> لطفا صبر کنید </div>
        </>
      )}
    </div>
  );
};

export default Posts;
