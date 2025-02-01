import { jpAxios } from "./jpAxios";

export const userPostService = async (data) => {
  try {
    const res = await jpAxios.post("/users", data);
    if (res) {
      console.log(res);
    }
  } catch (error) {
    console.error("userPostService error :", error);
  }
};

export const userPutServices = async (id, data) => {
  try {
    const res = await jpAxios.put(`/users/${id}`, data);
    if (res) {
      console.log(res);
    }
  } catch (error) {
    console.error("userPutServices error :", error);
  }
};

export const userGetServices = async (id, setData) => {
  try {
    const res = await jpAxios.get(`/users/${id}`);
    if (res) {
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
    }
  } catch (error) {
    console.error("userGetServices error :", error);
  }
};
