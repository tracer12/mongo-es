import { FaRegSave } from "react-icons/fa";

const SaveButton = () => {

    return (
        <>
            <button className="border border-solid border-green-600 rounded-md bg-green-400 w-20">
                <div className="">
                    Save
                    {/* <div className="FaRegSave">
                        <FaRegSave />
                    </div> */}
                </div>
            </button>
        </>
    );
}

export default SaveButton;