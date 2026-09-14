<p align="center">
  <img width="270" height="270" alt="Vitalia" src="https://github.com/user-attachments/assets/d72bd46f-639c-4197-94b0-0e3c37791250" />
</p>

<h1 align="center">🐾 Vitalia - Monitoramento e Cuidado Inteligente de Pets</h1>

<h4 align="center">
  Aplicativo mobile desenvolvido para auxiliar tutores no acompanhamento da saúde e bem-estar de seus pets, centralizando informações, gerenciamento dos animais e alertas em uma única plataforma.
</h4>

---

# 📑 Índice

- [📱 Sobre o Projeto](#-sobre-o-projeto)
- [🎯 Objetivo](#-objetivo)
- [👥 Integrantes do Grupo](#-integrantes-do-grupo)
- [🎨 Protótipo no Figma](#-protótipo-no-figma)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🏗️ Arquitetura](#️-arquitetura)
- [🔐 Autenticação](#-autenticação)
- [🔒 Proteção de Rotas](#-proteção-de-rotas)
- [🐶 Gerenciamento de Pets](#-gerenciamento-de-pets)
- [🐕 Espécies e Raças](#-espécies-e-raças)
- [👤 Perfil do Usuário](#-perfil-do-usuário)
- [✏️ Edição de Perfil](#️-edição-de-perfil)
- [🚪 Logout](#-logout)
- [🗑️ Exclusão da Conta](#️-exclusão-da-conta)
- [🔔 Alertas e Notificações](#-alertas-e-notificações)
- [🔄 TanStack Query](#-tanstack-query)
- [🌐 API](#-api)
- [📱 Principais Telas](#-principais-telas)
- [💾 Armazenamento Local](#-armazenamento-local)
- [⚠️ Tratamento de Estados](#️-tratamento-de-estados)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [▶️ Como Executar o Projeto](#️-como-executar-o-projeto)
- [🔗 Principais Endpoints](#-principais-endpoints)
- [✅ Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [🎥 Vídeo de Demonstração](#-vídeo-de-demonstração)

---

# 📱 Sobre o Projeto

O **Vitalia** é uma aplicação mobile desenvolvida em **React Native, Expo e TypeScript**, criada como parte do Challenge da FIAP.

Nesta Sprint, o projeto evoluiu de um protótipo visual para uma aplicação funcional integrada a uma **API REST desenvolvida em Java com Spring Boot**.

A aplicação permite ao tutor:

- realizar cadastro e login;
- manter sua sessão autenticada;
- cadastrar e gerenciar seus pets;
- consultar espécies e raças;
- editar seus dados pessoais;
- excluir sua conta;
- realizar logout;
- visualizar alertas relacionados aos seus pets.

A aplicação possui separação entre interface, regras de acesso aos dados, comunicação HTTP, autenticação e armazenamento local.

---

# 🎯 Objetivo

O Vitalia tem como objetivo facilitar o acompanhamento da saúde e da rotina dos pets através de uma solução mobile simples, organizada e acessível.

Entre os principais objetivos da aplicação estão:

- centralizar informações do pet;
- facilitar o gerenciamento dos animais;
- disponibilizar alertas relacionados à saúde e comportamento;
- manter as informações do tutor organizadas;
- permitir integração com serviços externos e dispositivos IoT futuramente;
- proporcionar uma experiência mobile intuitiva.

---

# 👥 Integrantes do Grupo

<table>
  <tr>
    <td width="130">
      <img src="https://github.com/moisesBarsoti.png" width="120" style="border-radius: 50%;"/>
    </td>
    <td>
      <b>Moisés Barsoti Andrade de Oliveira</b><br/>
      <b>RM:</b> 565049 &nbsp;&nbsp;|&nbsp;&nbsp;
      <b>Turma:</b> 2TDSPO - FIAP
    </td>
  </tr>

  <tr>
    <td width="130">
      <img src="https://github.com/sSofia-s.png" width="120" style="border-radius: 50%;"/>
    </td>
    <td>
      <b>Sofia Siqueira Fontes</b><br/>
      <b>RM:</b> 563829 &nbsp;&nbsp;|&nbsp;&nbsp;
      <b>Turma:</b> 2TDSPG - FIAP
    </td>
  </tr>

  <tr>
    <td width="130">
      <img src="https://github.com/manuelalacerda.png" width="120" style="border-radius: 50%;"/>
    </td>
    <td>
      <b>Manuela de Lacerda Soares</b><br/>
      <b>RM:</b> 564887 &nbsp;&nbsp;|&nbsp;&nbsp;
      <b>Turma:</b> 2TDSPG - FIAP
    </td>
  </tr>
</table>

---

# 🎨 Protótipo no Figma

O design da aplicação foi desenvolvido previamente no **Figma**, permitindo validar a identidade visual, navegação e experiência do usuário antes da implementação em React Native.

O protótipo contém as principais telas e fluxos do Vitalia, incluindo:

- Login;
- Cadastro;
- Dashboard;
- Perfil;
- Pets;
- Cadastro de Pet;
- Detalhes do Pet;
- Notificações;
- Alertas;
- Fluxos de navegação.

<p align="center">

### 🔗 [Acessar Protótipo do Vitalia no Figma](https://www.figma.com/design/9pNMdLvlyp9oUxdd5pqieP/Vitalia---Desenvolvimento?node-id=6-2&t=N1nTHjM3Sd5iLNxo-1)

</p>

---

# 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologias |
| --- | --- |
| **Desenvolvimento Mobile** | React Native • TypeScript • Expo |
| **Navegação** | React Navigation • Native Stack • Bottom Tabs |
| **Comunicação HTTP** | Axios |
| **Gerenciamento de Dados** | TanStack Query |
| **Autenticação** | JWT • API Java |
| **Persistência da Sessão** | Expo SecureStore |
| **Armazenamento Local** | AsyncStorage |
| **Interface** | Expo Vector Icons |
| **Backend** | Java • Spring Boot |
| **Documentação da API** | Swagger • OpenAPI |
| **Deploy Backend** | Render |
| **Prototipação** | Figma |

---

# 🏗️ Arquitetura

O projeto foi organizado em camadas para separar responsabilidades.

```text
src/
├── api/
│   ├── api.ts
│   └── queryClient.ts
│
├── assets/
│
├── components/
│
├── contexts/
│   └── AuthContext.tsx
│
├── hooks/
│   ├── useAlerts.ts
│   ├── useCurrentUser.ts
│   ├── useMyPets.ts
│   ├── useUpdatePet.ts
│   └── ...
│
├── navigation/
│   ├── AppNavigator.tsx
│   └── TabNavigator.tsx
│
├── screens/
│
├── services/
│   ├── alertService.ts
│   ├── authService.ts
│   ├── petService.ts
│   ├── speciesService.ts
│   └── userService.ts
│
├── storage/
│   └── tokenStorage.ts
│
├── styles/
│
└── types/
```

O fluxo de comunicação segue o padrão:

```text
Tela
 ↓
Hook
 ↓
Service
 ↓
Axios
 ↓
API Java
```

Assim, as telas permanecem responsáveis principalmente pela interface, enquanto a comunicação com o backend fica concentrada nos services e hooks.

---

# 🔐 Autenticação

A autenticação é realizada pela API Java utilizando **JWT**.

### Login

```http
POST /auth/login
```

Após a autenticação, o token recebido é armazenado no:

```text
Expo SecureStore
```

O token é automaticamente enviado nas requisições protegidas através do interceptor do Axios.

```http
Authorization: Bearer TOKEN
```

---

## Usuário autenticado

Os dados do usuário autenticado são recuperados através de:

```http
GET /auth/me
```

Entre as informações disponíveis estão:

- nome;
- e-mail;
- telefone;
- CPF;
- data de nascimento;
- endereço;
- perfis de acesso.

---

# 🔒 Proteção de Rotas

O aplicativo possui proteção das rotas baseada no estado de autenticação.

Fluxo:

```text
Aplicação iniciada
      ↓
Verifica token salvo
      ↓
GET /auth/me
      ↓
Sessão válida?
 ┌─────────────┴─────────────┐
 ↓                           ↓
Sim                         Não
 ↓                           ↓
Aplicação                Login
```

Quando não existe uma sessão válida, o usuário é direcionado para as telas de autenticação.

Quando existe uma sessão válida, as telas internas do Vitalia são liberadas.

---

# 🐶 Gerenciamento de Pets

O aplicativo possui CRUD integrado à API Java.

### Listar pets

```http
GET /pets/my-pets
```

### Buscar pet

```http
GET /pets/{id}
```

### Cadastrar pet

```http
POST /pets
```

### Atualizar pet

```http
PUT /pets/{id}
```

### Excluir pet

```http
DELETE /pets/{id}
```

Fluxo disponível:

```text
CREATE
READ
UPDATE
DELETE
```

---

# 🐕 Espécies e Raças

As espécies e raças utilizadas no cadastro dos pets são recuperadas diretamente da API.

### Espécies

```http
GET /species
```

### Raças

```http
GET /species/{speciesId}/breeds
```

O usuário seleciona primeiro uma espécie e posteriormente uma raça correspondente.

---

# 👤 Perfil do Usuário

A tela de perfil apresenta informações reais do usuário autenticado.

Entre elas:

- nome;
- CPF;
- telefone;
- nascimento;
- endereço.

---

# ✏️ Edição de Perfil

O usuário pode alterar os próprios dados.

```http
PUT /users/me
```

Após a edição, o cache é invalidado pelo TanStack Query e os novos dados são carregados automaticamente.

---

# 🚪 Logout

O Vitalia possui um modal de confirmação antes do logout.

Ao sair:

1. o token é removido do SecureStore;
2. o pet ativo é removido do armazenamento local;
3. o cache do TanStack Query é limpo;
4. o usuário retorna para a área de autenticação.

---

# 🗑️ Exclusão da Conta

O tutor pode excluir sua própria conta.

```http
DELETE /users/me
```

A exclusão utiliza uma estratégia de **exclusão lógica**.

O registro permanece no banco, porém o usuário passa para:

```text
BLOCKED
```

Com isso, seus relacionamentos são preservados e novos logins são bloqueados.

---

# 🔔 Alertas e Notificações

A tela de notificações apresenta apenas alertas existentes na API.

Os alertas são consultados com base no pet ativo.

```http
GET /alerts/pet/{petId}
```

Fluxo:

```text
Pet ativo
   ↓
useAlerts
   ↓
alertService
   ↓
GET /alerts/pet/{petId}
   ↓
API Java
```

Quando não existem alertas, a aplicação apresenta um estado vazio.

Quando existem alertas, eles são renderizados dinamicamente.

---

# 🔄 TanStack Query

O projeto utiliza **TanStack Query** para controlar dados assíncronos.

Recursos utilizados:

- `useQuery`;
- `useMutation`;
- cache;
- refetch;
- invalidação de queries;
- loading;
- tratamento de erro;
- atualização automática.

Exemplo:

```text
Editar Pet
   ↓
PUT /pets/{id}
   ↓
Mutation
   ↓
invalidateQueries
   ↓
GET /pets/my-pets
   ↓
Interface atualizada
```

---

# 🌐 API

A aplicação utiliza a API Java publicada no Render.

### URL Base

```text
https://vitalia-txa9.onrender.com
```

Configurada através de:

```env
EXPO_PUBLIC_API_JAVA_URL=https://vitalia-txa9.onrender.com
```

### Swagger

```text
https://vitalia-txa9.onrender.com/swagger-ui/index.html
```

### OpenAPI

```text
https://vitalia-txa9.onrender.com/api-docs
```

---

# 📱 Principais Telas

O Vitalia possui múltiplas telas e fluxos.

Entre elas:

- Login;
- Cadastro;
- Dashboard;
- Pets;
- Cadastro de Pet;
- Detalhes do Pet;
- Edição de Pet;
- Notificações;
- Perfil;
- Edição de Perfil.

A navegação principal possui:

```text
Início
Pets
Notificações
Perfil
```

---

# 💾 Armazenamento Local

O projeto utiliza duas estratégias.

## SecureStore

Utilizado para informações sensíveis.

Exemplo:

```text
JWT
```

---

## AsyncStorage

Utilizado para informações locais não sensíveis.

Exemplo:

```text
Pet ativo
```

Internamente existe atualmente a chave:

```text
@petguardian:activePetId
```

Essa chave é apenas um identificador técnico legado e não representa o nome atual do produto.

O produto e toda a identidade visual da aplicação são **Vitalia**.

---

# ⚠️ Tratamento de Estados

As telas integradas à API possuem tratamento para:

### Loading

```text
ActivityIndicator
```

### Erro

Mensagens específicas são exibidas quando uma requisição falha.

### Estado vazio

Quando não existem registros, a aplicação apresenta uma interface informativa em vez de deixar a tela em branco.

---

# 📁 Estrutura do Projeto

```text
Vitalia-Mobile-Sprint3/
├── android/
├── ios/
│
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   ├── storage/
│   ├── styles/
│   └── types/
│
├── .env
├── .gitignore
├── app.json
├── App.tsx
├── babel.config.js
├── index.js
├── metro.config.js
├── package-lock.json
├── package.json
└── tsconfig.json
```

---

# ▶️ Como Executar o Projeto

## ⚠️ Pré-requisitos

Tenha instalado:

- Node.js;
- npm;
- Expo;
- Android Studio;
- emulador Android/iOS ou dispositivo físico.

---

## 1. Clone o projeto

```bash
git clone https://github.com/Grupo-BSL-Challenge-FIAP/Vitalia-Mobile-Sprint3.git
```

Entre na pasta:

```bash
cd Vitalia-Mobile-Sprint3
```

---

## 2. Instale as dependências

```bash
npm install
```

---

## 3. Configure a API

Crie o arquivo:

```text
.env
```

Adicione:

```env
EXPO_PUBLIC_API_JAVA_URL=https://vitalia-txa9.onrender.com
```

---

## 4. Inicie o projeto

```bash
npx expo start
```

---

## Android

```bash
npx expo start -a
```

---

## iOS

```bash
npx expo start -i
```

---

## Limpar cache

```bash
npx expo start -c
```

---

# 🔗 Principais Endpoints

| Método | Endpoint | Função |
| --- | --- | --- |
| POST | `/auth/login` | Login |
| GET | `/auth/me` | Usuário autenticado |
| POST | `/auth/register/tutor` | Cadastro de tutor |
| GET | `/pets/my-pets` | Pets do tutor |
| GET | `/pets/{id}` | Buscar pet |
| POST | `/pets` | Cadastrar pet |
| PUT | `/pets/{id}` | Editar pet |
| DELETE | `/pets/{id}` | Excluir pet |
| GET | `/species` | Listar espécies |
| GET | `/species/{speciesId}/breeds` | Listar raças |
| PUT | `/users/me` | Editar perfil |
| DELETE | `/users/me` | Excluir conta |
| GET | `/alerts/pet/{petId}` | Alertas do pet |

---

# ✅ Funcionalidades Implementadas

- [x] Navegação entre múltiplas telas
- [x] Bottom Tab Navigator
- [x] React Navigation
- [x] Login integrado à API
- [x] Cadastro de usuário
- [x] JWT
- [x] Persistência de sessão
- [x] Proteção de rotas
- [x] Logout
- [x] SecureStore
- [x] AsyncStorage
- [x] Axios
- [x] TanStack Query
- [x] Loading nas requisições
- [x] Tratamento de erros
- [x] Estado vazio
- [x] Atualização automática dos dados
- [x] CRUD de pets
- [x] Listagem de espécies
- [x] Listagem de raças
- [x] Perfil integrado à API
- [x] Edição de perfil
- [x] Exclusão lógica da conta
- [x] Alertas por pet
- [x] Tela de notificações integrada
- [x] Arquitetura em camadas
- [x] Services separados
- [x] Hooks personalizados
- [x] Integração com API Java
- [x] Protótipo desenvolvido no Figma

---

# 🎥 Vídeo de Demonstração

Clique abaixo para assistir ao vídeo de demonstração:

### ▶️ [Vitalia - Aplicativo Mobile | Sprint 3](https://www.youtube.com/watch?v=zusyhVfg_b4)

---
