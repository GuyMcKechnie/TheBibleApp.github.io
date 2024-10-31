import { FaCross, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Group() {
    const socials = [
        {
            icon: <FaWhatsapp />,
            title: "The Bible Channel",
            description:
                "Our largest social media platform, home to thousands of followers united in faith! Here, we share daily motivations, inspiring images, devotionals, and engaging content designed to uplift your spirit and deepen your connection with God.",
            link: "https://whatsapp.com/channel/0029VaHkSUX2P59srKXDBa0H",
        },
        {
            icon: <FaWhatsapp />,
            title: "The Bible Community",
            description:
                "A space for our community to connect. Join our conversations, share inspiring content, and grow in faith with over 700 like minded individuals. Whether you want to contribute or just find encouragement , this is where we come together to share God’s love.",
            link: "https://chat.whatsapp.com/EiwtC7HR60r6uGMMd8E85j",
        },
        {
            icon: <FaInstagram />,
            title: "The Bible Gram",
            description:
                "As a fresh addition to our expanding social media presence, this space is dedicated to sharing thematic content that resonates with our community. If you appreciate sleek, minimalistic visuals, you’ve found your go-to spot!",
            link: "https://www.instagram.com/the.bible.gram/",
        },
        {
            icon: <FaFacebook />,
            title: "The Bible Facebook",
            description:
                "Much like our Instagram page, this platform is designed for vibrant discussions and community engagement. If you appreciate meaningful connections and impactful themes, this is your space!",
            link: "https://www.facebook.com/profile.php?id=61567073671588",
        },
    ];

    return (
        <section id="the-bible-group" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
                        The Bible Group
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        No matter the platform, our community is always growing
                        and thriving. Join us today!
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {socials.map((social, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg text-center"
                            >
                                <div className="flex gap-10 md:gap-2">
                                    <div className="text-sky-400 text-3xl">
                                        {social.icon}
                                    </div>
                                    <h3 className="text-gray-600 font-bold text-2xl md:text-sm">
                                        {social.title}
                                    </h3>
                                </div>
                                <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto">
                                    {social.description}
                                </p>
                                <div class="mt-8 inline-flex w-full md:w-1/2 lg:1/3 xl:w-1/3 flex rounded-md shadow">
                                    <a
                                        href="#"
                                        class="flex items-center justify-center w-full h-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-500"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Group;
