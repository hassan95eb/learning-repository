import { useNavigate, useParams } from "react-router";
import "./addUser.css";
import { useEffect, useState } from "react";
import axios from "axios";

function AddUser() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
      street: "",
      suite: "",
      zipcode: "",
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (!params.id) {
      axios
        .post("https://jsonplaceholder.typicode.com/users", data)
        .then((res) => {
          console.log(res);
        });
    } else {
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${params.id}`, data)
        .then((res) => {
          console.log(res);
        });
    }
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => {
        setData({
          name: res.data.name,
          username: res.data.username,
          email: res.data.email,
          address: {
            city: res.data.address.city,
            street: res.data.address.street,
            suite: res.data.address.suite,
            zipcode: res.data.address.zipcode,
          },
        });
      });
  }, []);
  return (
    <div className="form-section d-flex justify-content-center align-items-center flex-column">
      <h1 className="h2 my-2">{params.id ? "ویرایش کاربر" : "افزودن کاربر"}</h1>
      <form onSubmit={handleSubmit} className="form bg-white rounded p-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            نام و نام خانوادگی
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            نام کاربری
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            ایمیل
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="row">
          <div>
            <label>آدرس</label>
          </div>
          <div className="col-12 col-md-6 my-1">
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="شهر"
              value={data.address.city}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, city: e.target.value },
                })
              }
            />
          </div>
          <div className="col-12 col-md-6 my-1">
            <input
              type="text"
              className="form-control"
              id="street"
              placeholder="خیابان"
              value={data.address.street}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, street: e.target.value },
                })
              }
            />
          </div>
          <div className="col-12 col-md-6 my-1">
            <input
              type="text"
              className="form-control"
              id="suite"
              placeholder="ادامه آدرس"
              value={data.address.suite}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, suite: e.target.value },
                })
              }
            />
          </div>
          <div className="col-12 col-md-6 my-1">
            <input
              type="text"
              className="form-control"
              id="zipcode"
              placeholder="کدپستی"
              value={data.address.zipcode}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, zipcode: e.target.value },
                })
              }
            />
          </div>
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
export default AddUser;
