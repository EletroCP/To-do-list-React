const setDisabled = (param, todo, setTodo) => {
  const origin = JSON.parse(JSON.stringify(todo));
  const toChange = origin.findIndex((task) => task.id === param);
  const edited = {
    id: origin[toChange].id,
    task: origin[toChange].task,
    disabled: !origin[toChange].disabled
  }
  origin[toChange] = {
    ...edited
  }
  setTodo(origin)
}

export default setDisabled;