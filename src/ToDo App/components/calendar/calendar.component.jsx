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
    const [startDateIndex, setStartDateIndex] = useState(0); 

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
        if (startDateIndex > 0) {
            setStartDateIndex(startDateIndex - 1); // Go back by 7 days
        }
    };

    const handleNext = () => {
        const totalDays = generateDateRange().length;
        if (startDateIndex + 7 < totalDays) {
            setStartDateIndex(startDateIndex + 1); // Go forward by 7 days
        }
    };

    const dateRange = generateDateRange();

    const visibleDates = dateRange.slice(startDateIndex, startDateIndex + 7);

    return (
        <CalendarContainer>
            <Header>    
                <h3>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>    
            </Header>
            <DatesContainer>
                <Arrow onClick={handlePrevious}>&lt;</Arrow>
                <DaysLabelContainer>
                    {visibleDates.map((date, index) => {
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