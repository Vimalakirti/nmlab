export const selectMenuItem = term => {
    return ({
        type: 'MENU_ITEM_SELECTED',
        payload: term
    })
}