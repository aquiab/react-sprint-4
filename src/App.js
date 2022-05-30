import MainArea from "./components/MainArea/MainArea";
import AppRouter from "./routes/AppRouter";
import ProductsProvider from "./context/ProductsContext";
import ThemeButton from "../src/components/ThemeButton";



function App() {
  return (
    <>

      <ProductsProvider>
        <MainArea>
        <AppRouter />
        </MainArea>
      </ProductsProvider>
        <ThemeButton/>
    </>
  );
}

export default App;