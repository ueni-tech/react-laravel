import { useQueryClient } from "react-query";

const useCurrentToDoList = () => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData('todoList');
};

export default useCurrentToDoList;