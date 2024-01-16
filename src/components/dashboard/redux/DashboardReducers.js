export const dashboardReducers = {
    toggleAddNewClient: (prevState, actions) => {
        console.log("toggleAddNewClient")
        prevState.modals.addNewClient.isChecked = !prevState.modals.addNewClient.isChecked
        prevState.modals.addNewClient.clientName = ""
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
    toggleViewClient: (prevState, actions) => {
        prevState.modals.viewClient.isChecked = !prevState.modals.viewClient.isChecked
    },
    viewClientJSON: (prevState, actions) => {
        prevState.modals.viewClient.json = actions.payload
    },
    toggleDownloadClient: (prevState, actions) => {
        prevState.modals.downloadClient.isChecked = !prevState.modals.downloadClient.isChecked
        prevState.modals.downloadClient.clientId = actions.payload
    },
    selectDownloadTab: (prevState, actions) => {
        prevState.modals.downloadClient.selectedTab = actions.payload
    }
}