import axios, { Axios, type AxiosResponse } from "axios";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const fetchData = async () => {
  const response: AxiosResponse<Todo> = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1",
  );
};
