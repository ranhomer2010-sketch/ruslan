import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Академия Руслана Шипицына | Практическое обучение",
  description: "Очные программы по массажу, остеокоррекции, клинической кинезиологии и прикладным методам восстановления в Москве.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="ru"><body>{children}</body></html>;
}
