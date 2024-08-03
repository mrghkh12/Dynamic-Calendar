
const $ = document

const monthYearElem = $.getElementById('month-year')
const daysContainer = $.getElementById('days')

const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentDate = new Date()


function renderCalendar(){
    const year = currentDate.getFullYear()
    const monthIndex = currentDate.getMonth()

    monthYearElem.textContent = `${monthsList[monthIndex]}${year}`
}

$.addEventListener('DOMContentLoaded' , renderCalendar)