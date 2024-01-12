import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import youtube from "./images/youtube.png"

const Footer = () => {

    return (
        <div className="flex flex-row max-lg:flex-wrap justify-center items-center p-3 bg-footerbg max-lg:gap-10 mt-2 lg:sticky lg:z-20 lg:bottom-0">
            <div className="basis-4/12 max-lg:basis-full text-center text-gray-400">
                Powered By
                {" "}
                <a href="https://meghsikshak.in/" target="_blank" rel="noreferrer" className="hover:text-redColor">MeghSikshak v3.0</a>
            </div>
            <div className="basis-4/12 max-lg:basis-full">
                <div className="flex flex-row justify-center items-center gap-2">
                    <a href="https://www.facebook.com/CDACINDIA/" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-redColor hover:border-redColor p-0">
                            <img className="w-4 text-gray-400" src={facebook} alt="facebook" /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                    <a href="https://www.youtube.com/results?search_query=cdac" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-redColor hover:border-redColor p-0">
                            <img className="w-6 text-gray-400" src={youtube} alt="youtube" /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                    <a href="https://twitter.com/cdacindia" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-redColor hover:border-redColor p-0">
                            <img className="w-4 text-gray-400" src={twitter} alt="twitter" /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                </div>
            </div>
            <div className="basis-4/12 text-gray-400 max-lg:basis-full text-center">
                © 2024 | CDAC Hyderabad
                {/* <a href="https://github.com/samnayakawadi/portfolio" target="_blank" rel="noreferrer" className="hover:text-redColor">Checkout Github Repository</a> */}
            </div>
        </div>
    )
}

export default Footer