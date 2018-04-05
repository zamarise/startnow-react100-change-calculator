import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: Number,
      amountReceived: Number,
      changeDue: Number
    };

    this.handleAmountDue = this.handleAmountDue.bind(this);
    this.handleAmountReceived = this.handleAmountReceived.bind(this);
    this.handleAllChange = this.handleAllChange.bind(this);
  }

  handleAmountDue(event) {
    this.setState({ amountDue: event.target.value });
  }

  handleAmountReceived(event) {
    this.setState({ amountReceived: event.target.value });
  }

  handleAllChange() {
    const calculateChange = (this.state.amountReceived - this.state.amountDue).toFixed(2);
    this.setState({
      changeDue: calculateChange,
      twenties: Number.parseFloat(Math.floor(calculateChange / 20).toFixed(2)),
      tens: Number.parseFloat(Math.floor((calculateChange / 10) % 2).toFixed(2)),
      fives: Number.parseFloat(Math.floor((calculateChange / 5) % 2).toFixed(2)),
      ones: Number.parseFloat(Math.floor(calculateChange % 5).toFixed(2)),
      quarters: Number.parseFloat(Math.floor(((calculateChange * 100) % 100) / 25).toFixed(2)),
      dimes: Number.parseFloat(Math.floor((((calculateChange * 100) % 100) % 25) / 10).toFixed(2)),
      nickels: Number.parseFloat(Math.floor(((((calculateChange * 100) % 100) % 25) % 10) / 5).toFixed(2)),
      pennies: Number.parseFloat(Math.floor((calculateChange * 100) % 5 + 0.01).toFixed(2))
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <h1 className='text-center'>Change Calculator</h1>
        <p className='lead bg-light text-gray-dark text-center'>A change calculator made in React</p>

        <hr />

        <div className='row'>
          <div className='col-sm-4'>
            <div className='panel panel-default'>
              <div className='panel-heading panel-title'>Enter Information</div>
              <p>
                <div className='panel-body'>
                  How much is due?
                  <input
                    name='amountDue'
                    className='form-control'
                    value={ this.state.amountDue }
                    onChange={ this.handleAmountDue }
                    placeholder='Enter amount due'
                    type='number'
                  />
                </div>
                <div className='panel-body'>
                  How much was received?
                  <input
                    name='amountReceived'
                    className='form-control'
                    value={ this.state.amountReceived }
                    onChange={ this.handleAmountReceived }
                    placeholder='Enter amount received'
                    type='number'
                  />
                </div>
              </p>

              <div className='panel-footer'>
                <button className='btn btn-default btn-block' type='button' onClick={ this.handleAllChange }>
                  Calculate!
                </button>
              </div>
            </div>
          </div>

          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <div className='alert alert-success text-center lead' role='alert'>
                  The total change due is ${this.state.changeDue}
                </div>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead'>{this.state.twenties}</p> twenties
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead'>{this.state.tens}</p> tens
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead'>{this.state.fives}</p>fives
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead'>{this.state.ones}</p> ones
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead'>{this.state.quarters}</p> quarters
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead'>{this.state.dimes}</p> dimes
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead'>{this.state.nickels}</p> nickles
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='well well-sm text-center'>
                      <p className='lead'>{this.state.pennies}</p> pennies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
