/** handleResult Function 
 *  Función que gestiona el evento de pulsar sobre el boton de resultado final
 */

export const resultClick = (newState, action) => {
    
    if ( newState.operatorB === ''){
        return newState;
    }

    let finalResult;
    const opA = parseFloat(newState.operatorA);
    const opB = parseFloat(newState.operatorB);

    switch (newState.operator) {
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
            
    const newHistory = [...newState.history, ...[parseFloat(newState.operatorB).toString(), action.operator, finalResult.toString()]];

    return { ...newState, operatorA: finalResult.toString(), operatorB: '', operator: action.operator, history: newHistory };

    
}

export default resultClick;


