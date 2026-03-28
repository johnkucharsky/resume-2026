import "./theme.scss";

import styles from "./layout.module.scss";

export default function ScssAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.layout}>{children}</div>;
}
