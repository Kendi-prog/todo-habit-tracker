import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    display: flex;
    align-items: center;
    margin:  10px 0;
    justify-content: space-between;
    margin: 10px 0;
    
`;

export const TaskContainer = styled.li`
    background-color: ${({ category }) => categoryColors[category] || '#fff'};
    border-left: 5px solid  ${({ category }) => categoryBorderColors[category] };
    color: white;
    padding: 6px;
    margin: 10px 0 ;
    border-radius: 0 20px 20px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    flex-grow: 1;
    min-width: 200px;
   
`

export const TaskStartTime = styled.div`
   font-weight: bold;
   margin-right: 20px
`

export const TaskName = styled.h3`
    text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`

export const CompleteTaskIcon = styled.div`
    background: transparent;
    margin: 10px;
    cursor: pointer;
`

export const DeleteIcon = styled.button`
    background: transparent;
    border: none;
    color: red;
    curser: pointer;
    padding: 0;
    margin-left: 20px;
    width: 10px;
    height: 10px;

`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 16px;
`
export const HiddenSpace = styled.div`
    width: 30px;
    height: 30px;
`