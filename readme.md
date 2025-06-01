# JoyCSS

> Framework CSS ultra-compacto que traz alegria ao desenvolvimento web ✨

Joy.css é um framework CSS que revoluciona a forma como você escreve estilos. Com classes ultra-compactas e sistema dinâmico, você escreve menos e constrói mais rápido.

## 🚀 Principais Características

- **🎯 Ultra-Compacto**: `f-c-c` ao invés de `display: flex; justify-content: center; align-items: center`
- **⚡ Dinâmico**: Use qualquer valor como `w-300px`, `h-150px`, `p-25px`
- **🧠 Intuitivo**: Classes que fazem sentido e são fáceis de lembrar
- **📦 Leve**: Apenas ~8KB minificado
- **🔧 Flexível**: Sistema modular e extensível
- **💻 Dev-Friendly**: Extensão VS Code com autocomplete

## ⭐ Por que Joy.css?

### Antes (CSS tradicional):

```css
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 200px;
  padding: 24px;
  background-color: #3b82f6;
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.12);
}
```

### Agora (Joy.css):

```html
<div class="f-c-c w-320px h-200px p-24px b-bl5 t-w rd3 sh2">
  Card perfeito!
</div>
```

## 📦 Instalação

### Via CDN (mais rápido)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/joycss@latest/dist/joy.css">
<script src="https://cdn.jsdelivr.net/npm/joycss@latest/dist/joy-dynamic.js"></script>
```

### Via npm

```bash
npm install joycss
```

### Download direto

1. Baixe os arquivos da pasta `dist/`
2. Inclua no seu projeto:

```html
<link rel="stylesheet" href="joy.css">
<script src="joy-dynamic.js"></script>
```

## 🎯 Guia Rápido

### Layout Flexbox

```html
<!-- Centralizar tudo -->
<div class="f-c-c">Centralizado</div>

<!-- Space-between com center -->
<div class="f-sb-c">
  <span>Esquerda</span>
  <span>Direita</span>
</div>

<!-- Coluna centralizada -->
<div class="f-col f-c-c">
  <h1>Título</h1>
  <p>Descrição</p>
</div>
```

### Espaçamento

```html
<!-- Padding e margin fixos -->
<div class="p4 m2">Padding 16px, Margin 8px</div>

<!-- Valores dinâmicos -->
<div class="p-25px m-15px">Padding 25px, Margin 15px</div>

<!-- Específicos -->
<div class="px-20px py-10px mb-30px">Customizado</div>
```

### Tamanhos

```html
<!-- Percentuais -->
<div class="w50 h100">50% width, 100% height</div>

<!-- Pixels dinâmicos -->
<div class="w-350px h-200px">350px × 200px</div>

<!-- Viewport -->
<div class="w-80vw hvh">80vw × 100vh</div>
```

### Cores

```html
<!-- Backgrounds -->
<div class="b-bl5 t-w">Azul com texto branco</div>
<div class="b-rd5 t-w">Vermelho com texto branco</div>
<div class="b-gn5 t-b">Verde com texto preto</div>

<!-- Tons de cinza -->
<div class="b-g1 t-g8">Fundo claro, texto escuro</div>
```

### Utilitários

```html
<!-- Border radius -->
<div class="rd2">Border radius 8px</div>
<div class="rdf">Totalmente arredondado</div>

<!-- Shadows -->
<div class="sh1">Shadow sutil</div>
<div class="sh3">Shadow pronunciada</div>

<!-- Borders -->
<div class="bd1">Border 1px</div>
```

## 🏗️ Exemplos Práticos

### Card de Produto

```html
<div class="w-300px b-w rd3 sh2 ovf-h">
  <img src="produto.jpg" class="w100 h-200px">
  <div class="p-20px">
    <h3 class="mb-10px t-g8">Nome do Produto</h3>
    <p class="mb-15px t-g6">Descrição breve</p>
    <div class="f-sb-c">
      <span class="t-bl5">R$ 99,90</span>
      <button class="px-15px py-8px b-bl5 t-w rd2">Comprar</button>
    </div>
  </div>
</div>
```

### Header Responsivo

```html
<header class="f-sb-c p-20px b-w sh1">
  <div class="f-c gap3">
    <img src="logo.svg" class="w-40px h-40px">
    <span class="t-g8">Minha Marca</span>
  </div>
  
  <nav class="f gap4">
    <a href="#" class="t-g6">Home</a>
    <a href="#" class="t-g6">Sobre</a>
    <a href="#" class="t-g6">Contato</a>
  </nav>
</header>
```

### Hero Section

```html
<section class="f-c-c hvh b-g1">
  <div class="w-600px p4">
    <h1 class="mb4 t-g8">Bem-vindo ao Futuro</h1>
    <p class="mb6 t-g6">
      Uma nova forma de construir interfaces incríveis
    </p>
    <div class="f-c gap3">
      <button class="px6 py3 b-bl5 t-w rd2">
        Começar Agora
      </button>
      <button class="px6 py3 bd1 t-g8 rd2">
        Saber Mais
      </button>
    </div>
  </div>
</section>
```

## 📖 Referência das Classes

### Layout

|Classe|CSS|Descrição|
|---|---|---|
|`f`|`display: flex`|Flex container|
|`f-c-c`|`display: flex; justify-content: center; align-items: center`|Centralizar tudo|
|`f-sb-c`|`display: flex; justify-content: space-between; align-items: center`|Space-between center|
|`f-col`|`flex-direction: column`|Flex coluna|
|`g`|`display: grid`|Grid container|
|`g-2`|`grid-template-columns: repeat(2, 1fr)`|Grid 2 colunas|

### Espaçamento

|Classe|CSS|Descrição|
|---|---|---|
|`p1` - `p8`|`padding: 4px` - `32px`|Padding fixo|
|`p-{n}px`|`padding: {n}px`|Padding dinâmico|
|`px-{n}px`|`padding-left/right: {n}px`|Padding horizontal|
|`m1` - `m6`|`margin: 4px` - `24px`|Margin fixo|
|`mb-{n}px`|`margin-bottom: {n}px`|Margin bottom dinâmico|

### Cores

|Classe|CSS|Descrição|
|---|---|---|
|`b-w`|`background: white`|Fundo branco|
|`b-bl5`|`background: #3b82f6`|Fundo azul|
|`b-rd5`|`background: #ef4444`|Fundo vermelho|
|`t-w`|`color: white`|Texto branco|
|`t-g8`|`color: #343a40`|Texto cinza escuro|

### Tamanhos Dinâmicos

|Padrão|Exemplo|Resultado|
|---|---|---|
|`w-{n}px`|`w-300px`|`width: 300px`|
|`h-{n}px`|`h-200px`|`height: 200px`|
|`w-{n}per`|`w-50per`|`width: 50%`|
|`h-{n}vh`|`h-80vh`|`height: 80vh`|

## 🛠️ Como Construir

### Requisitos

- Node.js 14+

### Setup

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/joycss.git
cd joycss

# Build do framework
node build.js
```

### Estrutura

```
joycss/
├── src/              # Arquivos fonte
│   ├── base.css
│   ├── layout.css
│   ├── spacing.css
│   ├── colors.css
│   ├── sizing.css
│   └── utilities.css
├── dist/             # Arquivos compilados
│   ├── joy.css
│   └── joy-dynamic.js
└── build.js          # Script de build
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua feature branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
4. Push para branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

MIT © [Seu Nome](https://github.com/seu-usuario)

---

**Feito com ❤️ para desenvolvedores que valorizam simplicidade e produtividade**