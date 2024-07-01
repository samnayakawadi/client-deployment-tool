import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import UIHandlers from "./UIHandlers"

const Branding = () => {

    const dispatch = useDispatch()

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const branding = clientEditorState.data.ui.branding

    const uiHandlers = UIHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "ui", selectedTab: "branding" }))
    }, [])

    return (
        <div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                    <div className="basis-3/12 text-center">
                        Logo URL
                    </div>
                    <div className="basis-9/12">
                        <input type="text" name="logo" value={branding.logo} onChange={uiHandlers.updateBrandingHandler} placeholder="http://meghs1.hyderabad.cdac.in/static/media/logo.0f8ed84b.png" className="input input-bordered input-secondary w-full focus:outline-none" />
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="basis-3/12 text-center">
                        Logo Width
                    </div>
                    <div className="basis-9/12">
                        <input type="text" name="logoWidth" value={branding.logoWidth} onChange={uiHandlers.updateBrandingHandler} placeholder="1000" className="input input-bordered input-secondary w-full focus:outline-none" />
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="basis-3/12 text-center">
                        Logo Height
                    </div>
                    <div className="basis-9/12">
                        <input type="text" name="logoHeight" value={branding.logoHeight} onChange={uiHandlers.updateBrandingHandler} placeholder="500" className="input input-bordered input-secondary w-full focus:outline-none" />
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="basis-3/12 text-center">
                        Footer
                    </div>
                    <div className="basis-9/12">
                        <input type="text" name="footer" value={branding.footer} onChange={uiHandlers.updateBrandingHandler} placeholder="CDAC Hyderabad | 2024" className="input input-bordered input-secondary w-full focus:outline-none" />
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="basis-3/12 text-center">
                        Facebook
                    </div>
                    <div className="basis-9/12">
                        <input type="text" name="facebook" value={branding.facebook} onChange={uiHandlers.updateBrandingHandler} placeholder="https://facebook.com/samnayakawadi" className="input input-bordered input-secondary w-full focus:outline-none" />
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="basis-3/12 text-center">
                        Twitter
                    </div>
                    <div className="basis-9/12">
                        <input type="text" name="twitter" value={branding.twitter} onChange={uiHandlers.updateBrandingHandler} placeholder="https://x.com/samnayakawadi" className="input input-bordered input-secondary w-full focus:outline-none" />
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="basis-3/12 text-center">
                        YouTube
                    </div>
                    <div className="basis-9/12">
                        <input type="text" name="youtube" value={branding.youtube} onChange={uiHandlers.updateBrandingHandler} placeholder="https://youtube.com/@samnayakawadi" className="input input-bordered input-secondary w-full focus:outline-none" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Branding