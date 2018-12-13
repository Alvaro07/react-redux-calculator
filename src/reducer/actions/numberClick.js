
/** numberClick Function 
 *  Función que gestiona el evento de pulsar sobre cualqueir botón numérico
 */

export const numberClick = (newState, action) => {
    
    if ( newState.operator === '=' ) {
        newState.operatorA = parseFloat(action.number).toString();
        newState.history = [];
        
    } else if ( !newState.operator) {
        newState.operatorA = parseFloat(newState.operatorA + action.number).toString();
    
    } else {
        newState.operatorB = parseFloat(newState.operatorB + action.number).toString();
    }

    return newState
    
}

export default numberClick;


