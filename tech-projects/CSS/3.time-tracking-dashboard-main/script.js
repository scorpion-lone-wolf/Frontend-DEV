'use strict';
window.addEventListener("DOMContentLoaded", function () {
    const dailyBtn = document.getElementById("dashboard__maincard-daily");
    const weeklyBtn = document.getElementById("dashboard__maincard-weekly");
    const monthlyBtn = document.getElementById("dashboard__maincard-monthly");

    dailyBtn.classList.add('active')

    const workTimeElement = document.querySelector('.work-card__info .card__info-time p');
    const workStatusElement = document.querySelector('.work-card__info .card__info-status p');

    const playTimeElement = document.querySelector('.play-card__info .card__info-time p');
    const playStatusElement = document.querySelector('.play-card__info .card__info-status p');

    const studyTimeElement = document.querySelector('.study-card__info .card__info-time p');
    const studyStatusElement = document.querySelector('.study-card__info .card__info-status p');

    const exerciseTimeElement = document.querySelector('.exercise-card__info .card__info-time p');
    const exerciseStatusElement = document.querySelector('.exercise-card__info .card__info-status p');

    const socialTimeElement = document.querySelector('.social-card__info .card__info-time p');
    const socialStatusElement = document.querySelector('.social-card__info .card__info-status p');

    const selfcareTimeElement = document.querySelector('.selfcare-card__info .card__info-time p');
    const selfcareStatusElement = document.querySelector('.selfcare-card__info .card__info-status p');


    dailyBtn.addEventListener('click', function () {
        if (!dailyBtn.classList.contains('active')) dailyBtn.classList.add('active')
        if (weeklyBtn.classList.contains('active')) weeklyBtn.classList.remove('active')
        if (monthlyBtn.classList.contains('active')) monthlyBtn.classList.remove('active')

        workTimeElement.innerHTML = "5hrs";
        workStatusElement.innerHTML = "Previous - 7hrs";

        playTimeElement.innerHTML = "1hrs";
        playStatusElement.innerHTML = "Previous - 2hrs";

        studyTimeElement.innerHTML = "0hrs"
        studyStatusElement.innerHTML = "Previous - 1hr";

        exerciseTimeElement.innerHTML = "1hrs";
        exerciseStatusElement.innerHTML = "Previous - 1hr";

        socialTimeElement.innerHTML = "1hrs";
        socialStatusElement.innerHTML = "Previous - 3hrs";

        selfcareTimeElement.innerHTML = "0hrs";
        selfcareStatusElement.innerHTML = "Previous - 1hr";
    });

    weeklyBtn.addEventListener('click', function () {
        if (!weeklyBtn.classList.contains('active')) weeklyBtn.classList.add('active')
        if (dailyBtn.classList.contains('active')) dailyBtn.classList.remove('active')
        if (monthlyBtn.classList.contains('active')) monthlyBtn.classList.remove('active')

        workTimeElement.innerHTML = "32hrs";
        workStatusElement.innerHTML = "Previous - 36hrs";

        playTimeElement.innerHTML = "10hrs";
        playStatusElement.innerHTML = "Previous - 8hrs";

        studyTimeElement.innerHTML = "4hrs"
        studyStatusElement.innerHTML = "Previous - 7hr";

        exerciseTimeElement.innerHTML = "4hrs";
        exerciseStatusElement.innerHTML = "Previous - 5hr";

        socialTimeElement.innerHTML = "5hrs";
        socialStatusElement.innerHTML = "Previous - 10hrs";

        selfcareTimeElement.innerHTML = "2hrs";
        selfcareStatusElement.innerHTML = "Previous - 2hr";

    });

    monthlyBtn.addEventListener('click', function () {
        if (!monthlyBtn.classList.contains('active')) monthlyBtn.classList.add('active')
        if (weeklyBtn.classList.contains('active')) weeklyBtn.classList.remove('active')
        if (dailyBtn.classList.contains('active')) dailyBtn.classList.remove('active')

        workTimeElement.innerHTML = "103hrs";
        workStatusElement.innerHTML = "Previous - 128hrs";

        playTimeElement.innerHTML = "23hrs";
        playStatusElement.innerHTML = "Previous - 29hrs";

        studyTimeElement.innerHTML = "13hrs"
        studyStatusElement.innerHTML = "Previous - 19hr";

        exerciseTimeElement.innerHTML = "11hrs";
        exerciseStatusElement.innerHTML = "Previous - 18hr";

        socialTimeElement.innerHTML = "21hrs";
        socialStatusElement.innerHTML = "Previous - 23hrs";

        selfcareTimeElement.innerHTML = "7hrs";
        selfcareStatusElement.innerHTML = "Previous - 11hrs";
    });

});