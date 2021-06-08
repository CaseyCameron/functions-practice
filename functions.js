export function getName({ name } = object) {
  return name;
};

export function copyAndPush(arr, num) {
  const copyArr = arr;
  copyArr.push(num);
  return copyArr;
}