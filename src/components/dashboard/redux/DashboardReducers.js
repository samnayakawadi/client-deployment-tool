export const dashboardReducers = {
    toggleAddNewClient: (prevState, actions) => {
        prevState.modals.addNewClient.isChecked = !prevState.modals.addNewClient.isChecked
    }
}