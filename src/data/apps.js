/**
 * Lista estática de aplicativos do hub.
 * Ícones em /public/app-icons (copiados dos favicons/icon de cada repo em ~/projetos).
 * Troque por fetch/API quando houver backend.
 */
export const apps = [
  {
    id: "systech-site",
    name: "Systech",
    description:
      "Site institucional: serviços, processo, stack, sobre e contato.",
    url: "https://www.systechdev.com.br/",
    category: "Institucional",
    iconSrc: "/app-icons/systech.ico",
    featured: true,
  },
  {
    id: "devhub",
    name: "Dev Hub",
    description: "Central de desenvolvimento e visão geral dos projetos.",
    url: "https://devhub13.vercel.app/",
    category: "Desenvolvimento",
    /** devhub não tem favicon no repo; uso de public/1.png do próprio projeto */
    iconSrc: "/app-icons/devhub.png",
    featured: true,
  },
  {
    id: "mitra",
    name: "Mitra",
    description:
      "Plataforma unificada para a rede de ensino e recursos acadêmicos.",
    url: "https://mitra.systechdev.com.br/",
    category: "Educação",
    iconSrc: "/app-icons/mitra.ico",
    featured: true,
  },
  {
    id: "slsw",
    name: "Solo Leveling — Livro dos Jogadores",
    description: "Experiência web do Livro dos Jogadores (Solo Leveling).",
    url: "https://slsw.systechdev.com.br/",
    category: "Entretenimento",
    /** pasta slsw local sem fontes; ícone do rpg-manager (mesmo produto) */
    iconSrc: "/app-icons/slsw.ico",
    featured: false,
  },
  {
    id: "myplants",
    name: "MyPlants",
    description: "Inteligência artificial para cuidar do seu jardim e plantas.",
    url: "https://myplants-guts.vercel.app/",
    category: "Produto",
    iconSrc: "/app-icons/myplants.ico",
    featured: false,
  },
  {
    id: "myfit",
    name: "MyFit",
    description: "Acompanhamento de treinos e hábitos de saúde.",
    url: "https://myfit.systechdev.com.br/",
    category: "Produto",
    iconSrc: "/app-icons/myfit.ico",
    featured: false,
  },
  {
    id: "baristapro",
    name: "BaristaPro",
    description: "Laboratório e fluxos para quem vive o universo do café.",
    url: "https://baristapro.vercel.app/",
    category: "Produto",
    iconSrc: "/app-icons/baristapro.svg",
    featured: false,
  },
];
