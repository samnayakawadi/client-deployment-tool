import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import ClientHandlers from "../../ClientHandlers"

const Home = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const ui = clientEditorState.data.ui

    const dispatch = useDispatch()

    const clientHandlers = ClientHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab("ui"))
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Main Page
                </div>
                <div className="basis-9/12">
                    <input value={ui.homePage} name="homePage" onChange={clientHandlers.updateUITab} type="text" placeholder="E.g. http://10.244.2.206:3000 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Logo
                </div>
                <div className="basis-9/12">
                    <input value={ui.logo} name="logo" type="text" onChange={clientHandlers.updateUITab} placeholder="E.g. http://10.244.2.206:3000 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Home