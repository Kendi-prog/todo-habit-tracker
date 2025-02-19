import React, {useState} from "react";
import { Arrow, 
    CalendarContainer,  
    DatesContainer, 
    DayLabel, 
    DateLabel,
    Header,
    DaysLabelContainer, 
} from "./calendar.styles";

const Calendar = ({ onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleDateClick = (date) => {
        onDateSelect(date); 
    };

    const generateDateRange = () => {
        const dates = [];
        const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0); // Last day of the month

        for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            dates.push(new Date(date));
        }

        return dates;
    };

    const handlePrevious = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() - 1);
        setCurrentDate(newDate);
    };

    const handleNext = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + 1);
        setCurrentDate(newDate);
    };

    const dateRange = generateDateRange();

    return (
        <CalendarContainer>
            <Header> 
                <h3>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>    
            </Header>
            <DatesContainer>
                <Arrow onClick={handlePrevious}>&lt;</Arrow>
                <DaysLabelContainer>
                    {dateRange.map((date, index) => {
                        const isToday = date.toDateString() === new Date().toDateString();
                        return (
                            <div key={index}>
                                <DayLabel>{date.toLocaleString('default', { weekday: 'short' })}</DayLabel>
                                <DateLabel onClick={() => handleDateClick(date)} isToday={isToday}>
                                    {date.getDate()}
                                </DateLabel>
                            </div>
                        );
                    })}
                </DaysLabelContainer>
                <Arrow onClick={handleNext}>&gt;</Arrow>
            </DatesContainer>
        </CalendarContainer>
    );
};

export default Calendar;