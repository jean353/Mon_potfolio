import { FaLinkedin, FaInstagram, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { socialLinks } from "../../constants";

const SocialLinks = () => {
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
        <div className="flex flex-row gap-4 mt-6">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tertiary p-3 rounded-full text-white text-[24px] hover:bg-white hover:text-tertiary transition-all duration-300 cursor-pointer"
                    style={{
                        // Optional: if we want to use the specific brand color on hover
                        // color: link.color 
                    }}
                    title={link.name}
                >
                    {getIcon(link.icon)}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
