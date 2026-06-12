// Returns a date `daysFromNow` days in the future as YYYY-MM-DD —
// the format v-calendar uses in its day cell classes (.id-YYYY-MM-DD)
export function futureDateIso(daysFromNow) {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}
