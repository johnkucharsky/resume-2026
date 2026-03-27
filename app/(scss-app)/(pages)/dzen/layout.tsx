import { ReactNode } from "react";

import Navigation from "./components/navigation/navigation";
import SearchBar from "./components/search-bar/search-bar";
import styles from "./layout.module.scss";

export default function DzenLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <Navigation />
        {children}
      </div>
    </>
  );
}

const Header = () => {
  return (
    <header className={styles.header}>
      <SearchBar />
    </header>
  );
};
