let monthNumber = 12;
let monthName = null;
let monthDays = null;

switch(monthNumber){
    case 1:
    monthName = 'January';
    monthDays = '31 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 2:
    monthName = 'February';
    monthDays = '28 days in a common year and 29 days in leap years';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 3:
    monthName = 'March';
    monthDays = '31 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 4:
    monthName = 'April';
    monthDays = '30 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 5:
    monthName = 'May';
    monthDays = '31 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 6:
    monthName = 'June';
    monthDays = '30 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 7:
    monthName = 'July';
    monthDays = '31 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 8:
    monthName = 'August';
    monthDays = '31 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 9:
    monthName = 'September';
    monthDays = '30 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 10:
    monthName = 'October';
    monthDays = '31 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 11:
    monthName = 'November';
    monthDays = '30 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    case 12:
    monthName = 'December';
    monthDays = '31 Days';
    message = `${monthName} is the selected month and has ${monthDays}`;
    break;
    default:
    message = 'Please input the number between 1 and 12';
    break;
}
console.log(message);