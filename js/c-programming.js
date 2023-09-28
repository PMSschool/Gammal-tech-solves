let lessonList = [
  "printf",
  "variables",
  "scanf",
  "C programming practice 1",
  "if",
  "for",
  "C progrmming practice 2",
  "while",
  "Do while",
  "Switch",
  "cprogramming practice 3",
  "Arrays part 1",
  "Arrays part 2",
  "Functions",
  "Binary part 1",
  "Binary part 2",
  "Binary program",
  "Octal",
  "Hexadecimal",
  "Convert Decimals",
  "2D array",
  "2D array part 2",
  "Multidimensional Array",
  "Global variable",
  "Ascll",
  "C string part 1",
  "C string part 2",
  "String Header File",
  "Array o f Strings",
  "Array of Strings Part 2",
  "Struct",
  "Array of Structs",
  "Pointer",
  "Bitwise Operator AND",
  "Bitwise Operator OR",
  "Bitwise Operator XOR",
  "Bitwise Operator LEFT SHIFT",
  "Bitwise Operator RIGHT SHIFT",
  "Bitwise Operator NOT",
  "Const",
  "Enum",
  "Math.h",
  "Typedef",
  "Define (Macro)",
  "Boolean",
  "Ternary Operator",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",
  "Ascll",

];
let divLesson = document.createElement("div");
divLesson.classList.add("lessons");
document.body.appendChild(divLesson);
for (let i = 0 ; i < 100 ; i++){
    let lessonGt = document.createElement("h4");
    let textLesson = document.createTextNode(`${lessonList[i]}`);
    let spanNum = document.createElement("span");
    let numLesson = document.createTextNode(`${i + 1}`);
    let linkLesson = document.createElement("a");

    linkLesson.setAttribute("href" , `${lessonList[i]}.html`);

    if(lessonList[i] == undefined){
      break;
    }
    divLesson.appendChild(linkLesson);
    linkLesson.appendChild(lessonGt);
    lessonGt.appendChild(textLesson);
    lessonGt.appendChild(spanNum);
    spanNum.appendChild(numLesson);
}
    



// console.log(lessonList[1]);