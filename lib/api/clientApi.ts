import { LoginData, RegisterData, User } from "@/types/auth";
import { nextServer } from "./api";

export const register = async (registerData: RegisterData) => {
	const { data } = await nextServer.post("/auth/register", registerData);
	return data;
};

export const login = async (loginData: LoginData) => {
	const { data } = await nextServer.post<User>("/auth/login", loginData);
	return data;
};

export const logout = async () => {
	await nextServer.post<User>("/auth/logout");
};

interface SessionStatus {
	success: boolean;
}

export const checkSession = async () => {
	const { data } = await nextServer.get<SessionStatus>("/auth/session");
	return data.success;
};

export const getMe = async () => {
	const { data } = await nextServer.get<User>("/users/current");
	return data;
};

export type ProfileUpdatePayloadProps = { username: string };

export const userUpdate = async (
	profileUpdPayload: ProfileUpdatePayloadProps
) => {
	const { data } = await nextServer.patch<User>(
		"/users/current",
		profileUpdPayload
	);
	return data;
};
