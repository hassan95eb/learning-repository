import style from "../style.module.css";
import { Link } from "react-router";
import swal from "sweetalert";

const Users = () => {
  function handleDelete(id) {
    swal({
      title: "Are you sure?",
      text: `Once deleted item= ${id}, you will not be able to recover this imaginary file!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
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
          <tr>
            <td>1</td>
            <td>qasem</td>
            <td>qasemB</td>
            <td>mahdicmptr@gmail.com</td>
            <td>
              <Link to="/user/add/2">
                <i className="fas fa-edit text-warning mx-2 pointer"></i>
              </Link>
              <i
                className="fas fa-trash text-danger mx-2 pointer"
                onClick={() => handleDelete(1)}
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
