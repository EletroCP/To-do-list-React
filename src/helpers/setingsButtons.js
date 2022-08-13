import setLocal from "./setLocalStorage";

const setingsFunctions = {
  openSetings(id, todo, setTodo) {
    const itenlist = JSON.parse(JSON.stringify(todo));
    const index = todo.findIndex((element) => element.id === id);
    if (itenlist[index].display === 'none') {
      itenlist[index].display = 'initial'
      return setTodo(itenlist)
    }
    itenlist[index].display = 'none'
    setTodo(itenlist)
  },

  setDisabled(id, todo, setTodo) {
    const origin = JSON.parse(JSON.stringify(todo));
    const toChange = origin.findIndex((task) => task.id === id);
    const edited = {
      id: origin[toChange].id,
      task: origin[toChange].task,
      disabled: !origin[toChange].disabled
    }
    origin[toChange] = {
      ...edited
    }
    setLocal(origin);
    setTodo(origin);
  },

  setCompleted(id, todo, setTodo) {
    const itenlist = JSON.parse(JSON.stringify(todo));
    const index = todo.findIndex((element) => element.id === id);
    if (itenlist[index].textDecoration === 'none') {
      itenlist[index].textDecoration = 'line-through';
      return setTodo(itenlist);
    }
    itenlist[index].textDecoration = 'none';
    setLocal(itenlist);
    setTodo(itenlist);
  },

  setDelet(id, todo, setTodo) {
    const itenlist = JSON.parse(JSON.stringify(todo));
    const index = todo.findIndex((element) => element.id === id);
    itenlist.splice(index, 1)
    setLocal(itenlist);
    setTodo(itenlist);
  },

  changeTask(id, target, todo, setTodo) {
    const itenlist = JSON.parse(JSON.stringify(todo));
    const index = todo.findIndex((element) => element.id === id);
    itenlist[index].task = target.value;
    setLocal(itenlist);
    setTodo(itenlist);
  },
}

export default setingsFunctions