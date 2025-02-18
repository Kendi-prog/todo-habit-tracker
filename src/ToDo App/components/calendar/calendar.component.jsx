import React, {useState} from "react";
import { Arrow, CalendarContainer, DateCell, DatesScrollContainer, DaysContainer, Header } from "./calendar.styles";

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
        <CalendarContainer>
            <Header>
                <Arrow onClick={handlePreviousMonth}>&lt;</Arrow>
                <h3>{currentDate.toLocaleString('default', {month: "long"})}{year}</h3>
                <Arrow onClick={handleNextsMonth}>&gt;</Arrow>
            </Header>
            <DaysContainer>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'].map((day, index) => (
                    <h2 key={index}>{day}</h2>
                ))}
            </DaysContainer>
            <DatesScrollContainer>
                {Array.from({ length: firstDay }).map((_, index) => (
                    <DateCell key={index}/>
                ))}

                {Array.from({ length: daysInMonth }).map((_, index) => {
                    const date = index + 1;
                    const isToday = new Date().getDate() === date && month === new Date().getMonth()
                    && year === new Date().getFullYear()

                    return (
                        <DateCell key={index} isToday={isToday} onClick={() => handleDateClick(date)}>
                            {date}
                        </DateCell>
                    )

                })}
            </DatesScrollContainer>
        </CalendarContainer>
    );
}

export default Calendar;