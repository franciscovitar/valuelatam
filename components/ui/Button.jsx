"use client";

import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  href,
  type,
  onClick,
  ...props
}) {
  const isDisabled = disabled || loading;

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    loading && styles.loading,
    isDisabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e) => {
    if (isDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  // Links
  if (href) {
    const isInternal = href.startsWith("/") && !href.startsWith("//");

    const sharedLinkProps = {
      className: classes,
      onClick: handleClick,
      "aria-disabled": isDisabled ? "true" : undefined,
      tabIndex: isDisabled ? -1 : undefined,
      ...props,
    };

    if (isInternal) {
      return (
        <Link href={href} {...sharedLinkProps}>
          {loading && <span className={styles.spinner} aria-hidden="true" />}
          <span className={styles.content}>{children}</span>
        </Link>
      );
    }

    return (
      <a href={href} {...sharedLinkProps}>
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        <span className={styles.content}>{children}</span>
      </a>
    );
  }

  // Button
  return (
    <button
      type={type ?? "button"}
      className={classes}
      disabled={isDisabled}
      onClick={handleClick}
      {...props}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      <span className={styles.content}>{children}</span>
    </button>
  );
}
