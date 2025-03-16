let user = prompt("Enter your name");
let password=prompt("Enter your password");

function details(un,pa){
document.getElementById('u');
u.innerHTML="your name is" +un; 
document.getElementById('p');
p.innerHTML="your password is " +pa;
}
details(user,password);



// let string="I love coding";
// string.slice(5);
// 'e coding'
// string.slice(1,4);
// ' lo'
// tring.slice(1,4);
// ' lo'string.replace("love" , "do");
// 'I do coding'
// string.repeat(3);
// 'I love codingI love codingI love coding'
// let cars=['audi','benz','maruthi','kla'];
// undefined
// cars.push('tata');
// 5
// cars
// (5) ['audi', 'benz', 'maruthi', 'kla', 'tata']
// cars.unshift('hero')
// 6
// cars
// (6) ['hero', 'audi', 'benz', 'maruthi', 'kla', 'tata']
// cars.shift('hero')
// 'hero'
// cars
// (5) ['audi', 'benz', 'maruthi', 'kla', 'tata']

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
//     }
//     VM1880:2 mango
//     VM1880:2 banana
//     VM1880:2 apple
//     VM1880:2 orange
//     let myself = {
//         name : "venkat",
//         rollno: 21,
//         class: "iot",
//         section: "A"}
//     undefined
//     mysel
 
//     myself
//     {name: 'venkat', rollno: 21, class: 'iot', section: 'A'}
//     myself.name
//     'venkat'
//     myself.name = 'madhu';
//     'madhu'
//     myself
//     {name: 'madhu', rollno: 21, class: 'iot', section: 'A'}
// const name = [
//     {
//         name : "venkat",
//         class : "iot",
//         rollno : 21,
//     },
//     {
//         name : "madhu",
//         class: "cso",
//         rollno:6921,
//     }];
// undefined
// name
// (2) [{…}, {…}]0: {name: 'venkat', class: 'iot', rollno: 21}1: {name: 'madhu', class: 'cso', rollno: 6921}length: 2[[Prototype]]: Array(0)
// let num =10.5;
// undefined
// Math.ceil(num);
// 11
// Math.floor(num);
// 10
// Math.abs(num)
// 10.5
// Math.ran
// undefined
// Math.random();
// 0.6924335815025917
// let num = Math.random();
// undefined
// num
// 0.28041885993490356
// let num = num*10;
// undefined
// num
// 2.8041885993490356
// let num = Math.floor(num);
// undefined
// num
// 2
// function hello(func,n){
//     for(let i =0;i<n;i++){
//         func();
//     }
// }
// undefined
// let greet(){
// VM3848:1 Uncaught SyntaxError: Unexpected token '('Understand this errorAI
// function greet (){
//     console.log("I love coding");
// }
// undefined
// hello(greet,3);
// 3VM3997:2 I love coding
// const calculator = {
//     add : function(a,b){
//         return a+b;},
//     sub : function(a,b){
//         return a-b;}};
// calculator.add(2,3);
// onst sum= (a,b) => {
//     return a+b;
// }
// undefined
// sum(10,20)
// 30

// let arr =[10,20,30];
// const sum= (el) =>{
//     console.log(el);
// }
// undefined
// arr.forEach(sum)
// VM5110:2 10
// VM5110:2 20
// VM5110:2 30
// let nums=[2,4,6,8];
// undefined
// let even=nums.filter((nums) => (nums % 2 == 0));
// undefined
// even
// (4) [2, 4, 6, 8]
// let even=nums.filter((nums) => (nums % 3 == 0));
// undefined
// even
// [6]

// nums.every((el) => (el %2 ==0));
// truenums.reduce((res , el) => (res + el));
// 20
// let num=[19,3,453,43,323,234,44,55,54,5];
// undefined
// Math.min(...num);
// 3
// Math.max(...num);
// 453
// let sum = (...args) => {
//     return args.reduce((add,rel) => add+rel);
// }
// undefined
// sum
// (...args) => {
//     return args.reduce((add,rel) => add+rel);
// }
// sum(10,20)
// 30