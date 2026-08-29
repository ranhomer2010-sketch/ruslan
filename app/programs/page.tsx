import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { catalog } from "@/lib/catalog";
import { CatalogShell } from "../catalog-shell";

export default function ProgramsPage(){return <CatalogShell><section className="catalog-hero"><p className="eyebrow">Каталог Академии</p><h1>Программы обучения</h1><p>Направления для систематизации практики и развития клинического мышления. Продолжительность, стоимость и документ об обучении публикуются после утверждения каждого семинара.</p></section><section className="catalog-list">{catalog.map((program,index)=><article key={program.slug}><span>0{index+1}</span><div><h2>{program.title}</h2><p>{program.summary}</p></div><Link className="round-link" href={`/programs/${program.slug}`} aria-label={`Подробнее: ${program.title}`}><ArrowRight/></Link></article>)}</section></CatalogShell>}
