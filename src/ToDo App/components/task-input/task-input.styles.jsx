import styled from "styled-components";

export const TaskInputContainer = styled.div`
    padding: 15px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 10px;
`;

export const TaskNameInput = styled.input`
    width: 100%;
    padding: 15px 0px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &::placeholder {
        color: #888;
        font-size: 17px;
        text-indent: 10px;
    }
`;

export const DateTimeRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

export const Icon = styled.span`
    color: #7600bc;
    font-size: 15px;
`;

export const DateInput = styled.input`
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;

     /* Remove default calendar icon */
    &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;

export const TimeInput = styled.input`
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;


    /* Remove default time picker icon */
    &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;

export const ToLabel = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;

export const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 15px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-height: 50px;
    resize: none;
    margin-bottom: 10px;

    &::placeholder {
        color: #888;
        font-size: 17px;
        text-indent: 10px;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SaveButton = styled.button`
    padding: 10px ;
    background: #7600bc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 48%;
`;

export const CancelButton = styled.div`
   color: #dc3545;
   margin-right: 60px;
   margin-top: 6px;
   cursor: pointer;
`;




 

