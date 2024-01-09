const { default: axios } = require("axios");
const { useQueryClient, useQuery } = require("react-query");

const getToDoList = async () => {
  const { data } = await axios.get('/api/toDos');
  return data;
}

const useGetToDoList = () => {
  const queryClient = useQueryClient();
  return useQuery('todoList', getToDoList, {
    onError: () => {
      queryClient.setQueryData('todoList', null);
    }
  });
}

export default useGetToDoList;