import axios from 'axios';

type Todo = {
  id: number;
  text: string; 
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData<Todo>('https://jsonplaceholder.typicode.com/todos/1');