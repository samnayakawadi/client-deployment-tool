export const dashboardReducers = {
    toggleAddNewClient: (prevState, actions) => {
        prevState.modals.addNewClient.isChecked = !prevState.modals.addNewClient.isChecked
    },
    updateClientName: (prevState, actions) => {
        prevState.modals.addNewClient.clientName = actions.payload
    },
    storeAllClients: (prevState, actions) => {
        prevState.clientsList = actions.payload
    },
    pushClientToAllClients: (prevState, actions) => {
        prevState.clientsList.push(actions.payload)
    }
}