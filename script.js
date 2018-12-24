var totalA = 0;
var totalcrA = 0;
var bool = true;
var back = 0;
var clear = false;
var backrep;

var values = [
  [6.0, 5.5, 5.0, 4.5, 4.0, 1.5, 1.0, 0.0],
  [5.0, 4.5, 4.0, 3.5, 3.0, 1.5, 1.0, 0.0],
  [4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0],
  [4.0, 3.0, 3.0, 2.0, 2.0, 1.0, 1.0, 0.0],
  [4.5, 3.5, 3.5, 2.5, 2.5, 1.5, 1.5, 0.0],
  [4.0, 3.0, 3.0, 2.0, 2.0, 1.0, 1.0, 0.0]
]

function cal(){
  let curr = document.getElementById("current");
  if (bool) {
    totalA = curr.elements["cgpa"].value * curr.elements["ccr"].value;
    totalcrA = Number(curr.elements["ccr"].value);
    bool = false;
  }
  let total =  curr.elements["cra"].value * values[curr.elements["classes"].value][curr.elements["grades"].value];
  let totalcr = Number(curr.elements["cra"].value);
  totalA = totalA + total;
  totalcrA = totalcrA + totalcr;
  let out = totalA/totalcrA;
  document.getElementById("out").innerHTML = "Credits: " + totalcrA;
  document.getElementById("out2").innerHTML = "GPA: " + out.toFixed(3);
}

function ret() {
  totalA = 0;
  totalcrA = 0;
  bool = true;
  document.getElementById("out").innerHTML = "Credits: 0";
  document.getElementById("out2").innerHTML = "";
}

function fun() {
  if (back==0) {
    document.body.style.background = "url('watermelons.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("current").style.color = "lightgreen";
    document.getElementById("out").style.color = "limegreen";
    document.getElementById("out2").style.color = "limegreen";
    document.getElementById("top").style.color = "lightblue";
    document.getElementById("bot").style.color = "lightblue";
  }
  else if (back==1) {
    document.body.style.background = "url('blueberries.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("current").style.color = "yellow";
    document.getElementById("out").style.color = "orange";
    document.getElementById("out2").style.color = "orange";
    document.getElementById("top").style.color = "coral";
    document.getElementById("bot").style.color = "coral";
  }
  else if (back==2) {
    document.body.style.background = "url('bananas.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("current").style.color = "blueviolet";
    document.getElementById("out").style.color = "darkorchid";
    document.getElementById("out2").style.color = "darkorchid";
    document.getElementById("top").style.color = "magenta";
    document.getElementById("bot").style.color = "magenta";
  }
  else {
    document.body.style.background = "white";
    document.getElementById("current").style.color = "black";
    document.getElementById("out").style.color = "green";
    document.getElementById("out2").style.color = "green";
    document.getElementById("top").style.color = "grey";
    document.getElementById("bot").style.color = "grey";
    back = -1;
  }
  back++;
}

function fun2() {
  if (clear) {
    clearInterval(backrep);
    clear = !clear;
  } else {
    fun();
    backrep = setInterval(fun, 3000);
    clear = !clear;
  }
}

//------------- CODE FOR GRADE CALCULATOR

var totalPoints = 0;
var totalReceivedPoints = 0;

function cg() {
  let curr = document.getElementById("currentGrade");
  if (bool) {
    totalReceivedPoints = (curr.elements["cgrade"].value/100) * curr.elements["cpoints"].value;
    totalPoints = Number(curr.elements["cpoints"].value);
    bool = false;
  }
  totalPoints = totalPoints + Number(curr.elements["pointsTot"].value);
  totalReceivedPoints = totalReceivedPoints + Number(curr.elements["pointsRec"].value);
  let out = (totalReceivedPoints/totalPoints)*100;
  document.getElementById("outgrade").innerHTML = "Points: " + totalPoints;
  document.getElementById("out2grade").innerHTML = "Grade: " + out.toFixed(2) + "%";
}

function retGrade() {
  totalPoints = 0;
  totalReceivedPoints = 0;
  bool = true;
  document.getElementById("outgrade").innerHTML = "Points: 0";
  document.getElementById("out2grade").innerHTML = "";
}

