import type { User } from "../App";

interface UserProfileProps {
	user: User | null;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
	if (!user) {
		return <div>Please select a user to view their profile.</div>;
	}

	return (
		<div className="user-profile">
			<h2>User Profile</h2>
			<p>
				<strong>Name:</strong> {user.fullname}
			</p>
			<p>
				<strong>Age:</strong> {user.age}
			</p>
			<p>
				<strong>Education:</strong> {user.education}
			</p>
			<p>
				<strong>Gender:</strong> {user.gender}
			</p>
			<p>
				<strong>Skills:</strong> {user.skills.join(", ")}
			</p>
			<p>
				<strong>Bio:</strong> {user.bio}
			</p>
		</div>
	);
};

export default UserProfile;
