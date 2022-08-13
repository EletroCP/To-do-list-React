export function checkLocalStorage() {
  return localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
}

export default function setLocal(todo) {
  localStorage.tasks = JSON.stringify(todo)
}