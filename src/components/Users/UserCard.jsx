import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  return (
    <div className="col-md-4 mb-4" key={user.id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
            <br />
            <strong>Phone:</strong> {user.phone}
            <br />
            <strong>Website:</strong> {user.website}
          </p>
          <h6 className="card-subtitle mb-2 text-muted">Address</h6>
          <p className="card-text">
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
          </p>
          <h6 className="card-subtitle mb-2 text-muted">Company</h6>
          <p className="card-text">
            {user.company.name}
            <br />
            {user.company.catchPhrase}
            <br />
            {user.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
