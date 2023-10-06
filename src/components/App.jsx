import { Component } from "react";
import { RenderFeedbackOpn } from "./FeedbackOptions/FeedbackOptions";
import { RenderStatistic } from "./Statisctic/statictic";
import { Notification } from "./Notification/Notification";

export class App extends Component {
state ={
  good:0,
  neutral:0,
  bad:0
}
countTotalFeedback= ({good,neutral,bad}) =>good + neutral + bad;

countPositiveFeedbackPercentage= ({good},countTotalFeedback) => Math.round((good * 100)/countTotalFeedback);

clickButtonGood = () => {
  this.setState({
    good: this.state.good + 1
  })
}

clickButtonNeutral = () => {
  this.setState({
    neutral: this.state.neutral + 1
  })
}
clickButtonBad = () => {
  this.setState({
    bad: this.state.bad + 1
  })
}
  render() {
    const {good,neutral,bad} = this.state
    return(
      <main>
    <section>
      <RenderFeedbackOpn
       title='Please leave feedback'
        onClickGood={this.clickButtonGood}
        onClickNeutral={this.clickButtonNeutral}
        onClickBad={this.clickButtonBad}
        />
    </section>
    <section>
    <RenderStatistic  
      title='Statistic' 
      good={good} 
      neutral={neutral} 
      bad={bad}
      countFeedback={this.countTotalFeedback(this.state)}
      countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(this.state, this.countTotalFeedback(this.state))}
      />
      <Notification statusStatistic={this.state} message="There is no feedback"/>
    </section>
    </main>
    )
  }
};
