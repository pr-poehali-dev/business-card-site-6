import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_DRONE =
  "https://cdn.poehali.dev/projects/b071f7ce-a3a3-4291-ae4f-4838366629c0/files/c06ca9ed-a35a-469c-a1c4-a9515abb19ff.jpg";
const IMG_BATTERY =
  "https://cdn.poehali.dev/projects/b071f7ce-a3a3-4291-ae4f-4838366629c0/files/181e9320-5a18-4a93-9e88-567d23368650.jpg";

const navItems = [
  { id: "hero", label: "Главная" },
  { id: "about", label: "О компании" },
  { id: "production", label: "Производство" },
  { id: "catalog", label: "Ассортимент" },
  { id: "logistics", label: "Логистика" },
  { id: "contact", label: "Контакты" },
];

const advantages = [
  { icon: "Factory", title: "Собственное производство", desc: "Литий-ионные АКБ в России с полным контролем качества" },
  { icon: "Warehouse", title: "Склад в России", desc: "Ликвидные комплектующие всегда в наличии под запросы клиентов" },
  { icon: "PackageCheck", title: "Прямые поставки", desc: "Доставка из Китая без посредников за 1–3 недели в любую точку России" },
  { icon: "Handshake", title: "Индивидуальный подход", desc: "Поставляем детали по вашим уникальным техническим заданиям" },
];

const batteries = [
  { model: "6S3P", cap: "12 000 мАч", desc: "Оптимальная ёмкость для средней продолжительности полёта" },
  { model: "6S2P", cap: "8 000 мАч", desc: "Компактное решение для лёгких дронов" },
  { model: "6S2P", cap: "16 000 мАч", desc: "Максимальная автономность для профессиональных задач" },
];

const catalog = [
  { icon: "BatteryFull", title: "Аккумуляторы", desc: "Литий-ионные (собств. пр-во), литий-полимерные и литий-титановые батареи" },
  { icon: "Cpu", title: "Полётные контроллеры", desc: "Современные системы управления полётом для различных типов БПЛА" },
  { icon: "Camera", title: "Оптические системы", desc: "Камеры CADXX и другие оптические решения" },
  { icon: "Settings2", title: "Исполнительные механизмы", desc: "Сервоприводы, моторы и механизмы управления" },
  { icon: "Satellite", title: "Навигация", desc: "GPS-модули, оптоволокно и навигационное оборудование" },
  { icon: "Radio", title: "Системы связи", desc: "Надёжные каналы передачи данных и телеметрии" },
];

const steps = [
  { day: "День 1–2", title: "Формирование заказа", desc: "Согласование спецификации и условий поставки с клиентом" },
  { day: "День 3–7", title: "Оплата и отгрузка", desc: "Прямая закупка у производителя без посредников" },
  { day: "День 8–14", title: "Таможенное оформление", desc: "Профессиональное сопровождение груза через границу" },
  { day: "День 15–21", title: "Доставка клиенту", desc: "Транспортировка в любую точку России" },
];

