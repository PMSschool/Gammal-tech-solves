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
  "C Practice introduction",
  "C Practice 1 (2D Array)",
  "C Practice 2 (Tracing",
  "C Practice 3 (Vaccine)",
  "C Practice 4 (Sum of 10 numbers)",
  "C Practice 5 (Sum of even)",
  "C Practice 6 (how many -Ves)",
  "C Practice 7 (Mercedes)",
  "C Practice 8 (Bmw)",
  "C Practice 9 (search)",
  "C Practice 10 (Integer)",
  "C Practice 11 (Blood Test)",
  "C Practice 12 (Digits)",
  "C Practice 13 (Reverse)",
  "C Practice 14 (Palindrome)",
  "C Practice 15 (Find a number)",
  "C Practice 16 (Switch range)",
  "Learn more",
  "C common Mistakes",
  "C write in file",
  "C read from file",
  "C read line",
  "C read line 2",
  "++x Note x++",
  "C input & output files",
  "C Store data",
  "C copy file",
  "C Practice 17 (Functions)",
  "C Practice 18 (Functions 2)",
  "C Practice 19 (About Practice)",
  "C Practice 20 (Max Min",
  "sprintf",
  "sscanf",
  "C Practice 21 (sprintf sscanf)",
  "C Practice 22 (Statistics)",
  "C Practice 23 (Find & Raplace)",
  "C thread",
  "DNS",
  "Web hosting server",
  "Html",
  "Generate index.Html",
  "CSS",
  "Generate Website",
  "Publish the website",
  "responsive web Design",
  "Ip Address",
  "Business model",
  "Client-Server System Architecture",
  "Installing Flutter on Windows",
  "Create Mobile App",
  "Key Information",
  "GUI with GTK - Intro",
  "GUI with GTK - Project Design",
  "GUI with GTK - Project Coding",
  "GUI with GTK - Project Building",
  "GTK CV Project (HTML)",
  "GTK CV Project (CSS)",
  "GTK CV Project (Design)",
  "GTK CV Project (Coding 1)",
  "GTK CV Project (Coding 2)",
  "C Programming Summary"
];
let divLesson = document.createElement("div");
divLesson.classList.add("lessons");
document.body.appendChild(divLesson);
for (let i = 0 ; i < lessonList.length ; i++){
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