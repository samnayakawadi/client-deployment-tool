// eslint-disable-next-line react/prop-types
const Navbar = ({ currentLocation }) => {
    return (
        <>
            <div className="navbar bg-navbg text-white sticky z-20 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 hover:text-redColor">
                            {/* <li><a href="#home" className={`hover:text-redColor ${currentLocation === "home" ? "text-redColor" : "text-white"} hover:bg-navbg`}>Home</a></li>
                            <li><a href="#about" className={`hover:text-redColor ${currentLocation === "about" ? "text-redColor" : "text-white"} hover:bg-navbg`}>About</a></li>
                            <li><a href="#service" className={`hover:text-redColor ${currentLocation === "service" ? "text-redColor" : "text-white"} hover:bg-navbg`}>Service</a></li>
                            <li><a href="#project" className={`hover:text-redColor ${currentLocation === "project" ? "text-redColor" : "text-white"} hover:bg-navbg`}>Projects</a></li>
                            <li><a href="#contact" className={`hover:text-redColor ${currentLocation === "contact" ? "text-redColor" : "text-white"} hover:bg-navbg`}>Contact</a></li> */}
                            {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                    <a href="#" className="btn btn-ghost normal-case text-xl hover:bg-navbg max-lg:hidden">Deploy Master</a>
                    <a href="#" className="btn btn-ghost normal-case text-xl hover:bg-navbg lg:hidden">Deploy Master</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a href="https://docs.google.com/document/d/1FrKSuWAcDpc-xF2ftVJPIp-S0BCyVQw-64_OwRTBgcg/edit?usp=sharing" target="_blank" rel="noreferrer"  className={`hover:text-redColor ${currentLocation === "home" ? "text-redColor" : "text-white"} hover:bg-navbg`}>Documentation</a></li>
                        <li><a href="https://meghsikshak.in/" target="_blank" rel="noreferrer"  className={`hover:text-redColor ${currentLocation === "home" ? "text-redColor" : "text-white"} hover:bg-navbg`}>Support</a></li>
                        {/* <li><a href="#about" className={`hover:text-redColor ${currentLocation === "about" ? "text-redColor" : "text-white"} hover:bg-navbg`}>About</a></li>
                        <li><a href="#service" className={`hover:text-redColor ${currentLocation === "service" ? "text-redColor" : "text-white"} hover:bg-navbg`}>Service</a></li>
                        <li><a href="#project" className={`hover:text-redColor ${currentLocation === "project" ? "text-redColor" : "text-white"} hover:bg-navbg`}>Projects</a></li>
                        <li><a href="#contact" className={`hover:text-redColor ${currentLocation === "contact" ? "text-redColor" : "text-white"} hover:bg-navbg`}>Contact</a></li> */}
                        {/* <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://drive.google.com/drive/folders/1NZGwJ0QeR80B7E6hw9VoKlafLGoGk9XX?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-sm bg-redColor border-redColor text-white hover:bg-redColor hover:border-redColor hover:text-white tracking-widest"><span className="block max-lg:hidden">Download Builds</span><span className="hidden max-lg:block">Builds</span></a>
                </div>
                {/* <div className="navbar-end max-lg:block">
                    <a href="http://gg.gg/samnayakawadi-resume" target="_blank" rel="noreferrer" className="btn btn-sm bg-redColor border-redColor text-white hover:bg-redColor hover:border-redColor hover:text-white tracking-widest">J</a>
                </div> */}
            </div>
        </>
    )
}

export default Navbar