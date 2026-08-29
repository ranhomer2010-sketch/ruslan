import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { catalog, getProgram } from "@/lib/catalog";
import { CatalogShell } from "../../catalog-shell";

export function generateStaticParams(){return catalog.map((program)=>({slug:program.slug}));}

export default async function ProgramPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const program=getProgram(slug);
  if(!program) notFound();
  return <CatalogShell><section className="detail-hero"><Link className="back-link" href="/programs">← Все программы</Link><p className="eyebrow">Очная программа</p><h1>{program.title}</h1><p>{program.summary}</p><div className="detail-meta"><span><MapPin size={17}/> Москва</span><span>Дата и цена уточняются</span></div></section><section className="detail-grid"><article><p className="eyebrow">Кому подойдёт</p><h2>Для осознанного развития практики</h2><p>{program.audience}</p><p>{program.result}</p></article><article className="topic-card"><p className="eyebrow">В программе</p><ul>{program.topics.map((topic)=><li key={topic}><Check size={18}/>{topic}</li>)}</ul></article></section><section className="detail-cta"><div><h2>Уточнить ближайший поток</h2><p>Менеджер подтвердит требования, дату, стоимость и документ до оплаты.</p></div><a className="button button-light" href="tel:+79151878047">Позвонить <ArrowRight size={18}/></a></section></CatalogShell>;
}
