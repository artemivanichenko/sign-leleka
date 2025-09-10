import Image from "next/image";
import styles from "./Logo.module.css";
import Link from "next/link";

export default function Logo() {
	return (
		<div className={styles.logo}>
			<Link href="/" aria-label="Home" className={styles.logoLink}>
				<Image
					src="/company-logo.svg"
					alt="Лелека"
					width={30}
					height={30}
					className={styles.logoImage}
					priority
				/>
				<span className={styles.logoText}>Лелека</span>
			</Link>
		</div>
	);
}
