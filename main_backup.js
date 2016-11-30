import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isGreetingShown: true};
		this.toggleGreeting = this.toggleGreeting.bind(this);
	}

	toggleGreeting() {
		this.setState({isGreetingShown: !this.state.isGreetingShown});
	}

	alertMeNow() {
		alert('Hello World!');
	}

	render() {
		var msg = 'Hide Greeting';

		if(!this.state.isGreetingShown) {
			msg = 'Show Greeting';
		}
      return (
         <div>
         	<button onClick={this.toggleGreeting}>{msg}</button>
         	{(() => {
         		if(this.state.isGreetingShown) {
         			return (<div>{this.props.greeting}</div>);
         		}
         	})()}
         	<button onClick={this.alertMeNow}>Alert Me</button>
         	<br/>
         </div>
      );
   }
}

ReactDOM.render(<App greeting="Hello World!!!"/>, document.getElementById('app'))