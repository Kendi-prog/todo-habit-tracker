import React from "react";

import { 
    SummaryContainer,
    CategoryBox,
    Count,
    CategoryLabel

  } from "./task-category-summary.styles";

const TaskCategorySummary = ({ tasks }) => {
    const personalCount = tasks.filter(task => task.category === 'Personal').length;
    const officialCount = tasks.filter(task => task.category === 'Official').length;

    return (
        <SummaryContainer>
            <CategoryBox>
                <Count>{personalCount}</Count>
                <CategoryLabel>Personal</CategoryLabel>
            </CategoryBox>
            <CategoryBox>
                <Count>{officialCount}</Count>
                <CategoryLabel>Official</CategoryLabel>
            </CategoryBox>
        </SummaryContainer>
    );
}

export default TaskCategorySummary;