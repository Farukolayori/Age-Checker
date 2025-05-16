const inputDay = document.getElementById("input1");
const inputMonth = document.getElementById("input2");
const inputYear = document.getElementById("input3");

const headYears = document.getElementById("head1");
const headMonths = document.getElementById("head2");
const headDays = document.getElementById("head3");

const img = document.getElementById("img");

function calculateAge() {
    const day = Number(inputDay.value.trim());
    const month = Number(inputMonth.value.trim());
    const year = Number(inputYear.value.trim());

    // Validate inputs
    if (
        !day || !month || !year ||
        isNaN(day) || isNaN(month) || isNaN(year) ||
        day < 1 || day > 31 ||
        month < 1 || month > 12 ||
        year < 1900 || year > new Date().getFullYear()
    ) {
        alert("Please enter a valid date (DD/MM/YYYY).");
        return;
    }

    const birthDate = new Date(year, month - 1, day); // JS months are 0-indexed
    const today = new Date();

    if (birthDate > today) {
        alert("Birth date cannot be in the future.");
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        // Get days in previous month
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    headYears.textContent = years;
    headMonths.textContent = months;
    headDays.textContent = days;
}

img.addEventListener('click', calculateAge);
