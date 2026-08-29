"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, MapPin, MessageCircle, Phone, ShieldCheck, Stethoscope } from "lucide-react";

const programs = [
  ["Современный подход в массаже", "Системная работа с мягкими тканями, движением и клиническим мышлением.", "mint", "modern-massage"],
  ["Остеокоррекция и психосоматика", "Практический взгляд на взаимосвязь телесных паттернов и состояния человека.", "sand", "osteocorrection-psychosomatics"],
  ["Клиническая кинезиология", "Алгоритмы оценки и последовательного выбора коррекционной техники.", "blue", "clinical-kinesiology"],
  ["Иглорефлексотерапия", "Очная практика под руководством преподавателя и разбор рабочих протоколов.", "navy", "reflexology"],
  ["Ортопедическая биомеханика стопы", "Оценка опоры и влияния стопы на движение всего тела.", "sand", "foot-biomechanics"],
  ["Висцеральная остеокоррекция", "Безопасные прикладные техники и понимание показаний и ограничений.", "mint", "visceral-osteocorrection"],
] as const;

const faq = [
  ["Для кого предназначено обучение?", "Для специалистов с профильной подготовкой и практиков, которые хотят систематизировать знания. Требования зависят от программы, менеджер уточнит их до записи."],
  ["Где проходят семинары?", "Основная площадка находится в Москве: улица Таганская, 36к2. Город и точный адрес всегда подтверждаются для конкретного потока."],
  ["Как записаться и оплатить?", "Оставьте контакт для связи в MAX или позвоните. После подтверждения программы менеджер направит ссылку на оплату российского банка. На сайте и в мессенджере данные карты не запрашиваются."],
  ["Будет ли документ об обучении?", "Тип документа зависит от программы и юридической модели обучения. До оплаты менеджер обязан подтвердить точное наименование документа и условия его выдачи."],
] as const;

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="prototype-note">Первый рабочий прототип. Даты, цены и юридические реквизиты будут опубликованы после подтверждения Академией.</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="На главную"><span className="brand-mark">А</span><span><b>Академия</b><small>Руслана Шипицына</small></span></a>
        <nav aria-label="Главная навигация"><a href="#programs">Программы</a><a href="#approach">Об Академии</a><a href="#faq">Вопросы</a></nav>
        <button className="button button-small" onClick={() => setOpen(true)}>Подобрать обучение</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Stethoscope size={17} /> Практическое обучение специалистов</p>
          <h1>Знания, которые переходят <em>в руки</em></h1>
          <p className="lead">Очные программы по прикладным методам восстановления. Понятная система, много практики и работа с преподавателем.</p>
          <div className="hero-actions"><button className="button" onClick={() => setOpen(true)}>Подобрать программу <ArrowRight size={18} /></button><a className="text-link" href="#programs">Смотреть направления <ChevronRight size={17} /></a></div>
          <ul className="proof-list" aria-label="Преимущества"><li><Check size={16} /> Очный формат</li><li><Check size={16} /> Практика в малых группах</li><li><Check size={16} /> Москва</li></ul>
        </div>
        <div className="hero-visual">
          <div className="image-frame"><img src="https://static.tildacdn.com/tild6531-6665-4632-b839-316639363136/Group_266.png" alt="Практическое занятие в Академии" referrerPolicy="no-referrer" /></div>
          <div className="floating-card"><span className="status-dot" /> Набор в группы открыт<b>Расписание уточняется</b><small>Оставьте контакт, чтобы узнать дату ближайшего потока</small></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Принципы обучения"><div><b>Практика</b><span>отработка техник на занятиях</span></div><div><b>Система</b><span>от оценки к понятному алгоритму</span></div><div><b>Безопасность</b><span>показания и ограничения методов</span></div></section>

      <section className="section" id="programs">
        <div className="section-heading"><div><p className="eyebrow">Направления</p><h2>Выберите точку роста</h2></div><p>Каждая программа сочетает теорию, демонстрацию и практическую отработку. Актуальная дата и стоимость закрепляются за конкретным семинаром.</p></div>
        <div className="program-grid">
          {programs.map(([title, text, tone, slug], index) => <article className={`program-card ${tone}`} key={title}><span className="program-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link className="card-link" href={`/programs/${slug}`}>Подробнее о программе <ArrowRight size={17} /></Link></article>)}
        </div>
      </section>

      <section className="section approach" id="approach">
        <div className="approach-intro"><p className="eyebrow">Подход Академии</p><h2>Не набор приёмов, а профессиональная логика</h2><p>Обучение строится вокруг анализа, выбора метода и безопасного применения. Цель программы: дать специалисту рабочий алгоритм, который можно осознанно использовать в практике.</p><button className="button button-light" onClick={() => setOpen(true)}>Обсудить программу</button></div>
        <ol className="steps"><li><span>01</span><div><b>Разобраться</b><p>Понять биомеханику, связи и ограничения метода.</p></div></li><li><span>02</span><div><b>Увидеть</b><p>Наблюдать демонстрацию и логику действий преподавателя.</p></div></li><li><span>03</span><div><b>Отработать</b><p>Выполнить технику и получить корректирующую обратную связь.</p></div></li></ol>
      </section>

      <section className="section founder">
        <div className="founder-photo"><div className="monogram">РШ</div><span>Фото преподавателя будет добавлено после согласования</span></div>
        <div className="founder-copy"><p className="eyebrow">Основатель и преподаватель</p><h2>Руслан Шипицын</h2><p className="founder-role">Травматолог-ортопед, мануальный терапевт, преподаватель</p><blockquote>«Сильная практика начинается там, где специалист понимает, почему выбирает конкретное действие».</blockquote><p className="fine-print">Формулировка цитаты и расширенная биография требуют подтверждения перед финальным запуском.</p></div>
      </section>

      <section className="section faq" id="faq"><div><p className="eyebrow">Перед записью</p><h2>Ответы на частые вопросы</h2></div><div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="section cta"><div><p className="eyebrow">Поможем с выбором</p><h2>Найдите программу под вашу практику</h2></div><p>Расскажите, с какими задачами вы работаете. Менеджер уточнит уровень подготовки и предложит подходящий поток.</p><button className="button button-light" onClick={() => setOpen(true)}>Оставить контакт <ArrowRight size={18} /></button></section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">А</span><span><b>Академия</b><small>Руслана Шипицына</small></span></div>
        <div className="footer-contact"><a href="tel:+79151878047"><Phone size={16} /> +7 915 187-80-47</a><span><MapPin size={16} /> Москва, ул. Таганская, 36к2</span></div>
        <div className="footer-legal"><Link href="/programs">Все программы</Link><Link href="/schedule">Расписание</Link><Link href="/privacy">Политика конфиденциальности</Link><Link href="/personal-data">Согласие на обработку данных</Link><Link href="/marketing-consent">Согласие на рекламу</Link></div>
        <p className="copyright">© {new Date().getFullYear()} Академия Руслана Шипицына. Информация на сайте не является медицинской рекомендацией.</p>
      </footer>
      {open && <ContactDialog onClose={() => setOpen(false)} />}
    </main>
  );
}

