import MainArea from "./components/MainArea/MainArea";
import AppRouter from "./routes/AppRouter";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <>
      <ProductsProvider>
        <MainArea>
        <AppRouter />
        </MainArea>
      </ProductsProvider>
    </>
  );
}

export default App;
