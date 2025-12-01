# 🎬 Aplicativo Web de Streaming

> Projeto desenvolvido para a disciplina de Engenharia de Software.

## 📄 Sobre o Projeto

Este projeto consiste em um aplicativo web que simula um serviço de streaming, inspirado em plataformas populares como Netflix e Prime Video. O objetivo principal é proporcionar ao usuário uma experiência intuitiva de navegação e descoberta de conteúdo audiovisual, unindo praticidade, performance e uma interface agradável.

Os dados são obtidos dinamicamente através de uma API pública de filmes (TMDb), garantindo que as informações estejam sempre atualizadas.

### 👥 Autores
* **Andreos Henrique Dummer**
* **Gabriel Huff**

---

## 🚀 Funcionalidades

O sistema conta com diferentes páginas para organizar a experiência do usuário:

* **🏠 Home:** Painel de destaque com seções organizadas por categorias como *Top Rated*, *Now Playing* e *Upcoming*.
* **🎬 Filmes:** Catálogo dedicado exclusivamente a filmes, com filtros por gênero.
* **📺 Séries:** Catálogo dedicado a séries, permitindo segmentação e filtragem por gênero.
* **🔍 Busca:** Pesquisa direta de títulos (filmes ou séries) por nome.
* **ℹ️ Detalhes:** Página com informações aprofundadas sobre a obra (avaliação, sinopse, trailer, elenco e recomendações).

---

## 🛠 Tecnologias Utilizadas

A escolha das tecnologias foi motivada pela integração fluida, suporte da comunidade e aderência às práticas modernas de desenvolvimento web:

* **React.js:** Biblioteca principal para criação da interface e componentização.
* **Tailwind CSS:** Framework para estilização ágil e consistência visual.
* **React Query:** Gerenciamento de estado e cache das requisições à API.
* **React Router:** Gerenciamento de rotas dinâmicas e navegação entre páginas.
* **API Pública (TMDb):** Fonte dos dados de filmes e séries.

---

## ⚙️ Metodologia

O desenvolvimento segue a metodologia **Scrum**, com sprints semanais que incluem:
1.  Planejamento do backlog.
2.  Definição de histórias de usuário.
3.  Desenvolvimento incremental e revisões periódicas.

---

## 📦 Como rodar o projeto

### Pré-requisitos
* Node.js instalado
* Gerenciador de pacotes (npm ou yarn)
* Chave de API do TMDb (The Movie Database)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone git@github.com:HenriqueDummer/CineHub.git
    cd nome-do-repo
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API:
    ```env
    VITE_TMDB_ACCESS_TOKEN=sua_chave_aqui
    ```

4.  **Execute o projeto:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

---

## 📝 Licença

Este projeto é desenvolvido para fins educacionais.
