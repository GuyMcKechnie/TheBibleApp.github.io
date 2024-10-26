import React, { useEffect } from "react";

function ContactForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://form.123formbuilder.com/embed/6759956.js";
        script.setAttribute("type", "text/javascript");
        script.setAttribute("defer", "");
        script.setAttribute("data-role", "form");
        script.setAttribute("data-default-width", "800px");
        script.setAttribute("data-custom-vars", "hasEmbedFormStyle=1");
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return <div></div>;
}

export default ContactForm;
