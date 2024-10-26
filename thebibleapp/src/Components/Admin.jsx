import ContactForm from "./ContactForm";

function Admin() {
    return (
        <div id="admin" className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="text-center lg:text-left">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    Contact Us
                                </h2>
                                <p className="mt-4 text-xl text-gray-600">
                                    We&apos;re dedicated to supporting your
                                    success.
                                </p>
                            </div>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Want to be more involved in the growth of our
                                community? Joining our admin team is your
                                opportunity to contribute, share, and lead by
                                helping us manage and curate valuable content.
                                As an admin, you’ll play a key role in shaping
                                the future of The Bible Channel and its mission
                                to inspire others.
                            </p>
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Admin;
