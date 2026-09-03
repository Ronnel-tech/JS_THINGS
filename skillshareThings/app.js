'use strict';



const name = document.getElementById('name');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const id = document.getElementById('id');
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const studentInfo = {
        name: name.value,
        age: age.value,
        gender: gender.value,
        id: id.value,

        getStudentInfo(name, age, gender, id) {
            console.log(`Your name is ${name}, your age is ${age}, your gender is ${gender}, your id is ${id}`);
        }
    }
    studentInfo.getStudentInfo(studentInfo.name, studentInfo.age, studentInfo.gender, studentInfo.id);

})

















