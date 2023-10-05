

export const RenderFeedbackOpn = ({title,onClickGood,onClickNeutral,onClickBad}) =>{
    return <div>
        <h2>{title}</h2>
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
    </div>
}