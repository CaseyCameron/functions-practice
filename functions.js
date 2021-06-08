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
  const filteredArr = [];
  const regEx = /[fF]/g;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i][0].match(regEx))
      filteredArr.push(arr[i].toUpperCase());
  }
  return filteredArr;
}