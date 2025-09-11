import Link from "next/link";
import css from "./ProfilePage.module.css";
import { Metadata } from "next";
import Image from "next/image";
import { getMeServer } from "@/lib/api/serverApi";
import Logo from "@/components/Logo/logo";

// import { useState } from "react";

const title = "Profile Page";
const description = "NoteHub profile page";

// export const metadata: Metadata = {
// 	title: title,
// 	description: description,
// 	openGraph: {
// 		title: title,
// 		description: description,
// 		url: "https://notehub.com/",
// 		siteName: "NoteHub",
// 		images: [
// 			{
// 				url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
// 				width: 1200,
// 				height: 630,
// 				alt: title,
// 			},
// 		],
// 		type: "website",
// 	},
// 	twitter: {
// 		card: "summary_large_image",
// 		title: title,
// 		description: description,
// 		images: ["https://ac.goit.global/fullstack/react/og-meta.jpg"],
// 	},
// };

// const [userData, setUserData] = useState({
// 	name: "Анна",
// 	email: "anna@example.com",
// 	childGender: "girl" as "boy" | "girl" | "unknown",
// 	deliveryDate: "2025-07-16",
// 	avatar: "/api/placeholder/120/120",
// });
// const [isEditing, setIsEditing] = useState(false);
// const [isLoading, setIsLoading] = useState(false);

// const handleSave = async () => {
// 	setIsLoading(true);
// 	// Логика сохранения
// 	setTimeout(() => {
// 		setIsLoading(false);
// 		setIsEditing(false);
// 		console.log("Профиль сохранен:", userData);
// 	}, 1000);
// };

const Profile = async () => {
	const user = await getMeServer();

	return (
		<div className={css.container}>
			<div className={css.formSection}>
				<Logo />

				<h1 className={css.title}>Профіль</h1>

				<div className={css.form}>
					<div className={css.photoSection}>
						<div className={css.photoContainer}>
							<img
								// src={userData.avatar}
								alt="Фото профиля"
								className={css.avatar}
							/>
						</div>
						{/* {isEditing && (
							<button type="button" className={css.uploadButton}>
								Завантажити фото
							</button>
						)} */}
						<button type="button" className={css.uploadButton}>
							Завантажити фото
						</button>
					</div>

					<div className={css.inputGroup}>
						<label className={css.label}>Стать дитини</label>
						{/* {isEditing ?
							<select
								className={css.select}
								value={userData.childGender}
								onChange={(e) =>
									setUserData({
										...userData,
										childGender: e.target.value as any,
									})
								}>
								<option value="boy">Хлопчик</option>
								<option value="girl">Дівчинка</option>
								<option value="unknown">Ще не знаю</option>
							</select> 
						<select
							className={css.select}
							value={userData.childGender}
							onChange={(e) =>
								setUserData({
									...userData,
									childGender: e.target.value as any,
								})
							}>
							<option value="boy">Хлопчик</option>
							<option value="girl">Дівчинка</option>
							<option value="unknown">Ще не знаю</option>
						</select>
						:
						<div className={css.readOnlyField}>
								{userData.childGender === "boy" ?
									"Хлопчик"
								: userData.childGender === "girl" ?
									"Дівчинка"
								:	"Ще не знаю"}
							</div> }*/}
						<div className={css.readOnlyField}>boy</div>
					</div>

					<div className={css.inputGroup}>
						<label className={css.label}>Планова дата пологів</label>
						{/* {isEditing ?
							<input
								type="date"
								value={userData.deliveryDate}
								onChange={(e) =>
									setUserData({
										...userData,
										deliveryDate: e.target.value,
									})
								}
								className={css.input}
							/> 
						<input
								type="date"
								
								className={css.input}
							/>
						:	<div className={css.readOnlyField}>
							11.12.2025
							</div>
						}*/}
						<input type="date" className={css.input} />:{" "}
						<div className={css.readOnlyField}>11.12.2025</div>
					</div>

					<div className={css.inputGroup}>
						<label className={css.label}>Ім'я</label>
						{/* {isEditing ?
							<input
								type="text"
								value={userData.name}
								onChange={(e) =>
									setUserData({ ...userData, name: e.target.value })
								}
								className={css.input}
							/>
						:	<div className={css.readOnlyField}>{userData.name}</div>}
					</div>

					<div className={css.inputGroup}>
						<label className={css.label}>Email</label>
						<div className={css.readOnlyField}>{userData.email}</div>
					</div>

					<div className={css.buttonGroup}>
						{isEditing ?
							<>
								<button
									onClick={handleSave}
									disabled={isLoading}
									className={css.saveButton}>
									{isLoading ? "Зберігання..." : "Зберегти"}
								</button>
								<button
									onClick={() => setIsEditing(false)}
									className={css.cancelButton}>
									Скасувати
								</button>
							</>
						:	<button
								onClick={() => setIsEditing(true)}
								className={css.editButton}>
								Редагувати
							</button>
						} */}
					</div>

					<button onClick={handleClickLogOut} className={css.logoutButton}>
						Вийти з аккаунту
					</button>
				</div>
			</div>

			<div className={css.imageSection}>
				<div className={css.storkImage}></div>
			</div>
		</div>
	);
};

export default Profile;
