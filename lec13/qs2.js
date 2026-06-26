let student = {
    name: "priya",
    age: 20,
    mark: 85
};

console.log(student.name);
console.log(student.age);
console.log(student.mark);

// add city
student.city = "Salam";
console.log(student.city);

// mark update
student.mark = 90;
console.log(student.mark);

//delete
delete student.mark
console.log(student);

// print all
for(let key in student){
    console.log(key+":" +student[key])
}

//object destructuring
let{name,age,mark}=student;
console.log(name)
console.log(age)
console.log(mark)

//copy
let newStudent={name: "priya",
    age: 20,
    mark: 85};
console.log(newStudent)

//two object
let obj1={
    name:"Ram",
    age:22,

};
let obj2={
    mark:95,
    city:"salem"
};
let mergeobj={obj1: { name: "Ram", age: 22 },
  obj2: { mark: 95, city: "salem" }}
console.log(mergeobj)

//template
console.log(`Student Details:
Name: ${student.name}
Age: ${student.age}
Marks: ${student.marks}
City: ${student.city}`);
