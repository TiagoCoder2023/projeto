<h1 align="center"> DevLinks - Portfólio & Currículo </h1>

<p align="center">
Link tree moderno desenvolvido em React com seções de portfólio e currículo. <br/>
Refatorado completamente para React com Vite.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **JavaScript (ES6+)** - Linguagem de programação
- **CSS3** - Estilização com variáveis CSS e animações
- **Ionicons** - Biblioteca de ícones
- **Git e Github** - Controle de versão

## 💻 Projeto

O DevLinks é um agregador de links moderno desenvolvido em React, expandido com funcionalidades de portfólio e currículo. Permite criar um cartão de visitas online completo com:

- Links para redes sociais
- Portfólio de projetos
- Currículo profissional (experiência, educação e habilidades)
- Tema claro/escuro com persistência no localStorage

## ✨ Funcionalidades

- ✅ **Link Tree** - Agregador de links para redes sociais
- ✅ **Portfólio** - Exibição de projetos com tecnologias utilizadas
- ✅ **Currículo** - Seções de experiência profissional, educação e habilidades
- ✅ **Tema Claro/Escuro** - Alternância de tema com persistência
- ✅ **Design Responsivo** - Adaptável para mobile e desktop
- ✅ **Componentes Modulares** - Código organizado e reutilizável
- ✅ **Configuração Centralizada** - Dados facilmente editáveis em `src/data/config.js`

## 🚀 Como Usar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/projeto.git
cd projeto
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist`.

### Preview da Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
projeto/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Profile.jsx      # Componente de perfil
│   │   ├── ThemeToggle.jsx  # Toggle de tema
│   │   ├── Links.jsx        # Lista de links
│   │   ├── SocialLinks.jsx  # Links sociais
│   │   ├── Portfolio.jsx    # Seção de portfólio
│   │   └── Resume.jsx       # Seção de currículo
│   ├── data/
│   │   └── config.js        # Configuração de dados
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globais
├── assets/                  # Imagens e recursos
├── index.html               # HTML principal
├── vite.config.js           # Configuração do Vite
└── package.json             # Dependências do projeto
```

## 🎨 Personalização

Para personalizar o conteúdo, edite o arquivo `src/data/config.js`:

- **profileData**: Informações do perfil (avatar, username, nome)
- **links**: Links das redes sociais
- **portfolioProjects**: Projetos do portfólio
- **experience**: Experiência profissional
- **education**: Formação acadêmica
- **skills**: Habilidades técnicas

## 📝 Licença

Esse projeto está sob a licença MIT.

---

Feito com ♥ baseado no projeto da Rocketseat :wave: [Participe da nossa comunidade!](https://discord.gg/rocketseat)
