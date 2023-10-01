let lessonList = [
  "CPP Introduction",
  "CPP cout",
  "CPP cin",
  "CPP loops",
  "CPP vector",
  "CPP sort",
  "CPP set",
  "CPP string",
  "CPP note 1",
  "CPP note 2",
  "CPP Practice 1",
  "CPP Practice 2",
  "CPP Practice 3",
  "CPP pair",
  "CPP set of pair",
  "CPP set pair vector",
  "CPP set pair ID",
  "CPP map",
  "Autocorrect 1",
  "Autocorrect 2",
  "Autocorrect 3",
  "CPP Practice 4",
  "CPP Practice 5",
  "CPP Drow",
  "CPP smart user",
  "CPP chatbot",
  "CPP classes (OOP)",
  "CPP note 3",
  "CPP Operator overloading (OOP)",
  "CPP Inheritance",
  "CPP Constructor",
  "CPP Generic Programming",
  "CPP Range-based for loop",
  "CPP for_each loop",
  "CPP Practice 6",
  "CPP Calculator",
  "CPP Static Member",
  "CPP Tracing 1",
  "CPP Tracing 2",
  "CPP Tracing 3",
  "CPP Tracing 4",
  "CPP Tracing 5",
  "CPP Tracing 6 (sstream)",
  "CPP Tracing 7 (Header Files 1)",
  "CPP Tracing 8 (Header Files 2)",
  "CPP Tracing 9 (Header Files 3)",
  "CPP Tracing 10 (Namespace)",
  "CPP Negative in Binary",
  "CPP atoi & stoi",
  "CPP Reference",
  "Project Design",
  "Header Design",
  "Header Code",
  "Header Testing",
  "GitHub",
  "Footer Design",
  "Footer Code",
  "Footer Testing",
  "Page Design",
  "Page Code",
  "Page Testing",
  "Website Design",
  "Website Code",
  "Website Testing",
  "JavaScript Intro",
  "JS Organizing Code",
  "Flexbox Layout",
  "Flexbox Layout 2",
  "JS Strings",
  "JS Decision Making",
  "JS Switch",
  "JS True or False",
  "JS Strict Mode",
  "JS Functions",
  "JS Arrays",
  "JS Objects",
  "JS For Loop",
  "JavaScript HTML DOM",
  "JS Model",
  "CV Project Part 1",
  "CV Project Part 2",
  "CV Project Part 3",
  "CV Project Part 4",
  "CV Project Part 5",
  "CV Project Part 6",
  "CV Project Part 7",
  "CV Project Part 8",
  "CV Project Part 9",
  "CV Project Part 10",
  "CV Project Part 11",
  "CV Project Part 12",
  "CV Project Part 13",
  "CV Project Part 14",
  "CV Project Part 15",
  "CPP Summary"
];
let divLesson = document.createElement("div");
divLesson.classList.add("lessons");
document.body.appendChild(divLesson);
let headSec = document.createElement("h1");
let textHeadSec= document.createTextNode(`C++ Programming`);
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
