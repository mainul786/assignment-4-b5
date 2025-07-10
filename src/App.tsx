import { Outlet } from "react-router";
import Navbar from "./pages/Navbar";
import Footer from "./pages/footer/Footer";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Navbar />

          <Outlet />
          <ToastContainer position="top-right" autoClose={3000} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
