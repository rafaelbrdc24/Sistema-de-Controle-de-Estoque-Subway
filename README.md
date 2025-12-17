# Sistema de Controle de Estoque Diário - Subway

Sistema de controle de inventário diário desenvolvido exclusivamente com HTML, CSS e JavaScript, projetado para uso em lojas Subway.

## 🚀 Características

- ✅ Sistema de login local (client-side apenas)
- ✅ Controle de quantidades de pães, condimentos, ingredientes e suprimentos
- ✅ Interface moderna inspirada no site oficial Subway Brasil
- ✅ Tema de cores: branco, amarelo e verde
- ✅ Exportação automática de dados em JSON
- ✅ Importação de dados para restaurar inventários anteriores
- ✅ Responsivo (desktop e tablet)
- ✅ Validações básicas (não permite quantidades negativas)
- ✅ Cálculo automático do total usado no dia

## 📋 Como Usar

### 1. Primeiro Acesso

1. Abra o arquivo `index.html` no navegador
2. Clique em "Cadastre-se" para criar uma conta
3. Preencha os dados e faça login

### 2. Controle Diário

- Use os botões **+** e **-** para aumentar ou diminuir as quantidades
- O sistema salva automaticamente no navegador
- O total usado no dia é calculado automaticamente

### 3. Exportar Inventário

1. Clique no botão **"Exportar Inventário"**
2. Um arquivo `inventory_YYYY-MM-DD.json` será baixado automaticamente
3. Salve este arquivo em uma pasta sincronizada com o Google Drive para backup automático

### 4. Importar Inventário

1. Clique no botão **"Importar Inventário"**
2. Selecione um arquivo JSON previamente exportado
3. Os dados serão restaurados no sistema

## 🗂️ Estrutura de Arquivos

```
sistema-de-estoque/
├── index.html      # Estrutura HTML principal
├── styles.css      # Estilos e tema Subway
├── script.js       # Lógica da aplicação
└── README.md       # Este arquivo
```

## 🎨 Produtos Pré-configurados

### Pães
- Pão Italiano
- Pão 9 Grãos
- Pão Parmesão
- Flatbread
- Wrap

### Condimentos
- Maionese
- Mostarda
- Ketchup
- Ranch
- Chipotle
- Mel e Mostarda
- Cebola Doce
- Barbecue

### Ingredientes
- Alface
- Tomate
- Cebola
- Pimentão
- Picles
- Azeitonas
- Jalapeño
- Queijo
- Bacon
- Frango
- Presunto
- Peito de Peru

### Outros Suprimentos
- Guardanapos
- Copos
- Tampas
- Canudos
- Sacolas
- Luvas
- Embalagens

## 🔧 Personalização

Para adicionar ou modificar produtos, edite o objeto `PRODUCTS_DATA` no arquivo `script.js`.

## 📱 Compatibilidade

- ✅ Navegadores modernos (Chrome, Firefox, Edge, Safari)
- ✅ Desktop
- ✅ Tablet
- ✅ Funciona offline (após primeiro carregamento)

## 🔒 Segurança

⚠️ **Importante**: Este sistema é projetado apenas para organização interna. O sistema de login é client-side e **não é seguro** para dados sensíveis. Não use para informações críticas ou confidenciais.

## 📝 Notas Técnicas

- Dados são armazenados no `localStorage` do navegador
- Cada usuário tem seu próprio inventário separado
- Os dados são salvos automaticamente a cada alteração
- O inventário é separado por data (um inventário por dia)

## 🚀 Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch principal
5. O site estará disponível em `https://seu-usuario.github.io/nome-do-repositorio`

## 📄 Licença

Este projeto é de uso livre para fins comerciais e pessoais.

---

Desenvolvido com ❤️ para lojas Subway

