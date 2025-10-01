import axios from "axios";

export const editCard = async (id: string) => {
  const res = await axios.patch(`/api/profile/edit/${id}`);
  console.log("🛴 ~ editHandler.ts:4 -> res: ", res);
};
