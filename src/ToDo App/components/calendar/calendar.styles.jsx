import styled from 'styled-components';

export const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
`;

export const Header = styled.div`
    margin-bottom: 10px;
`;

export const Arrow = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    margin: 0 5px;
    padding: 5px;
    color: #007BFF;
`;

export const DatesContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    overflow-x : hidden;
`;

export const DayLabel = styled.div`
    font-weight: bold;
    text-align: center;
    width: 40px; /* Fixed width for day labels */
`;

export const DaysLabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`;

export const DateLabel = styled.div`
    padding: 10px;
    min-width: 40px; /* Set a minimum width for date labels */
    text-align: center;
    background-color: ${({ isToday }) => (isToday ? '#d1e7dd' : 'transparent')}; /* Highlight today */
    cursor: pointer;
`;

