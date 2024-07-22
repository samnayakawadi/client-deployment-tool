/* eslint-disable react/prop-types */
const ScriptCard = ({ scriptName, logoClass, downloadLink }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-3">
                <div className={`text-2xl text-blue-500 ${logoClass}`} />
                <span className="text-lg font-semibold text-gray-800">{scriptName}</span>
            </div>
            <a
                href={downloadLink}
                className="bg-blue-500 text-white px-3 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600 transition-colors"
                download
            >
                {/* <i className="fa-solid fa-circle-down" /> */}
                <span className="text-sm">Download</span>
            </a>
        </div>
    );
};

export default ScriptCard;
