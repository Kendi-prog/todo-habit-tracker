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