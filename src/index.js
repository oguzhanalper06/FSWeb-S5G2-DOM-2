import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// First Event
document.querySelector("nav a").addEventListener("click", function () {
  alert("Tekrar Merhaba!");
});

//  Event click
/*let a = document.querySelector(".intro src");
a.addEventListener("mouseover", function1);
a.addEventListener("click", function2);
a.addEventListener("mouseout", function3);

function function1() {
  document.getElementsByClassName(".intro").src += "Moused over!<br>";
}
function function2() {
  document.getElementsByClassName(".intro").src += "CLİCKED!<br>";
}
function function3() {
  document.getElementsByClassName(".intro").src += "Moused out!<br>";
}*/

//  Event focus

const name1 = document.querySelector("#name");
name1.addEventListener("focus", (olay) => {
  olay.target.style.backgroundColor = "red";
});
// Event dblclick

let colorArr = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
];
function random0to5() {
  return Math.round(Math.random() * 5);
}

let kuturenk = document.querySelectorAll(".img-content")[0];
kuturenk.addEventListener("dblclick", (olay) => {
  const renksirasi = random0to5();
  kuturenk.style.border = "10px solid " + colorArr[renksirasi];
  //olay.target.textContent = renksirasi + 1 + ".renk";
  //olay.target.style.color = colorArr[renksirasi];
});

// load event

window.addEventListener("load", (x) => {
  alert("Fena bir internet hızı sayılmaz");
});

// mouseover event

const btn = document.querySelectorAll(".btn");

btn.forEach((element) => {
  element.addEventListener("mouseover", (d) => {
    d.target.style.backgroundColor = "red";
    element.addEventListener("mouseleave", (d) => {
      d.target.style.backgroundColor = "#17a2b8";
    });
  });
});
//resize event
document.getElementsByTagName("body")[0].onresize = function () {
  myFunction();
};
var x = 0;
function myFunction() {
  var txt = (x += 1);
  document.getElementById("demo").innerHTML = txt;
}
