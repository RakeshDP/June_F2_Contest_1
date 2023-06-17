/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee)=>{
    if (employee["profession"] === "developer"){
      console.log(employee)
    }
  } )
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee)=>{
    if (employee["profession"] === "developer"){
      console.log(employee)
    }
  } )
}

function addData() {
  //Write your code here, just console.log
  const newEmployee={id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(newEmployee);
  console.log(newEmployee);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newarr=[
    {id: 5, name:"Rasika", age:"26", profession:"intern"},
    {id: 6, name:"Neha", age:"25", profession:"Manager"},
    {id: 7, name:"Kunal", age:"28", profession:"developer"}
  ];
  const concatenatedArray = arr.concat(newarr);
  console.log(concatenatedArray);
}