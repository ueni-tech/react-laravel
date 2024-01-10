import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useDeleteToDoDetailMutateTask = () => {
  const queryClient = useQueryClient();
  const deleteToDoDetailMutation = useMutation(
    (toDoDetail) => axios.delete(`/api/toDoDetails/${toDoDetail.id}`),
    {
      onMutate: async (toDoDetail) => {
        await queryClient.cancelQueries("todoList");

        const previousToDosList = queryClient.getQueryData("todoList");

        queryClient.setQueryData("todoList", (oldToDoList) => {
          return oldToDoList.map((oldToDo) => {
            let newToDoDetails = [];
            oldToDo.to_do_details.map((oldToDoDetail) => {
              if (oldToDoDetail.id != toDoDetail.id) {
                newToDoDetails.push(oldToDoDetail);
              }
            });
            oldToDo.to_do_details = newToDoDetails;
            return oldToDo;
          });
        });
        return { previousToDosList };
      },
      onSettled: () => {
        queryClient.invalidateQueries("todoList");
      },
    }
  );
  return { deleteToDoDetailMutation };
}

export default useDeleteToDoDetailMutateTask;