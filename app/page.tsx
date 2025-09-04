// app/page.tsx — UaskIbuy.com luxury brochure homepage (English/Spanish)
// TailwindCSS required. No external UI libs. App Router compatible.

"use client";

import Image from "next/image";
import { useState } from "react";

const copy = {
  en: {
    nav: { how: "How It Works", featured: "Featured", testimonials: "Testimonials", contact: "Contact" },
    hero: {
      title: "Exclusivity Delivered.",
      subtitle:
        "Your gateway to the world’s finest automobiles. You ask. We buy. We deliver.",
      cta: "Start Your Import",
    },
    how: {
      heading: "How It Works",
      steps: [
        { title: "Ask", body: "Tell us the make, model, spec, and target budget." },
        { title: "Buy", body: "We source, inspect, and secure the vehicle globally." },
        { title: "Deliver", body: "We handle export, customs, and delivery to your door." },
      ],
    },
    featured: { heading: "Recently Imported" },
    why: {
      heading: "Why UaskIbuy",
      points: [
        "Global network of vetted dealers, auction houses, and shippers.",
        "Concierge service with single point of contact from quote to keys.",
        "Secure paperwork, insured logistics, and transparent pricing.",
      ],
    },
    testimonials: {
      heading: "Client Words",
      items: [
        {
          quote:
            "Seamless experience. My Porsche arrived immaculate and ahead of schedule.",
          name: "A. Ramirez",
          role: "Panama",
        },
        {
          quote: "Handled everything. I just picked up the keys.",
          name: "M. Haddad",
          role: "UAE",
        },
      ],
    },
    cta: { line: "Ready for your next car? UaskIbuy makes it happen.", button: "Start Now" },
    footer: {
      rights: "All rights reserved.",
      tagline: "Exclusivity Delivered.",
    },
  },
  es: {
    nav: { how: "Cómo Funciona", featured: "Destacados", testimonials: "Testimonios", contact: "Contacto" },
    hero: {
      title: "Exclusividad Entregada.",
      subtitle:
        "Tu acceso a los autos más exclusivos del mundo. Tú pides. Nosotros compramos. Entregamos.",
      cta: "Comienza tu Importación",
    },
    how: {
      heading: "Cómo Funciona",
      steps: [
        { title: "Pide", body: "Indícanos marca, modelo, especificaciones y presupuesto." },
        { title: "Compramos", body: "Buscamos, inspeccionamos y aseguramos el vehículo en el mundo." },
        { title: "Entregamos", body: "Gestionamos exportación, aduanas y entrega en tu puerta." },
      ],
    },
    featured: { heading: "Recientemente Importados" },
    why: {
      heading: "Por qué UaskIbuy",
      points: [
        "Red global de concesionarios, casas de subastas y navieras verificadas.",
        "Servicio concierge con un solo contacto desde la cotización hasta las llaves.",
        "Documentación segura, logística asegurada y precios transparentes.",
      ],
    },
    testimonials: {
      heading: "Clientes",
      items: [
        {
          quote:
            "Experiencia impecable. Mi Porsche llegó perfecto y antes de lo previsto.",
          name: "A. Ramírez",
          role: "Panamá",
        },
        {
          quote: "Se encargaron de todo. Yo solo recogí las llaves.",
          name: "M. Haddad",
          role: "EAU",
        },
      ],
    },
    cta: { line: "¿Listo para tu próximo auto? UaskIbuy lo hace realidad.", button: "Empieza Ahora" },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Exclusividad Entregada.",
    },
  },
};

function LangToggle({ lang, setLang }: { lang: "en" | "es"; setLang: (l: "en" | "es") => void }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-full border transition ${
          lang === "en" ? "bg-white text-black" : "border-white/30 text-white/70 hover:text-white"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={`px-3 py-1 rounded-full border transition ${
          lang === "es" ? "bg-white text-black" : "border-white/30 text-white/70 hover:text-white"
        }`}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
    </div>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-300 flex items-center justify-center text-black font-bold">U</div>
            <span className="font-serif text-xl tracking-wide">UaskIbuy</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#how" className="hover:text-white">{t.nav.how}</a>
            <a href="#featured" className="hover:text-white">{t.nav.featured}</a>
            <a href="#testimonials" className="hover:text-white">{t.nav.testimonials}</a>
            <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
          </nav>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(212,175,55,0.15)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:pb-32 md:pt-28">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl tracking-tight">
                <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
              </h1>
              <p className="mt-5 text-white/80 text-lg md:text-xl max-w-xl">{t.hero.subtitle}</p>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 font-medium text-black shadow-lg shadow-yellow-600/20 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  {t.hero.cta}
                </a>
                <a href="#how" className="text-white/70 hover:text-white underline underline-offset-4">
                  {t.nav.how}
                </a>
              </div>
            </div>
            {/* Hero visual placeholder */}
            <div className="relative aspect-[16/10] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl">
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-white/60 text-sm">Hero image placeholder — luxury sedan silhouette</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl">{t.how.heading}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.how.steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
              <div className="text-yellow-400 text-sm">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 font-semibold text-xl">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl">{t.featured.heading}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Porsche 911 Turbo S", "Range Rover Autobiography", "Mercedes-AMG G63"].map((name, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50">
              <div className="aspect-[16/10] bg-neutral-800" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{name}</h3>
                  <span className="text-xs text-white/50">2024</span>
                </div>
                <p className="mt-1 text-sm text-white/70">EU spec • Verified provenance • Insured shipping</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl">{t.why.heading}</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {t.why.points.map((p, i) => (
            <li key={i} className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 text-white/80">
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl">{t.testimonials.heading}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {t.testimonials.items.map((item, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
              <blockquote className="text-lg text-white/90">“{item.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-white/60">— {item.name} · {item.role}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(212,175,55,0.15)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 p-8 md:p-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <h3 className="font-serif text-2xl md:text-3xl">{t.cta.line}</h3>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 font-medium text-black shadow-lg shadow-yellow-600/20 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                {t.cta.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl">{t.nav.contact}</h2>
        <form
          className="mt-8 grid gap-6 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you — we will contact you shortly.");
          }}
        >
          <div className="grid gap-2">
            <label className="text-sm text-white/70">Full Name</label>
            <input className="rounded-xl bg-neutral-900/60 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-yellow-400" required />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-white/70">Email</label>
            <input type="email" className="rounded-xl bg-neutral-900/60 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-yellow-400" required />
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label className="text-sm text-white/70">Desired Vehicle (Make/Model/Year/Spec)</label>
            <input className="rounded-xl bg-neutral-900/60 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-yellow-400" placeholder="e.g., Porsche 911 Turbo S, 2023, Chalk, Burmester, PCCB" />
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea rows={5} className="rounded-xl bg-neutral-900/60 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-yellow-400" placeholder="Tell us where you are and your timeline." />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 font-medium text-black shadow-lg shadow-yellow-600/20 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {t.hero.cta}
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} UaskIbuy. {t.footer.rights}</div>
          <div className="font-serif text-white/80">{t.footer.tagline}</div>
        </div>
      </footer>
    </main>
  );
}

