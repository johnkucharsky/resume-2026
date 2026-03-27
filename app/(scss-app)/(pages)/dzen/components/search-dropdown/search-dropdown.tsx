import { clsx } from "clsx";

import styles from "./search-dropdown.module.scss";

const images = [
  { title: "Car", name: "car.png", impressions: 123 },
  { title: "Pie", name: "pie.png", impressions: 5 },
  { title: "Pork", name: "pork.png", impressions: 7.9 },
  { title: "Krasnodar", name: "krasnodar.png", impressions: 290 },
  { title: "Small Business", name: "small_business.png", impressions: 35 },
  { title: "Sunset", name: "sunset.png", impressions: 71 },
];

export default function SearchDropdown({ open }: { open: boolean }) {
  return (
    <div className={clsx(styles.searchDropdown, { [styles.show]: open })}>
      {images.map((item) => (
        <div key={item.title} className={styles.card}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(/images/cards/${item.name})` }}
          />
          <div className={styles.overlay}>
            <h3>{item.title}</h3>
            <p>{item.impressions}K impressions</p>
          </div>
        </div>
      ))}
    </div>
  );
}
