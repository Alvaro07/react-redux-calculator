/** handleReset Function 
 *  Reseteamos a 0 la calculadora
 */

export const resetClick = (newState, action) => {
    
    newState.calcStore.operatorA = '';
    newState.calcStore.operatorB = '';
    newState.calcStore.operator = null;
    newState.calcStore.history = [];

    return newState;
    
}

export default resetClick;


