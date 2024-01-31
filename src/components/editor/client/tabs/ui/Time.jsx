import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import UIHandlers from "./UIHandlers"

const Time = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const time = clientEditorState.data.ui.time

    const dispatch = useDispatch()

    const uiHandlers = UIHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "ui", selectedTab: "time" }))
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Waiting Time (ms)
                </div>
                <div className="basis-9/12">
                    <input type="text" name="waitingTime" value={time.waitingTime} onChange={uiHandlers.updateTimeTab} placeholder="E.g. 1000" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Auto Close (ms)
                </div>
                <div className="basis-9/12">
                    <input type="text" name="autoClose" value={time.autoClose} onChange={uiHandlers.updateTimeTab} placeholder="E.g. 2000" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Time