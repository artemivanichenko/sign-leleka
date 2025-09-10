// "use client";

// import { useState } from "react";
// import styles from "./LoginForm.module.css";
// import Logo from "../logo";

// interface LoginFormProps {
// 	onRegisterClick: () => void;
// }

// export default function LoginForm({ onRegisterClick }: LoginFormProps) {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [isLoading, setIsLoading] = useState(false);

// 	const handleSubmit = async (e: React.FormEvent) => {
// 		e.preventDefault();
// 		setIsLoading(true);

// 		// Здесь будет логика аутентификации
// 		setTimeout(() => {
// 			console.log("Логин:", { email, password });
// 			setIsLoading(false);
// 		}, 1000);
// 	};

// 	const handleGoogleLogin = () => {
// 		// Логика входа через Google
// 		console.log("Вход через Google");
// 	};

// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.formSection}>
// 				<Logo />

// 				<h1 className={styles.title}>Вхід</h1>

// 				<form onSubmit={handleSubmit} className={styles.form}>
// 					<div className={styles.inputGroup}>
// 						<input
// 							type="email"
// 							placeholder="Пошта"
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 							className={styles.input}
// 							required
// 						/>
// 					</div>

// 					<div className={styles.inputGroup}>
// 						<input
// 							type="password"
// 							placeholder="Пароль"
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 							className={styles.input}
// 							required
// 						/>
// 					</div>

// 					<button
// 						type="submit"
// 						disabled={isLoading}
// 						className={styles.submitButton}>
// 						{isLoading ? "Завантаження..." : "Увійти"}
// 					</button>

// 					<button
// 						type="button"
// 						onClick={handleGoogleLogin}
// 						className={styles.googleButton}>
// 						<span className={styles.googleIcon}>G</span>
// 						Увійти через Google
// 					</button>
// 				</form>

// 				<div className={styles.registerPrompt}>
// 					<span>Немає аккаунту? </span>
// 					<button
// 						onClick={onRegisterClick}
// 						className={styles.registerLink}>
// 						Зареєструватися
// 					</button>
// 				</div>
// 			</div>

// 			<div>
// 				<img src="/leleka3.png" alt="Тест" width={720} height={900} />
// 			</div>
// 		</div>
// 	);
// }
