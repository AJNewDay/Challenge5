// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});

// function formatDate(dateObject) {
//     const parts = {
//         date: dateObject.getDate(),
//         month: dateObject.getMonth() + 1,
//         year: dateObject.getFullYear(),
//         hour: (dateObject.getHours() % 12) || 12,
//         minute: dateObject.getMinutes().toString().padStart(2, "0"),
//         amOrPm: dateObject.dateObject.getHours() < 12 ? "AM" : "PM"
//     };
//     return '${parts.date}/${parts.month}/${parts.year} ${parts.hour}:${parts.minute} ${parts.amOrPm}';

// }


const dayJsObject = dayjs();
console.log(dayJsObject.format("M/D/YYYY ddd h:mm A"));

const displayTime = document.getElementById('currentDay');

displayTime.innerHTML = dayJsObject.format("M/D/YYYY ddd h:mm A");

let nineNote = document.getElementById('9Note')
let tenNote = document.getElementById('10Note')
let elevenNote = document.getElementById('11Note')
let twelveNote = document.getElementById('12Note')
let thirteenNote = document.getElementById('13Note')
let fourteenNote = document.getElementById('14Note')
let fifteenNote = document.getElementById('15Note')
let sixteenNote = document.getElementById('16Note')
let seventeenNote = document.getElementById('17Note')

console.log(nineNote)


function timeDay() {
    let hour = dayjs().hour()
    console.log(hour)
    $('.time-block').each(function () {
        let timeId = $(this).attr('id')


        if (timeId < hour) {
            $(this).addClass('past')
            $(this).removeClass('future')

        } else if (timeId == hour) {
            $(this).addClass('present')
        } else {
            $(this).addClass('future')
        }
    })


}

timeDay()

$('.saveBtn').on('click', function () {
    let note = $(this).siblings('.description').val()
    let time = $(this).parent().attr('id')
    localStorage.setItem("time" + time, note)
})

nineNote.innerText = localStorage.time9;
tenNote.innerText = localStorage.time10;
elevenNote.innerText = localStorage.time11;
twelveNote.innerText = localStorage.time12;
thirteenNote.innerText = localStorage.time13;
fourteenNote.innerText = localStorage.time14;
fifteenNote.innerText = localStorage.time15;
sixteenNote.innerText = localStorage.time16;
seventeenNote.innerText = localStorage.time17;










// if ('hour' < dayJsObject + 1) {

//     'time-block' = 'present'


// };