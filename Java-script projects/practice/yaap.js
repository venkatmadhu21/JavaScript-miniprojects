/*let todo=[];
while(true){
    let req=prompt("Enter your choice");
    if(req=="quit"){
        console.log("Quitting the app");
        break;
    }
    else if (req=="list"){
        console.log("-----------");
        for(let i=0;i<todo.length;i++){
            console.log(i+":"+todo[i]);
        }
    }
    else if (req=="add"){
        let add=prompt("Entee a new task");
        todo.push(add);
        console.log("Added to the list");
    }
    else if (req=="delete"){
        let del=prompt("Enter the index to delete");
        todo.splice(del,1);
        console.log("Deleted the task");
}
}*/
/*let student={
    name:"venkat",
    rollno:21,
    section: 8.35};
function print(){
    let n = Math.floor(Math.random() * 6 + 1);
    
    console.log(n);


}
print();

function person(name,age){
    console.log(`${name} is and age is ${age}`);
}
person("venkat",20);

function avg(n1,n2,n3){
    console.log(n1+n2+n3/3);
}
avg(10,20,30);

function sum(n){
    let sum=0;
    for(let i=1;i<=n;i++)
    {
    sum=sum+i;
    }
    return sum;
}*/

// function concat(arr)
// {
// let final="";
// for(let i=0;i<arr.length;i++)
// {
// final=final+arr[i];
// }
// return final;
// }
//  let arr=["Venkat" , "madhu" ,"mohan"];
//  concat(arr);
// //console.log(concat(arr));

let nums=[12,43,54,35,67,88,9];
let ans=nums.every( (el)=>(el%2==0));

console.log(ans); 


























/*console.log("Jai Shree Ram");
console.log("Jai Shree Hanuman");
console.log("Jai Shree Krishna");
let pen=10;
let pencil=20;
let output="Total price is " + (pen+pencil) + " Rupees";
console.log(output);
let colour = "Green";
if (colour === "Red"){
    console.log("stop");
}
else if (colour ==="Yellow"){
    console.log("Ready");
}
else
{
    console.log("GOO");
}
let string="Ankat";
if ( string[0]=== 'A' && string.length > 3){
    console.log("safe");
}
else{
    console.log("Unsafe");
}
alert("hello")
for(let i=0;i<5;i++)
{
    console.log(i);
}
let n=90;
for(let i=0;i<n;i++){
    if(i%2==0)
    {
        console.log(i);
    }
}
for(let i=1;i<10;i++){
    console.log(5*i);   
}
do
{
    let name=prompt("Enter any movie");
    if (name=="bahubali"){
        console.log("Correct");
        break;
    }
    else if (name=="quit"){
        break;
    }
    else{
        console.log("Incorrect");   
    }

}while(name!="bahubali");*/