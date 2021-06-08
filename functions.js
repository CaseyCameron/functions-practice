export function getName({ name } = object) {
  return name;
};

export function copyAndPush(arr, num) {
  const copyArr = [...arr];
  copyArr.push(num);
  console.log(copyArr);
  return [arr, copyArr];
}

export function capitalizeAndFilter(arr) {
  let filteredArr = [];
  const regEx = /[fF]/g;
  filteredArr = arr.filter(i => !i.charAt(0).match(regEx))
  return filteredArr.map(i => i.toUpperCase());
}