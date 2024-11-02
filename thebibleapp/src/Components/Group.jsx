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
                "A space for our community to connect. Join our conversations, share inspiring content, and grow in faith with over 700 like minded individuals. Whether you want to contribute or just find encouragement, this is where we come together to share God’s love.",
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
                "Much like our Instagram page, our Facebook profile is designed for vibrant discussions and community engagement. If you appreciate meaningful connections and impactful themes and messages, this is the space to be!",
            link: "https://www.facebook.com/profile.php?id=61567073671588",
        },
    ];

    return (
        <section id="the-bible-group" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-400 sm:text-4xl">
                        The Bible Group
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        No matter the platform, our community is always growing
                        and thriving. Join us today!
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {socials.map((social, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                            >
                                <div className="flex gap-10 md:gap-2">
                                    <div className="text-white text-3xl">
                                        {social.icon}
                                    </div>
                                    <h3 className="flex items-center text-white font-bold text-2xl md:text-lg">
                                        {social.title}
                                    </h3>
                                </div>
                                <p className="mt-4 max-w-3xl text-xl text-gray-400 lg:mx-auto">
                                    {social.description}
                                </p>
                                <div class="mt-8 inline-flex w-full md:w-1/2 lg:1/3 xl:w-1/3 flex rounded-md shadow">
                                    <a
                                        href={social.link}
                                        class="flex items-center justify-center w-full h-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-200"
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
