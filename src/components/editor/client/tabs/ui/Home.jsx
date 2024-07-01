import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import UIHandlers from "./UIHandlers"

const Home = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const home = clientEditorState.data.ui.home

    const dispatch = useDispatch()

    const uiHandlers = UIHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "ui", selectedTab: "home" }))
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Main Page
                </div>
                <div className="basis-9/12">
                    <input value={home.homePage} name="homePage" onChange={uiHandlers.updateHomeTab} type="text" placeholder="E.g. http://10.244.2.206:3000 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Logo
                </div>
                <div className="basis-9/12">
                    <input value={home.logo} name="logo" type="text" onChange={uiHandlers.updateHomeTab} placeholder="E.g. http://10.244.2.206:3000 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    SEB Arcane URL
                </div>
                <div className="basis-9/12">
                    <input value={home.seb} name="seb" type="text" onChange={uiHandlers.updateHomeTab} placeholder="E.g. http://10.244.2.206:3000 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Home