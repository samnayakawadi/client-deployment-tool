import { useSelector } from "react-redux"

const Time = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const time = clientEditorState.data.time

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Waiting Time (ms)
                </div>
                <div className="basis-9/12">
                    <input type="text" name="waitingTime" value={time.waitingTime} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Auto Close (ms)
                </div>
                <div className="basis-9/12">
                    <input type="text" name="autoClose" value={time.autoClose} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Time