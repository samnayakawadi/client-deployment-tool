import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import { useEffect } from "react"
import ServicesHandlers from "./ServicesHandlers"

const Uploads = () => {

    const dispatch = useDispatch()

    const clientEditor = useSelector(prevState => prevState.clientEditor)
    const services = clientEditor.data.services.services

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
                    <input type="text" name="assessmentFileUpload" value={services.questionAuthoring} onChange={servicesHandlers.updateUploadsTab} placeholder="E.g. http://10.244.2.206:8093 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment QTI Upload
                </div>
                <div className="basis-9/12">
                    <input type="text" name="assessmentQTIUpload" value={services.quizAuthoring} onChange={servicesHandlers.updateUploadsTab} placeholder="E.g. http://10.244.2.206:8094 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

        </div>
    )
}

export default Uploads