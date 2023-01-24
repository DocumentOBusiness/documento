const Contact = () => {
    return (
        <div className="h-full w-11/12 my-1 mx-auto bg-purple-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 border border-gray-100">
            <div className="flex flex-col w-11/12 mx-auto">
                <div className="my-2">Our Socials</div>
                <div className="flex flex-row">
                    <div className="mx-auto my-5">
                        <a href="https://twitter.com/documneto">Twitter</a>
                    </div>
                    <div className="mx-auto my-5">
                        <a href="https://github.com/DocumentOBusiness">
                            GitHub
                        </a>
                    </div>
                    <div className="mx-auto my-5">
                        <a href="https://discord.gg/Rbk5fjBNkv">Discord</a>
                    </div>
                    <div className="mx-auto my-5">
                        <a href="mailto:documneto.business@gmail.com">Mail</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
