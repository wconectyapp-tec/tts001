# 🔐 Safe-Gate Landing Page

Landing page profissional para o sistema de segurança para garagem **Safe-Gate** - Modelo de negócio por assinatura.

## 📁 Estrutura de Arquivos

```
Land-page/
├── index.html          # Página HTML principal
├── style.css           # Estilos CSS
├── script.js           # Scripts JavaScript
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. **Configurar o Número do WhatsApp**

Para que os botões de ação funcionem corretamente, você precisa editar o arquivo `script.js`:

**Abra o `script.js` e procure pela linha:**
```javascript
const WHATSAPP_NUMBER = '5511999999999'; // SUBSTITUA COM SEU NÚMERO
```

**Substitua `5511999999999` pelo seu número:**
- Formato: `55` (país) + `DDD` (área) + `Número` (sem formatação)
- Exemplo: Para (11) 99999-9999, use: `5511999999999`

### 2. **Personalizar Mensagens do WhatsApp** (Opcional)

No mesmo arquivo `script.js`, você pode customizar as mensagens enviadas:

```javascript
const messages = {
    header: 'Olá! Gostaria de conhecer mais sobre o Safe-Gate...',
    hero: 'Olá! Gostaria de conhecer mais sobre o Safe-Gate...',
    final: 'Olá! Estou interessado em assinar o Safe-Gate agora...'
};
```

### 3. **Abrir a Página**

- **Opção 1:** Abra o arquivo `index.html` diretamente no navegador
- **Opção 2:** Use um servidor local (recomendado para melhor compatibilidade)

**Para usar um servidor local com Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse: `http://localhost:8000`

**Para usar com Node.js (http-server):**
```bash
npx http-server
```

## 🎨 Paleta de Cores

- **Laranja Vibrante:** `#FF8C00` (Cor primária - CTA)
- **Preto Absoluto:** `#0a0a0a` (Fundo principal)
- **Branco:** `#ffffff` (Texto principal)
- **Amarelo Vibrante:** `#FFD700` (Destaque em textos)
- **Azul:** `#0099FF` (Efeito de luz - câmera)
- **Vermelho:** `#FF0000` (Efeito de luz - câmera)

## 📱 Seções da Página

### 1. **Header (Cabeçalho)**
- Logo "SAFE-GATE" em laranja
- Botão de ação no topo direito
- Sticky (permanece fixo ao scroll)

### 2. **Hero Section (Dobra Principal)**
- Título principal: *"Sua garagem protegida de verdade"*
- Subtítulo descritivo
- Visualização interativa da câmera com efeitos de luz
- Call-to-Action (CTA) principal

### 3. **Como Funciona**
- **3 Cards descritivos:**
  - 👁️ Uma Câmera, Duas Visões (Lente Dupla)
  - 💡 Iluminação Inteligente Integrada
  - 📱 Tudo no seu Celular

### 4. **Por Que Escolher**
- **3 Cards com benefícios:**
  - 🔧 Sem Preocupação com Manutenção
  - 💰 Equipamento Incluso
  - 👨‍💻 Suporte Técnico Dedicado

### 5. **CTA Final (Rodapé)**
- Reforço do benefício
- Botão de conversão principal
- Link direto para WhatsApp

### 6. **Footer (Rodapé)**
- Informações de copyright

## ✨ Recursos Técnicos

### Animações
- ✅ Pulsação na câmera (hero visual)
- ✅ Efeito de giroflex (azul e vermelho)
- ✅ Hover effects em botões e cards
- ✅ Parallax simplificado no scroll
- ✅ Fade-in ao aparecer na tela (Intersection Observer)

### Responsividade
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (até 767px)

### Performance
- ✅ CSS otimizado
- ✅ Sem dependências externas (vanilla JS)
- ✅ Lazy loading de animações

## 🔧 Customizações Sugeridas

### 1. **Adicionar Logo Personalizado**
Substitua o texto "SAFE-GATE" do header por uma imagem PNG/SVG.

### 2. **Integrar Imagem Real da Câmera**
Adicione uma imagem real ou render 3D da câmera de segurança na section hero.

### 3. **Adicionar Analytics**
Configure Google Analytics, Facebook Pixel ou Hotjar para rastrear conversões.

### 4. **Integrar com CRM**
Crie uma integração para capturar dados dos usuários antes de redirecionar ao WhatsApp.

### 5. **Multi-idioma**
Adapte os conteúdos para outros idiomas (EN, ES, etc.).

## 📞 Configuração do WhatsApp Business

Para otimizar a integração com WhatsApp:

1. **Use WhatsApp Business API** (opcional) para automação
2. **Crie templates de resposta automática** para primeiros contatos
3. **Configure respostas rápidas** para perguntas comuns

## 🎯 Estratégia de Conversão

A página foi estruturada com a seguinte jornada do cliente:

1. **Atração:** Header chamativo + Hero visual
2. **Educação:** Seção "Como Funciona"
3. **Persuasão:** Seção "Por Que Escolher"
4. **Ação:** CTA Final + WhatsApp

## 📊 Dicas para Otimização

- Use **A/B Testing** nos textos dos botões
- Monitore **taxa de clique** (CTR) nos botões
- Rastreie **tempo de permanência** em cada seção
- Teste **cores de botões** diferentes
- Analise **fontes de tráfego** que mais convertem

## 🐛 Troubleshooting

### Os botões do WhatsApp não funcionam?
- Verifique se o número foi inserido no formato correto (55 + DDD + número)
- Certifique-se de que o navegador permite abrir novos abas/janelas

### A página não carrega corretamente?
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Verifique o console (F12) para erros JavaScript

### Animações não funcionam?
- Atualize o navegador
- Teste em outro navegador moderno (Chrome, Firefox, Safari, Edge)

## 📄 Licença

Página desenvolvida especificamente para Safe-Gate. Todos os direitos reservados.

---

**Dúvidas ou sugestões?** Entre em contato com o desenvolvedor.

**Última atualização:** 2026-06-06
