import ContactForm from "./ContactForm";

function Admin() {
    return (
        <div id="admin" className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
                        Admin Applications
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Want to be more involved in the growth of our community?
                        Joining our admin team is your opportunity to
                        contribute, share, and lead by helping us manage and
                        curate valuable content. As an admin, you’ll play a key
                        role in shaping the future of The Bible Channel and its
                        mission to inspire others.
                    </p>
                </div>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    );
}

export default Admin;
