import Spinner from "../UI/Spinner";
import useFetchData from "../../hooks/FetchData";
import UserCard from "./UserCard";

const Users = () => {
  const {
    data: users,
    isLoading,
  } = useFetchData("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="users">
      <h2>Users List</h2>
      {isLoading && <Spinner />}
      <div className="row">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
