import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useUpdateToDoMutateTask = () => {
  const queryClient = useQueryClient();
  const updateToDoMutation = useMutation(
    (todo) => axios.put(`/api/toDos/${todo.id}`, { title: todo.title }),
    {
      onMutate: async (toDo) => {
        await queryClient.cancelQueries("todoList");
        const previousToDos = queryClient.getQueryData("todoList");
        queryClient.setQueryData("todoList", (oldToDoList) => {
          return oldToDoList.map((oldToDo) => {
            if (oldToDo.id == toDo.id) {
              return {
                ...oldToDo,
                title: toDo.title
              };
            }
            return oldToDo;
          });
        });
        return { previousToDos };
      },
      onSettled: () => {
        queryClient.invalidateQueries("todoList");
      },
    }
  );
  return { updateToDoMutation };
};

export default useUpdateToDoMutateTask;