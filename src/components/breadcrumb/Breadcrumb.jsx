import { Link } from "react-router-dom"

const Breadcrumb = () => {
    return (
        <div className="text-sm breadcrumbs p-3">
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