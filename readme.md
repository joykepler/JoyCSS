# JoyCSS

> Framework CSS ultra-compacto que traz alegria ao desenvolvimento web ✨

Joy.css é um framework CSS que revoluciona a forma como você escreve estilos. Com classes ultra-compactas e sistema dinâmico, você escreve menos e constrói mais rápido.

## 🚀 Principais Características

- **🎯 Ultra-Compacto**: `f-c-c` ao invés de `display: flex; justify-content: center; align-items: center`
- **⚡ Dinâmico**: Use qualquer valor como `w-300px`, `h-150px`, `p-25px`
- **🧠 Intuitivo**: Classes que fazem sentido e são fáceis de lembrar
- **🔧 Flexível**: Sistema modular e extensível

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

**Feito com ❤️ para desenvolvedores que valorizam simplicidade e produtividade**
