import { RenderElemStatistic } from "components/StatisticListElem/StatisticElem"


export const RenderStatistic = (props) =>{
    const { title, good, neutral, bad, countFeedback,countPositiveFeedbackPercentage} = props
    return (
        <div>
            <h2>{title}</h2>
            <RenderElemStatistic  
            good={good} 
            neutral={neutral} 
            bad={bad} 
            countTotalFeedback={countFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />
        </div>
    )
}