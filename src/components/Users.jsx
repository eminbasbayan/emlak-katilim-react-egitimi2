import Spinner from "./UI/Spinner";
import useFetchData from "../hooks/FetchData";

const Users = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useFetchData("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="users">
      <h2>Users List</h2>
      {error && <span>Data alınırken bir hata oluştu!</span>}
      {isLoading && <Spinner />}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name: </strong> <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
