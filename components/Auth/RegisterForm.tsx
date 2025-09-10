// "use client";

// import { useState } from "react";

// import styles from "./RegisterForm.module.css";
// import Logo from "../logo";

// interface RegisterFormProps {
// 	onLoginClick: () => void;
// }

// export default function RegisterForm({ onLoginClick }: RegisterFormProps) {
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		email: "",
// 		password: "",
// 		confirmPassword: "",
// 		deliveryDate: "",
// 	});
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [currentStep, setCurrentStep] = useState(1);

// 	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target;
// 		setFormData((prev) => ({
// 			...prev,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSubmit = async (e: React.FormEvent) => {
// 		e.preventDefault();

// 		if (currentStep === 1) {
// 			setCurrentStep(2);
// 			return;
// 		}

// 		setIsLoading(true);

// 		// Логика регистрации
// 		setTimeout(() => {
// 			console.log("Регистрация:", formData);
// 			setIsLoading(false);
// 		}, 1000);
// 	};

// 	const renderStepOne = () => (
// 		<>
// 			<div className={styles.photoSection}>
// 				<div className={styles.photoPlaceholder}>
// 					<div className={styles.photoIcon}>📷</div>
// 				</div>
// 				<button type="button" className={styles.uploadButton}>
// 					Завантажити фото
// 				</button>
// 			</div>

// 			<div className={styles.inputGroup}>
// 				<label className={styles.label}>Стать дитини</label>
// 				<select className={styles.select} name="gender" defaultValue="">
// 					<option value="" disabled>
// 						Оберіть стать
// 					</option>
// 					<option value="boy">Хлопчик</option>
// 					<option value="girl">Дівчинка</option>
// 					<option value="unknown">Ще не знаю</option>
// 				</select>
// 			</div>

// 			<div className={styles.inputGroup}>
// 				<label className={styles.label}>Планова дата пологів</label>
// 				<input
// 					type="date"
// 					name="deliveryDate"
// 					value={formData.deliveryDate}
// 					onChange={handleInputChange}
// 					className={styles.input}
// 					required
// 				/>
// 			</div>
// 		</>
// 	);

// 	const renderStepTwo = () => (
// 		<>
// 			<div className={styles.inputGroup}>
// 				<input
// 					type="text"
// 					name="name"
// 					placeholder="Ім'я"
// 					value={formData.name}
// 					onChange={handleInputChange}
// 					className={styles.input}
// 					required
// 				/>
// 			</div>

// 			<div className={styles.inputGroup}>
// 				<input
// 					type="email"
// 					name="email"
// 					placeholder="Пошта"
// 					value={formData.email}
// 					onChange={handleInputChange}
// 					className={styles.input}
// 					required
// 				/>
// 			</div>

// 			<div className={styles.inputGroup}>
// 				<input
// 					type="password"
// 					name="password"
// 					placeholder="Пароль"
// 					value={formData.password}
// 					onChange={handleInputChange}
// 					className={styles.input}
// 					required
// 				/>
// 			</div>
// 		</>
// 	);

// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.formSection}>
// 				<Logo />

// 				<h1 className={styles.title}>
// 					{currentStep === 1 ?
// 						"Давайте познайдимось ближче"
// 					:	"Реєстрація"}
// 				</h1>

// 				<form onSubmit={handleSubmit} className={styles.form}>
// 					{currentStep === 1 ? renderStepOne() : renderStepTwo()}

// 					<button
// 						type="submit"
// 						disabled={isLoading}
// 						className={styles.submitButton}>
// 						{isLoading ?
// 							"Завантаження..."
// 						: currentStep === 1 ?
// 							"Зберегти"
// 						:	"Зареєструватися"}
// 					</button>
// 				</form>

// 				{currentStep === 2 && (
// 					<div className={styles.loginPrompt}>
// 						<span>Вже маєте аккаунт? </span>
// 						<button onClick={onLoginClick} className={styles.loginLink}>
// 							Увійти
// 						</button>
// 					</div>
// 				)}
// 			</div>

// 			<div>
// 				<img src="/leleka1.png" alt="Тест" width={720} height={900} />
// 			</div>
// 		</div>
// 	);
// }
