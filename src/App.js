import AppRouter from "./routes/AppRouter";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <>
      <ProductsProvider>
        <AppRouter />
      </ProductsProvider>
    </>
  );
}

export default App;
