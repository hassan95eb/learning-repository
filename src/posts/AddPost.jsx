import { useNavigate, useParams } from "react-router";
import "../users/addUser.css";
import { useEffect, useState } from "react";
import { jpAxios } from "../Service/jpAxios";

export default function AddPost() {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });
  const getPost = async () => {
    const res = await jpAxios.get(`/posts/${params.id}`);
    if (res.status == 200) {
      setPost({
        id: res.data.id,
        userId: res.data.userId,
        title: res.data.title,
        body: res.data.body,
      });
    }
  };
  useEffect(() => {
    if (params.id) {
      getPost();
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    jpAxios.post("/posts", post).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="form-section d-flex justify-content-center align-items-center flex-column">
      <h1 className="h2 my-2">
        {params.id ? `ویرایش پست ${params.id}` : "افزودن پست"}
      </h1>
      <form onSubmit={handleSubmit} className="form bg-white rounded p-3">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            آی دی کاربر
          </label>
          <input
            type="text"
            className="form-control"
            name="userId"
            value={post.userId}
            onChange={(e) => {
              setPost({ ...post, userId: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            عنوان
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={post.title}
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            متن
          </label>
          <textarea
            name="body"
            cols={60}
            rows={4}
            value={post.body}
            onChange={(e) => {
              setPost({ ...post, body: e.target.value });
            }}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-danger px-2 "
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            بازگشت
          </button>
          <button type="submit" className="btn btn-success px-2 me-1">
            {params.id ? "ویرایش" : "ذخیره"}
          </button>
        </div>
      </form>
    </div>
  );
}
