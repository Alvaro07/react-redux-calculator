/** handleDecimal Function 
 *  Añadimos un decimal al numbero que vemos en pantalla
 */

export const decimalClick = (newState, action) => {
    
    if ( newState.operatorA === ''){
        return newState;
    }

    if ( newState.operatorB === ''){
        newState.operatorA = newState.operatorA.concat('.');

    } else {
        newState.operatorB = newState.operatorB.concat('.');
    }

    return newState;
    
}

export default decimalClick;


