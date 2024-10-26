function About() {
    const stats = [
        { label: "Combined Followers", value: "8,000+" },
        { label: "Community Members", value: "500+" },
        { label: "Content Posted", value: "1500+" },
        { label: "Iniatiaves Launched", value: "3" },
    ];

    const values = [
        {
            title: "Integrity",
            description:
                "We uphold honesty and transparency in all our interactions, fostering trust and respect within our community.",
        },
        {
            title: "Compassion",
            description:
                "We believe in showing kindness and understanding, supporting those in need, and embodying the love of Christ in our actions.",
        },
        {
            title: "Service",
            description:
                "We are dedicated to serving our community and spreading the message of faith through outreach, support, and uplifting initiatives.",
        },
        {
            title: "Growth",
            description:
                "We encourage personal and spiritual growth, fostering an environment where individuals can learn, share, and deepen their relationship with God.",
        },
    ];

    return (
        <section id="about-us" className="py-20 bg-white-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
                        About Us
                    </h2>
                    <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto">
                        We began our journey at the start of 2024 with the goal
                        of becoming one of the leading Christian influences in
                        South Africa.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg text-center"
                        >
                            <p className="text-3xl font-bold text-sky-400">
                                {stat.value}
                            </p>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">
                        Our Story
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Recognizing the shortage of Christian influences in
                        South Africa, we saw a chance to make a meaningful
                        impact. We began with a small team of passionate
                        individuals who shared our vision. Since then, we've
                        expanded our team and broadened our reach through a
                        variety of impactful projects and initiatives.
                    </p>
                    <p className="text-gray-600">
                        Today, we proudly stand as one of the leading Christian
                        influences in South Africa, with numerous achievements
                        that fill us with gratitude. Our commitment to making a
                        positive impact in our community remains unwavering as
                        we strive to inspire and uplift others.
                    </p>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-8"
                        >
                            <h3 className="text-xl font-bold text-gray-700 mb-4">
                                {value.title}
                            </h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
