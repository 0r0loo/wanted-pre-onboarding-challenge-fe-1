import httpClient from "./apiConfig";

const DEFAULT_URL = "/todos";

/**
 * URL
 * GET /todos
 * Headers
 * Authorization: login token
 */
export const getTodosApi = async () => httpClient.get(`${DEFAULT_URL}`);
/**
 *
 * URL
 * GET /todos/:id
 * Headers
 * Authorization: login token
 */
export const getTodoByIdApi = async (id) =>
  httpClient.get(`${DEFAULT_URL}/${id}`);
/**
 *
 * URL
 * POST /todos
 * Parameter
 * title: string
 * content: string
 * Headers
 * Authorization: login token
 */
export const createTodoApi = async () => httpClient.post(`${DEFAULT_URL}`);
export const updateTodoApi = async (id) =>
  httpClient.put(`${DEFAULT_URL}/${id}`);
/**
 * URL
 * DELETE /todos/:id
 * Headers
 * Authorization: login token
 */
export const deleteTodoApi = async (id) =>
  httpClient.delete(`${DEFAULT_URL}/${id}`);
