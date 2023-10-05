

export const RenderElemStatistic = (props) =>{
    return (
        <ul>
            <li>Good:{props.good}</li>
            <li>Neutral:{props.neutral}</li>
            <li>Bad:{props.bad}</li>
            <li>Total:{props.countTotalFeedback}</li>
            <li>Positive feedback:{props.countPositiveFeedbackPercentage ? props.countPositiveFeedbackPercentage : '0'}%</li>
        </ul>
    )
}