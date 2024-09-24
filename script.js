const lastWorkingDayInput = document.getElementById("last-working-day");
const noticePeriodInput = document.getElementById("notice-period");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const lastWorkingDay = new Date(lastWorkingDayInput.value);
    const noticePeriod = parseInt(noticePeriodInput.value);

    if (isNaN(lastWorkingDay.getTime()) || isNaN(noticePeriod)) {
        resultDiv.innerHTML = "Please enter valid values.";
    } else {
        const endDate = new Date(lastWorkingDay.getTime() + (noticePeriod - 1) * 24 * 60 * 60 * 1000);
        resultDiv.innerHTML = `Your Notice Period will end on ${endDate.toDateString()}.`;
    }
});
