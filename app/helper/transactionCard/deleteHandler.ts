import axios from "axios";

export const deleteCard = async (id: string) => {
    
  const res = await axios.delete(`/api/profile/remove/${id}`);
  console.log("🤪 ~ deleteHandler.ts:4 -> res: ", res);
};
