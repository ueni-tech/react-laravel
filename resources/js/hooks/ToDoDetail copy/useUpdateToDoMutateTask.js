import axios from "axios";
import { useMutation } from "react-query";

const useUpdateToDoMutateTask = () => {
  const updateToDoMutation = useMutation((todo) => axios.put(`/api/toDos/${todo.id}`, {title: todo.title}));
  return { updateToDoMutation };
};

export default useUpdateToDoMutateTask;