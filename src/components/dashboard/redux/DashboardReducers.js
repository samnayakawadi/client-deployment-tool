export const dashboardReducers = {
    toggleAddNewClient: (prevState) => {
        prevState.modals.addNewClient.isChecked = !prevState.modals.addNewClient.isChecked
        prevState.modals.addNewClient.clientName = ""
    },
    updateClientName: (prevState, actions) => {
        prevState.modals.addNewClient.clientName = actions.payload
    },
    storeAllClients: (prevState, actions) => {
        prevState.getClients.clientsList = actions.payload
    },
    pushClientToAllClients: (prevState, actions) => {
        prevState.getClients.clientsList.push(actions.payload)
    },
    deleteClientFromAllClients: (prevState, actions) => {
        // actions.payload = item index
        prevState.getClients.clientsList.splice(actions.payload, 1)
    },
    toggleDeleteClient: (prevState, actions) => {
        prevState.modals.deleteClient.clientId = actions.payload.clientId
        prevState.modals.deleteClient.isChecked = !prevState.modals.deleteClient.isChecked
        prevState.modals.deleteClient.clientIndex = actions.payload.clientIndex
    },
    toggleViewClient: (prevState, actions) => {
        prevState.modals.viewClient.isChecked = actions.payload
    },
    viewClientJSON: (prevState, actions) => {
        prevState.modals.viewClient.json = actions.payload
    },
    viewClientProperties: (prevState, actions) => {
        prevState.modals.viewClient.properties = actions.payload
    },
    toggleDownloadClient: (prevState, actions) => {
        prevState.modals.downloadClient.isChecked = !prevState.modals.downloadClient.isChecked
        prevState.modals.downloadClient.clientId = actions.payload
    },
    selectDownloadTab: (prevState, actions) => {
        prevState.modals.downloadClient.selectedTab = actions.payload
    },
    isLoadingClients: (prevState, actions) => {
        prevState.getClients.isLoading = actions.payload
    },
    updateViewClientTab: (prevState, actions) => {
        prevState.modals.viewClient.tab = actions.payload
    },
    updateCurrentBranch: (prevState, actions) => {
        prevState.scripts.currentBranch = actions.payload
    },
    toggleTroubleshootModal: (prevState) => {
        prevState.modals.troubleshootScripts.isChecked = !prevState.modals.troubleshootScripts.isChecked
    }
}