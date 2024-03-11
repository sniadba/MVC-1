const FULLNAME = "Śniadach Bartosz";
const STUDENT_ID = 46163;
console.log(`My name is${FULLNAME}. Mystudent ID is ${STUDENT_ID}`);

function GetStudentFullname ()
{

    return FULLNAME;
}

function GetStudentId ()
{

    return STUDENT_ID;
}

console.log(`My name is` + GetStudentFullname() `. Mystudent ID is ` + GetStudentId());

