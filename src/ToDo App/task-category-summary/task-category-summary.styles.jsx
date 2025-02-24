import styled from "styled-components";

export const SummaryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 10px;
`;

export const CategoryBox = styled.div`
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 100px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Count = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

export const CategoryLabel = styled.div`
    font-size: 14px;
    color: #666;
    margin-top: 5px;
`;