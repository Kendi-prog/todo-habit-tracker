import React, {useState} from "react";

const Calendar = ({ onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    }

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDay();
    }

    const handlePreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    }

    const handleNextsMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    }

    const  handleDateClick = (date) => {
        const selectedDate = new Date(year, month, date);
        onDateSelect(selectedDate);
    }

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = getDaysInMonth();
    const firstDay = getFirstDayOfMonth();

    return ( 
        <div>
            <div>
                <button onClick={handlePreviousMonth}>&lt;</button>
                <h3>{currentDate.toLocaleString('default', {month: "long"})}{year}</h3>
                <button onClick={handleNextsMonth}>&gt;</button>
            </div>
            <div>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'].map((day, index) => (
                    <h2 key={index}>{day}</h2>
                ))}
            </div>
            <div>
                {Array.from({ length: firstDay }).map((_, index) => (
                    <div key={index}/>
                ))}

                {Array.from({ length: daysInMonth }).map((_, index) => {
                    const date = index + 1;
                    const isToday = new Date().getDate() === date && month === new Date().getMonth()
                    && year === new Date().getFullYear()

                    return (
                        <div key={index} isToday={isToday} onClick={() => handleDateClick(date)}>
                            {date}
                        </div>
                    )

                })}
            </div>
        </div>
    );
}

export default Calendar;