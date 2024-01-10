import axios from "axios";
import { useMutation } from "react-query";

const useUpdateToDoDetailMutateTask = () => {
  const updateToDoDetailMutation = useMutation((todoDetail) => axios.put(`/api/toDoDetails/${todoDetail.id}`, { name: todoDetail.name, completed_flag: todoDetail.completed_flag }));
  return { updateToDoDetailMutation };
};

export default useUpdateToDoDetailMutateTask;