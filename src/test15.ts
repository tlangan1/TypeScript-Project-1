interface HasId {
  id: string;
}
interface Dict<T> {
  [k: string]: T;
}

function ex1<T extends HasId[]>(list: T) {
  return list.pop();
}
function ex2<T extends HasId>(list: T[]) {
  return list.pop();
}
