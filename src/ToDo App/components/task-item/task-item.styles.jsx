import styled from 'styled-components';

const categoryColors = {
    Work: '#ADD8E6',        // Blue
    Personal: '#ff6b81',    // Pink
    Shopping: '#28a745',     // Green
    Health: '#ffc107',      // Yellow
    Education: '#17a2b8',   // Cyan
    Other: '#6c757d',       // Gray
};

const categoryBorderColors = {
    Work:'#00008B' ,     // Blue
    Personal:'rgb(139, 0, 116)',
    Shopping: '#28a745',     // Green
    Health: '#ffc107',      // Yellow
    Education: '#17a2b8',   // Cyan
    Other: '#6c757d',       // Gray
};

export const TaskItemContainer = styled.div`
    
`;

export const TaskContainer = styled.li`
    background-color: ${({ category }) => categoryColors[category] || '#fff'};
    border-left: 5px solid  ${({ category }) => categoryBorderColors[category] };
    color: white;
    padding: 10px;
    margin: 10px 0;
    border-radius: 0 20px 20px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
   
`

export const TaskStartTime = styled.div`
   font-weight: bold;
`

export const TaskName = styled.h3`
    text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`