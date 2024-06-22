let monthsMap = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};

let dayMap = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
};

let currentMonth = 9;
let currentYear = 1997;
let currentDay = 0;
let currentDate = 26;
let noOfDays = 0;

document.addEventListener("DOMContentLoaded", () => {
    let dateTime = new Date();
    currentDate = dateTime.getDate();
    currentMonth = dateTime.getMonth();

    // * Adding date and month in top section of a calendar card

    let dateElement = document.querySelector(".card__top-date");
    let monthElement = document.querySelector(".card__top-month");

    dateElement.innerHTML = currentDate;
    monthElement.innerHTML = monthsMap[currentMonth];

    // * Adding month and year in center portion of a calender card
    currentYear = dateTime.getFullYear();
    const monthAndYear = document.querySelector(".card__bottom-top span");
    monthAndYear.innerHTML =
        monthsMap[currentMonth].toString().substring(0, 3) + " " + currentYear;

    // *How many days in a month
    noOfDays = getTotalDaysInMonth(currentYear, dateTime.getMonth() + 1);

    currentDay = getCurrentDay(currentYear, currentMonth, currentDate);

    populateDate(noOfDays);

    // *event listener for changing dates , months and year
    const leftArrow = document.querySelector(".left-arrow");
    leftArrow.addEventListener("click", () => populateDateAfterLeftClick(monthAndYear));

    const rightArrow = document.querySelector(".right-arrow");
    rightArrow.addEventListener("click", () => populateDateAfterRightClick(monthAndYear));
});

// 1= january and so on
function getTotalDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function getCurrentDay(year, month, date) {
    return new Date(year, month, date).getDay();
}

function populateDate(noOfDays) {
    const datesElementContainer = document.querySelector(".card__down-dates");
    let countForCurrentMonth = 1;
    let countForNextMonth = 1;
    // Remove all the children of datesElementContainer if exists
    while (datesElementContainer.hasChildNodes()) {
        datesElementContainer.removeChild(datesElementContainer.lastChild);
    }
    for (let i = 0; i < 6; i++) {
        const rows = document.createElement("div");
        for (let j = 0; j < 7; j++) {
            const span = document.createElement("span");
            if (i == 0) {
                if (j >= currentDay) span.innerHTML = `${countForCurrentMonth++}`;
                else {
                    span.innerHTML = "x";
                }
            } else {
                if (countForCurrentMonth <= noOfDays)
                    span.innerHTML = `${countForCurrentMonth++}`;
                else span.innerHTML = `${countForNextMonth++}`;
            }
            rows.appendChild(span);
        }
        datesElementContainer.appendChild(rows);
    }
}


function populateDateAfterRightClick(monthAndYear) {
    // change the current month and if needed year

    if (currentMonth == 11) {
        monthAndYear.innerHTML = monthsMap["0"].substring(0, 3) + " " + ++currentYear;
        currentMonth = 0;
    } else {
        monthAndYear.innerHTML =
            monthsMap[`${++currentMonth}`].substring(0, 3) + " " + currentYear;
    }

    noOfDays = getTotalDaysInMonth(currentYear, currentMonth + 1);
    currentDay = getCurrentDay(currentYear, currentMonth, currentDate);

    populateDate(noOfDays);
}

function populateDateAfterLeftClick(monthAndYear) {
    // change the current month and if needed year
    if (currentMonth == 0) {
        monthAndYear.innerHTML = monthsMap["11"].substring(0, 3) + " " + --currentYear;
        currentMonth = 11;
    } else {
        monthAndYear.innerHTML =
            monthsMap[`${--currentMonth}`].substring(0, 3) + " " + currentYear;
    }

    noOfDays = getTotalDaysInMonth(currentYear, currentMonth + 1);
    currentDay = getCurrentDay(currentYear, currentMonth, currentDate);

    populateDate(noOfDays);
}