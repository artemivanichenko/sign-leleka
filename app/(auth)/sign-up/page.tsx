import css from "./SignUpPage.module.css";
import Image from "next/image";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Link from "next/link";

const SingUpPage = () => {
	return (
		<>
			<div className={css.container}>
				<div className={css.formSection}>
					<div className={css.formSection}>
						<div className={css.logo}>
							<Link href="/" aria-label="Home" className={css.logoLink}>
								<Image
									src="/company-logo.svg"
									alt="Лелека"
									width={30}
									height={30}
									className={css.logoImage}
									priority
								/>
								<span className={css.logoText}>Лелека</span>
							</Link>
						</div>
						<RegisterForm />
					</div>

					<div className={css.registerPrompt}>
						<Image
							src="/leleka2.png"
							alt="Тест"
							width={720}
							height={900}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingUpPage;
