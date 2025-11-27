// Configuração de dados do perfil
export const profileData = {
    avatar: `${import.meta.env.BASE_URL}assets/avatar2.png`,
    avatarLight: `${import.meta.env.BASE_URL}assets/avatar-light2.png`,
    username: '@tiago.oliv_',
    name: 'Tiago de Oliveira Barreto',
    email: 'ti4gooliv.2112@gmail.com'
};

// Links principais
export const links = [
    {
        id: 1,
        title: 'GitHub',
        url: 'https://github.com/TiagoCoder2023',
        icon: 'logo-github'
    },
    {
        id: 2,
        title: 'TikTok',
        url: 'https://www.tiktok.com/@tiago.oliv_',
        icon: 'logo-tiktok'
    },
    {
        id: 3,
        title: 'Instagram',
        url: 'https://instagram.com/tiago.oliv_',
        icon: 'logo-instagram'
    },
    {
        id: 4,
        title: 'Twitter',
        url: 'https://twitter.com/tiagooliv__',
        icon: 'logo-twitter'
    },
    {
        id: 5,
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/tiago-o-88ab72210',
        icon: 'logo-linkedin'
    },
    {
        id: 6,
        title: 'Email',
        url: 'https://mail.google.com/mail/?view=cm&fs=1&to=ti4gooliv.2112@gmail.com',
        icon: 'mail-outline'
    }
];

// Projetos do portfólio
export const portfolioProjects = [
    {
        id: 1,
        title: 'Banco AI - Sistema de Gerenciamento de Carros',
        description: 'Sistema full-stack completo para gerenciamento de banco de dados de carros com interface visual moderna. Inclui autenticação JWT, operações CRUD completas, upload de múltiplas fotos por veículo, painel administrativo e API REST pública para integrações.',
        technologies: ['React 18', 'Vite', 'Tailwind CSS', 'Java 17', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT'],
        liveUrl: 'https://bancoai.com.br',
        githubUrl: 'https://github.com/quickAIautomation/BANCO_AI'
    },
    {
        id: 2,
        title: 'Agentes de IA para n8n',
        description: 'Coleção de agentes de IA desenvolvidos para automação de atendimento via WhatsApp usando n8n. Inclui agentes especializados em diferentes setores (clínica médica, concessionária, multi-setor) com funcionalidades de processamento de texto, áudio e imagem, memória persistente, gerenciamento de filas, escalação para atendimento humano e follow-ups automáticos.',
        technologies: ['n8n', 'OpenAI GPT-4', 'PostgreSQL', 'Redis', 'Evolution API', 'WhatsApp', 'Whisper', 'GPT-4 Vision'],
        liveUrl: null,
        githubUrl: 'https://github.com/TiagoCoder2023/My-AI-Agents---n8n'
    }
];

// Experiência profissional
export const experience = [
    {
        id: 1,
        title: 'Desenvolvedor de Sistemas e Automação',
        company: 'Quick AI – Agência de Agentes de Inteligência Artificial',
        period: 'Atual',
        description: 'Criação, manutenção e otimização de automações complexas usando n8n. Desenvolvimento de agentes de IA personalizados para empresas. Integração entre sistemas internos e externos via APIs. Gestão e estruturação de servidores. Modelagem e consultas em banco PostgreSQL. Construção de fluxos inteligentes de atendimento, notificações, marketing e operações.'
    },
    {
        id: 2,
        title: 'Desenvolvedor Front-end Júnior',
        company: null,
        period: 'Anterior',
        description: 'Desenvolvimento de interfaces em React. Componentização, hooks, consumo de APIs. Boas práticas de UI/UX e responsividade. Correções, melhorias e suporte a projetos internos.'
    }
];

// Educação
export const education = [
    {
        id: 1,
        title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        institution: 'UNIFAMMA – Centro Universitário Metropolitano de Maringá',
        period: 'Concluído'
    }
];

// Habilidades
export const skills = [
    'n8n',
    'Agentes de IA',
    'PostgreSQL',
    'APIs REST',
    'Webhooks',
    'Postman',
    'Servidores',
    'React',
    'JavaScript',
    'HTML/CSS',
    'Git & GitHub',
    'Integração de Sistemas',
    'Automações',
    'Low-code/No-code'
];

