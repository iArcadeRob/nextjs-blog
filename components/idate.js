import { parseISO, format } from 'date-fns'

export default function IDate({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>;
}