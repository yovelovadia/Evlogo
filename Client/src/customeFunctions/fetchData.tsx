import axios from "axios";

const fetchData = async (
  url: string,
  method: string,
  params?: any
): Promise<any> => {
  const data = await axios[method](url, params);
  return data;
};

export default fetchData;
