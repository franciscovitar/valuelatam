"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../public/logoOriginal.png";
import Container from "./ui/Container";
import Button from "./ui/Button";
import styles from "./Header.module.scss";
import { navigation } from "../lib/data";

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const isPathActive = (href) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Scroll: cheap + avoids too many state updates
  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const next = window.scrollY > 18;
        setIsScrolled((prev) => (prev === next ? prev : next));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll (restore previous)
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);

  // Close on route change
  useEffect(() => {
    closeAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close on ESC + click outside
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeAll();
    };

    const onMouseDown = (e) => {
      const el = headerRef.current;
      if (!el) return;
      if (!el.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((v) => {
      const next = !v;
      if (!next) setOpenDropdown(null);
      return next;
    });
  };

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <Container>
        <div className={styles.content}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Ir a inicio">
            <div className={styles.logoIcon}>
              <Image
                src={Logo}
                alt="Value Latam"
                priority
                className={styles.logoImg}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Navegación principal">
            {navigation.map((item) => {
              const hasChildren = Array.isArray(item.children);
              const dropdownActive =
                hasChildren && item.children.some((c) => isPathActive(c.href));
              const itemActive = !hasChildren && isPathActive(item.href);

              return (
                <div
                  key={item.name}
                  className={styles.navItem}
                  onMouseEnter={
                    hasChildren ? () => setOpenDropdown(item.name) : undefined
                  }
                  onMouseLeave={
                    hasChildren ? () => setOpenDropdown(null) : undefined
                  }
                >
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        className={`${styles.navLink} ${
                          dropdownActive ? styles.active : ""
                        }`}
                        onClick={() => toggleDropdown(item.name)}
                        aria-expanded={openDropdown === item.name}
                        aria-haspopup="menu"
                        aria-controls={`dropdown-${item.name}`}
                      >
                        {item.name}
                        <svg
                          className={`${styles.chevron} ${
                            openDropdown === item.name ? styles.open : ""
                          }`}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 6l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {openDropdown === item.name && (
                        <div
                          id={`dropdown-${item.name}`}
                          className={styles.dropdown}
                          role="menu"
                        >
                          {item.children.map((child) => {
                            const childActive = isPathActive(child.href);
                            return (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`${styles.dropdownLink} ${
                                  childActive ? styles.dropdownActive : ""
                                }`}
                                role="menuitem"
                                aria-current={childActive ? "page" : undefined}
                                onClick={() => setOpenDropdown(null)}
                              >
                                <span className={styles.dropdownTitle}>
                                  {child.name}
                                </span>
                                {child.description && (
                                  <span className={styles.dropdownDesc}>
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={`${styles.navLink} ${
                        itemActive ? styles.active : ""
                      }`}
                      aria-current={itemActive ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className={styles.cta}>
            <Button href="/contacto" size="sm">
              Agendar una llamada
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`${styles.hamburger} ${
                isMobileMenuOpen ? styles.open : ""
              }`}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <button
            type="button"
            className={styles.overlay}
            onClick={toggleMobileMenu}
            aria-label="Cerrar menú"
          />
          <aside className={styles.mobileMenu} aria-label="Menú móvil">
            <div className={styles.mobileMenuContent}>
              <nav className={styles.mobileNav}>
                {navigation.map((item) => {
                  const hasChildren = Array.isArray(item.children);
                  const dropdownActive =
                    hasChildren &&
                    item.children.some((c) => isPathActive(c.href));
                  const itemActive = !hasChildren && isPathActive(item.href);

                  return (
                    <div key={item.name} className={styles.mobileNavItem}>
                      {hasChildren ? (
                        <>
                          <button
                            type="button"
                            className={`${styles.mobileNavLink} ${
                              dropdownActive ? styles.activeMobile : ""
                            }`}
                            onClick={() => toggleDropdown(item.name)}
                            aria-expanded={openDropdown === item.name}
                          >
                            {item.name}
                            <svg
                              className={`${styles.chevron} ${
                                openDropdown === item.name ? styles.open : ""
                              }`}
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M4 6l4 4 4-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          {openDropdown === item.name && (
                            <div className={styles.mobileSubMenu}>
                              {item.children.map((child) => {
                                const childActive = isPathActive(child.href);
                                return (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className={`${styles.mobileSubLink} ${
                                      childActive ? styles.activeSub : ""
                                    }`}
                                    aria-current={
                                      childActive ? "page" : undefined
                                    }
                                    onClick={closeAll}
                                  >
                                    {child.name}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          className={`${styles.mobileNavLink} ${
                            itemActive ? styles.activeMobile : ""
                          }`}
                          aria-current={itemActive ? "page" : undefined}
                          onClick={closeAll}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className={styles.mobileCta}>
                <Button href="/contacto" size="md">
                  Agendar una llamada
                </Button>
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
