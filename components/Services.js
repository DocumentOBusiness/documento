const Services = () => {
    return (
        <div className="h-full w-11/12 mx-auto bg-purple-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 border border-gray-100">
            <div className="w-11/12 mx-auto block py-2 pl-3 pr-4 items-center justify-center">
                Services Provided
            </div>
            <ol className="w-11/12 mx-auto my-4">
                <li className="mb-10 ml-4">
                    <div className="mb-1 text-sm font-normal leading-none text-gray-800">
                        Storage
                    </div>
                    <div className="mb-4 text-base font-normal text-gray-800">
                        Store the documents on IPFS
                    </div>
                    <p className="mb-4 text-base font-normal text-gray-800">
                        Store your documents and certificates on IPFS in a form
                        of PDF or Word file.
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="mb-1 text-sm font-normal leading-none text-gray-800">
                        Share
                    </div>
                    <div className="mb-4 text-base font-normal text-gray-800">
                        Sharing via a private link
                    </div>
                    <p className="text-base font-normal text-gray-800">
                        All of the documents and certificates will be shareable
                        with the permission of owner.
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="mb-1 text-sm font-normal leading-none text-gray-800">
                        Verify
                    </div>
                    <div className="mb-4 text-base font-normal text-gray-800">
                        Verification via the reciever or a trusted organization
                    </div>
                    <p className="text-base font-normal text-gray-800">
                        All of the documents can be verified by the reciever or
                        a trusted agency for further use.
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default Services;
