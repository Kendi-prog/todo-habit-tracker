import styled from 'styled-components';

export const TaskInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
    margin-bottom: 15px;
    color: #333;
`;

export const TaskNameInput = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    width: 83%; 
    background-color: #CBC3E3;
`;

export const DateInput = styled.input`
    margin-bottom: 10px;
    margin-right: 30px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    background-color: #CBC3E3;
    
  
`;

export const TimeInput = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    background-color: #CBC3E3;
   
`;

 export const TextArea = styled.textarea`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    background-color: #CBC3E3;
`;

export const Select = styled.select`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #218838;
    }
`;

export const DateTimeRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const ToLabel = styled.span`
    margin: 0px 140px;
    
`;



 

