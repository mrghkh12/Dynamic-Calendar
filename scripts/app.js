const $ = document;

const monthYearElem = $.getElementById("month-year");
const daysContainer = $.getElementById("days");
const prevMonthBtn = $.getElementById("prevBtn");
const nextMonthBtn = $.getElementById("nextBtn");

const monthsList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();

  monthYearElem.textContent = `${monthsList[monthIndex]}${year}`;

  daysElemMaker(year, monthIndex);
}

function daysElemMaker(year, monthIndex) {
  let todayDate = new Date();
  let firstDay = new Date(year, monthIndex, 1).getDay();
  let lastDay = new Date(year, monthIndex + 1, 0).getDate();

  daysContainer.innerHTML = "";

  prevMonthLastDay(firstDay, year, monthIndex);

  let dayCounter = 1;
  while (dayCounter <= lastDay) {
    let dayElem = $.createElement("div");
    dayElem.textContent = dayCounter;

    if (
      dayCounter === todayDate.getDate() &&
      monthIndex === todayDate.getMonth() &&
      year === todayDate.getFullYear()
    ) {
      dayElem.classList.add("today");
    }

    daysContainer.appendChild(dayElem);
    dayCounter++;
  }

  nextMonthStartDays(year, monthIndex);
}

function prevMonthLastDay(firstDay, year, monthIndex) {
  const lastMonthDays = new Date(year, monthIndex, 0).getDate();

  let dayCounter = firstDay;
  while (dayCounter > 0) {
    let dayElem = $.createElement("div");
    dayElem.textContent = lastMonthDays - (dayCounter - 1);
    dayElem.classList.add("fade");

    daysContainer.appendChild(dayElem);
    dayCounter--;
  }
}

function nextMonthStartDays(year, monthIndex) {
  const nextMonthDays = 7 - new Date(year, monthIndex + 1, 0).getDay() - 1;

  let dayCounter = 1;
  while (dayCounter <= nextMonthDays) {
    let dayElem = $.createElement("div");
    dayElem.textContent = dayCounter;
    dayElem.classList.add("fade");

    daysContainer.appendChild(dayElem);
    dayCounter++;
  }
}

prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});
nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});
$.addEventListener("DOMContentLoaded", () => renderCalendar(currentDate));
