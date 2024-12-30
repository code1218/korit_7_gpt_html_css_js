/**
 * 배열
 */

const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for(let num of numbers) {
    console.log(num);
}
numbers.forEach((num) => console.log(num));

numbers.push(10);
console.log(numbers);
console.log(numbers.pop());
console.log(numbers.includes(5));   // 값을 포함하고 있는지 확인(java-contains)
console.log(numbers.indexOf(5));    // 값의 위치(index)
console.log(numbers.lastIndexOf(4));// 뒤에서 부터 값의 위치(index)
console.log(numbers.concat([11,12,13,14,15]));  //두 배열의 병합
console.log(numbers);
const newNumbers = numbers.concat([11,12,13,14,15]);
console.log(newNumbers);
const newNumbers2 = [ ...numbers, 11,12,13,14,15];
console.log(newNumbers2);
const newNumbers3 = numbers.slice(5);
console.log(newNumbers3);
const newNumbers4 = numbers
.slice(0, numbers.indexOf(4))
.concat(numbers.slice(numbers.indexOf(4) + 1));
console.log(newNumbers4);
const newNumbers5 = numbers.splice(3, 1);
console.log(newNumbers5);
console.log(numbers);
const newNumbers6 = numbers.splice(4, 2, 11, 12, 13);
console.log(newNumbers6);
console.log(numbers);
numbers.splice(4, 0, 20, 21);
console.log(numbers);