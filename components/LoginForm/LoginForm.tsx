"use client";

import { useRouter } from "next/navigation";
import css from "./LoginForm.module.css";
import { useState } from "react";
import { useAuthStore } from "@/lib/store/authStore";
import { login } from "@/lib/api/clientApi";
import { ApiError } from "next/dist/server/api-utils";
import { LoginData } from "@/types/auth";

const LoginForm = () => {
	const router = useRouter();
	const [error, setError] = useState("");
	const setUser = useAuthStore((state) => state.setUser);

	const handleSubmit = async (formData: FormData) => {
		try {
			const values = Object.fromEntries(formData) as unknown as LoginData;
			const user = await login(values);
			console.log(user);

			if (user) {
				setUser(user);
				router.push("/profile");
			}
		} catch (error) {
			setError((error as ApiError).message ?? "something went wrong");
		}
	};

	const handleGoogleLogin = () => {
		console.log("Вход через Google");
	};
	return (
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
	);
};

export default LoginForm;
