"use client";

import { useHover } from "app/hooks/useHover";
import { clsx } from "clsx";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

import styles from "./card.module.scss";

const formatter = new Intl.NumberFormat("ru-RU", {
  notation: "compact",
  compactDisplay: "short",
});

export default function Card({
  title,
  image,
  authorAndStats,
  text,
}: {
  title: string;
  image: string;
  authorAndStats: {
    logo: string;
    name: string;
    read: number;
    date: string;
  };
  text: string;
}) {
  const { ref, isHovered } = useHover<HTMLElement>();

  return (
    <article
      ref={ref}
      className={clsx(styles.cardWrapper, isHovered && styles.withShadow)}
    >
      <Link className={styles.cardLink} href="/" target={"_blank"}></Link>
      <div className={styles.cardMediaWrapper}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageCover}>
            <Image
              alt={"Card Image"}
              className={styles.image}
              src={"/images/cards/" + image}
              fill
            />
          </div>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.articleMain}>
          <div className={styles.avatarAndAuthor}>
            <Link href="/" rel="dofollow" target="_blank">
              <div
                className={styles.avatarWithBorder}
                style={{
                  backgroundImage: `url(/images/logos/${authorAndStats.logo})`,
                }}
              ></div>
            </Link>

            <div className={styles.authorTextContainer}>
              <Link
                href="/"
                rel="dofollow"
                target="_blank"
                className={styles.authorTitle}
              >
                <span>{authorAndStats.name}</span>
              </Link>
              <div className={styles.authorFeedMeta}>
                <span>{formatter.format(authorAndStats.read)} читали</span>
                {!isHovered && (
                  <span>
                    &nbsp;·{" "}
                    {formatDistanceToNow(new Date(authorAndStats.date), {
                      addSuffix: true,
                      locale: ru,
                    })}
                  </span>
                )}
              </div>
            </div>
          </div>

          {isHovered && <button className={styles.button}>Подписаться</button>}
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.cardPartTitle}>{title}</div>

          <div className={styles.cardPartDescription}>{text}</div>
        </div>
      </div>
    </article>
  );
}
