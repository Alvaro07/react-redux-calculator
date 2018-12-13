import React from 'react';
import { connect } from "react-redux";

/**
 * Result component
 */

const Result = (props) => {

    let result = '0';

    if ( props.operatorB !== '') {
        result = parseFloat(props.operatorB).toString();
			
    } else if ( props.operatorA !== ''){
        result = parseFloat(props.operatorA).toString();
			
    } else {
	    result = parseFloat(result).toString();
    }


    return ( 
        <div className="calculator__result">{result}</div>
    )
}

/**
 * Redux connection
 */

const mapStateToProps = state => ({ operatorA: state.operatorA, operatorB: state.operatorB });
 
export default connect(
  mapStateToProps,
  null
)(Result)
