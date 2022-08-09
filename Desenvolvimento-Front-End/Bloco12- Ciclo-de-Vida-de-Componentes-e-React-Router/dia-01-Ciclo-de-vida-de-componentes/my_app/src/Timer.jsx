import React from 'react';

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            seconds: 0,
            phases: ['🫁 Inspire...', '😑 Segure...', '😮‍💨 Expire...'],
            phaseIndex: 0
        }
    };

    componentDidMount() {
        const ONE_SECOND = 1000;
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1,
            }))
        }, ONE_SECOND)
    };

    componentDidUpdate(prevProps, prevState) {
        const FIVE_SECONDS = 5;
        const arrayLength = prevState.phases.length;
        let newPhaseIndex = prevState.phaseIndex + 1;

        if (prevState.seconds === FIVE_SECONDS) {
            this.setState({ 
                seconds: 0,
                phaseIndex: newPhaseIndex === arrayLength ? 0 : newPhaseIndex
             })
        };
    };

    componentWillUnmount() {
        clearInterval(this.intervalId)
    };

  render() {
    const { phases, phaseIndex } = this.state
    return (
      <section className="timer">
        <h1>{phases[phaseIndex]}</h1>
        <h2>{this.state.seconds}</h2>
      </section>
    );
  }
}

export default Timer;