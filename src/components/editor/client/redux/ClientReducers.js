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
    updateGeneralTab: (prevState, actions) => {
        prevState.data.clientName = actions.payload
    },
    updateServicesTab: (prevState, actions) => {
        prevState.data.ui.services[actions.payload.name] = actions.payload.value
    },
    updateHomeTab: (prevState, actions) => {
        prevState.data.ui.home[actions.payload.name] = actions.payload.value
    },
    updateTimeTab: (prevState, actions) => {
        prevState.data.ui.time[actions.payload.name] = actions.payload.value
    },
    updateKeycloakTab: (prevState, actions) => {
        prevState.data.ui.keycloak[actions.payload.name] = actions.payload.value
    },
    updateMenuTab: (prevState, actions) => {
        prevState.menu = actions.payload
    }
}