import styled from "styled-components";

export const TaskManagementContainer = styled.div`

`;

export const DateContainer = styled.div`
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ListContainer = styled.ul`
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Title = styled.h3`
    margin: 10px 60px;
`;


export const NoTasksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;

    img {
        width: 200px; /* Adjust size as needed */
        height: auto;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        color: #666;
        font-weight: 600;
    }
`;
