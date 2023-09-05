import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Search from "./Componentes/Home/Home";
function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow overflow-y-auto">
        <Search />
      </main>
      <Footer />
    </div>
  );
}

export default App;
