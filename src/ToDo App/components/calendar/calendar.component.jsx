import React, {useState, useEffect} from "react";
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
    const [dateRange, setDateRange] = useState([]);

    const handleDateClick = (date) => {
        onDateSelect(date);
    };

    const getCurrentDateIndex = (dates) => {
        const today = new Date();
        return dates.findIndex(
            (date) =>
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()
        );
    };

    const generateDateRange = () => {
        const dates = [];
        const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
            dates.push(new Date(date));
        }
        return dates;
    };

    useEffect(() => {
        const newDateRange = generateDateRange();
        setDateRange(newDateRange);

        
        const currentDateIndex = getCurrentDateIndex(newDateRange);
        if (currentDateIndex !== -1) {
            setStartDateIndex(Math.floor(currentDateIndex / 7) * 7);
        }
    }, [currentDate]);

    const handlePrevious = () => {
        setStartDateIndex((prevIndex) => Math.max(prevIndex - 7, 0));
    };

    const handleNext = () => {
        if (startDateIndex + 7 < dateRange.length) {
            setStartDateIndex((prevIndex) => Math.min(prevIndex + 7, dateRange.length - 1));
        }
    };

    const visibleDates = dateRange.slice(startDateIndex, startDateIndex + 7);

    return (
        <CalendarContainer>
            <Header>
                <h3>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h3>
            </Header>
            <DatesContainer>
                <Arrow onClick={handlePrevious}>&lt;</Arrow>
                <DaysLabelContainer>
                    {visibleDates.map((date, index) => {
                        const isToday = date.toDateString() === new Date().toDateString();
                        return (
                            <div key={index}>
                                <DayLabel>{date.toLocaleString("default", { weekday: "short" })}</DayLabel>
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
