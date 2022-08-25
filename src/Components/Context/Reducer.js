

export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions
                    .filter(transaction => transaction.id !== action.payload)
        
            }
        //   case 'EDIT_TRANSACTION':
        //     return {
        //         ...state,
        //         transactions: state.transactions
        //             .map(transaction => transaction.id ===  action.payload)
        //     }
        case "EDIT_TRANSACTION":
            const updatedTransac = action.payload;
            const updatedTransaction = state.transactions.map((transaction) => {
                if (transaction.id === updatedTransac.id) {
                    return updatedTransac;
                }
                return transaction;
            });

            return {
                ...state,
                transactions: updatedTransaction,
            };
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }

}