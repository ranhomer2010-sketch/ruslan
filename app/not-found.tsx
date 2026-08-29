import Link from "next/link";

export default function NotFound(){return <main className="legal-page"><div className="legal-wrap"><article className="legal-card"><span className="draft-badge">404</span><h1>Страница не найдена</h1><p>Возможно, адрес изменился или раздел ещё готовится.</p><Link className="button" href="/">На главную</Link></article></div></main>}
