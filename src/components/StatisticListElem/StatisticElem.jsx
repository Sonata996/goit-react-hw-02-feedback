import { ListStatistic } from "./StatisticElem.styled"

export const RenderElemStatistic = (props) =>{
    return (
        <ListStatistic statusStatistic={props}>
            <li>Good:{props.good}</li>
            <li>Neutral:{props.neutral}</li>
            <li>Bad:{props.bad}</li>
            <li>Total:{props.countTotalFeedback}</li>
            <li>Positive feedback:{props.countPositiveFeedbackPercentage ? props.countPositiveFeedbackPercentage : '0'}%</li>
        </ListStatistic>
    )
}