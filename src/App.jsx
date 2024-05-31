import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <h1>App</h1>
      <Button title="Add To Cart" size="xl" color="primary" />
      <Button title="Delete" size="lg" color="danger" />
      <Button title="Update" size="sm" color="success" />
      <Button title="Get Products" size="xl" color="success" />
      <Products />
    </div>
  );
}

export default App;
