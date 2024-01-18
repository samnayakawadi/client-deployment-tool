import { useSelector } from "react-redux"

const General = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const clientName = clientEditorState.data.clientName

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Client Name
                </div>
                <div className="basis-9/12">
                    <input type="text" name="clientName" value={clientName} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default General