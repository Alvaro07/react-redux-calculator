import { numberClick } from './actions/numberClick';
import { operatorClick } from './actions/operatorClick';
import { resultClick } from './actions/resultClick';
import { resetClick } from './actions/resetClick';
import { decimalClick } from './actions/decimalClick';

export const handleNumber = (e, number) => ({ type: "NUMBERCLICK", number: number })
export const handleOperator = (e, symbol) => ({ type: "OPERATORCLICK", operator: symbol })
export const handleResult = (e, symbol) => ({ type: "RESULTCLICK", operator: symbol })
export const handleReset = (e) => ({ type: "RESETCLICK" })
export const handleDecimal = (e) => ({ type: "DECIMALCLICK" })

export const reducer = (state, action) => {

    let newState = { ...state }

    switch (action.type) {


        /** handleNumber Function */

        case "NUMBERCLICK":
            return numberClick(newState, action);    


        /** handleOperator Function */

        case "OPERATORCLICK":
            return operatorClick(newState, action);   


        /** handleResult Function */

        case "RESULTCLICK":
            return resultClick(newState, action);   


        /** handleReset Function */

        case "RESETCLICK":
            return resetClick(newState, action); 


        /** handleDecimal Function */

        case "DECIMALCLICK":
            return decimalClick(newState, action); 

            
        default:
            return state;

    }

    
}