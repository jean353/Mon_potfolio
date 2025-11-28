import { FaLinkedin, FaInstagram, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { socialLinks } from "../../constants";

const FloatingSocialSidebar = () => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "linkedin":
                return <FaLinkedin />;
            case "x":
                return <FaXTwitter />;
            case "instagram":
                return <FaInstagram />;
            case "whatsapp":
                return <FaWhatsapp />;
            case "discord":
                return <FaDiscord />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4 p-2">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tertiary p-3 rounded-full text-white text-[20px] hover:bg-white hover:text-tertiary transition-all duration-300 cursor-pointer shadow-card"
                    title={link.name}
                >
                    {getIcon(link.icon)}
                </a>
            ))}
        </div>
    );
};

export default FloatingSocialSidebar;
