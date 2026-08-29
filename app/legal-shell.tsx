import Link from "next/link";
import type { ReactNode } from "react";

export function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  return <main className="legal-page"><div className="legal-wrap"><Link className="back-link" href="/">← Вернуться на главную</Link><article className="legal-card"><span className="draft-badge">ПРОЕКТ ДОКУМЕНТА</span><h1>{title}</h1><p><b>Важно:</b> перед запуском сбора данных документ необходимо дополнить реквизитами оператора, перечнем российских обработчиков и утвердить с юристом.</p>{children}</article></div></main>;
}
