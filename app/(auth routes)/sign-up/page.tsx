"use client";

import { register } from "@/lib/api/clientApi";
import { RegisterData } from "@/types/auth";

import React from "react";

const SingUpPage = () => {
	const handleSubmit = async (formData: FormData) => {
		const values = Object.fromEntries(formData) as unknown as RegisterData;
		const user = await register(values);
		console.log(user);
	};
	return (
		<>
			<form action={handleSubmit}>
				<label>
					Email
					<input type="email" name="email" required />
				</label>

				{/* <div className={styles.inputGroup}>
				<input
					type="text"
					name="name"
					placeholder="Ім'я"
					value={formData.name}
					onChange={handleInputChange}
					className={styles.input}
					required
				/>
			</div>

			<div className={styles.inputGroup}>
				<input
					type="email"
					name="email"
					placeholder="Пошта"
					value={formData.email}
					onChange={handleInputChange}
					className={styles.input}
					required
				/>
			</div>

			<div className={styles.inputGroup}>
				<input
					type="password"
					name="password"
					placeholder="Пароль"
					value={formData.password}
					onChange={handleInputChange}
					className={styles.input}
					required
				/>
			</div>
		</> */}

				<h1>Sign up</h1>

				<label>
					Password
					<input type="password" name="password" required />
				</label>
				<button type="submit">Register</button>
			</form>
		</>
	);
};

export default SingUpPage;
