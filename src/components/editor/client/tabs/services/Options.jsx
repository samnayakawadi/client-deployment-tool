import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ServicesHandlers from "./ServicesHandlers.js"
import { clientActions } from "../../redux/ClientSlice.js"

const Options = () => {
    const dispatch = useDispatch()

    const clientEditor = useSelector(prevState => prevState.clientEditor)
    const options = clientEditor.data.services.options

    const servicesHandlers = ServicesHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "services", selectedTab: "options" }))
    }, [])

    return (
        <div className="flex flex-row gap-2 items-center">
            <div className="basis-3/12 text-center">
                Add Final/Pretest to Course Structure
            </div>
            <div className="basis-9/12">
                {/* <input type="text" name="autoClose" value={options.autoClose} onChange={uiHandlers.updateOptionsTab} placeholder="E.g. 2000" className="input input-bordered input-secondary w-full focus:outline-none" /> */}
                <input type="checkbox" name="courseStructureFinalPretestCall" checked={options.courseStructureFinalPretestCall} onClick={servicesHandlers.updateOptionsTab} className="toggle toggle-success" />
            </div>
        </div>
    )
}

export default Options