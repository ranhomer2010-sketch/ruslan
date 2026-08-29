import Link from "next/link";
import type { ReactNode } from "react";
import { Phone } from "lucide-react";

export function CatalogShell({ children }: { children: ReactNode }) {
  return <main className="catalog-page"><header className="site-header inner-header"><Link className="brand" href="/"><span className="brand-mark">А</span><span><b>Академия</b><small>Руслана Шипицына</small></span></Link><nav><Link href="/programs">Программы</Link><Link href="/schedule">Расписание</Link><Link href="/#faq">Вопросы</Link></nav><a className="button button-small" href="tel:+79151878047"><Phone size={15}/> Позвонить</a></header>{children}<footer className="inner-footer"><div className="brand"><span className="brand-mark">А</span><span><b>Академия</b><small>Руслана Шипицына</small></span></div><p>Москва, ул. Таганская, 36к2<br/>+7 915 187-80-47</p><div className="footer-legal"><Link href="/privacy">Конфиденциальность</Link><Link href="/personal-data">Персональные данные</Link></div></footer></main>;
}
