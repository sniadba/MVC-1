module.export = {
    GetStudentFullname,
    GetStudentId,
};

console.log(`My name is` + GetStudentFullname() `. Mystudent ID is ` + GetStudentId());

const http = require("http");

const PORT = 3000;

function requestListener(request,response){
    response.setHeader("Content-type", "text/html");
    console.log(`serwer is running on ${PORT}` );
    console.log(`My name is${FULLNAME}. Mystudent ID is ${STUDENT_ID}`);
}