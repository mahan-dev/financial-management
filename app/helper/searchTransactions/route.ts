import axios from "axios";

export const searchBox = async (search: string) => {
  const res = await axios.post("/api/reactQuery", { search });

  return res.data;
};
