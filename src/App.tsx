import * as React from "react";
import * as ReactDOM from "react-dom";
//import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import * as TextCollection from "./TextCollection";

interface GreetingProps {
  name: string,
}

interface GreetingState {
  count: number,
  renderAsList: boolean,
}

class Greeting extends React.Component<GreetingProps, GreetingState> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = { count: 0, renderAsList: true };
    this.handleGreetMeClick = this.handleGreetMeClick.bind(this);
    this.handleToggleFormatClick = this.handleToggleFormatClick.bind(this);
  }
  render() {
    let greetings: string[] = [];
    for (let num = 0; num <= this.state.count; num++) {
	greetings.push("Hello there " + this.props.name);
    }

    return (
	<div>
		<button onClick={this.handleToggleFormatClick}>toggle format</button>
		<button onClick={this.handleGreetMeClick}>greet me!</button>
		{this.state.renderAsList
		  ? <TextCollection.AsList verbatims={greetings}/>
		  : <TextCollection.AsPlainText verbatims={greetings}/>}
		<h1>{this.state.count}</h1>
	</div>
    );
  }

  handleGreetMeClick() {
    console.log(`before button click state is: ${this.state.count}`);
    this.setState(state => ({ count: state.count + 1}));
    console.log(`after button click state is: ${this.state.count}`);
  }

  handleToggleFormatClick() {
    this.setState(state => ({renderAsList: !state.renderAsList}));
  }
}

const Element = () => <h1>hello world</h1>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting name="obiwan" />
        <Element></Element>
        <button>foo</button>
        <Button>foo</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
