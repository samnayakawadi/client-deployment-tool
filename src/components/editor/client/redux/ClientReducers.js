export const clientReducers = {
    showEditor: (prevState) => {
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
    updateUIOptionsTab: (prevState, actions) => {
        console.log("prevState.data.ui.options.isStandalone", prevState.data.ui.options.isStandalone)
        if (actions.payload.name === "isStandalone") {
            prevState.data.ui.options.isStandalone = !prevState.data.ui.options.isStandalone
        }
        else if (actions.payload.name === "isNewContentDelivery") {
            prevState.data.ui.options.isNewContentDelivery = !prevState.data.ui.options.isNewContentDelivery
        }
        else {
            prevState.data.ui.options[actions.payload.name] = actions.payload.value
        }
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