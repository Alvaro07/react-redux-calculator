/** handleDecimal Function 
 *  Añadimos un decimal al numbero que vemos en pantalla
 */

export const decimalClick = (newState, action) => {
    
    if ( newState.calcStore.operatorA === ''){
        return newState;
    }

    if ( newState.calcStore.operatorB === ''){
        newState.calcStore.operatorA = newState.calcStore.operatorA.concat('.');

    } else {
        newState.calcStore.operatorB = newState.calcStore.operatorB.concat('.');
    }

    return newState;
    
}

export default decimalClick;


