const General = () => {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div className="basis-3/12 text-center">
                General
            </div>
            <div className="basis-9/12">
                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full" />
            </div>
        </div>
    )
}

export default General