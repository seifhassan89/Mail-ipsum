let tableEles = document.querySelectorAll(".rowHasNotification");
let elementsArray = Array.prototype.slice.call(tableEles);
let table = document.querySelectorAll(".table");
let tableDetails = document.querySelectorAll(".table-details");
let goBack = document.getElementById("goBack");
let sectionRight = document.getElementById("sectionRight");
let burgerManu = document.getElementsByClassName("burgerManu");
let ClieckedburgerManu = document.getElementsByClassName("ClieckedburgerManu");
let asideSection = document.getElementsByClassName("aside-section");
let mainSection = document.getElementsByClassName("mainSection");

elementsArray.forEach(function (elem) {
  elem.addEventListener("click", function () {
    table[0].classList.add("d-none");
    tableDetails[0].classList.toggle("d-none");
  });
});
secondScreenIsOn();

function secondScreenIsOn() {
  sectionRight.addEventListener("click", function () {
    table[0].style.display = "table";
    tableDetails[0].classList.toggle("d-none");
  });

  burgerManu[0].addEventListener("click", function () {
    ClieckedburgerManu[0].classList.toggle("d-none");
    mainSection[0].classList.toggle("d-none");
    burgerManu[0].classList.toggle("d-none");
    asideSection[0].classList.remove("d-none");
  });

  ClieckedburgerManu[0].addEventListener("click", function () {
    burgerManu[0].classList.toggle("d-none");
    mainSection[0].classList.toggle("d-none");
    ClieckedburgerManu[0].classList.toggle("d-none");
    asideSection[0].classList.add("d-none");
  });

  goBack.addEventListener("click", function () {
    table[0].classList.toggle("d-none");
    tableDetails[0].classList.remove("d-none");
  });

  window.addEventListener(
    "resize",
    function () {
      if (window.innerWidth > "767") {
        asideSection[0].classList.remove("d-none");
      } else {
        if (!burgerManu[0].classList.contains("d-none")) {
          asideSection[0].classList.add("d-none");
        }
        if (tableDetails[0].classList.contains("d-none")) {
          tableDetails[0].classList.remove("d-none");
        }
        if (!table[0].classList.contains("d-none")) {
          table[0].classList.add("d-none");
        }
      }
    },
    true
  );

  window.addEventListener("load", function () {
    if (window.innerWidth <= "768") {
      table[0].classList.add("d-none");
      asideSection[0].classList.add("d-none");
      if (tableDetails[0].classList.contains("d-none")) {
        tableDetails[0].classList.remove("d-none");
      }
    } else {
      asideSection[0].classList.remove("d-none");
    }
  });
}
