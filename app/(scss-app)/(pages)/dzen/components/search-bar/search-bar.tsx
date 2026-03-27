"use client";

import ExternalLink from "app/components/external-link";
import { clsx } from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import SearchDropdown from "../search-dropdown/search-dropdown";
import styles from "./search-bar.module.scss";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.searchBar}>
      <Link href="/">
        <FaHome size={32} color={"black"} />
      </Link>

      <div
        className={clsx(styles.overlay, { [`${styles.show}`]: open })}
        onClick={() => setOpen(false)}
      />

      {open && <div />}

      <div
        className={clsx(styles.wrapper, { [`${styles.show}`]: open })}
        ref={ref}
      >
        <div className={clsx(styles.content, { [`${styles.show}`]: open })}>
          {open && (
            <button className={styles.hamburgerMenu}>
              <GiHamburgerMenu size={24} />
            </button>
          )}
          <div className={styles.inputWrapper}>
            <FiSearch className={styles.icon} size={24} />

            <input
              type="search"
              placeholder="Найти в дзене"
              value={value}
              onFocus={() => setOpen(true)}
              onChange={(e) => setValue(e.target.value)}
              className={styles.input}
            />
          </div>
          {open && (
            <button
              className={styles.closeButton}
              onClick={() => setOpen(false)}
            >
              <AiOutlineClose size={24} />
            </button>
          )}
        </div>

        <SearchDropdown open={open} />
      </div>
      <ExternalLink href="https://github.com/johnkucharsky?tab=repositories">
        <FaGithub size={32} color={"black"} />
      </ExternalLink>
    </div>
  );
}
