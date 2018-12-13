
/** handleOperator Function 
 *  Función que gestiona el evento de pulsar sobre cualquier botón que requiere operación
 */

export const operatorClick = (newState, action) => {
    
    if ( newState.calcStore.operatorA === ''){
        return newState;
    } 
    

    if (!newState.calcStore.operator){ 
        
        const newHistory = [...newState.calcStore.history, ...[parseFloat(newState.calcStore.operatorA).toString(), action.operator]];
        
        newState.calcStore.operator = action.operator;
        newState.calcStore.history = newHistory;

    } else if ( newState.calcStore.operator === '=') { 
        
        const newHistory = [...newState.calcStore.history, action.operator];
        
        newState.calcStore.operator = action.operator;
        newState.calcStore.history = newHistory;
        
    } else {

        let plusResult;
        let opA = parseFloat(newState.calcStore.operatorA);
        let opB = newState.calcStore.operatorB !== '' ? parseFloat(newState.calcStore.operatorB) : 0;

        switch (action.operator) {
            case '+': 
                plusResult = opA + opB;
                break;

            case '-':
                plusResult = opA - opB;
                break;

            case '*':
                plusResult = opA * opB;
                break;

            case '/':
                plusResult = opA / opB;
                break;
            
            default:
                break
        }

        const newHistory = newState.calcStore.operatorB !== '' ?
                [...newState.calcStore.history, ...[parseFloat(newState.calcStore.operatorB).toString(), action.operator]] :
                newState.calcStore.history
        
        newState.calcStorenewState.calcStore.operatorA = plusResult.toString();
        newState.calcStore.operatorB = '';
        newState.calcStore.operator = action.operator;
        newState.calcStore.history = newHistory;
        
    }

    return newState;
}

export default operatorClick;


