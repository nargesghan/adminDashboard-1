import Sidebar from "@/components/Sidebar";

export default function App({ Component, pageProps }) {
  return (<Sidebar><Component {...pageProps} /></Sidebar>);
}
