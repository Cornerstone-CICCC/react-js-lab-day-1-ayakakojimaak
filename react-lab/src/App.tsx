import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";

export interface User {
	id: number;
	fullname: string;
	age: number;
	education: string;
	gender: string;
	skills: string[];
	bio: string;
}

export const App = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [formData, setFormData] = useState<Omit<User, "id">>({
		fullname: "",
		age: 0,
		education: "",
		gender: "",
		skills: [],
		bio: "",
	});
	const [selectedUser, setSelectedUser] = useState<User | null>(null);

	// Add or update user
	const handleFormSubmit = (user: Omit<User, "id">) => {
		if (selectedUser) {
			// Update existing user
			setUsers((prev) =>
				prev.map((u) => (u.id === selectedUser.id ? { ...u, ...user } : u)),
			);
			setSelectedUser(null);
		} else {
			// Add new user
			const newUser: User = {
				id: users.length + 1,
				...user,
			};
			setUsers((prev) => [...prev, newUser]);
		}
		setFormData({
			fullname: "",
			age: 0,
			education: "",
			gender: "",
			skills: [],
			bio: "",
		});
	};

	// View user
	const handleViewUser = (id: number) => {
		const user = users.find((u) => u.id === id) || null;
		setSelectedUser(user);
	};

	// Edit user
	const handleEditUser = (id: number) => {
		const user = users.find((u) => u.id === id);
		if (user) {
			setFormData(user);
			setSelectedUser(user);
		}
	};

	// Delete user
	const handleDeleteUser = (id: number) => {
		setUsers((prev) => prev.filter((u) => u.id !== id));
		if (selectedUser?.id === id) {
			setSelectedUser(null);
		}
	};

	return (
		<>
			<UserForm onSubmit={handleFormSubmit} />
			<UserList
				users={users}
				onView={handleViewUser}
				onEdit={handleEditUser}
				onDelete={handleDeleteUser}
			/>
			<UserProfile user={selectedUser} />
		</>
	);
};
