// es mejor manejar las condicionales con el newstate o con el state??

export const handleNumber = (e, number) => ({ type: "NUMBERCLICK", number: number })
export const handleOperator = (e, symbol) => ({ type: "OPERATORCLICK", operator: symbol })

export const reducer = (state, action) => {

    let newState = { ...state }

    switch (action.type) {


        /** handleNumber Function 
         *  Función que gestiona el evento de pulsar sobre cualqueir botón numérico
         */

        case "NUMBERCLICK":

            if ( newState.operator === '=' ) {
                newState.calcStore.operatorA = parseFloat(action.number).toString();
                
            } else if ( newState.operator !== undefined) {
                newState.calcStore.operatorA = parseFloat(newState.calcStore.operatorA + action.number).toString();
            
            } else {
                newState.calcStore.operatorB = parseFloat(newState.calcStore.operatorB + action.number).toString();
            }

            return newState;

        
        
        /** handleOperator Function 
         *  Función que gestiona el evento de pulsar sobre cualquier botón que requiere operación
         */

        case "OPERATORCLICK":
            

            if (newState.operator === null){ 
                newState.calcStore.operator = action.operator;

            } else {

                let plusResult;
                let opA = newState.calcStore.operatorA;
                let opB = newState.calcStore.operatorB !== '' ? newState.calcStore.operatorB : 0;

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
                

                newState.calcStore.operatorA = plusResult.toString();
                newState.calcStore.operatorB = '';
                newState.calcStore.operator = action.operator;
                
            }

            console.log(newState);
            return newState;
        

        default:
            return state;

    }
}