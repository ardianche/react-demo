export const addProduct = () => dispatch => {
    dispatch({
        type:'MY_FIRST_ACTION',
        payload:'TEST',
    });
}
export const getAllProducts = product => ({
        type:'GET_ALL_PRODUCTS',
        product,
});
export const displayAllProducts = () => dispatch => {
    dispatch({
        type:'DISPLAY_PRODUCTS',
        payload:[],
    })
}

export const addUser = activeuser => ({
    type:'ADD_USER',
    activeuser,
})
