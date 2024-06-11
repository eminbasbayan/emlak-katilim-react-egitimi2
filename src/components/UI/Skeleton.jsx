const Skeleton = () => {
  return (
    <div className="placeholder-glow">
      <div className="row">
        <div className="col-md-6">
          <div
            className="placeholder"
            style={{ width: "100%", height: "400px" }}
          ></div>
        </div>
        <div className="col-md-6">
          <h1 className="placeholder col-6"></h1>
          <p className="placeholder col-12"></p>
          <p className="placeholder col-12"></p>
          <h3 className="placeholder col-4"></h3>
          <button className="btn btn-success btn-lg mt-3 disabled placeholder col-6"></button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="placeholder col-6"></h2>
          {[1, 2].map((key) => (
            <div key={key} className="card mb-3 placeholder-glow">
              <div className="card-body">
                <h5 className="card-title placeholder col-6"></h5>
                <p className="card-text placeholder col-12"></p>
                <p className="card-text placeholder col-12"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
