'use strict';
window.addEventListener("DOMContentLoaded", function () {
    const dailyBtn = document.getElementById("dashboard__maincard-daily");
    const weeklyBtn = document.getElementById("dashboard__maincard-weekly");
    const monthlyBtn = document.getElementById("dashboard__maincard-monthly");

    dailyBtn.classList.add('active')

    dailyBtn.addEventListener('click', function () {
        if (!dailyBtn.classList.contains('active')) dailyBtn.classList.add('active')
        if (weeklyBtn.classList.contains('active')) weeklyBtn.classList.remove('active')
        if (monthlyBtn.classList.contains('active')) monthlyBtn.classList.remove('active')

        // TODO: All the daily data should be loaded
    });

    weeklyBtn.addEventListener('click', function () {
        if (!weeklyBtn.classList.contains('active')) weeklyBtn.classList.add('active')
        if (dailyBtn.classList.contains('active')) dailyBtn.classList.remove('active')
        if (monthlyBtn.classList.contains('active')) monthlyBtn.classList.remove('active')
        // TODO: All the weekly data should be loaded

    });

    monthlyBtn.addEventListener('click', function () {
        if (!monthlyBtn.classList.contains('active')) monthlyBtn.classList.add('active')
        if (weeklyBtn.classList.contains('active')) weeklyBtn.classList.remove('active')
        if (dailyBtn.classList.contains('active')) dailyBtn.classList.remove('active')
        // TODO: All the monthly data should be loaded

    });

});