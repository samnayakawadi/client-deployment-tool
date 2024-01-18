export const clientReducers = {
    updateSelectedTab: (prevState, actions) => {
        prevState.selectedTab = actions.payload
    }
}