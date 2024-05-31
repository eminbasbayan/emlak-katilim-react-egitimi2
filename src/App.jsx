import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <h1>App</h1>
      <Button size="xl" color="primary">
        Add To Cart
      </Button>
      <Button size="xl" color="danger">
        <strong>Delete</strong>
      </Button>
      <Products />
    </div>
  );
}

export default App;
