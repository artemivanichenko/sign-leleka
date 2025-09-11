import css from "./SignUpPage.module.css";
import Image from "next/image";
import Logo from "@/components/Logo/logo";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

const SingUpPage = () => {
	return (
		<>
			<div className={css.container}>
				<div className={css.formSection}>
					<Logo />
				</div>
				<RegisterForm />
				<div>
					<Image src="/leleka2.png" alt="Тест" width={720} height={900} />
				</div>
			</div>
		</>
	);
};

export default SingUpPage;
