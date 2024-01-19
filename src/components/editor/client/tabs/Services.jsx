import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../redux/ClientSlice"
import ClientHandlers from "../ClientHandlers"

const Services = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const services = clientEditorState.data.services

    const dispatch = useDispatch()
    const clientHandlers = ClientHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab("services"))
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment Question Authoring
                </div>
                <div className="basis-1/12">
                    8093
                </div>
                <div className="basis-8/12">
                    <input type="text" name="questionAuthoring" value={services.questionAuthoring} onChange={clientHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8093 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment Quiz Authoring
                </div>
                <div className="basis-1/12">
                    8094
                </div>
                <div className="basis-8/12">
                    <input type="text" name="quizAuthoring" value={services.quizAuthoring} onChange={clientHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8094 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment Delivery
                </div>
                <div className="basis-1/12">
                    8095
                </div>
                <div className="basis-8/12">
                    <input type="text" name="delivery" value={services.delivery} onChange={clientHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8095 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment Admin
                </div>
                <div className="basis-1/12">
                    8096
                </div>
                <div className="basis-8/12">
                    <input type="text" name="admin" value={services.admin} onChange={clientHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8096 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Course Organizer
                </div>
                <div className="basis-1/12">
                    8082
                </div>
                <div className="basis-8/12">
                    <input type="text" name="courseOrganizer" value={services.courseOrganizer} onChange={clientHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8082 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>


            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Course Catalog
                </div>
                <div className="basis-1/12">
                    8085
                </div>
                <div className="basis-8/12">
                    <input type="text" name="courseCatalog" value={services.courseCatalog} onChange={clientHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8085 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>


            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Learning Analytics
                </div>
                <div className="basis-1/12">
                    8080
                </div>
                <div className="basis-8/12">
                    <input type="text" name="learningAnalytics" value={services.learningAnalytics} onChange={clientHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8080 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Services