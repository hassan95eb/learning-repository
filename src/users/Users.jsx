import { useEffect, useState } from "react";
import style from "../style.module.css";
import { Link } from "react-router";
import swal from "sweetalert";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  function handleDelete(id) {
    swal({
      title: "Are you sure?",
      text: `Once deleted item= ${id}, you will not be able to recover this imaginary file!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((res) => {
            if (res.status === 200) {
              const newUsers = users.filter((t) => t.id != id);
              setUsers(newUsers);
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("errorrrrr", {
                icon: "error",
              });
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت کاربران</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control shadow"
            placeholder="جستجو"
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
      <table className="table bg-light shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>نام</th>
            <th>نام کاربری</th>
            <th>ایمیل</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.name}</td>
              <td>{t.username}</td>
              <td>{t.email}</td>
              <td>
                <Link to={`/user/add/${t.id}`}>
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
    </div>
  );
};

export default Users;
