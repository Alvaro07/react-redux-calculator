
/** handleResult Function 
 *  Función que gestiona el evento de pulsar sobre el boton de resultado final
 */

export const resultClick = (newState, action) => {
    
    if ( newState.calcStore.operatorB === ''){
        return newState;
    }

    let finalResult;
    const opA = parseFloat(newState.calcStore.operatorA);
    const opB = parseFloat(newState.calcStore.operatorB);

    switch (newState.calcStore.operator) {
        case '+':
            finalResult = Math.round((opA + opB) * 100) / 100;
            break;
    
        case '-':
            finalResult = Math.round((opA - opB) * 100) / 100;
            break;
    
        case '*':
            finalResult = Math.round((opA * opB) * 100) / 100;
            break;
    
        case '/':
            finalResult = Math.round((opA / opB) * 100) / 100;
                    break;
                
        default:
            break
    }
            
    const newHistory = [...newState.calcStore.history, ...[parseFloat(newState.calcStore.operatorB).toString(), action.operator, finalResult.toString()]];

    newState.calcStore.operatorA = finalResult.toString();
    newState.calcStore.operatorB = '';
    newState.calcStore.operator = action.operator;
    newState.calcStore.history = newHistory;

    return newState;
    
}

export default resultClick;


