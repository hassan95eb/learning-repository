import { jpAxios } from "./jpAxios";
import swal from "sweetalert";

export const setUserService = async (setUsers, setMainUsers) => {
  const res = await jpAxios.get("/users");
  if (res) {
    setUsers(res.data);
    setMainUsers(res.data);
  }
};

export const deleteUserService = async (id, users, setUsers) => {
  try {
    const res = await jpAxios.delete(`/users/${id}`);
    if (res.status === 200) {
      const newUsers = users.filter((t) => t.id != id);
      setUsers(newUsers);
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    }
  } catch (error) {
    swal("errorrrrr", {
      icon: "error",
    });
    console.error("Delete Error:", error);
  }
};
