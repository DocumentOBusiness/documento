const Timeline = () => {
    return (
        <div className="h-full w-11/12 mx-auto bg-purple-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 border border-gray-100">
            <div className="w-11/12 mx-auto block py-2 pl-3 pr-4 text-gray-300 items-center justify-center">
                Project Timeline
            </div>
            <ol className="w-11/12 mx-auto my-4 relative border-l border-gray-200">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                        Mid of January 2023
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900">
                        Storage on IPFS
                    </h3>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                        Start of Feburary 2023
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900">
                        Sharing of documents
                    </h3>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                        Mid of Feburary 2023
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900">
                        Verification by private agencies
                    </h3>
                </li>
            </ol>
        </div>
    );
};

export default Timeline;
