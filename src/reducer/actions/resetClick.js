/** handleReset Function 
 *  Reseteamos a 0 la calculadora
 */

export const resetClick = (newState, action) => {
    
    newState.operatorA = '';
    newState.operatorB = '';
    newState.operator = null;
    newState.history = [];

    return newState;
    
}

export default resetClick;


