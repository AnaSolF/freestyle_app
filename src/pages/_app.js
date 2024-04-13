import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContextProvider from "@/Context/MainContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <Component {...pageProps} />
    </MainContextProvider>
  );
}
