import axios from "axios";

const fetchData = async (
  url: string,
  method: string,
  params?: any
): Promise<any> => {
  const token: string | null = localStorage.getItem("jwt");
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`; // sending auth for every request
  const data = await axios[method](url, params);
  return data;
};

export default fetchData;
