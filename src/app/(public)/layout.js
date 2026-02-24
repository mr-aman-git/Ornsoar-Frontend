import Header from "../../components/navSection/Header";
import Footer from "../../components/navSection/Footer";

export default function PublicLayout({ children }) {
  return (
    <div className="max-w-375 mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
