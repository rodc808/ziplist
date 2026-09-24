"use strict";
const testArray1 = [1, 2, 3];
const testArray2 = ['a', 'b', 'c'];
function zipList(listArray1, listArray2) {
    const result = [];
    for (let i = 0; i < listArray1.length; i++) {
        result.push(listArray1[i]);
        result.push(listArray2[i]);
    }
    return result;
}
console.log(zipList(testArray1, testArray2));
function zipListTheFunctionalWay(listArray1, listArray2) {
    const result = listArray1.flatMap((item, i) => [item, listArray2[i]]);
    return result;
}
console.log(zipListTheFunctionalWay(testArray1, testArray2));
