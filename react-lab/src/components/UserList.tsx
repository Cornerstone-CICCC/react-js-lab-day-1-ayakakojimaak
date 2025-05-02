import type { User } from "../App";

interface UserListProps {
	users: User[];
	onView: (id: number) => void;
	onEdit: (id: number) => void;
	onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({
	users,
	onView,
	onEdit,
	onDelete,
}) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Full Name</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.fullname}</td>
							<td>
								<button type="button" onClick={() => onView(user.id)}>
									View
								</button>
								<button type="button" onClick={() => onEdit(user.id)}>
									Edit
								</button>
								<button type="button" onClick={() => onDelete(user.id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UserList;
