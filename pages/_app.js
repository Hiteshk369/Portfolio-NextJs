import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
