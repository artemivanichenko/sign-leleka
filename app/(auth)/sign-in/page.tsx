import css from "./SignInPage.module.css";
import Logo from "@/components/Logo/logo";
import Image from "next/image";
import LoginForm from "@/components/LoginForm/LoginForm";

const SignInPage = () => {
	return (
		<div className={css.container}>
			<div className={css.formSection}>
				<Logo />

				<h1 className={css.title}>Вхід</h1>

				<LoginForm />

				<div className={css.registerPrompt}>
					<span>Немає аккаунту? </span>
					<button className={css.registerLink}>Зареєструватися</button>
				</div>
			</div>

			<div>
				<Image src="/leleka3.png" alt="Тест" width={720} height={900} />
			</div>
		</div>
	);
};

export default SignInPage;
