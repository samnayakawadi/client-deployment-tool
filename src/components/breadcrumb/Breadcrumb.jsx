import { Link } from "react-router-dom"

const Breadcrumb = () => {
    return (
        <div className="text-sm breadcrumbs border-2 border-gray-600 p-3">
            <ul>
                <li>
                    <Link to="/">
                        Dashboard
                    </Link>
                </li>
                {/* <li>
                    <span>
                        Documents
                    </span>
                </li> */}
            </ul>
        </div>
    )
}

export default Breadcrumb