import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO =
  "https://cdn.poehali.dev/projects/b071f7ce-a3a3-4291-ae4f-4838366629c0/bucket/0e98e1ab-5023-43d7-af41-64828dccf267.jpg";
const IMG_FLYING_DRONE =
  "https://cdn.poehali.dev/projects/b071f7ce-a3a3-4291-ae4f-4838366629c0/files/193a68da-f6db-45a5-be52-0939c75573c9.jpg";
const IMG_DRONE_HERO =
  "https://cdn.poehali.dev/projects/b071f7ce-a3a3-4291-ae4f-4838366629c0/files/c0a80799-9679-4bb2-ad89-a92c5f5991fc.jpg";
const IMG_DRONE2 =
  "https://cdn.poehali.dev/projects/b071f7ce-a3a3-4291-ae4f-4838366629c0/files/c06ca9ed-a35a-469c-a1c4-a9515abb19ff.jpg";
const IMG_BATTERY =
  "https://cdn.poehali.dev/projects/b071f7ce-a3a3-4291-ae4f-4838366629c0/files/181e9320-5a18-4a93-9e88-567d23368650.jpg";
const IMG_BATTERIES_REAL =
  "https://cdn.poehali.dev/projects/b071f7ce-a3a3-4291-ae4f-4838366629c0/files/fe6ad2f0-26c4-4b62-8b16-7a493e8ed01d.jpg";

const navItems = [
  { id: "about",      label: "О компании" },
  { id: "production", label: "Производство" },
  { id: "catalog",    label: "Ассортимент" },
  { id: "logistics",  label: "Логистика" },
  { id: "contact",    label: "Контакты" },
];

const advantages = [
  { icon: "Factory",      title: "Собственное производство", desc: "Литий-ионные АКБ в России с полным контролем качества" },
  { icon: "Warehouse",    title: "Склад в России",           desc: "Ликвидные комплектующие всегда в наличии" },
  { icon: "PackageCheck", title: "Прямые поставки",          desc: "Доставка из Китая без посредников за 1–3 недели" },
  { icon: "Handshake",    title: "Индивидуальный подход",    desc: "Поставляем детали по вашим техническим заданиям" },
];

const batteries = [
  { model: "6S3P", cap: "12 000 мАч", desc: "Пример исполнения. Ёмкость и конфигурация — под ваше ТЗ" },
  { model: "6S2P", cap: "8 000 мАч",  desc: "Пример исполнения. Облегчённые сборки для лёгких дронов" },
  { model: "6S2P", cap: "16 000 мАч", desc: "Пример исполнения. Любая ёмкость под специфику проекта" },
];

const catalog = [
  { icon: "BatteryFull", title: "Аккумуляторы",             desc: "Литий-ионные (собств. пр-во), LiPo и литий-титановые" },
  { icon: "Cpu",         title: "Полётные контроллеры",     desc: "Системы управления полётом для всех типов БПЛА" },
  { icon: "Camera",      title: "Оптические системы",       desc: "Камеры CADXX и другие оптические решения" },
  { icon: "Settings2",   title: "Исполнительные механизмы", desc: "Сервоприводы, моторы, механизмы управления" },
  { icon: "Satellite",   title: "Навигация",                desc: "GPS-модули, оптоволокно, навигационное оборудование" },
  { icon: "Radio",       title: "Системы связи",            desc: "Надёжные каналы передачи данных и телеметрии" },
];

const steps = [
  { day: "День 1–2",   title: "Формирование заказа",     desc: "Согласование спецификации и условий поставки" },
  { day: "День 3–7",   title: "Оплата и отгрузка",       desc: "Прямая закупка у производителя без посредников" },
  { day: "День 8–14",  title: "Таможенное оформление",   desc: "Профессиональное сопровождение груза через границу" },
  { day: "День 15–21", title: "Доставка клиенту",        desc: "Транспортировка в любую точку России" },
];

const partners = ["CADXX", "HOBBYWING", "Brother Hobby", "FOXEER"];

