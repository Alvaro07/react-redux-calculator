import React from 'react';

import Result from '../Result/Result';
import { connect } from "react-redux";
import { handleNumber, handleOperator } from "../../reducer";


// -----------------
// Calculator's buttons

const Button = (props) => {
	return 	<button className={`calculator__btn ${props.extraClass}`} onClick={props.onClick}>{props.children}</button>
}

Button.defaultProps = {
	extraClass: ''
};



// -----------------
// Calculator component

class Calculator extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     operatorA: '',
  //     operatorB: '',
  //     operator: null,
	// 		history: []
  //   }
  // }
	
	
	//  ----------------
	//	Numeric function 
	
  // handleNumber = (e, number) => {}
  // handleOperator = (e, operator) => {}
	// handleDecimal = (e) => {}
  // handleResult = (e, operator) => {}
	// handleOnChange = (e) => {
	// 	 // Only for keyUp fix
	// }
	// handleKeyUp = (e) => {}
  // handleReset = (e, operator) => {}	

  render() {
		
		// let result = '0';
		// console.log(this.props.state);

    // if ( this.state.operatorB !== '') {
    //   result = parseFloat(this.state.operatorB).toString();
			
    // } else if ( this.state.operatorA !== ''){
    //   result = parseFloat(this.state.operatorA).toString();
			
    // } else {
		// 	result = parseFloat(result).toString();
			
    // }

    return (

			<div className="calculator">
				
				<Result  />

				<div className="calculator__history">
					{/* <ul className={`calculator__history__list ${!this.state.history.length > 0 ? 'is-hide' : ''}`} >
						{this.state.history != null ? 
							this.state.history.map((value, i) => <li key={i}>{value}</li>) : null}
					</ul> */}
				</div>

				<Button onClick={(e) => this.props.handleNumber(e, 1)}>1</Button>
				<Button onClick={(e) => this.props.handleNumber(e, 2)}>2</Button>
				<Button onClick={(e) => this.props.handleNumber(e, 3)}>3</Button>
				<Button onClick={(e) => this.props.handleOperator(e, '+')} extraClass='calculator__btn--operator'>+</Button>

				<Button onClick={(e) => this.props.handleNumber(e, 4)}>4</Button>
				<Button onClick={(e) => this.props.handleNumber(e, 5)}>5</Button>
				<Button onClick={(e) => this.props.handleNumber(e, 6)}>6</Button>
				<Button onClick={(e) => this.props.handleOperator(e, '-')} extraClass='calculator__btn--operator'>-</Button>

				<Button onClick={(e) => this.props.handleNumber(e, 7)}>7</Button>
				<Button onClick={(e) => this.props.handleNumber(e, 8)}>8</Button>
				<Button onClick={(e) => this.props.handleNumber(e, 9)}>9</Button>
				<Button onClick={(e) => this.props.handleOperator(e,'*')} extraClass='calculator__btn--operator'>X</Button>

				<Button onClick={(e) => this.props.handleNumber(e, 0)} extraClass='calculator__btn--cero'>0</Button>
				<Button onClick={(e) => this.handleDecimal(e)}>.</Button>
				<Button onClick={(e) => this.props.handleOperator(e,'/')} extraClass='calculator__btn--operator'>/</Button>

				<Button onClick={(e) => this.handleReset(e)} extraClass='calculator__btn--reset'>C</Button>
				<Button onClick={(e) => this.handleResult(e,'=')} extraClass='calculator__btn--equal'>=</Button>
			</div>
			
		);
	}
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = (dispatch) => ({
  handleNumber: (e, number) => dispatch( handleNumber(e, number) ),
  handleOperator: (e, symbol) => dispatch( handleOperator(e, symbol) )
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)
