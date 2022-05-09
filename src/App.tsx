import * as React from "react";
import * as ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

class OldApp extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button>Foobar</button>
          <Button>BarFoo</Button>
        </header>
      </div>
    );
  }
}

interface GreetingProps {
  name: string,
}

interface GreetingState {
  count: number,
}

class Greeting extends React.Component<GreetingProps, GreetingState> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let message: string = "";
    for (let num = 0; num <= this.state.count; num++) {
	message += "Hello there " + this.props.name + "\n";
    }
    return (
	<div>
		<button onClick={this.handleClick}>greet me!</button>
		<h1>{this.state.count}</h1>
		<pre>{message}</pre>
	</div>
    );
  }

  handleClick() {
    this.setState(state => ({ count: state.count + 1}));
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
