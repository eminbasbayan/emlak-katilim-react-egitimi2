import { useLoaderData } from "react-router-dom";
import Users from "../components/Users/Users";

const UsersPage = () => {
  const data = useLoaderData();

  return (
    <div className="users-page">
      <h1>Users Page</h1>
      <Users users={data} />
    </div>
  );
};

export default UsersPage;
