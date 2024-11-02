import { FaHandshake, FaPray, FaChurch } from "react-icons/fa";

function Testimonials() {
    const testimonials = [
        {
            icon: <FaHandshake />,
            label: "Grace L.",
            testimonial:
                "This platform has helped deepen my understanding of the Bible. The discussions and insights are thought-provoking and enriching!",
        },

        {
            icon: <FaPray />,
            label: "Kgafela M.",
            testimonial:
                "Being part of this Bible Group has been an incredible blessing in my spiritual journey. The daily insights and teachings have deepened my understanding of scripture and have encouraged me to live my faith more boldly.",
        },
        {
            icon: <FaChurch />,
            label: "Micheal P.",
            testimonial:
                "I love how the Bible Channel shares relatable and meaningful messages. It’s a daily dose of encouragement that I look forward to!",
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-400 sm:text-4xl">
                        Testimonials
                    </h2>
                    <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
                        Discover how our mission has touched lives and inspired
                        faith. Read the heartfelt testimonials from our members
                        who have experienced transformation and encouragement
                        through our initiatives.
                    </p>
                </div>

                {/*Testimonial Cards*/}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                            >
                                <div className="flex gap-8">
                                    <div className="text-sky-400 text-3xl">
                                        {testimonial.icon}
                                    </div>
                                    <h3 className="text-gray-300 font-bold text-2xl">
                                        {testimonial.label}
                                    </h3>
                                </div>
                                <p className="mt-4 max-w-3xl text-xl text-gray-400 lg:mx-auto">
                                    {testimonial.testimonial}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;
