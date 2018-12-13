/** handleReset Function 
 *  Reseteamos a 0 la calculadora
 */

export const resetClick = (newState, action) => {
    
    return { ...newState, operatorA: '', operatorB: '', operator: null, history: [] };
    
}

export default resetClick;


