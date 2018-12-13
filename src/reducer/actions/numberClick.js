
/** numberClick Function 
 *  Función que gestiona el evento de pulsar sobre cualqueir botón numérico
 */

export const numberClick = (newState, action) => {
    
    if ( newState.calcStore.calcStoreoperator === '=' ) {
        newState.calcStore.operatorA = parseFloat(action.number).toString();
        newState.calcStore.history = [];
        
    } else if ( !newState.calcStore.operator) {
        newState.calcStore.operatorA = parseFloat(newState.calcStore.operatorA + action.number).toString();
    
    } else {
        newState.calcStore.operatorB = parseFloat(newState.calcStore.operatorB + action.number).toString();
    }

    return newState
}

export default numberClick;


