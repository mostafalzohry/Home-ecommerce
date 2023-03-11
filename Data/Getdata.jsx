import axios from "axios";

export const getData = async (next) => {
  const { data } = await axios.get(next);

  return data;
};
