import { clsx } from "clsx";

import styles from "./divider.module.scss";

export default function Divider({ className }: { className?: string }) {
  return (
    <div className={clsx(styles.divider, className)}>
      <div className={styles.line} />
    </div>
  );
}
