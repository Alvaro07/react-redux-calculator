// es mejor manejar las condicionales con el newstate o con el state??
// Condicional en el result??

export const handleNumber = (e, number) => ({ type: "NUMBERCLICK", number: number })
export const handleOperator = (e, symbol) => ({ type: "OPERATORCLICK", operator: symbol })
export const handleResult = (e, symbol) => ({ type: "RESULTCLICK", operator: symbol })
export const handleReset = (e) => ({ type: "RESETCLICK" })
export const handleDecimal = (e) => ({ type: "DECIMALCLICK" })

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
                newState.calcStore.history = [];
                
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
            

            if (!newState.calcStore.operator){ 
                
                const newHistory = [...newState.calcStore.history, ...[parseFloat(newState.calcStore.operatorA).toString(), action.operator]];
                
                newState.calcStore.operator = action.operator;
                newState.calcStore.history = newHistory;

            } else if ( newState.calcStore.operator === '=') { 
                
                const newHistory = [...newState.calcStore.history, action.operator];
                
                newState.calcStore.operator = action.operator;
                newState.calcStore.history = newHistory;
                
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

                const newHistory = newState.calcStore.operatorB !== '' ?
						[...newState.calcStore.history, ...[parseFloat(newState.calcStore.operatorB).toString(), action.operator]] :
						newState.calcStore.history
                
                newState.calcStore.operatorA = plusResult.toString();
                newState.calcStore.operatorB = '';
                newState.calcStore.operator = action.operator;
                newState.calcStore.history = newHistory;
                
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
                    
            const newHistory = [...newState.calcStore.history, ...[parseFloat(newState.calcStore.operatorB).toString(), action.operator, finalResult.toString()]];


            newState.calcStore.operatorA = finalResult.toString();
            newState.calcStore.operatorB = '';
            newState.calcStore.operator = action.operator;
            newState.calcStore.history = newHistory;

            return newState;

        

        /** handleReset Function 
         *  Reseteamos a 0 la calculadora
         */

        case "RESETCLICK":

            newState.calcStore.operatorA = '';
            newState.calcStore.operatorB = '';
            newState.calcStore.operator = null;
            newState.calcStore.history = [];

            return newState;



        /** handleDecimal Function 
         *  Añadimos un decimal al numbero que vemos en pantalla
         */

        case "DECIMALCLICK":

            if ( newState.calcStore.operatorA === ''){
                return newState;
            }

            if ( newState.calcStore.operatorB === ''){
                newState.calcStore.operatorA = newState.calcStore.operatorA.concat('.');

            } else {
                newState.calcStore.operatorB = newState.calcStore.operatorB.concat('.');
            }

            return newState;

            
        default:
            return state;

    }

    
}