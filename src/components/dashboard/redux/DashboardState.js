export const dashboardState = {
    modals: {
        addNewClient: {
            clientName: undefined,
            isChecked: false
        },
        deleteClient: {
            clientId: null,
            clientIndex: null,
            isChecked: false
        },
        viewClient: {
            clientId: null,
            isChecked: false,
            json: null
        },
        downloadClient: {
            clientId: null,
            isChecked: false,
            selectedTab: "linux"
        }
    },
    clientsList: []
}