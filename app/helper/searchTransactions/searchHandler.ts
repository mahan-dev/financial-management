import { FormValues } from "@/modules/interface/FormValues";
import axios from "axios";

interface SearchResponse {
  status: string;
  data: FormValues[];
}

export const searchBox = async (search: string): Promise<SearchResponse> => {
  const res = await axios.post<SearchResponse>("/api/reactQuery", { search });

  return res.data;
};
