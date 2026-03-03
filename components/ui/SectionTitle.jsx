"use client";

import styles from "./SectionTitle.module.scss";
import { useReveal } from "../../lib/useReveal";

export default function SectionTitle({
  title,
  subtitle,
  highlight,
  centered = false,
  dark = false,
  className = "",
  ...props
}) {
  const { ref, isVisible } = useReveal();

  const hasHighlight =
    highlight && typeof title === "string" && title.includes(highlight);

  const parts = hasHighlight ? title.split(highlight) : null;

  return (
    <div
      ref={ref}
      className={[
        styles.container,
        centered && styles.centered,
        dark && styles.dark,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <h2
        className={[styles.title, "fade-in-up", isVisible && "visible"]
          .filter(Boolean)
          .join(" ")}
      >
        {parts ? (
          <>
            {parts[0]}
            <span className={styles.highlight}>{highlight}</span>
            {parts.slice(1).join(highlight)}
          </>
        ) : (
          title
        )}
      </h2>
    </div>
  );
}
