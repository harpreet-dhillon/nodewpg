const femaleStudents = ['prab', 'ania', 'jessica', 'mandeep', 'nana'];
const maleStudents = ['harpreet', 'anton', 'robert', 'hugo', 'laker'];
const students = femaleStudents.concat(maleStudents);
console.log(students.sort());
for(let i = 0; i < femaleStudents.length -1; i++){
    console.log(femaleStudents.indexOf(femaleStudents[i]), femaleStudents[i]);
}

while(maleStudents.length > 0){
    console.log(maleStudents[maleStudents.length -1]);
    maleStudents.length -=1;
}
for(let i = 0; i < students.length -1; i++){
    console.log(students[i]);
}