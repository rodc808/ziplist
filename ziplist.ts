const testArray1 = [1, 2, 3];
const testArray2 = ['a', 'b', 'c'];

function zipList(listArray1: (number | string)[], listArray2: (number | string)[]): (number | string)[] {
  const result: (number | string)[] = [];
  for (let i = 0; i < listArray1.length; i++) {
    result.push(listArray1[i]);
    result.push(listArray2[i]);
  }
  return result;
}

console.log(zipList(testArray1, testArray2));

function zipListTheFunctionalWay(listArray1: (number | string)[], listArray2: (number | string)[]):
(number | string)[] {
  const result = listArray1.flatMap((item, i) => [item, listArray2[i]]);
  return result;
}

console.log(zipListTheFunctionalWay(testArray1, testArray2));
