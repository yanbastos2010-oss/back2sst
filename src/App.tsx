/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Check, 
  ChevronDown, 
  Gift, 
  ShieldCheck, 
  TriangleAlert
} from "lucide-react";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Como recebo as dinâmicas?",
    answer: "O acesso é imediato via e-mail após a confirmação do pagamento. Você receberá um link para baixar todo o acervo."
  },
  {
    question: "As dinâmicas servem para qualquer empresa?",
    answer: "Sim, as atividades foram desenvolvidas para serem flexíveis, atendendo desde pequenos escritórios até grandes parques industriais."
  },
  {
    question: "Preciso comprar materiais para as dinâmicas?",
    answer: "A grande maioria utiliza materiais simples como papel, caneta, fita adesiva ou itens já presentes no ambiente de trabalho."
  },
  {
    question: "Existe suporte para aplicação?",
    answer: "Sim, no Plano Black você tem suporte para entender como aplicar melhor cada dinâmica na sua realidade específica."
  },
  {
    question: "As dinâmicas cobrem as NR's atualizadas?",
    answer: "Sim, priorizamos temas em conformidade com as normas vigentes (NR-01, NR-05, NR-06, NR-10, NR-12, NR-18, NR-33, NR-35, etc)."
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Pix (liberação imediata) e Cartão de Crédito (até 4x)."
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      {/* Top Warning Banner */}
      <div className="bg-black text-white py-2.5 px-4 text-center text-xs sm:text-sm font-bold w-full shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <span className="uppercase tracking-wide">
            ATENÇÃO: NÃO FECHE ESSA PÁGINA OU PERDERÁ O DESCONTO
          </span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 pt-12 pb-24 text-center">
        {/* Urgent Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-500 font-bold text-sm mb-6"
        >
          <TriangleAlert className="w-4 h-4" />
          OFERTA EXCLUSIVA
        </motion.div>

        {/* Hero Section */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6 text-slate-900 tracking-tight font-display"
        >
          Espera! Não vá embora ainda
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-tight mb-12"
        >
          Antes de sair, liberamos uma oferta única do nosso pacote completo com desconto exclusivo. Mas é só agora!
        </motion.p>

        {/* Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl p-6 pt-10 border-2 border-primary bg-card shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col relative max-w-md mx-auto text-left"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase whitespace-nowrap shadow-lg">
              ÚLTIMA CHANCE - DESCONTO LIBERADO
            </span>
          </div>
          <h3 className="text-foreground font-bold text-xl text-center mb-4 font-display tracking-tight">Acesso Completo</h3>
          
          <div className="text-center mb-6">
            <span className="text-muted-foreground text-sm line-through">R$ 27,00</span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-muted-foreground text-lg">R$</span>
              <span className="text-6xl md:text-7xl font-black text-primary">7,90</span>
            </div>
          </div>

          <ul className="space-y-3 mb-6 flex-1">
            {[
              "+250 Dinâmicas de Segurança do Trabalho",
              "Organizadas por Objetivo e Categoria",
              "Vídeos Demonstrativos",
              "Acesso Vitalício",
              "Suporte Prioritário",
              "Garantia de 14 dias"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mb-6 pt-4 border-t border-border">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-primary font-bold text-xs uppercase tracking-wide">3 Bônus Inclusos</span>
            </div>
            <ul className="space-y-2">
              {["Certificado Conclusão", "Quiz Interativo", "Cartazes Prontos"].map((bonus, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="w-3 h-3 text-primary shrink-0" />
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
          </div>

          <a 
            href="https://checkout.pagseguropay.shop/VCCL1O8SD02U" 
            className="btn-cta w-full py-4 md:py-5 text-base font-black uppercase transition-all shadow-lg hover:shadow-primary/40 hover:-translate-y-1 duration-300 rounded-xl flex items-center justify-center"
          >
            QUERO COM DESCONTO
          </a>
        </motion.div>
      </main>

      {/* Guarantee Section */}
      <section className="bg-background py-16 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          <h2 className="section-title mb-4">
            <span className="text-highlight">Garantia</span> de 14 Dias
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Se dentro de 14 dias você não sentir melhora na participação dos seus treinamentos ou não ficar satisfeito com o material, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Você não tem nada a perder!
          </p>
          <p className="text-foreground font-semibold text-sm">
            Sua compra é 100% segura e protegida.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-section-dark py-16 px-4">
        <div className="container max-w-2xl mx-auto">
          <h2 className="section-title mb-10">
            Dúvidas <span className="text-highlight">Comuns</span>
          </h2>
          
          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl px-4 overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between py-4 text-left font-semibold text-sm transition-all text-foreground"
                >
                  {faq.question}
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-section-dark border-t border-border py-8 px-4 text-center">
        <p className="text-muted-foreground text-xs">
          © 2026 — 250+ Dinâmicas de Segurança do Trabalho. Todos os direitos reservados.
        </p>
      </footer>

      {/* Global styles for the shimmer effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}} />
    </div>
  );
}
