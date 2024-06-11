import PropTypes from "prop-types";
import UserCard from "./UserCard";

const Users = ({ users }) => {
  
  return (
    <div className="users">
      <h2>Users List</h2>
      <div className="row">
        {users?.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