export default function Index() {
  const [active, setActive] = useState("hero");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--black))", color: "hsl(var(--light))" }}>

      {/* ═══════════════ ЛЕТЯЩИЙ ДРОН (фоновый слой) ═══════════════ */}
      <div className="fixed inset-0 z-10 overflow-hidden" style={{ pointerEvents: "none" }}>
        <div className="drone-fly absolute" style={{ top: "18%", left: "5%" }}>
          <div className="drone-hover">
            <img
              src={IMG_FLYING_DRONE}
              alt=""
              className="drone-glow"
              style={{ width: "180px", opacity: 0.22, mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </div>

      {/* ═══════════════ ШАПКА ═══════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "hsl(0 0% 4% / 0.97)", borderBottom: "1px solid hsl(var(--black-border))" }}>
        {/* Золотая полоса сверху */}
        <div className="gold-stripe w-full" />

        {/* Верхняя строка: логотип на всю ширину */}
        <div className="w-full flex items-center justify-between px-5 md:px-12 py-2" style={{ borderBottom: "1px solid hsl(var(--black-border))" }}>
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-0">
            <img src={LOGO} alt="СВ-ТехноГрупп" className="h-16 w-auto object-contain" style={{ filter: "drop-shadow(0 0 8px hsl(213 85% 48% / 0.3))" }} />
          </button>

          {/* Правая часть шапки */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:89867419924" className="flex items-center gap-2 group">
              <Icon name="Phone" size={13} style={{ color: "hsl(var(--gold))" }} />
              <span className="text-xs text-white/60 group-hover:text-white transition-colors">8-986-741-99-24</span>
            </a>
            <div className="w-px h-4" style={{ background: "hsl(var(--black-border))" }} />
            <a href="tel:89953137526" className="flex items-center gap-2 group">
              <Icon name="Phone" size={13} style={{ color: "hsl(var(--gold))" }} />
              <span className="text-xs text-white/60 group-hover:text-white transition-colors">8-995-313-75-26</span>
            </a>
            <button onClick={() => scrollTo("contact")} className="btn-gold py-2 px-5 text-[11px]">Запрос КП</button>
          </div>

          <button className="md:hidden text-white/60" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Нижняя строка: навигация */}
        <div className="hidden md:flex items-center gap-8 px-12 h-9">
          {navItems.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)}
              className={`nav-item h-full flex items-center relative ${active === n.id ? "active" : ""}`}>
              {n.label}
              {active === n.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "hsl(var(--gold))" }} />
              )}
            </button>
          ))}
        </div>

        {/* Мобильное меню */}
        {menuOpen && (
          <div style={{ background: "hsl(var(--black-card))", borderBottom: "1px solid hsl(var(--black-border))" }} className="md:hidden px-5 pb-4">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className="block w-full text-left py-3 nav-item text-sm border-b"
                style={{ borderColor: "hsl(var(--black-border))" }}>
                {n.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} className="btn-gold w-full mt-4 text-center text-[11px] py-2.5">Запрос КП</button>
          </div>
        )}
      </header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section id="hero" className="relative min-h-screen flex items-end overflow-hidden" style={{ paddingTop: "120px" }}>
        {/* Фон — дроны */}
        <div className="absolute inset-0">
          <img src={IMG_DRONE_HERO} alt="" className="w-full h-full object-cover" style={{ opacity: 0.35 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsl(0 0% 4% / 0.6) 0%, hsl(0 0% 4% / 0.3) 40%, hsl(0 0% 4% / 0.9) 85%, hsl(0 0% 4%) 100%)" }} />
          {/* Синяя подсветка */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 70% 40%, hsl(213 85% 48% / 0.12), transparent)" }} />
        </div>

        {/* Вертикальная золотая полоса */}
        <div className="absolute left-8 top-0 bottom-0 hidden lg:block gold-stripe-v opacity-30" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-12 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="section-tag animate-fade-in d1">Поставщик компонентов для БПЛА</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-5 animate-fade-in d2">
              Движущая сила<br />
              <span style={{ color: "hsl(var(--gold))" }}>ваших дронов</span>
            </h1>

            {/* Синяя разделительная полоса */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in d2">
              <div className="h-0.5 w-12" style={{ background: "hsl(var(--gold))" }} />
              <div className="h-0.5 w-24" style={{ background: "hsl(var(--blue))" }} />
              <div className="h-0.5 w-6" style={{ background: "hsl(var(--blue) / 0.3)" }} />
            </div>

            <p className="text-white/55 text-lg font-light leading-relaxed mb-10 animate-fade-in d3">
              Прямые поставки высокотехнологичных комплектующих для БПЛА из Китая без посредников.<br />
              Собственное производство литий-ионных АКБ в России.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in d4">
              <button onClick={() => scrollTo("contact")} className="btn-gold">Запросить КП</button>
              <button onClick={() => scrollTo("catalog")} className="btn-outline">Ассортимент</button>
            </div>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-3 gap-0 mt-16 max-w-lg animate-fade-in d5">
            {[
              { val: "1–3", unit: " нед", label: "срок поставки" },
              { val: "0",   unit: "",     label: "посредников" },
              { val: "4+",  unit: "",     label: "бренда-партнёра" },
            ].map((f, i) => (
              <div key={f.label} className="pr-8" style={i > 0 ? { borderLeft: "1px solid hsl(var(--black-border))", paddingLeft: "2rem" } : {}}>
                <div className="font-display text-3xl font-bold text-white">
                  {f.val}<span style={{ color: "hsl(var(--gold))" }}>{f.unit}</span>
                </div>
                <div className="text-xs text-white/35 mt-1 uppercase tracking-widest">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ О КОМПАНИИ ═══════════════ */}
      <section id="about" style={{ background: "hsl(var(--black-card))" }}>
        {/* Декоративная полоса */}
        <div className="gold-stripe w-full" />
        <div className="py-24 max-w-7xl mx-auto px-5 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-tag">О компании</p>
              <h2 className="section-title">Надёжный партнёр<br />в области БПЛА</h2>
              <div className="divider" />
              <p className="text-white/60 leading-relaxed mb-5 font-light">
                ООО «СВ-ТехноГрупп» — российская компания, специализирующаяся на комплексном снабжении комплектующими для дронов и производстве аккумуляторных решений.
              </p>
              <p className="text-white/60 leading-relaxed mb-5 font-light">
                Ключевое преимущество — <span className="text-white font-medium">прямые поставки из Китая без посредников</span>. Лучшие цены, сокращение сроков и строгий контроль качества на всех этапах логистики.
              </p>
              <p className="text-white/60 leading-relaxed font-light">
                Также производим литий-ионные АКБ собственного производства в Московской области и поставляем литий-полимерные и литий-титановые батареи от ведущих мировых брендов.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {advantages.map((a) => (
                <div key={a.title} className="dark-card">
                  <div className="w-9 h-9 flex items-center justify-center mb-4"
                    style={{ background: "hsl(var(--blue) / 0.1)", border: "1px solid hsl(var(--blue) / 0.2)" }}>
                    <Icon name={a.icon} fallback="Star" size={16} style={{ color: "hsl(var(--gold))" }} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-white mb-1">{a.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ПРОИЗВОДСТВО ═══════════════ */}
      <section id="production" style={{ background: "hsl(var(--black))" }}>
        <div className="gold-stripe w-full" />
        <div className="py-24 max-w-7xl mx-auto px-5 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Фото */}
            <div className="space-y-3 order-2 md:order-1">
              <div className="relative overflow-hidden" style={{ border: "1px solid hsl(var(--black-border))" }}>
                <img src={IMG_BATTERY} alt="Производство АКБ" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(0 0% 4% / 0.7) 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs tracking-widest uppercase text-white/60">Производство · Московская область</span>
                </div>
                {/* Синяя рамка-акцент */}
                <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: "2px solid hsl(var(--gold))", borderLeft: "2px solid hsl(var(--gold))" }} />
                <div className="absolute bottom-0 right-0 w-8 h-8" style={{ borderBottom: "2px solid hsl(var(--blue))", borderRight: "2px solid hsl(var(--blue))" }} />
              </div>
              <div className="relative overflow-hidden" style={{ border: "1px solid hsl(var(--black-border))" }}>
                <img src={IMG_BATTERIES_REAL} alt="Аккумуляторы" className="w-full object-cover" style={{ aspectRatio: "16/7" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(0 0% 4% / 0.6) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs tracking-widest uppercase text-white/60">Продукция собственного производства</span>
                </div>
              </div>
            </div>

            {/* Текст */}
            <div className="order-1 md:order-2">
              <p className="section-tag">Производство</p>
              <h2 className="section-title">Аккумуляторы<br />российского производства</h2>
              <div className="divider" />
              <p className="text-white/60 leading-relaxed mb-8 font-light">
                Производим литий-ионные аккумуляторы в Московской области с жёстким многоступенчатым контролем качества. Вся продукция соответствует российским стандартам и требованиям для государственных закупок.
              </p>

              {/* Линейка АКБ */}
              <div className="space-y-2 mb-8">
                {batteries.map((b) => (
                  <div key={b.cap} className="flex items-center gap-4 p-4 transition-all duration-200"
                    style={{ background: "hsl(var(--black-card))", border: "1px solid hsl(var(--black-border))" }}>
                    <div className="flex-shrink-0 w-28">
                      <div className="font-display text-lg font-bold text-white">{b.cap}</div>
                      <div className="text-xs mt-0.5" style={{ color: "hsl(var(--gold))" }}>{b.model}</div>
                    </div>
                    <div className="w-px h-10" style={{ background: "hsl(var(--black-border))" }} />
                    <p className="text-xs text-white/50 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>

              {/* Характеристики */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "ShieldCheck", title: "Контроль качества",    desc: "Многоступенчатая проверка на каждом этапе" },
                  { icon: "Wrench",      title: "Под ваше ТЗ",          desc: "Любая ёмкость и конфигурация под заказчика" },
                  { icon: "FileCheck",   title: "Сертификация",          desc: "Госзакупки, полный пакет документов" },
                  { icon: "MapPin",      title: "Россия",                desc: "Производство в Московской области" },
                ].map((c) => (
                  <div key={c.title} className="p-4" style={{ background: "hsl(var(--black-card2))", border: "1px solid hsl(var(--black-border))" }}>
                    <Icon name={c.icon} fallback="Info" size={15} style={{ color: "hsl(var(--blue))" }} className="mb-2" />
                    <div className="text-xs font-semibold text-white mb-0.5">{c.title}</div>
                    <p className="text-xs text-white/40 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ДРОНЫ / ФОТО ═══════════════ */}
      <section style={{ background: "hsl(var(--black-card))" }}>
        <div className="gold-stripe w-full" />
        <div className="relative overflow-hidden" style={{ height: "360px" }}>
          <img src={IMG_DRONE2} alt="БПЛА" className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(0 0% 4% / 0.9) 0%, hsl(0 0% 4% / 0.4) 50%, hsl(0 0% 4% / 0.85) 100%)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-5 md:px-12 w-full">
              <div className="max-w-xl">
                <p className="section-tag">Прямые поставки</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                  Комплектующие для БПЛА<br />
                  <span style={{ color: "hsl(var(--gold))" }}>любой сложности</span>
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6 font-light">
                  Полётные контроллеры, оптика, навигация, сервоприводы — поставляем полный ассортимент напрямую от производителей.
                </p>
                <button onClick={() => scrollTo("catalog")} className="btn-gold">Смотреть ассортимент</button>
              </div>
            </div>
          </div>
          {/* Угловые акценты */}
          <div className="absolute top-4 right-4 w-12 h-12" style={{ borderTop: "2px solid hsl(var(--gold) / 0.5)", borderRight: "2px solid hsl(var(--gold) / 0.5)" }} />
          <div className="absolute bottom-4 left-4 w-12 h-12" style={{ borderBottom: "2px solid hsl(var(--blue) / 0.5)", borderLeft: "2px solid hsl(var(--blue) / 0.5)" }} />
        </div>
      </section>

      {/* ═══════════════ АССОРТИМЕНТ ═══════════════ */}
      <section id="catalog" style={{ background: "hsl(var(--black))" }}>
        <div className="gold-stripe w-full" />
        <div className="py-24 max-w-7xl mx-auto px-5 md:px-12">
          <div className="mb-14">
            <p className="section-tag">Ассортимент</p>
            <h2 className="section-title">Полный ассортимент<br />комплектующих для БПЛА</h2>
            <div className="divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {catalog.map((c) => (
              <div key={c.title} className="dark-card group flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{ background: "hsl(var(--black-card2))", border: "1px solid hsl(var(--black-border))" }}>
                  <Icon name={c.icon} fallback="Package" size={16} style={{ color: "hsl(var(--gold))" }} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white mb-1">{c.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Партнёры */}
          <div className="mt-14 pt-10" style={{ borderTop: "1px solid hsl(var(--black-border))" }}>
            <p className="text-xs tracking-[0.3em] uppercase text-white/25 mb-8 text-center">Сотрудничаем</p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              {partners.map((p) => (
                <div key={p} className="font-display text-lg font-bold tracking-widest uppercase" style={{ color: "hsl(var(--slate))" }}>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ЛОГИСТИКА ═══════════════ */}
      <section id="logistics" style={{ background: "hsl(var(--black-card))" }}>
        <div className="gold-stripe w-full" />
        <div className="py-24 max-w-7xl mx-auto px-5 md:px-12">
          <div className="mb-14">
            <p className="section-tag">Логистика</p>
            <h2 className="section-title">Полный цикл поставки<br />из Китая за 1–3 недели</h2>
            <div className="divider" />
          </div>

          {/* Шаги */}
          <div className="grid md:grid-cols-4 gap-px mb-8" style={{ background: "hsl(var(--black-border))" }}>
            {steps.map((s, i) => (
              <div key={s.title} className="p-7" style={{ background: "hsl(var(--black))" }}>
                <div className="font-display text-5xl font-bold mb-3 leading-none" style={{ color: "hsl(var(--gold) / 0.12)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "hsl(var(--gold))" }}>{s.day}</div>
                <h3 className="font-display text-sm font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{s.desc}</p>
                {/* Нижняя полоса-индикатор */}
                <div className="mt-4 h-0.5 w-full" style={{ background: `linear-gradient(90deg, hsl(var(--gold)), hsl(var(--blue) / ${(i + 1) * 0.25}))` }} />
              </div>
            ))}
          </div>

          {/* Склад */}
          <div className="p-8 grid md:grid-cols-3 gap-8 items-start" style={{ background: "hsl(var(--black-card2))", border: "1px solid hsl(var(--black-border))" }}>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 flex items-center justify-center" style={{ background: "hsl(var(--gold))", }}>
                  <Icon name="Warehouse" size={14} className="text-black" />
                </div>
                <span className="font-display text-base font-semibold text-white">Складская программа</span>
              </div>
              <p className="text-xs text-white/45 leading-relaxed">Популярные позиции всегда в наличии для срочных заказов. Формируем персональный складской запас.</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-3 gap-6">
              {[
                { icon: "PackageCheck", title: "Ликвидные позиции", desc: "Стратегический запас востребованных комплектующих" },
                { icon: "Truck",        title: "Быстрая отгрузка",  desc: "Готовность к оперативной доставке под запросы партнёров" },
                { icon: "Users",        title: "Инд. подход",       desc: "Складской запас под потребности конкретного партнёра" },
              ].map((w) => (
                <div key={w.title}>
                  <Icon name={w.icon} fallback="Box" size={15} style={{ color: "hsl(var(--blue))" }} className="mb-2" />
                  <div className="text-xs font-semibold text-white mb-1">{w.title}</div>
                  <p className="text-xs text-white/40 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ КОНТАКТЫ ═══════════════ */}
      <section id="contact" style={{ background: "hsl(var(--black))" }}>
        <div className="gold-stripe w-full" />
        <div className="py-24 max-w-7xl mx-auto px-5 md:px-12">
          <div className="mb-14">
            <p className="section-tag">Контакты</p>
            <h2 className="section-title">Свяжитесь с нами</h2>
            <div className="divider" />
            <p className="text-white/45 text-sm max-w-lg">
              Работаем с государственными заказчиками, интеграторами и B2B клиентами. Предоставляем полный пакет документов для участия в тендерах.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Контакты */}
            <div className="space-y-8">
              {[
                {
                  role: "Генеральный директор",
                  contacts: [
                    { icon: "Phone", label: "8-986-741-99-24", href: "tel:89867419924" },
                    { icon: "Mail",  label: "sv-group33@mail.ru", href: "mailto:sv-group33@mail.ru" },
                  ],
                },
                {
                  role: "Отдел продаж",
                  contacts: [
                    { icon: "Phone", label: "8-995-313-75-26", href: "tel:89953137526" },
                    { icon: "Mail",  label: "manager.sv-group33@mail.ru", href: "mailto:manager.sv-group33@mail.ru" },
                  ],
                },
              ].map((block) => (
                <div key={block.role}>
                  <div className="text-xs tracking-widest uppercase mb-4 font-medium" style={{ color: "hsl(var(--gold))" }}>{block.role}</div>
                  <div className="space-y-3">
                    {block.contacts.map((c) => (
                      <a key={c.label} href={c.href} className="flex items-center gap-3 group">
                        <div className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                          style={{ background: "hsl(var(--black-card))", border: "1px solid hsl(var(--black-border))" }}>
                          <Icon name={c.icon} fallback="Phone" size={14} style={{ color: "hsl(var(--gold))" }} />
                        </div>
                        <span className="text-white/60 group-hover:text-white transition-colors text-sm">{c.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center" style={{ background: "hsl(var(--black-card))", border: "1px solid hsl(var(--black-border))" }}>
                  <Icon name="MapPin" size={14} style={{ color: "hsl(var(--gold))" }} />
                </div>
                <span className="text-white/60 text-sm">Россия, Москва</span>
              </div>
            </div>

            {/* Форма */}
            <div className="p-8" style={{ background: "hsl(var(--black-card))", border: "1px solid hsl(var(--black-border))", position: "relative" }}>
              {/* Угловые акценты */}
              <div className="absolute top-0 left-0 w-6 h-6" style={{ borderTop: "2px solid hsl(var(--gold))", borderLeft: "2px solid hsl(var(--gold))" }} />
              <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderBottom: "2px solid hsl(var(--blue))", borderRight: "2px solid hsl(var(--blue))" }} />

              <h3 className="font-display text-xl font-semibold text-white mb-6">Запрос коммерческого предложения</h3>

              {sent ? (
                <div className="text-center py-14">
                  <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4"
                    style={{ border: "1px solid hsl(var(--gold))", background: "hsl(var(--gold) / 0.08)" }}>
                    <Icon name="Check" size={22} style={{ color: "hsl(var(--gold))" }} />
                  </div>
                  <p className="font-display text-lg text-white">Заявка отправлена</p>
                  <p className="text-white/35 text-sm mt-2">Свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/25 mb-2">Имя / компания</label>
                    <input type="text" required placeholder='ООО "Ваша компания"' value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} className="field" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/25 mb-2">Телефон</label>
                    <input type="tel" required placeholder="+7 (___) ___-__-__" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} className="field" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/25 mb-2">Что требуется</label>
                    <textarea rows={4} required placeholder="Опишите запрос: тип комплектующих, объём, сроки..." value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })} className="field resize-none" />
                  </div>
                  <button type="submit" className="btn-gold w-full text-center">Отправить запрос</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ФУТЕР ═══════════════ */}
      <footer style={{ background: "hsl(0 0% 3%)", borderTop: "1px solid hsl(var(--black-border))" }}>
        <div className="gold-stripe w-full" />
        <div className="max-w-7xl mx-auto px-5 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO} alt="СВ-ТехноГрупп" className="h-10 w-auto object-contain opacity-50" />
          <p className="text-xs text-white/20">© 2026 ООО «СВ-ТехноГрупп» · Поставки БПЛА-комплектующих · Производство АКБ</p>
        </div>
      </footer>
    </div>
  );
}