import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { 
    AnalyticsContainer, 
    ProfileSection,
    NotificationBell, 
    Profile, 
    UserAvatar, 
    UserInfo, 
    UserName, 
    UserSettings, 
    TaskCompletionText, 
    ProgressContainer,
    PosterContainer,
    PosterImage, 
    PosterText
} from './analytics.styles';
import webinar from '../../../assets/webinar.jpeg';


const Analytics = ({ tasks }) => {
    const completedTasks = tasks.filter(task => task.completed);
    const totalTasks = tasks.length;
    const completionPercentage = Math.round((completedTasks.length / totalTasks) * 100);

    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = ((100 - completionPercentage) / 100) * circumference;

    return(
        <AnalyticsContainer>
            <ProfileSection>
                <NotificationBell />
                <Profile>
                    <UserInfo>
                        <UserName>Leila Kendi</UserName>
                        <UserSettings>My Settings</UserSettings>
                    </UserInfo>
                    <UserAvatar />
                </Profile> 
            </ProfileSection>
            <p>Goal</p>
            <ProgressContainer>
                <CircularProgressbar 
                    value={completionPercentage}
                    text={`${completionPercentage}%`}
                    styles={buildStyles({
                        textSize: "15px",
                        textAlign: "center",
                        textAnchor: "middle",
                        pathColor: `#7600bc`,
                        textColor: "#333",
                        trailColor: "#E7DDF0",
                        strokeLinecap: "round",
                    })} 
                />

                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    style={{ position: "absolute", top: 0, left: 0 }}
                >
                    <circle
                        cx={50 + 50 * Math.cos((2 * Math.PI * completionPercentage) / 100 - Math.PI / 2)}
                        cy={50 + 50 * Math.sin((2 * Math.PI * completionPercentage) / 100 - Math.PI / 2)}
                        r="4"
                        fill="#7600bc"
                    />
                </svg>
            </ProgressContainer>
            < TaskCompletionText>Task Completion</TaskCompletionText>
            <PosterContainer>
                <PosterText>Welcome to our Productivity Webinar</PosterText>
                <PosterImage src={webinar} alt="Productivity Poster" />
            </PosterContainer>
        </AnalyticsContainer>
    )
}

export default Analytics;