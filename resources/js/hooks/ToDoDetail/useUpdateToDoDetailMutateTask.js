import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useUpdateToDoDetailMutateTask = () => {
  const queryClient = useQueryClient();
  const updateToDoDetailMutation = useMutation(
    (todoDetail) => axios.put(`/api/toDoDetails/${todoDetail.id}`, { name: todoDetail.name, completed_flag: todoDetail.completed_flag }),
    {
      onMutate: async (toDoDetail) => {
        await queryClient.cancelQueries("todoList");
        const previousToDosList = queryClient.getQueryData("todoList");
        queryClient.setQueryData("todoList", (oldToDoList) =>
          oldToDoList.map((oldToDo) => {
            if (oldToDo.id == toDoDetail.to_do_id) {
              let newToDoDetails = [];
              oldToDo.to_do_details.map((oldToDoDetail) => {
                if (oldToDoDetail.id == toDoDetail.id) {
                  newToDoDetails.push({
                    ...oldToDoDetail,
                    name: toDoDetail.name,
                    completed_flag: toDoDetail.completed_flag
                  });
                } else {
                  newToDoDetails.push(oldToDoDetail);
                }
              });
              oldToDo.to_do_details = newToDoDetails;
            }
            return oldToDo;
          })
        );
        return { previousToDosList };
      },
      onSettled: () => {
        queryClient.invalidateQueries("todoList");
      },
    }
  );
  return { updateToDoDetailMutation };
};

export default useUpdateToDoDetailMutateTask;