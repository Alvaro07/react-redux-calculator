
/** handleOperator Function 
 *  Función que gestiona el evento de pulsar sobre cualquier botón que requiere operación
 */

export const operatorClick = (newState, action) => {
    
    if ( newState.operatorA === ''){
        return newState;
    } 
    

    if (!newState.operator){ 
        
        const newHistory = [...newState.history, ...[parseFloat(newState.operatorA).toString(), action.operator]];
        
        newState.operator = action.operator;
        newState.history = newHistory;

    } else if ( newState.operator === '=') { 
        
        const newHistory = [...newState.history, action.operator];
        
        newState.operator = action.operator;
        newState.history = newHistory;
        
    } else {

        let plusResult;
        let opA = parseFloat(newState.operatorA);
        let opB = newState.operatorB !== '' ? parseFloat(newState.operatorB) : 0;

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

        const newHistory = newState.operatorB !== '' ?
                [...newState.history, ...[parseFloat(newState.operatorB).toString(), action.operator]] :
                newState.history
        
        newState.calcStorenewState.operatorA = plusResult.toString();
        newState.operatorB = '';
        newState.operator = action.operator;
        newState.history = newHistory;
        
    }

    return newState;
}

export default operatorClick;