const partners = ["Cadxx", "HOBBYWING", "Brother Hobby", "FOXEER"];

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
    <div className="min-h-screen" style={{ background: "hsl(var(--dark))", color: "hsl(var(--light))" }}>

      {/* ─── ШАПКА ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ background: "hsl(218 30% 8% / 0.95)", borderBottom: "1px solid hsl(var(--dark-border))" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-14 flex items-center justify-between gap-6">
          {/* Логотип */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-7 h-7 flex items-center justify-center" style={{ background: "hsl(var(--orange))" }}>
              <Icon name="Zap" size={14} className="text-white" />
            </div>
            <span className="font-display text-base font-semibold text-white tracking-wide">СВ-ТехноГрупп</span>
          </div>

          {/* Десктоп навигация */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className={`nav-item ${active === n.id ? "active" : ""}`}>
                {n.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:89867419924" className="text-xs text-white/50 hover:text-white transition-colors">8-986-741-99-24</a>
            <button onClick={() => scrollTo("contact")} className="btn-orange text-[11px] py-2 px-5">Запрос КП</button>
          </div>

          {/* Бургер */}
          <button className="lg:hidden text-white/60" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Мобильное меню */}
        {menuOpen && (
          <div style={{ background: "hsl(var(--dark-card))", borderBottom: "1px solid hsl(var(--dark-border))" }} className="lg:hidden px-5 pb-4">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="block w-full text-left py-3 nav-item text-sm border-b" style={{ borderColor: "hsl(var(--dark-border))" }}>
                {n.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} className="btn-orange w-full mt-4 text-center text-[11px] py-2.5">Запрос КП</button>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-14">
        {/* Фоновое фото */}
        <div className="absolute inset-0">
          <img src={IMG_DRONE} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(218 30% 8% / 0.97) 0%, hsl(218 30% 8% / 0.75) 60%, hsl(218 30% 8% / 0.95) 100%)" }} />
        </div>

        {/* Декоративные линии */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(var(--light)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--light)) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        {/* Оранжевый акцент */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "hsl(var(--orange))" }} />

        <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-28">
          <div className="max-w-3xl">
            <p className="section-tag animate-fade-in d1">Поставщик компонентов для БПЛА</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-in d2">
              Движущая сила<br />
              <span style={{ color: "hsl(var(--orange))" }}>ваших дронов</span>
            </h1>
            <p className="text-white/55 text-lg font-light leading-relaxed mb-10 max-w-xl animate-fade-in d3">
              Прямые поставки высокотехнологичных комплектующих для БПЛА из Китая без посредников. Собственное производство литий-ионных АКБ в России.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in d4">
              <button onClick={() => scrollTo("contact")} className="btn-orange">Запросить КП</button>
              <button onClick={() => scrollTo("catalog")} className="btn-outline">Наш ассортимент</button>
            </div>

            {/* Быстрые факты */}
            <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in d5 max-w-lg">
              {[
                { val: "1–3", unit: "нед.", label: "срок поставки" },
                { val: "0", unit: "", label: "посредников" },
                { val: "4+", unit: "", label: "партнёра-бренда" },
              ].map((f) => (
                <div key={f.label}>
                  <div className="font-display text-3xl font-bold text-white">
                    {f.val}<span style={{ color: "hsl(var(--orange))" }}>{f.unit}</span>
                  </div>
                  <div className="text-xs text-white/40 mt-1 uppercase tracking-widest">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── О КОМПАНИИ ─── */}
      <section id="about" className="py-24" style={{ background: "hsl(var(--dark-card))" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-tag">О компании</p>
              <h2 className="section-title">Надёжный партнёр<br />в области БПЛА</h2>
              <div className="divider" />
              <p className="text-white/60 leading-relaxed mb-5 font-light">
                ООО «СВ-ТехноГрупп» — российская компания, которая специализируется на комплексном снабжении комплектующими для дронов и производстве аккумуляторных решений.
              </p>
              <p className="text-white/60 leading-relaxed mb-5 font-light">
                Ключевое преимущество — <span className="text-white">прямые поставки из Китая без посредников</span>. Это гарантирует лучшие цены, сокращение сроков доставки и строгий контроль качества на всех этапах логистики.
              </p>
              <p className="text-white/60 leading-relaxed font-light">
                Помимо импорта, мы производим литий-ионные АКБ собственного производства в Московской области, а также поставляем литий-полимерные и литий-титановые батареи от ведущих мировых производителей.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {advantages.map((a) => (
                <div key={a.title} className="dark-card">
                  <div className="w-9 h-9 flex items-center justify-center mb-4" style={{ background: "hsl(var(--orange) / 0.12)", border: "1px solid hsl(var(--orange) / 0.25)" }}>
                    <Icon name={a.icon} fallback="Star" size={16} style={{ color: "hsl(var(--orange))" }} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-white mb-2">{a.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ПРОИЗВОДСТВО ─── */}
      <section id="production" className="py-24" style={{ background: "hsl(var(--dark))" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Фото */}
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-3 opacity-20" style={{ border: "1px solid hsl(var(--orange))" }} />
              <img src={IMG_BATTERY} alt="Производство АКБ" className="w-full object-cover relative z-10" style={{ aspectRatio: "4/3" }} />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6" style={{ background: "linear-gradient(to top, hsl(var(--dark)), transparent)" }}>
                <span className="font-display text-sm text-white/80 uppercase tracking-widest">Россия, Московская область</span>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="section-tag">Производство</p>
              <h2 className="section-title">Аккумуляторы<br />российского производства</h2>
              <div className="divider" />
              <p className="text-white/60 leading-relaxed mb-8 font-light">
                Производим литий-ионные аккумуляторы в Московской области с жёстким контролем качества на всех этапах. Вся продукция соответствует российским стандартам и требованиям безопасности для государственных закупок.
              </p>

              {/* Линейка АКБ */}
              <div className="space-y-3">
                {batteries.map((b) => (
                  <div key={b.cap} className="flex items-center gap-4 p-4" style={{ background: "hsl(var(--dark-card))", border: "1px solid hsl(var(--dark-border))" }}>
                    <div className="flex-shrink-0 text-center w-24">
                      <div className="font-display text-xl font-bold text-white">{b.cap}</div>
                      <div className="text-xs text-white/40 mt-0.5">{b.model}</div>
                    </div>
                    <div className="w-px h-10 self-center" style={{ background: "hsl(var(--dark-border))" }} />
                    <p className="text-xs text-white/55 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Характеристики производства */}
          <div className="grid md:grid-cols-4 gap-4 mt-16">
            {[
              { icon: "MapPin", title: "Местоположение", desc: "Россия, Московская область. Современное производственное предприятие полного цикла." },
              { icon: "ShieldCheck", title: "Контроль качества", desc: "Многоступенчатая система проверки на каждом этапе производства." },
              { icon: "Wrench", title: "Технические возможности", desc: "Производство АКБ любой ёмкости и конфигурации под требования заказчика." },
              { icon: "FileCheck", title: "Сертификация", desc: "Соответствует российским стандартам и требованиям для государственных закупок." },
            ].map((c) => (
              <div key={c.title} className="dark-card">
                <Icon name={c.icon} fallback="Info" size={18} style={{ color: "hsl(var(--orange))" }} className="mb-3" />
                <h3 className="font-display text-sm font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── АССОРТИМЕНТ ─── */}
      <section id="catalog" className="py-24" style={{ background: "hsl(var(--dark-card))" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-14">
            <p className="section-tag">Ассортимент</p>
            <h2 className="section-title">Полный ассортимент<br />комплектующих для БПЛА</h2>
            <div className="divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {catalog.map((c) => (
              <div key={c.title} className="dark-card group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300" style={{ background: "hsl(var(--dark))", border: "1px solid hsl(var(--dark-border))" }}>
                    <Icon name={c.icon} fallback="Package" size={16} style={{ color: "hsl(var(--orange))" }} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white mb-1">{c.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Партнёры */}
          <div className="mt-16 pt-10" style={{ borderTop: "1px solid hsl(var(--dark-border))" }}>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-8 text-center">Сотрудничаем</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {partners.map((p) => (
                <div key={p} className="font-display text-xl font-bold tracking-widest uppercase" style={{ color: "hsl(var(--slate))" }}>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ЛОГИСТИКА ─── */}
      <section id="logistics" className="py-24" style={{ background: "hsl(var(--dark))" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-14">
            <p className="section-tag">Логистика</p>
            <h2 className="section-title">Полный цикл поставки<br />из Китая за 1–3 недели</h2>
            <div className="divider" />
          </div>

          {/* Шаги */}
          <div className="grid md:grid-cols-4 gap-px" style={{ background: "hsl(var(--dark-border))" }}>
            {steps.map((s, i) => (
              <div key={s.title} className="p-8" style={{ background: "hsl(var(--dark))" }}>
                <div className="font-display text-5xl font-bold mb-4 leading-none" style={{ color: "hsl(var(--orange) / 0.15)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "hsl(var(--orange))" }}>{s.day}</div>
                <h3 className="font-display text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Склад */}
          <div className="mt-8 p-8 grid md:grid-cols-3 gap-8 items-center" style={{ background: "hsl(var(--dark-card))", border: "1px solid hsl(var(--dark-border))" }}>
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 flex items-center justify-center" style={{ background: "hsl(var(--orange))" }}>
                  <Icon name="Warehouse" size={14} className="text-white" />
                </div>
                <span className="font-display text-lg font-semibold text-white">Складская программа</span>
              </div>
            </div>
            <div className="md:col-span-2 grid md:grid-cols-3 gap-6">
              {[
                { icon: "PackageCheck", title: "Ликвидные позиции", desc: "Стратегический запас востребованных комплектующих для оперативного закрытия потребностей" },
                { icon: "Truck", title: "Быстрая отгрузка", desc: "Готовность к оперативной доставке под запросы наших партнёров" },
                { icon: "Users", title: "Инд. подход", desc: "Формирование складских запасов с учётом потребностей конкретного партнёра" },
              ].map((w) => (
                <div key={w.title}>
                  <Icon name={w.icon} fallback="Box" size={16} style={{ color: "hsl(var(--orange))" }} className="mb-2" />
                  <div className="text-sm font-semibold text-white mb-1">{w.title}</div>
                  <p className="text-xs text-white/45 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── КОНТАКТЫ ─── */}
      <section id="contact" className="py-24" style={{ background: "hsl(var(--dark-card))" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-14">
            <p className="section-tag">Контакты</p>
            <h2 className="section-title">Свяжитесь с нами</h2>
            <div className="divider" />
            <p className="text-white/50 text-sm max-w-lg">
              Работаем с государственными заказчиками, интеграторами и B2B клиентами. Предоставляем полный пакет документов для участия в тендерах.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Контакты */}
            <div className="space-y-8">
              <div>
                <div className="text-xs tracking-widest uppercase text-white/30 mb-4">Коммерческий директор</div>
                <div className="space-y-3">
                  <a href="tel:89867419924" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 flex items-center justify-center" style={{ background: "hsl(var(--dark))", border: "1px solid hsl(var(--dark-border))" }}>
                      <Icon name="Phone" size={14} style={{ color: "hsl(var(--orange))" }} />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors text-sm">8-986-741-99-24</span>
                  </a>
                  <a href="mailto:sv-group33@mail.ru" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 flex items-center justify-center" style={{ background: "hsl(var(--dark))", border: "1px solid hsl(var(--dark-border))" }}>
                      <Icon name="Mail" size={14} style={{ color: "hsl(var(--orange))" }} />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors text-sm">sv-group33@mail.ru</span>
                  </a>
                </div>
              </div>

              <div>
                <div className="text-xs tracking-widest uppercase text-white/30 mb-4">Отдел продаж</div>
                <div className="space-y-3">
                  <a href="tel:89953137526" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 flex items-center justify-center" style={{ background: "hsl(var(--dark))", border: "1px solid hsl(var(--dark-border))" }}>
                      <Icon name="Phone" size={14} style={{ color: "hsl(var(--orange))" }} />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors text-sm">8-995-313-75-26</span>
                  </a>
                  <a href="mailto:manager.sv-group33@mail.ru" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 flex items-center justify-center" style={{ background: "hsl(var(--dark))", border: "1px solid hsl(var(--dark-border))" }}>
                      <Icon name="Mail" size={14} style={{ color: "hsl(var(--orange))" }} />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors text-sm">manager.sv-group33@mail.ru</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center" style={{ background: "hsl(var(--dark))", border: "1px solid hsl(var(--dark-border))" }}>
                  <Icon name="MapPin" size={14} style={{ color: "hsl(var(--orange))" }} />
                </div>
                <span className="text-white/70 text-sm">Россия, Москва</span>
              </div>
            </div>

            {/* Форма */}
            <div style={{ background: "hsl(var(--dark))", border: "1px solid hsl(var(--dark-border))" }} className="p-8">
              <h3 className="font-display text-xl font-semibold text-white mb-6">Запрос коммерческого предложения</h3>

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4" style={{ border: "1px solid hsl(var(--orange))" }}>
                    <Icon name="Check" size={22} style={{ color: "hsl(var(--orange))" }} />
                  </div>
                  <p className="text-white text-lg font-display">Заявка отправлена</p>
                  <p className="text-white/40 text-sm mt-2">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/30 mb-2">Ваше имя / компания</label>
                    <input type="text" required placeholder="ООО «Ваша компания»" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} className="field" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/30 mb-2">Телефон</label>
                    <input type="tel" required placeholder="+7 (___) ___-__-__" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} className="field" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/30 mb-2">Что требуется</label>
                    <textarea rows={4} required placeholder="Опишите ваш запрос: тип комплектующих, объём, сроки..." value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })} className="field resize-none" />
                  </div>
                  <button type="submit" className="btn-orange w-full text-center">Отправить запрос</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ФУТЕР ─── */}
      <footer className="py-6" style={{ background: "hsl(var(--dark))", borderTop: "1px solid hsl(var(--dark-border))" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center" style={{ background: "hsl(var(--orange))" }}>
              <Icon name="Zap" size={10} className="text-white" />
            </div>
            <span className="font-display text-sm text-white/50">ООО «СВ-ТехноГрупп»</span>
          </div>
          <p className="text-xs text-white/25">© 2026 · Поставки БПЛА-комплектующих · Производство АКБ</p>
        </div>
      </footer>
    </div>
  );
}