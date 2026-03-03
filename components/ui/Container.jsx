"use client";

export default function Container({
  children,
  className = "",
  size = "default",
  as: Tag = "div",
  style,
  ...props
}) {
  const maxWidths = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    default: 1280,
    full: null,
  };

  const maxWidth = maxWidths[size] ?? maxWidths.default;

  return (
    <Tag
      className={`container ${className}`.trim()}
      style={{
        ...(maxWidth ? { maxWidth: `${maxWidth}px` } : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
