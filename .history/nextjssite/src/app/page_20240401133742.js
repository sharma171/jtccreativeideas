// import Image from "next/image";
// import styles from "./page.module.css";
import SiteHeader from "./components/header/header";
import HomePage from "./components/home"

export default function Home() {
  return (
    <main className="hello">
      <SiteHeader />
      <HomePage />
    </main>
  );
}
