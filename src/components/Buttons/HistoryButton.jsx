import { FaHistory } from "react-icons/fa";

const HistoryButton = () => {

    return (
        <>
            <button className="border border-solid border-green-600 rounded-md bg-green-400 w-20">
                <div className="">
                    History
                    {/* <div className="FaHistory">
                        <FaHistory />
                    </div> */}
                </div>
            </button>
        </>
    );
}

export default HistoryButton;