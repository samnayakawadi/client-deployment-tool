export const clientReducers = {
    showEditor: (prevState, actions) => {
        prevState.showEditor = true
    },
    updateSelectedTab: (prevState, actions) => {
        prevState.selectedTab = actions.payload
    },
    updateData: (prevState, actions) => {
        prevState.data = actions.payload
    },
    updateGeneralTab: (prevState, actions) => {
        prevState.data.clientName = actions.payload
    },
    updateServicesTab: (prevState, actions) => {
        prevState.data.services[actions.payload.name] = actions.payload.value
    },
    updateUITab: (prevState, actions) => {
        prevState.data.ui[actions.payload.name] = actions.payload.value
    },
    updateTimeTab: (prevState, actions) => {
        prevState.data.time[actions.payload.name] = actions.payload.value
    },
    updateKeycloakTab: (prevState, actions) => {
        prevState.data.keycloak[actions.payload.name] = actions.payload.value
    },
}