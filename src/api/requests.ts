import axios from "axios";

const api = axios.create({
	baseURL: "http://127.0.0.1:8000/api/",
	headers: {
		"Content-Type": "application/json",
		// Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
});

// Submit a new department request
export const submitDepartmentRequest = async (data: any) => {
	const response = await api.post("department-requests/", data);
	return response.data;
};

// Fetch all requests for the logged-in user
export const getDepartmentRequests = async () => {
	const response = await api.get("department-requests/");
	return response.data;
};

export const handleLogin = async (data: any) => {
	const response = await api.post(
		"http://127.0.0.1:8000/api/auth/login/",
		{
			username: "dept1",
			password: "pass123",
		},
		{ withCredentials: true }
	);

	return response.data;
};
