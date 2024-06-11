const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <div>
        <h1 className="mt-4">Simple Sidebar</h1>
        <p>
          The starting point for this layout is a static sidebar. You can use
          this layout as is, or you can add some dynamic functionality by using
          JavaScript. For example, you could toggle the visibility of the
          sidebar using JavaScript.
        </p>
        <p>
          Make sure to keep all page content within the{" "}
          <code>#page-content-wrapper</code>. The top navbar is optional, and
          just for demonstration. Just create an element with the{" "}
          <code>.navbar</code> class and add your content inside.
        </p>
      </div>
    </div>
  );
};

export default AdminPage;
