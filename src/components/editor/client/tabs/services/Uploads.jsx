import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import { useEffect } from "react"
import ServicesHandlers from "./ServicesHandlers"

const Uploads = () => {

    const dispatch = useDispatch()

    const clientEditor = useSelector(prevState => prevState.clientEditor)
    const uploads = clientEditor.data.services.uploads

    const servicesHandlers = ServicesHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "services", selectedTab: "uploads" }))
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment File Upload
                </div>
                <div className="basis-9/12">
                    <input type="text" name="assessmentFileUpload" value={uploads.assessmentFileUpload} onChange={servicesHandlers.updateUploadsTab} placeholder="E.g. D\:\\Uploaded Files by Question Authoring\\" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment QTI Upload
                </div>
                <div className="basis-9/12">
                    <input type="text" name="assessmentQTIUpload" value={uploads.assessmentQTIUpload} onChange={servicesHandlers.updateUploadsTab} placeholder="E.g. C\:\\Users\\samnayakawadi\\Downloads\\QTI Conversion Service\\QuizDelivery\\" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

        </div>
    )
}

export default Uploads