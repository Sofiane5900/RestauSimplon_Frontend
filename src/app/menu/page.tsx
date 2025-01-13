import Image from "next/image";
import Navbar from "../components/Navbar";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

export default function Menu() {
  return (
    <div>
      <Navbar />
      <Articles />
      <Footer />
    </div>
  );
}
