import "./addUser.css";
function AddUser() {
  return (
    <div className="form-section d-flex justify-content-center align-items-center flex-column">
      <h1 className="h2 my-2"> افزودن به کاربر</h1>
      <form className="form bg-white rounded p-3">
        <div className="mb-3">
          <label htmlFor="name" className="htmlForm-label">
            نام و نام خانوادگی
          </label>
          <input type="text" className="htmlForm-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="htmlForm-label">
            نام کاربری
          </label>
          <input type="text" className="htmlForm-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="htmlForm-label">
            ایمیل
          </label>
          <input type="email" className="htmlForm-control" id="email" />
        </div>
        <div className="row">
          <div>
            <label>آدرس</label>
          </div>
          <div className="col-12 col-md-6 my-1">
            <input
              type="text"
              className="htmlForm-control"
              id="city"
              placeholder="شهر"
            />
          </div>
          <div className="col-12 col-md-6 my-1">
            <input
              type="text"
              className="htmlForm-control"
              id="street"
              placeholder="خیابان"
            />
          </div>
          <div className="col-12 col-md-6 my-1">
            <input
              type="text"
              className="htmlForm-control"
              id="continue"
              placeholder="ادامه آدرس"
            />
          </div>
          <div className="col-12 col-md-6 my-1">
            <input
              type="text"
              className="htmlForm-control"
              id="zipcode"
              placeholder="کدپستی"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-danger px-2 ">
            بازگشت
          </button>
          <button type="submit" className="btn btn-success px-2 me-1">
            ذخیره
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddUser;
