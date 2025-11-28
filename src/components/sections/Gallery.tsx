import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { SectionWrapper } from "../../hoc";
import { gallery } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const GalleryCard = ({
    index,
    src,
    alt,
}: {
    index: number;
    src: string;
    alt: string;
}) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="w-full p-2"
    >
        <div className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card">
            <div className="bg-tertiary w-full rounded-[20px] p-2">
                <img
                    src={src}
                    alt={alt}
                    className="h-[250px] w-full rounded-[16px] object-cover"
                />
            </div>
        </div>
    </motion.div>
);

const Gallery = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Mes photos professionnelles</p>
                <h2 className={styles.sectionHeadText}>Galerie.</h2>
            </motion.div>

            <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((image, index) => (
                    <GalleryCard key={image.id} index={index} {...image} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Gallery, "gallery");
