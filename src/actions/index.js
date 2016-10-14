import types from './types';

export function onAdd(todos) {
  return{
    type:types.ADD,
    todos:todos
  }
}
