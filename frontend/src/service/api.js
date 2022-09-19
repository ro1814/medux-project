import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add-user`, data);
  } catch (error) {
    console.log("Error while calling API", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all-users`);
  } catch (error) {
    console.log('Error while calling getUsers API', error);
  }
};
