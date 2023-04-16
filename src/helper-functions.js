export const addLeftZero = (num) => {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
};

export const getWeekDay = (num) => {
    switch(num) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        default: console.log('Invalid week day number');
    }
};

export const convertMonth = (num) => {
    switch(num+1) {
        case 1: return 'JAN';
        case 2: return 'FEB';
        case 3: return 'MAR';
        case 4: return 'APR';
        case 5: return 'MAY';
        case 6: return 'JUN';
        case 7: return 'JUL';
        case 8: return 'AUG';
        case 9: return 'SEP';
        case 10: return 'OCT';
        case 11: return 'NOV';
        case 12: return 'DEC';
        default: console.log('Invalid month number');
    }
};

export const getYearArray = (num) => {
    const result = [];
    for (let i=0; i<num.toString().length; i++) {
        result.push(num.toString()[i]);
    }
    return result;
}