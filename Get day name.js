function getDayName(dateString) { /* MM/DD/YYYY Format*/
    let dayName;
    const dateArray = dateString.split('/');
    const month = Number(dateArray[0]) - 1; // Because apparently the months are indexed (they start at zero)
    const day = dateArray[1];
    const year = dateArray[2];

    const options = { weekday: 'long' };
    const date = new Date(year, month, day);
    dayName = date.toLocaleDateString(date, options);
    return dayName;
}