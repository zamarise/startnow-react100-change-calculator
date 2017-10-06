import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberDue: 'Enter amount due'
    };

    this.amountDue = this.amountDue.bind(this);
  }

  amountDue(event) {
    this.setState({ numberDue: event.target.value });
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
              <div className='panel-body'>
                <p>How much is due?</p>
                <input
                  className='form-control'
                  onChange={ this.amountDue }
                  value={ Number(this.state.numberDue) }
                  id='amount-due'
                  placeholder='Enter amount due'
                  type='number'
                />
              </div>
              <div className='panel-body'>
                <p>How much was received?</p>
                <input
                  className='form-control'
                  id='amount-received'
                  placeholder='Enter amount received'
                  type='number'
                />
              </div>
              <div className='panel-footer'>
                <button className='btn btn-default btn-block' type='button'>
                  Calculate!
                </button>
              </div>
            </div>
          </div>

          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <div className='alert alert-success text-center lead' role='alert'>
                  The total change due is: $
                </div>

                <div className='col-sm-3'>
                  <div className='well well-sm text-center lead'>Twenties</div>
                  <div className='well well-sm text-center lead'>Quarters</div>
                </div>

                <div className='col-sm-3'>
                  <div className='well well-sm text-center lead'>Tens</div>
                  <div className='well well-sm text-center lead'>Dimes</div>
                </div>

                <div className='col-sm-3'>
                  <div className='well well-sm text-center lead'>Fives</div>
                  <div className='well well-sm text-center lead'>Nickels</div>
                </div>

                <div className='col-sm-3'>
                  <div className='well well-sm text-center lead'>Ones</div>
                  <div className='well well-sm text-center lead'>Pennies</div>
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
