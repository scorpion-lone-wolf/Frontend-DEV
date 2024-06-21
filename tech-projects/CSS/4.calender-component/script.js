let map = {
    0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "August", 8: "September", 9: "October", 10: "November", 11: "December"
}

document.addEventListener('DOMContentLoaded', () => {
    let dateTime = new Date();
    let currentDate = dateTime.getDate();
    let currentMonth = map[dateTime.getMonth()];
    let dateElement = document.querySelector('.card__top-date');
    let monthElement = document.querySelector('.card__top-month');

    dateElement.innerHTML = currentDate;
    monthElement.innerHTML = currentMonth;
})