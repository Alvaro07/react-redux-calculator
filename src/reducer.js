// es mejor manejar las condicionales con el newstate o con el state??
// Condicional en el result??

export const handleNumber = (e, number) => ({ type: "NUMBERCLICK", number: number })
export const handleOperator = (e, symbol) => ({ type: "OPERATORCLICK", operator: symbol })
export const handleResult = (e, symbol) => ({ type: "RESULTCLICK", operator: symbol })

export const reducer = (state, action) => {

    let newState = { ...state }
    console.log(newState)

    switch (action.type) {


        /** handleNumber Function 
         *  Función que gestiona el evento de pulsar sobre cualqueir botón numérico
         */

        case "NUMBERCLICK":

            if ( newState.calcStore.calcStoreoperator === '=' ) {
                newState.calcStore.operatorA = parseFloat(action.number).toString();
                
            } else if ( !newState.calcStore.operator) {
                newState.calcStore.operatorA = parseFloat(newState.calcStore.operatorA + action.number).toString();
            
            } else {
                newState.calcStore.operatorB = parseFloat(newState.calcStore.operatorB + action.number).toString();
            }

            return newState;

        

        
        /** handleOperator Function 
         *  Función que gestiona el evento de pulsar sobre cualquier botón que requiere operación
         */

        case "OPERATORCLICK":

            if ( newState.calcStore.operatorA === ''){
                return newState;
            } 
            
            
            if (!newState.calcStore.operator || newState.calcStore.operator === '='){ 
                newState.calcStore.operator = action.operator;

            // } else if ( newState.calcStore.operator === '=') { 
            //     newState.calcStore.operator = action.operator;
                
            } else {

                let plusResult;
                let opA = parseFloat(newState.calcStore.operatorA);
                let opB = newState.calcStore.operatorB !== '' ? parseFloat(newState.calcStore.operatorB) : 0;

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

            return newState;



        /** handleResult Function 
         *  Función que gestiona el evento de pulsar sobre el boton de resultado final
         */

        case "RESULTCLICK":

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
                    
            newState.calcStore.operatorA = finalResult.toString();
            newState.calcStore.operatorB = '';
            newState.calcStore.operator = action.operator;
            
            return newState;

        default:
            return state;

    }

    
}