function ContactDialog({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (consent) setSent(true); }

  return <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}><section className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onMouseDown={(event) => event.stopPropagation()}><button className="dialog-close" onClick={onClose} aria-label="Закрыть">×</button>{sent ? <div className="success"><span><Check size={26} /></span><h2 id="dialog-title">Прототип формы проверен</h2><p>На этом этапе данные никуда не отправлялись. После подключения российской CRM менеджер сможет получать заявки и продолжать диалог в MAX.</p><a className="button" href="tel:+79151878047"><Phone size={18} /> Позвонить в Академию</a></div> : <form onSubmit={submit}><p className="eyebrow"><MessageCircle size={16} /> Связь с менеджером</p><h2 id="dialog-title">Подберём программу</h2><p className="dialog-lead">Оставьте данные для проверки сценария. В публичном прототипе отправка отключена до подключения российской CRM.</p><label>Имя<input name="name" autoComplete="name" placeholder="Как к вам обращаться" required /></label><label>Телефон<input name="phone" type="tel" autoComplete="tel" placeholder="+7 900 000-00-00" required /></label><fieldset><legend>Как удобнее связаться</legend><label className="radio"><input type="radio" name="channel" defaultChecked /> MAX</label><label className="radio"><input type="radio" name="channel" /> Телефон</label></fieldset><label className="consent"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} /><span>Я принимаю <Link href="/personal-data" target="_blank">согласие на обработку персональных данных</Link>. Не указывайте диагнозы и сведения о здоровье.</span></label><button className="button submit" disabled={!consent} type="submit">Проверить форму <ArrowRight size={18} /></button><p className="privacy-note"><ShieldCheck size={15} /> Рекламное согласие не включено в обязательное поле и оформляется отдельно.</p></form>}</section></div>;
}
