"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa6";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import {
  MdKeyboardArrowDown,
  MdOutlineBookmarkBorder,
  MdOutlineOndemandVideo,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { PiArticleNyTimesLight } from "react-icons/pi";
import { RiBearSmileLine } from "react-icons/ri";
import { TfiCheckBox } from "react-icons/tfi";

import Divider from "../divider/divider";
import styles from "./navigation.module.scss";

enum Tabs {
  HOME,
  SUBSCRIPTIONS,
  SEARCH,
  NEWS,
  ARTICLES,
  VIDEO,
  CLIPS,
  SAVED,
  GAMES,
  KIDS,
}

const navItems = [
  { tab: Tabs.HOME, icon: <AiOutlineHome size={24} />, text: "Главная" },
  {
    tab: Tabs.SUBSCRIPTIONS,
    icon: <TfiCheckBox size={24} />,
    text: "Подписки",
  },
  {
    tab: Tabs.SEARCH,
    icon: <HiOutlineMagnifyingGlass size={24} />,
    text: "Найти",
  },
  { tab: Tabs.NEWS, icon: <FaGlobe size={24} />, text: "Новости" },
  {
    tab: Tabs.ARTICLES,
    icon: <PiArticleNyTimesLight size={24} />,
    text: "Статьи",
  },
  {
    tab: Tabs.VIDEO,
    icon: <MdOutlineOndemandVideo size={24} />,
    text: "Видео",
  },
  {
    tab: Tabs.CLIPS,
    icon: <MdOutlineVideoLibrary size={24} />,
    text: "Ролики",
  },
  {
    tab: Tabs.SAVED,
    icon: <MdOutlineBookmarkBorder size={24} />,
    text: "Сохранённое",
  },
];

export default function Navigation() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.HOME);

  return (
    <nav className={styles.nav}>
      <ul>
        {navItems.map(({ tab, icon, text }) => (
          <LinkItem
            key={tab}
            icon={icon}
            text={text}
            onClick={() => setActiveTab(tab)}
            isActive={activeTab === tab}
          />
        ))}
        <Divider />
        <LinkItem
          icon={<IoGameControllerOutline size={24} />}
          text={"Видеоигры"}
          onClick={() => setActiveTab(Tabs.GAMES)}
          isActive={activeTab === Tabs.GAMES}
        />
        <LinkItem
          icon={<RiBearSmileLine size={24} />}
          text={"Детям"}
          onClick={() => setActiveTab(Tabs.KIDS)}
          isActive={activeTab === Tabs.KIDS}
        />
        <Divider className={"up-2xl"} />

        <div className={clsx(styles.secondaryLinksContainer, "up-grid-2xl")}>
          <Link href={"/"} className={styles.secondaryLink}>
            Всё о Дзене
          </Link>
          <Link href={"/"} className={styles.secondaryLink}>
            Вакансии
          </Link>
          <span className={styles.textNotLink}>
            Дзен на &nbsp;
            <Link href={"/"} className={styles.secondaryLink}>
              iOS и Android
            </Link>
          </span>
          <button className={styles.more}>
            Ещё <MdKeyboardArrowDown size={16} />
          </button>
        </div>
      </ul>
    </nav>
  );
}

const LinkItem = ({
  icon,
  text,
  onClick,
  isActive,
}: {
  icon: ReactNode;
  text: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={clsx(styles.tab, { [`${styles.active}`]: isActive })}
      >
        {icon}
        <span className={clsx(styles.text, "up-2xl")}>{text}</span>
      </button>
    </li>
  );
};
