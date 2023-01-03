const Intro = () => {
    return (
        <div className="h-full w-11/12 mx-auto bg-purple-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 border border-gray-100">
            <div className="flex flex-row w-11/12 mx-auto my-2">
                <div className="flex flex-col my-auto">
                    <p className="text-9xl font-medium">DocumentO</p>
                    <p className="my-4 ml-4">
                        Store, Share and Verify your documents & certificates.
                    </p>
                </div>
                <div className="flex h-1/2 w-1/2">
                    <img src="qr.png" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
