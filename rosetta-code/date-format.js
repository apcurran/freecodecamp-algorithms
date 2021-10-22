"use strict";

/**
 * @returns {string[]}
 */
function getDateFormats() {
    const currDate = new Date();

    const fullYr = currDate.getFullYear();
    const month = currDate.getMonth() + 1;
    const day = currDate.getDate();
    const firstDateStr = `${fullYr}-${month}-${day}`;
    
    const fullDateFormatted = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(currDate);

    return [firstDateStr, fullDateFormatted];
}

console.log( getDateFormats() );