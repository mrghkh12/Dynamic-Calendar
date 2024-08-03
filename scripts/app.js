
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

    let dayCounter = 1
    while(dayCounter <= lastDay){
        let dayElem = $.createElement('div')
        dayElem.textContent = dayCounter


        daysContainer.appendChild(dayElem)
         dayCounter++
    }
    console.log(firstDay , lastDay);
    
}



$.addEventListener('DOMContentLoaded' , () => renderCalendar(currentDate) )