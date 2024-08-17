import { Outlet } from "react-router-dom";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";

function App() {
  return (
    <main className="container px-4 md:px-0 mx-auto font-sans">
      <NavBar></NavBar>
      <section className="min-h-[60vh]">
        <Outlet />
      </section>
      <Footer></Footer>
    </main>
  );
}

export default App;
