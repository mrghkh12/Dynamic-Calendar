
const $ = document

const monthYearElem = $.getElementById('month-year')
const daysContainer = $.getElementById('days')

const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentDate = new Date()


function renderCalendar(date){
    const year = date.getFullYear()
    const monthIndex = date.getMonth()

    monthYearElem.textContent = `${monthsList[monthIndex]}${year}`

    daysElemMaker(year , monthIndex)
}

function daysElemMaker(year , monthIndex){
    let firstDay = new Date(year , monthIndex , 1).getDay();
    let lastDay = new Date(year , monthIndex + 1 , 0).getDate();

    daysContainer.innerHTML = ''

    prevMonthLastDay(firstDay, year , monthIndex)

    let dayCounter = 1
    while(dayCounter <= lastDay){
        let dayElem = $.createElement('div')
        dayElem.textContent = dayCounter

        if(dayCounter === currentDate.getDate()){
            dayElem.classList.add('today')
        }

        daysContainer.appendChild(dayElem)
        dayCounter++
    }

    nextMonthStartDays(year , monthIndex)

    console.log(firstDay , lastDay);
    
}

function prevMonthLastDay(firstDay, year , monthIndex) {
    const lastMonthDays = new Date(year , monthIndex, 0).getDate()
    
    let dayCounter = firstDay
    while(dayCounter > 0){
        let dayElem = $.createElement('div')
        dayElem.textContent = lastMonthDays - (dayCounter - 1)
        dayElem.classList.add('fade')

        daysContainer.appendChild(dayElem)
        dayCounter--
    }
}

function nextMonthStartDays( year , monthIndex) {
    const nextMonthDays = 7 - new Date(year , monthIndex + 1, 0).getDate() - 1;
    
    let dayCounter = 1
    while(dayCounter <= nextMonthDays){
        let dayElem = $.createElement('div')
        dayElem.textContent = dayCounter
        dayElem.classList.add('fade')

        daysContainer.appendChild(dayElem)
        dayCounter++
    }
}



$.addEventListener('DOMContentLoaded' , () => renderCalendar(currentDate) )