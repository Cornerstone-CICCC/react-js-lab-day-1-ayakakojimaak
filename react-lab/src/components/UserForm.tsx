import { useState } from "react";

interface UserFormProps {
	onSubmit: (user: User) => void;
}

interface User {
	fullname: string;
	age: number;
	education: string;
	gender: string;
	skills: string[];
	bio: string;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = useState<User>({
		fullname: "",
		age: 0,
		education: "Grade school",
		gender: "",
		skills: [],
		bio: "",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value, type } = e.target as HTMLInputElement;

		if (type === "checkbox" && e.target instanceof HTMLInputElement) {
			const { checked } = e.target;
			setFormData((prev) => ({
				...prev,
				skills: checked
					? [...prev.skills, value]
					: prev.skills.filter((skill) => skill !== value),
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: type === "number" ? +value : value,
			}));
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
	};

	const handleClear = () => {
		setFormData({
			fullname: "",
			age: 0,
			education: "Grade school",
			gender: "",
			skills: [],
			bio: "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Full Name:
					<input
						type="text"
						name="fullname"
						value={formData.fullname}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Age:
					<input
						type="number"
						name="age"
						value={formData.age}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Education:
					<select
						name="education"
						value={formData.education}
						onChange={handleChange}
					>
						<option value="Grade school">Grade school</option>
						<option value="High school">High school</option>
						<option value="College">College</option>
					</select>
				</label>
			</div>
			<div>
				<label htmlFor="gender">Gender:</label>
				<label>
					<input
						type="radio"
						name="gender"
						value="Male"
						checked={formData.gender === "Male"}
						onChange={handleChange}
					/>
					Male
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						value="Female"
						checked={formData.gender === "Female"}
						onChange={handleChange}
					/>
					Female
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						value="Other"
						checked={formData.gender === "Other"}
						onChange={handleChange}
					/>
					Other
				</label>
			</div>
			<div>
				<label htmlFor="skills">Skills:</label>
				<label>
					<input
						type="checkbox"
						name="skills"
						value="TypeScript"
						checked={formData.skills.includes("TypeScript")}
						onChange={handleChange}
					/>
					TypeScript
				</label>
				<label>
					<input
						type="checkbox"
						name="skills"
						value="React"
						checked={formData.skills.includes("React")}
						onChange={handleChange}
					/>
					React
				</label>
				<label>
					<input
						type="checkbox"
						name="skills"
						value="Node"
						checked={formData.skills.includes("Node")}
						onChange={handleChange}
					/>
					Node
				</label>
				<label>
					<input
						type="checkbox"
						name="skills"
						value="NoSQL"
						checked={formData.skills.includes("NoSQL")}
						onChange={handleChange}
					/>
					NoSQL
				</label>
			</div>
			<div>
				<label>
					Bio:
					<textarea name="bio" value={formData.bio} onChange={handleChange} />
				</label>
			</div>
			<div>
				<button type="submit">Add/Save User</button>
				<button type="button" onClick={handleClear}>
					Clear
				</button>
			</div>
		</form>
	);
};

export default UserForm;
