import { useQuery } from "@tanstack/react-query"
import { todoApi } from "../api/todos";

export const useTodosQuery = () => { 
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await todoApi.get("/todos");
      return response.data;
    },
  });
}