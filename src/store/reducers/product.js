
const products = (state = [],action) => {
    console.log("ACTION : ",action.product);
    switch(action.type){
        case "MY_FIRST_ACTION":
            return [
                ...state,
                {
                    payload:action.payload
                }
            ]
        case "GET_ALL_PRODUCTS":
            console.log("ALL", action);
            return [
                    action.product
            ][0]
        default :
            return state;

    }
}
export default products;