import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
    return (
        <div id='calendar-container'>
            <FullCalendar
                plugins={[ dayGridPlugin]}
            />
        </div>
    );
};

export default Calendar;