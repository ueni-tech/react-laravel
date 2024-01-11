import axios from "axios";
import { useMutation, useQueryClient } from "react-query"

const useStoreToDoMutateTask = () => {
  const queryClient = useQueryClient();
  const storeToDoMutation = useMutation(
    () => axios.post("/api/toDos", {
      title: null
    }),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todoList");
      }
    }
  );
  return { storeToDoMutation };
}

export default useStoreToDoMutateTask;