import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoApi } from "../api/todos";

export const useTodoMutation = () => { 
  const queryClient = useQueryClient();
  const addMutation = useMutation(
    (newTodo) => todoApi.post("/todos", newTodo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
  return {
    addTodo: addMutation.mutate,
  };
}
