let lessonList = [
  "Python Print",
  "Python Variables",
  "Python More About Variables",
  "Python Operators",
  "Python More About Operators",
  "Python If Statement",
  "Python For Loop",
  "Python While Loop",
  "Python Input",
  "Python Lists I",
  "Python Lists II",
  "Python Lists III",
  "Python Lists IV",
  "Python Tuple",
  "Python Import Math",
  "Python Import Random",
  "Python String I",
  "Python String II",
  "Python Translate",
  "Python Strip",
  "Python StartsWith",
  "Python Set",
  "Python Dictionary",
  "Python Functions I",
  "Python Functions II",
  "Python Functions III",
  "Python Global Variables",
  "Python OOP",
  "Python Import",
  "Python Inheritance I",
  "Python Inheritance II",
  "Python Abstract Classes",
  "Python Exception",
  "Python Project",
];
let divLesson = document.createElement("div");
divLesson.classList.add("lessons");
document.body.appendChild(divLesson);
let headSec = document.createElement("h1");
let textHeadSec= document.createTextNode(`Python`);
headSec.appendChild(textHeadSec);
headSec.classList.add("heade-sec");
divLesson.appendChild(headSec);
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
