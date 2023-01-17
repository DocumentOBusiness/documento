const Intro = () => {
    return (
        <div className="h-full w-11/12 mx-auto bg-purple-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 border border-gray-100">
            <div className="flex flex-row w-11/12 mx-auto my-2">
                <div className="flex flex-col my-auto">
                    <p className="text-9xl font-medium">DocumentO</p>
                    <p className="my-4 ml-4">
                        Store, Share and Verify your documents & certificates.
                    </p>
                    <a
                        href="/store"
                        className="w-1/4 my-4 ml-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Get Started
                    </a>
                </div>
                <div className="flex h-1/2 w-1/2">
                    <img src="qr.png" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
