import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import Heading from "../../../src/components/typography/Heading";
import styles from "../../../styles/detail.module.css";

export default function CharacterDetails({character}) {

    const { name, image, id, species, gender, status, location } = character;

    return (
        <section key={id} className={styles.container}>
            <Link href="/"><a><button>BACK</button></a></Link>
            <Image
                src={image}
                width={500}
                height={500}
                alt={name}
            />
            <div className={styles.info_container}>
                <Heading title={name} />
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
                <p>Status: {status}</p>
                <p>Location: {location.name}</p>
            </div>
        </section>
    );
};

CharacterDetails.propTypes = {
    character: PropTypes.object.isRequired,
};