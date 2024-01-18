const Keycloak = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Realm
                </div>
                <div className="basis-9/12">
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Resource
                </div>
                <div className="basis-9/12">
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Server URL
                </div>
                <div className="basis-9/12">
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Keycloak