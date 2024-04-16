import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import UIHandlers from "./UIHandlers"

const Services = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const services = clientEditorState.data.ui.services

    const dispatch = useDispatch()

    const uiHandlers = UIHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "ui", selectedTab: "services" }))
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
                    <input type="text" name="questionAuthoring" value={services.questionAuthoring} onChange={uiHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8093 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
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
                    <input type="text" name="quizAuthoring" value={services.quizAuthoring} onChange={uiHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8094 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
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
                    <input type="text" name="delivery" value={services.delivery} onChange={uiHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8095 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
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
                    <input type="text" name="admin" value={services.admin} onChange={uiHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8096 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <hr className="border-1 border-gray-700" />

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Course Organizer
                </div>
                <div className="basis-1/12">
                    8082
                </div>
                <div className="basis-8/12">
                    <input type="text" name="courseOrganizer" value={services.courseOrganizer} onChange={uiHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8082 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    User Management
                </div>
                <div className="basis-1/12">
                    8084
                </div>
                <div className="basis-8/12">
                    <input type="text" name="userManagement" value={services.userManagement} onChange={uiHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8080 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
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
                    <input type="text" name="courseCatalog" value={services.courseCatalog} onChange={uiHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8085 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>


            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Learning Analytics
                </div>
                <div className="basis-1/12">
                    8090
                </div>
                <div className="basis-8/12">
                    <input type="text" name="learningAnalytics" value={services.learningAnalytics} onChange={uiHandlers.updateServicesTab} placeholder="E.g. http://10.244.2.206:8080 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Services