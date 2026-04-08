import { motion } from "framer-motion";
import { Brain, LineChart, ShieldCheck, Users } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    icon: Brain,
    title: "Análise Preditiva",
    description:
      "Algoritmos que cruzam seu histórico alimentar, exames e metas para gerar insights antes da consulta.",
    metric: "Pré-análise em 3s",
  },
  {
    icon: LineChart,
    title: "Acompanhamento em Tempo Real",
    description:
      "Visualize a evolução do seu plano alimentar com dados atualizados e acompanhamento constante.",
    metric: "Atualização contínua",
  },
  {
    icon: Users,
    title: "Match de Especialidade",
    description:
      "Nosso algoritmo conecta você ao profissional mais adequado para suas necessidades específicas.",
    metric: "97% de satisfação",
  },
  {
    icon: ShieldCheck,
    title: "Privacidade dos Dados",
    description:
      "Suas informações nutricionais ficam organizadas em um ambiente seguro e fácil de acompanhar.",
    metric: "Acesso protegido",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-xs uppercase tracking-widest text-primary font-mono-data mb-3">
            Funcionalidades
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-balance">
            A ciência da nutrição, conectada
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Uma plataforma que transforma dados em cuidado personalizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass-card rounded-2xl p-8 group hover:glass-card-elevated transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <div className="h-10 w-10 rounded-clinical bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {feature.description}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/10">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="text-xs font-medium text-accent font-mono-data">
                  {feature.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
