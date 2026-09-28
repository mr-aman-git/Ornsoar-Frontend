import Header from "../../components/navSection/Header";
import Footer from "../../components/navSection/Footer";
import Head from "next/head";

export default function PublicLayout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="7MZ9_PMac1kdpQyctEqmuLI3ayaSYw7mRZD_O7YkLiI"
        />
      </Head>

      <div className="max-w-375 mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
