import styled from "styled-components";

export const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;

export const DatesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Arrow = styled.div`
    cursor: pointer;
    font-size: 20px;
    padding: 10px;
`;

export const DaysLabelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Space between days and dates */
`;

export const DayLabel = styled.div`
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
`;

export const DateLabel = styled.div`
    cursor: pointer;
    text-align: center;
    padding: 15px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.isToday ? '#ff9900' : 'transparent')};
    color: ${(props) => (props.isToday ? 'white' : 'black')};

    &:hover {
        background-color: ${(props) => (props.isToday ? '#ff7f00' : '#f0f0f0')};
    }
`;

