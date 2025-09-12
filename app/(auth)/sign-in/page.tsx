import css from "./SignInPage.module.css";
import Image from "next/image";
import LoginForm from "@/components/LoginForm/LoginForm";
import Link from "next/link";

const SignInPage = () => {
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

						<LoginForm />
					</div>
				</div>

				<div>
					<Image src="/leleka3.png" alt="Тест" width={720} height={900} />
				</div>
			</div>
		</>
	);
};

export default SignInPage;
