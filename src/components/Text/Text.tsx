import style from "./Text.module.css";

interface TextProps {
  children: React.ReactNode;
  textAlign?: "start" | "end" | "center" | "justify";
  marginBottom?: "0" | "10" | "20";
}

export default function Text({
  children,
  textAlign = "start",
  marginBottom = "0",
}: TextProps) {
  const classNames = [
    style.text,
    textAlign && style[textAlign],
    marginBottom && style[`marginBottom${marginBottom}`],
  ]
    .filter(Boolean)
    .join(" ");

  return <p className={classNames}>{children}</p>;
}
