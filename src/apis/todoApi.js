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
export const getTodoByIdApi = async () => {};
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
export const createTodoApi = async () => {};
export const updateTodoApi = async () => {};
/**
 * URL
 * DELETE /todos/:id
 * Headers
 * Authorization: login token
 */
export const deleteTodoApi = async () => {};
