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
            tab: "json", // json or properties
            clientId: null,
            isChecked: false,
            json: null,
            properties: null
        },
        downloadClient: {
            clientId: null,
            isChecked: false,
            selectedTab: "linux"
        },
        troubleshootScripts: {
            isChecked: false
        }
    },
    getClients: {
        isLoading: true,
        clientsList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}] // Add more objects for more skeletons
    },
    scripts: {
        branches: ["main", "dev_samnayakawadi"],
        currentBranch: "main"
    }
}