import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
        {/* O conteúdo principal da página vai aqui */}
    </main>
    <Footer />
</div>
  );
}

export default App;
