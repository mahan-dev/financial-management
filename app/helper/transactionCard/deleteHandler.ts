import axios from "axios";

export const deleteCard = async (id: string): Promise<boolean> => {
  try {
    const res = await axios.delete(`/api/profile/remove/${id}`);
    if (res.status === 200) return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};
