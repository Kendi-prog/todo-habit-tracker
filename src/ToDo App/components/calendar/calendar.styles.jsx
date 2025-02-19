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
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`;

export const Arrow = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
`;

export const DatesScrollContainer = styled.div`
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling */
    width: 100%;
    white-space: nowrap;
`;

export const DayLabel = styled.div`
    font-weight: bold;
    text-align: center;
    width: 40px; /* Fixed width for day labels */
`;

export const DateCell = styled.div`
    padding: 10px;
    border: 1px solid #eee;
    min-width: 40px; /* Set a minimum width for date cells */
    text-align: center;
    background-color: ${({ isToday }) => (isToday ? '#d1e7dd' : 'transparent')}; /* Highlight today */
`;



