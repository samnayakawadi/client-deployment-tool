import { useSelector } from "react-redux"
import { Slide, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import 'react-json-pretty/themes/monikai.css';

const GlobalComponent = () => {

    const autoClose = useSelector(prevState => prevState.global.options.autoClose)

    return (
        <div>
            <ToastContainer position="bottom-right"
                autoClose={autoClose} newestOnTop closeButton={false} transition={Slide} />
        </div>
    )
}

export default GlobalComponent