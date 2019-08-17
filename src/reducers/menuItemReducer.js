export default (state = null, action) => {
    switch (action.type) {
        case 'MENU_ITEM_SELECTED':
            return action.payload
        default:
            return state
    }
}