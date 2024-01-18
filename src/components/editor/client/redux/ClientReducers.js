export const clientReducers = {
    updateSelectedTab: (prevState, actions) => {
        prevState.selectedTab = actions.payload
    },
    updateData: (prevState, actions) => {
        prevState.data = actions.payload
    }
}