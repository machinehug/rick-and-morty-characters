import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "../../../styles/index.module.css";

export default function CharacterCard({character}) {

	const { name, image, id } = character;

	return (
		<Link href={`/detail/${id}`}>
			<a>
				<div  className={styles.card}>	
					<Image
						src={image}
						layout="responsive"
						width={500}
						height={500}
						alt={name}
						className={styles.img}
					/>
					<h1 className={styles.character_title}>{name}</h1>
				</div>
			</a>
		</Link>
	);
};

CharacterCard.propTypes = {
    character: PropTypes.object.isRequired,
};