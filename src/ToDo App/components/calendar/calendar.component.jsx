import React, {useState} from "react";
import { Arrow, 
    CalendarContainer, 
    DateCell, 
    DatesScrollContainer, 
    DayLabel, 
    Header 
} from "./calendar.styles";

const Calendar = ({ onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const  handleDateClick = (date) => {
        onDateSelect(date);
    }

    const generateDateRange = () => {
        const dates = [];
        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 10);

        for(let i = 0; i < 21 ; i++){
            const date  = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            dates.push(date);
        }

        return dates;
    }

    const handlePrevious = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 1);
        setCurrentDate(newDate);
    };

    const handleNext = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(newDate);
    };

    const dateRange = generateDateRange();

    
    return ( 
        <CalendarContainer>
            <Header>
                <Arrow onClick={handlePrevious}>&lt;</Arrow>
                <h3>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
                <Arrow onClick={handleNext}>&gt;</Arrow>
            </Header>
            <DatesScrollContainer>
                {dateRange.map((date, index) => {
                    const isToday = date.toDateString() === new Date().toDateString();
                    return (
                        <div key={index}>
                            <DayLabel>{date.toLocaleString('default', { weekday: 'short' })}</DayLabel>
                            <DateCell onClick={() => handleDateClick(date)} isToday={isToday}>
                                {date.getDate()}
                            </DateCell>
                        </div>
                    );
                })}
            </DatesScrollContainer>
        </CalendarContainer>
    );
}

export default Calendar;