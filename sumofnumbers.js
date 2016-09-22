/**
 * Created by Wyatt Bartlett on 9/21/2016.
 */

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i += 1) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i += 1;
  }
  return sum;
}

function sumRecursion(list) {
  let sum = 0;
  if (list.length <= 0) {
    sum = 'error';
  } else if (list.length === 1) {
    sum = list[0];
  } else {
    const mid = list.length / 2;
    const firstList = _.first(list, mid);
    const secondList = _.rest(list, mid);
    sum += sumRecursion(firstList);
    sum += sumRecursion(secondList);
  }
  return sum;
}

function sumTheSimpleWay(list) {
  const sum = _.reduce(list, function (memo, num) { return memo + num; }, 0);
  return sum;
}

const testList = [1, 2, 3, 10, 5];

console.log('sumFor:');
console.log(sumFor(testList));
console.log('');

console.log('sumWhile:');
console.log(sumWhile(testList));
console.log('');

console.log('sumRecursion:');
console.log(sumRecursion(testList));
console.log('');

console.log('sumTheSimpleWay:');
console.log(sumTheSimpleWay(testList));
console.log('');
