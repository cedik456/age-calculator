
const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const result = document.getElementById("result");

function calculateAge(){
 
    const birthdate = new Date(userInput.value)
    const today = new Date();
  
    const [birthYear, birthMonth, birthdDay] = [birthdate.getFullYear(), birthdate.getMonth() + 1, birthdate.getDate()];

    const [currentYear, currentMonth, currentDay] = [today.getFullYear(), today.getMonth() + 1, today.getDate()];


    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthdDay;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthdDay) ) {
        ageYears--;
        ageMonths += 12;
    }

    if (currentDay < birthdDay) {
        ageMonths--;
        let daysInPrevMonth = new Date(currentYear, currentMonth -1, 0).getDate();
        ageDays += daysInPrevMonth;
    }

    result.innerHTML = `You are <span> ${ageYears}</span> years, <span>${ageMonths}</span> months and <span>${ageDays}</span> days old`;

    // console.log(ageYears, ageMonths, ageDays);
    
    
}