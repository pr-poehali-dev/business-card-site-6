import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/b071f7ce-a3a3-4291-ae4f-4838366629c0/files/fc7a1ce6-981a-4456-a5b9-858fc51ef391.jpg";

const services = [
  {
    icon: "Briefcase",
    title: "Стратегический консалтинг",
    desc: "Разработка долгосрочных стратегий роста и трансформации бизнеса.",
  },
  {
    icon: "BarChart2",
    title: "Финансовый анализ",
    desc: "Глубокий аудит и оценка финансового состояния компании.",
  },
  {
    icon: "Users",
    title: "Управление проектами",
    desc: "Организация и сопровождение сложных корпоративных проектов.",
  },
  {
    icon: "Shield",
    title: "Правовое сопровождение",
    desc: "Юридическая защита интересов бизнеса на всех этапах.",
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-[hsl(var(--navy))]">
      {/* НАВИГАЦИЯ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <span className="font-display text-xl font-semibold tracking-wide text-[hsl(var(--navy))]">
            А. Н. Иванов
          </span>
          <nav className="hidden md:flex items-center gap-10">
            {[
              { id: "home", label: "Главная" },
              { id: "about", label: "О мне" },
              { id: "services", label: "Услуги" },
              { id: "contact", label: "Контакты" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link text-[hsl(var(--navy))] hover:text-[hsl(var(--gold))] ${activeSection === item.id ? "active text-[hsl(var(--gold))]" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:block btn-primary text-xs"
          >
            Связаться
          </button>
        </div>
      </header>

      {/* ГЛАВНАЯ */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-16 bg-[hsl(var(--navy))] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[hsl(var(--gold))]/30 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="opacity-0 animate-fade-in stagger-1">
            <p className="text-[hsl(var(--gold))] text-xs tracking-[0.3em] uppercase mb-6 font-medium">
              Профессиональная визитка
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-[1.1] mb-6">
              Александр
              <br />
              <span className="font-semibold">Иванов</span>
            </h1>
            <div className="section-line mb-6" />
            <p className="text-white/60 text-lg font-light mb-10 leading-relaxed">
              Старший партнёр · Управляющий директор
              <br />
              Более 15 лет в корпоративном консалтинге
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-[hsl(var(--gold))] text-[hsl(var(--navy))] px-8 py-3 text-xs tracking-widest uppercase font-semibold transition-all duration-300 hover:bg-[hsl(var(--gold-light))]"
              >
                Написать мне
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="border border-white/30 text-white/80 px-8 py-3 text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"
              >
                Мои услуги
              </button>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in stagger-3 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 border border-[hsl(var(--gold))]/20" />
              <div className="absolute -inset-8 border border-[hsl(var(--gold))]/10" />
              <img
                src={PHOTO_URL}
                alt="Александр Иванов"
                className="w-72 h-80 object-cover grayscale contrast-110 relative z-10"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[hsl(var(--navy))] to-transparent z-20" />
            </div>
          </div>
        </div>
      </section>

      {/* О МНЕ */}
      <section id="about" className="py-28 bg-[hsl(var(--cream))]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[hsl(var(--gold))] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                О мне
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[hsl(var(--navy))] mb-6 leading-tight">
                Опыт, которому
                <br />
                доверяют
              </h2>
              <div className="section-line mb-8" />
              <p className="text-[hsl(var(--navy))]/70 leading-relaxed mb-6 font-light">
                На протяжении 15 лет я помогаю компаниям принимать взвешенные
                стратегические решения. Специализируюсь на управленческом
                консалтинге, сделках M&A и корпоративном реструктурировании.
              </p>
              <p className="text-[hsl(var(--navy))]/70 leading-relaxed font-light">
                Работал с ведущими корпорациями в России и за рубежом. Автор
                методологий оценки эффективности, применяемых в 50+ компаниях.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Лет опыта" },
                { value: "200+", label: "Клиентов" },
                { value: "50+", label: "Проектов M&A" },
                { value: "98%", label: "Довольных клиентов" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white p-8 border border-[hsl(var(--border))] hover:border-[hsl(var(--gold))] transition-colors duration-300"
                >
                  <div className="font-display text-4xl font-semibold text-[hsl(var(--navy))] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase text-[hsl(var(--navy))]/50 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-[hsl(var(--gold))] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Услуги
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[hsl(var(--navy))] mb-4 leading-tight">
              Чем я могу
              <br />
              помочь вашему бизнесу
            </h2>
            <div className="section-line" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-service group">
                <div className="w-10 h-10 flex items-center justify-center border border-[hsl(var(--navy))]/20 mb-6 group-hover:border-[hsl(var(--gold))] group-hover:bg-[hsl(var(--gold))]/5 transition-all duration-300">
                  <Icon name={s.icon} fallback="Briefcase" size={18} className="text-[hsl(var(--navy))]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[hsl(var(--navy))] mb-3">
                  {s.title}
                </h3>
                <p className="text-[hsl(var(--navy))]/60 font-light leading-relaxed text-sm">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contact" className="py-28 bg-[hsl(var(--navy))]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[hsl(var(--gold))] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Контакты
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              Давайте
              <br />
              поговорим
            </h2>
            <div className="section-line mb-10" />

            <div className="space-y-6">
              {[
                { icon: "Phone", label: "+7 (495) 000-00-00" },
                { icon: "Mail", label: "ivanov@company.ru" },
                { icon: "MapPin", label: "Москва, Сити, Башня «Федерация»" },
                { icon: "Linkedin", label: "linkedin.com/in/ivanov" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20 group-hover:border-[hsl(var(--gold))] transition-colors duration-300 flex-shrink-0">
                    <Icon
                      name={item.icon}
                      fallback="Phone"
                      size={16}
                      className="text-[hsl(var(--gold))]"
                    />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="border border-white/10 p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Обратная связь
              </h3>

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 border border-[hsl(var(--gold))] flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name="Check"
                      size={22}
                      className="text-[hsl(var(--gold))]"
                    />
                  </div>
                  <p className="text-white font-light text-lg font-display">
                    Сообщение отправлено
                  </p>
                  <p className="text-white/50 text-sm mt-2">
                    Я свяжусь с вами в ближайшее время
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/40 mb-2 font-medium">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Петров"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="input-field text-white border-white/20 focus:border-[hsl(var(--gold))] placeholder:text-white/25 bg-white/5"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/40 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@company.ru"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="input-field text-white border-white/20 focus:border-[hsl(var(--gold))] placeholder:text-white/25 bg-white/5"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/40 mb-2 font-medium">
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Расскажите о вашем запросе..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="input-field text-white border-white/20 focus:border-[hsl(var(--gold))] placeholder:text-white/25 bg-white/5 resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary text-xs mt-2">
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="bg-[hsl(var(--navy))] border-t border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-white/40 text-sm">
            © 2026 Александр Иванов
          </span>
          <div className="flex items-center gap-2 text-white/20 text-xs tracking-widest uppercase">
            <div className="w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full" />
            Управляющий директор
          </div>
        </div>
      </footer>
    </div>
  );
}