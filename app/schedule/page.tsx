import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { catalog } from "@/lib/catalog";
import { CatalogShell } from "../catalog-shell";

export default function SchedulePage(){return <CatalogShell><section className="catalog-hero"><p className="eyebrow">Расписание</p><h1>Ближайшие семинары</h1><p>Публикуем только подтверждённые даты и цены. Сейчас календарь готовится, менеджер может сообщить статус набора по телефону.</p></section><section className="schedule-list">{catalog.map((program)=><article key={program.slug}><div><span className="date-placeholder">Дата уточняется</span><h2>{program.title}</h2><p><MapPin size={15}/> Москва, ул. Таганская, 36к2</p></div><Link className="round-link" href={`/programs/${program.slug}`}><ArrowRight/></Link></article>)}</section></CatalogShell>}
