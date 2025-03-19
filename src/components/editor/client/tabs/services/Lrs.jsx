/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ServicesHandlers from './ServicesHandlers.js'
import { clientActions } from '../../redux/ClientSlice.js'

const Lrs = () => {
    const dispatch = useDispatch()

    const clientEditor = useSelector(prevState => prevState.clientEditor)
    const lrs = clientEditor.data.services.lrs

    const servicesHandlers = ServicesHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "services", selectedTab: "lrs" }))
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    LRS Service
                </div>
                <div className="basis-9/12">
                    <input type="text" name="service" value={lrs?.service} onChange={servicesHandlers.updateLrsTab} placeholder="E.g. http://10.244.2.210" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    LRS Homepage
                </div>
                <div className="basis-9/12">
                    <input type="text" name="homepage" value={lrs?.homepage} onChange={servicesHandlers.updateLrsTab} placeholder="E.g. http://10.244.3.175" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Token
                </div>
                <div className="basis-9/12">
                    <input type="text" name="token" value={lrs?.token} onChange={servicesHandlers.updateLrsTab} placeholder="E.g. Basic ZGVmZWU4MjgxZTQ0YWY1NTczMDZjM2FkZGU1NzE2MDBmMzY0ZTMyMDo5MDllNDBjYmJkZDQwMGVmNjUxZjFkMDBmZmM5YmZlNGQyNzQ1ZTQ0" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

        </div>
    )
}

export default Lrs