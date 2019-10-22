
const user = (state = [],action) => {
    console.log("ACTION USER: ",action);
    switch(action.type){
        case "ADD_USER":
            return [
                action.activeuser
            ]
        default:
            return state;
    }
}
export default user;