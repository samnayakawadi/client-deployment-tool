import { useSelector } from "react-redux"

const Services = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const services = clientEditorState.data.services

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment Question Authoring
                </div>
                <div className="basis-1/12">
                    9093
                </div>
                <div className="basis-8/12">
                    <input type="text" name="questionAuthoring" value={services.questionAuthoring} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment Quiz Authoring
                </div>
                <div className="basis-1/12">
                    9094
                </div>
                <div className="basis-8/12">
                    <input type="text" name="quizAuthoring" value={services.quizAuthoring} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment Delivery
                </div>
                <div className="basis-1/12">
                    9095
                </div>
                <div className="basis-8/12">
                    <input type="text" name="delivery" value={services.delivery} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Assessment Admin
                </div>
                <div className="basis-1/12">
                    9096
                </div>
                <div className="basis-8/12">
                    <input type="text" name="admin" value={services.admin} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Course Organizer
                </div>
                <div className="basis-1/12">
                    9082
                </div>
                <div className="basis-8/12">
                    <input type="text" name="courseOrganizer" value={services.courseOrganizer} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>


            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Course Catalog
                </div>
                <div className="basis-1/12">
                    9085
                </div>
                <div className="basis-8/12">
                    <input type="text" name="courseCatalog" value={services.courseCatalog} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>


            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Learning Analytics
                </div>
                <div className="basis-1/12">
                    9090
                </div>
                <div className="basis-8/12">
                    <input type="text" name="learningAnalytics" value={services.learningAnalytics} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Services