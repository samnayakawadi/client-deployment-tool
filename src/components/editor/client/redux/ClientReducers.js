export const clientReducers = {
    showEditor: (prevState, actions) => {
        prevState.showEditor = true
    },
    updateSelectedTab: (prevState, actions) => {
        prevState.selectedTabs[actions.payload.menu] = actions.payload.selectedTab
    },
    updateData: (prevState, actions) => {
        prevState.data = actions.payload
    },
    updateUIGeneralTab: (prevState, actions) => {
        prevState.data.clientName = actions.payload
    },
    updateUIServicesTab: (prevState, actions) => {
        prevState.data.ui.services[actions.payload.name] = actions.payload.value
    },
    updateUIHomeTab: (prevState, actions) => {
        prevState.data.ui.home[actions.payload.name] = actions.payload.value
    },
    updateUITimeTab: (prevState, actions) => {
        prevState.data.ui.time[actions.payload.name] = actions.payload.value
    },
    updateUIKeycloakTab: (prevState, actions) => {
        prevState.data.ui.keycloak[actions.payload.name] = actions.payload.value
    },
    updateMenuTab: (prevState, actions) => {
        prevState.menu = actions.payload
    },
    updateServicesServicesTab: (prevState, actions) => {
        prevState.data.services.services[actions.payload.name] = actions.payload.value
    },
    updateServicesUploadsTab: (prevState, actions) => {
        prevState.data.services.uploads[actions.payload.name] = actions.payload.value
    },
    updateServicesKeycloakTab: (prevState, actions) => {
        prevState.data.services.keycloak[actions.payload.name] = actions.payload.value
    },
    updateDatabaseMongoTab: (prevState, actions) => {
        prevState.data.database.mongo[actions.payload.name] = actions.payload.value
    }
}