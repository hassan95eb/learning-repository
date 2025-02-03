import { useEffect, useState } from "react";
import style from "../style.module.css";
import { Link } from "react-router";
import { jpAxios } from "../Service/jpAxios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  function handleSearch() {}
  const handleDelete = () => {};
  const getPosts = async () => {
    const result = await jpAxios.get("/posts");
    setPosts(result.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت پست ها</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control shadow"
            placeholder="جستجو"
            onChange={handleSearch}
          />
        </div>
        <div className="col-2 text-start px-0">
          <Link to="/user/add">
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
                <td>{t.userId}</td>
                <td>{t.title}</td>
                <td>{t.body}</td>
                <td>
                  <Link to={`/post/add/${t.id}`}>
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
          <div className="text-center h3"> موردی برای نمایش وجود ندارد. </div>
        </>
      )}
    </div>
  );
};

export default Posts;
