import { BlockButtons } from "./feedbackOptions.styled"

export const RenderFeedbackOpn = ({title,onClickGood,onClickNeutral,onClickBad}) =>{
    return <div>
        <h2>{title}</h2>
        <BlockButtons>
        <button 
        onClick={() => onClickGood()}>
            Good
        </button>

        <button onClick={() => 
            onClickNeutral()}>
                Neutral
        </button>

        <button onClick={() => 
            onClickBad()}>
                Bad
        </button>
        </BlockButtons>
    </div>
}