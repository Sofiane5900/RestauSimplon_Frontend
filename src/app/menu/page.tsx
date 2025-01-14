import Navbar from "../components/Navbar";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

export default function Menu() {
  return (
      <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex-grow">
      <Articles />
      </div>
      <Footer />
    </div>
  );
}
