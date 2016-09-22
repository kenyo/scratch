var React = require('react');
var ReactDOM = require('react-dom');
var CalcButton = require('./CalcButton.jsx');

var operatorObj = {};
operatorObj['+'] = (x,y) => x + y;
operatorObj['-'] = (x,y) => x - y;
operatorObj['*'] = (x,y) => x * y;
operatorObj['/'] = (x,y) => x / y;

var initialState = {
  val1: '',
  val2: '',
  operator: null,
  result: 0,
};

var HelloWorld = React.createClass({

  getInitialState() {
    return initialState;
  },

  onNumberButtonClick (x) {
    if (this.state.operator == null) {
      var val1 = parseInt(this.state.val1.toString().concat(x));
      this.setState({ val1 });
    } else {
      var val2 = parseInt(this.state.val2.toString().concat(x));
      this.setState({ val2});
    }
  },

  onCalculateClick (operator) {
    var result = operatorObj[operator](this.state.val1, this.state.val2);
    this.setState({ result })
  },

  onOperatorButtonClick (x) {
    this.setState({
      operator: x,
    })
  },

  clearState () {
    this.setState(initialState)
  },

  render: function() {
    var numberButtons = [0,1,2,3,4,5,6,7,8,9].map(x =>
      <CalcButton
        title={x}
        key={x}
        onClick={() => this.onNumberButtonClick(x)} />
    );

    var operatorButtons = ['+', '-', '*', '/'].map(x =>
      <CalcButton
        title={x}
        key={x}
        onClick={() => this.onOperatorButtonClick(x)} />
    );

    return (
      <div>
        <h1>Calculator App!</h1>

        <p>{this.state.val1}</p>
        <p>{this.state.operator}</p>
        <p>{this.state.val2}</p>

        {numberButtons}
        <div>
          {operatorButtons}
        </div>
        <div>
        <CalcButton
          onClick={() => this.onCalculateClick(this.state.operator)}
          title={'Calculate'}/>

        </div>
        <div>
          <CalcButton
            title={'Clear'}
            onClick={this.clearState}/>
        </div>
        <h2>Result: {this.state.result}</h2>
      </div>
    )
  }
})

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
