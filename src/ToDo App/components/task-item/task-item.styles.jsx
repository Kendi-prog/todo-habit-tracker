import styled from 'styled-components';

const categoryColors = {
    Work: '#007bff',        // Blue
    Personal: '#ff6b81',    // Pink
    Shopping: '#28a745',     // Green
    Health: '#ffc107',      // Yellow
    Education: '#17a2b8',   // Cyan
    Other: '#6c757d',       // Gray
};

export const TaskItemContainer = styled.li`
    background-color: ${({ category }) => categoryColors[category] || '#fff'};
    color: white;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;