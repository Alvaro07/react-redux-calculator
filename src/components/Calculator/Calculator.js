import React from 'react';
import Result from '../Result/Result';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { handleNumber, handleOperator, handleResult, handleReset, handleDecimal } from '../../reducer/reducer';


/**
 * Calculator component
 */

class Calculator extends React.Component {

  render() {

		const history = this.props.state.history;

    return (

			<div className="calculator">
				
				<Result  />

				<div className="calculator__history">
					<ul className={`calculator__history__list ${!history.length > 0 ? 'is-hide' : ''}`} >
						{history != null ? 
							history.map((value, i) => <li key={i}>{value}</li>) : null}
					</ul>
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
				<Button onClick={(e) => this.props.handleDecimal(e)}>.</Button>
				<Button onClick={(e) => this.props.handleOperator(e,'/')} extraClass='calculator__btn--operator'>/</Button>

				<Button onClick={(e) => this.props.handleReset(e)} extraClass='calculator__btn--reset'>C</Button>
				<Button onClick={(e) => this.props.handleResult(e,'=')} extraClass='calculator__btn--equal'>=</Button>
			</div>
			
		);
	}
}

/**
 * Redux connection
 */


const mapStateToProps = state => ({ state });
const mapDispatchToProps = (dispatch) => ({
  handleNumber: (e, number) => dispatch( handleNumber(e, number) ),
  handleOperator: (e, symbol) => dispatch( handleOperator(e, symbol) ),
  handleResult: (e, symbol) => dispatch( handleResult(e, symbol) ),
	handleReset: (e, symbol) => dispatch( handleReset(e) ),
	handleDecimal: (e, symbol) => dispatch( handleDecimal(e) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)
