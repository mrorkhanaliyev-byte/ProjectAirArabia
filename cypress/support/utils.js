// Returns a date `daysFromNow` days in the future, formatted as dd/mm/yyyy
// (the format Air Arabia's date inputs expect)
export function futureDate(daysFromNow) {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}
