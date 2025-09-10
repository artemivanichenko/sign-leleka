"use client";
import { useRouter } from "next/navigation";
import css from "./SignInPage.module.css";
import { useState } from "react";
import { login } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { ApiError } from "next/dist/server/api-utils";
import { LoginData } from "@/types/auth";
import Logo from "@/components/Logo/logo";
import Image from "next/image";

const SignInPage = () => {
	const router = useRouter();
	const [error, setError] = useState("");
	const setUser = useAuthStore((state) => state.setUser);

	const handleSubmit = async (formData: FormData) => {
		try {
			const values = Object.fromEntries(formData) as unknown as LoginData;
			const user = await login(values);
			if (user) {
				setUser(user);
				router.push("/profile");
				console.log(error);
			}
		} catch (error) {
			setError((error as ApiError).message ?? "something went wrong");
		}
	};

	const handleGoogleLogin = () => {
		console.log("Вход через Google");
	};

	return (
		<div className={css.container}>
			<div className={css.formSection}>
				<Logo />

				<h1 className={css.title}>Вхід</h1>

				<form action={handleSubmit} className={css.form}>
					<div className={css.inputGroup}>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Пошта"
							className={css.input}
							required
						/>
					</div>
					<div className={css.inputGroup}>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							name="password"
							placeholder="Пароль"
							className={css.input}
							required
						/>
					</div>

					<button type="submit" className={css.submitButton}>
						Увійти
					</button>

					<button
						type="button"
						onClick={handleGoogleLogin}
						className={css.googleButton}>
						<span className={css.googleIcon}>G</span>
						Увійти через Google
					</button>
				</form>

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
