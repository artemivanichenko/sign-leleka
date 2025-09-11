"use client";

import { useRouter } from "next/navigation";
import css from "./RegisterForm.module.css";
import { RegisterData } from "@/types/auth";
import { register } from "@/lib/api/clientApi";
import { useState } from "react";
import { ApiError } from "next/dist/server/api-utils";

const RegisterForm = () => {
	const router = useRouter();
	const [error, setError] = useState("");
	const handleSubmit = async (formData: FormData) => {
		try {
			const values = Object.fromEntries(formData) as unknown as RegisterData;
			console.log(values);

			await register(values);
			router.push("/profile");
		} catch (error) {
			setError((error as ApiError).message ?? "Oops... some error");
		}
	};
	return (
		<form action={handleSubmit} className={css.form}>
			<div className={css.inputGroup}>
				<input
					type="text"
					name="name"
					placeholder="Ім'я"
					className={css.input}
					required
				/>
			</div>

			<div className={css.inputGroup}>
				<input
					type="email"
					name="email"
					placeholder="Пошта"
					className={css.input}
					required
				/>
			</div>

			<div className={css.inputGroup}>
				<input
					type="password"
					name="password"
					placeholder="Пароль"
					className={css.input}
					required
				/>
			</div>

			<button className={css.submitButton} type="submit">
				Register
			</button>
		</form>
	);
};

export default RegisterForm;