function funG() {
  if (back==0) {
    document.body.style.background = "url('watermelons.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("currentGrade").style.color = "lightgreen";
    document.getElementById("outgrade").style.color = "limegreen";
    document.getElementById("out2grade").style.color = "limegreen";
    document.getElementById("top").style.color = "lightblue";
    document.getElementById("bot").style.color = "lightblue";
  }
  else if (back==1) {
    document.body.style.background = "url('blueberries.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("currentGrade").style.color = "yellow";
    document.getElementById("outgrade").style.color = "orange";
    document.getElementById("out2grade").style.color = "orange";
    document.getElementById("top").style.color = "coral";
    document.getElementById("bot").style.color = "coral";
  }
  else if (back==2) {
    document.body.style.background = "url('bananas.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("currentGrade").style.color = "blueviolet";
    document.getElementById("outgrade").style.color = "darkorchid";
    document.getElementById("out2grade").style.color = "darkorchid";
    document.getElementById("top").style.color = "magenta";
    document.getElementById("bot").style.color = "magenta";
  }
  else {
    document.body.style.background = "white";
    document.getElementById("currentGrade").style.color = "black";
    document.getElementById("outgrade").style.color = "green";
    document.getElementById("out2grade").style.color = "green";
    document.getElementById("top").style.color = "grey";
    document.getElementById("bot").style.color = "grey";
    back = -1;
  }
  back++;
}

function fun2G() {
  if (clear) {
    clearInterval(backrep);
    clear = !clear;
  } else {
    funG();
    backrep = setInterval(funG, 3000);
    clear = !clear;
  }
}

//------------------SEMESTER GRADE

function funSG() {
  if (back==0) {
    document.body.style.background = "url('watermelons.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("currentGradeS").style.color = "lightgreen";
    document.getElementById("outgradeS").style.color = "limegreen";
    document.getElementById("out2gradeS").style.color = "limegreen";
    document.getElementById("topS").style.color = "lightblue";
    document.getElementById("botS").style.color = "lightblue";
  }
  else if (back==1) {
    document.body.style.background = "url('blueberries.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("currentGradeS").style.color = "yellow";
    document.getElementById("outgradeS").style.color = "orange";
    document.getElementById("out2gradeS").style.color = "orange";
    document.getElementById("topS").style.color = "coral";
    document.getElementById("botS").style.color = "coral";
  }
  else if (back==2) {
    document.body.style.background = "url('bananas.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("currentGradeS").style.color = "blueviolet";
    document.getElementById("outgradeS").style.color = "darkorchid";
    document.getElementById("out2gradeS").style.color = "darkorchid";
    document.getElementById("topS").style.color = "magenta";
    document.getElementById("botS").style.color = "magenta";
  }
  else {
    document.body.style.background = "white";
    document.getElementById("currentGradeS").style.color = "black";
    document.getElementById("outgradeS").style.color = "green";
    document.getElementById("out2gradeS").style.color = "green";
    document.getElementById("topS").style.color = "grey";
    document.getElementById("botS").style.color = "grey";
    back = -1;
  }
  back++;
}

function funSG2() {
  if (clear) {
    clearInterval(backrep);
    clear = !clear;
  } else {
    funSG();
    backrep = setInterval(funSG, 3000);
    clear = !clear;
  }
}

function gradeS() {
  let Q1 = parseFloat(document.getElementById("SgradesQ1").value);
  let Q2 = parseFloat(document.getElementById("SgradesQ2").value);
  let M = parseFloat(document.getElementById("SgradesM").value);
  console.log(Q1 + " " + Q2 + " " + M)
  if (Q1 == 0 && Q2 == 0 || Q2 == 0 && M == 0 || Q1 == 0 && M == 0) {
     document.getElementById("outgradeS").innerHTML = "F";
     return;
  } 
  let sum = Q1 + Q2 + M;
  console.log(sum);
  if (sum < 5) document.getElementById("outgradeS").innerHTML = "F";
  else if (sum < 8.5) document.getElementById("outgradeS").innerHTML = "D";
  else if (sum < 12) document.getElementById("outgradeS").innerHTML = "D+";
  else if (sum < 16.5) document.getElementById("outgradeS").innerHTML = "C";
  else if (sum < 20) document.getElementById("outgradeS").innerHTML = "C+";
  else if (sum < 24.5) document.getElementById("outgradeS").innerHTML = "B";
  else if (sum < 28) document.getElementById("outgradeS").innerHTML = "B+";
  else document.getElementById("outgradeS").innerHTML = "A";
}