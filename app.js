var studentName = [];
var studentObject = [];
var a;
for (a = 0; a < 5; a++)
    if(a <= studentName.length){
    studentName.push (prompt("Student Name", "Abdullah"))
    studentObject.push (prompt("Student Object", "Pass or Fail"))
    document.write("<h1>" + studentName.length + ") " + studentName[a] + " " + studentObject[a] + "</br>" + "</h1>")
};
