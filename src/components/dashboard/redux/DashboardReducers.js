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
    },
    deleteClientFromAllClients: (prevState, actions) => {
        // actions.payload = item index
        prevState.clientsList.splice(actions.payload, 1)
    },
    toggleDeleteClient: (prevState, actions) => {
        prevState.modals.deleteClient.clientId = actions.payload.clientId
        prevState.modals.deleteClient.isChecked = !prevState.modals.deleteClient.isChecked
        prevState.modals.deleteClient.clientIndex = actions.payload.clientIndex
    },
}