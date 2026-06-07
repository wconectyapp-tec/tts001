# 🚀 Guia de Deploy - Safe-Gate Landing Page

Este arquivo contém instruções detalhadas para fazer deploy da landing page em diferentes plataformas.

## 📦 Opções de Deploy

### 1. **GitHub Pages (Gratuito & Fácil)**

#### Passo a Passo:

1. **Crie um repositório no GitHub**
   - Acesse [github.com/new](https://github.com/new)
   - Nome: `safe-gate-landing` (ou seu nome preferido)
   - Selecione "Public"
   - Clique "Create repository"

2. **Clone o repositório localmente**
   ```bash
   git clone https://github.com/seu-usuario/safe-gate-landing.git
   cd safe-gate-landing
   ```

3. **Copie os arquivos da landing page**
   ```bash
   cp index.html style.css script.js README.md ./
   ```

4. **Envie para GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Safe-Gate Landing Page"
   git push origin main
   ```

5. **Habilite GitHub Pages**
   - Vá em Settings > Pages
   - Source: `main` branch
   - Clique "Save"
   - Sua página estará em: `https://seu-usuario.github.io/safe-gate-landing`

---

### 2. **Netlify (Gratuito com mais recursos)**

#### Passo a Passo:

1. **Crie uma conta em [netlify.com](https://netlify.com)**

2. **Opção A: Drag & Drop (Mais Rápido)**
   - Compacte a pasta com os arquivos (`.zip`)
   - No Netlify, selecione "Sites" > "Drag and drop your site folder here"
   - Arraste a pasta
   - Pronto! Sua página estará online

3. **Opção B: GitHub (Melhor para updates)**
   - Conecte sua conta GitHub ao Netlify
   - Selecione o repositório `safe-gate-landing`
   - Clique "Deploy site"
   - Cada push no GitHub fará redeploy automático

4. **Configure domínio customizado**
   - No Netlify, vá em Settings > Domain settings
   - Adicione seu domínio personalizado (se tiver)

---

### 3. **Vercel (Gratuito - Especial para Apps)**

#### Passo a Passo:

1. **Crie uma conta em [vercel.com](https://vercel.com)**

2. **Opção A: GitHub**
   - Conecte seu repositório GitHub
   - Clique "Import Project"
   - Selecione `safe-gate-landing`
   - Clique "Deploy"

3. **Opção B: CLI**
   ```bash
   npm i -g vercel
   cd /home/wesllley-br/Documentos/Land-page
   vercel
   ```

---

### 4. **Servidor Próprio (VPS/Hosting)**

#### Passo a Passo:

1. **Acesse seu servidor via SSH**
   ```bash
   ssh seu-usuario@seu-servidor.com
   ```

2. **Crie um diretório para o site**
   ```bash
   mkdir -p /var/www/safe-gate-landing
   cd /var/www/safe-gate-landing
   ```

3. **Copie os arquivos**
   ```bash
   # Opção 1: Via SCP
   scp index.html style.css script.js seu-usuario@seu-servidor.com:/var/www/safe-gate-landing/
   
   # Opção 2: Via Git
   git clone seu-repo-url .
   ```

4. **Configure com Nginx**
   ```bash
   # Edite o arquivo de configuração
   sudo nano /etc/nginx/sites-available/safe-gate
   ```

   **Adicione este conteúdo:**
   ```nginx
   server {
       listen 80;
       server_name seudominio.com www.seudominio.com;

       root /var/www/safe-gate-landing;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Compressão
       gzip on;
       gzip_types text/plain text/css text/javascript application/javascript;
   }
   ```

5. **Ative o site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/safe-gate /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Configure SSL (HTTPS)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d seudominio.com -d www.seudominio.com
   ```

---

### 5. **Firebase Hosting**

#### Passo a Passo:

1. **Instale Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Autentique**
   ```bash
   firebase login
   ```

3. **Inicialize o projeto**
   ```bash
   cd /home/wesllley-br/Documentos/Land-page
   firebase init hosting
   ```

4. **Configure o arquivo `firebase.json`**
   ```json
   {
     "hosting": {
       "public": ".",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [{
         "source": "**",
         "destination": "/index.html"
       }]
     }
   }
   ```

5. **Faça deploy**
   ```bash
   firebase deploy
   ```

---

## 🔧 Configurações Pós-Deploy

### 1. **Alterar o Número do WhatsApp**

Edite o arquivo `script.js`:
```javascript
const WHATSAPP_NUMBER = 'seu_numero_aqui';
```

### 2. **Configurar Domínio Customizado**

Para cada serviço:
- **GitHub Pages:** Adicione `CNAME` file
- **Netlify:** Settings > Domain Management
- **Vercel:** Settings > Domains
- **VPS:** Configure DNS na sua registradora

### 3. **Adicionar SSL/HTTPS**

- GitHub Pages: Automático ✅
- Netlify: Automático ✅
- Vercel: Automático ✅
- VPS: Use Certbot (instruções acima)
- Firebase: Automático ✅

### 4. **Habilitar Cache**

Adicione ao seu `index.html` na seção `<head>`:
```html
<meta http-equiv="Cache-Control" content="public, max-age=3600">
```

---

## 📊 Monitoramento Post-Deploy

### 1. **Google Analytics**

Adicione ao `index.html` antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 2. **Facebook Pixel**

Adicione ao `index.html` antes de `</head>`:
```html
<!-- Facebook Pixel -->
<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />
```

### 3. **Uptime Monitoring**

Recomendações:
- [UptimeRobot](https://uptimerobot.com) - Gratuito
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

---

## 🎯 Teste de Performance

### 1. **Google PageSpeed Insights**
- Acesse: [pagespeed.web.dev](https://pagespeed.web.dev)
- Cole sua URL
- Veja sugestões de otimização

### 2. **GTmetrix**
- Acesse: [gtmetrix.com](https://gtmetrix.com)
- Analise performance em detalhes

### 3. **WebPageTest**
- Acesse: [webpagetest.org](https://www.webpagetest.org)
- Teste de locais diferentes do mundo

---

## 📱 Teste de Responsividade

1. Abra a página em diferentes dispositivos
2. Use Chrome DevTools (F12) > Toggle device toolbar
3. Teste em:
   - iPhone 12/13/14
   - Samsung Galaxy
   - iPad
   - Diversos tamanhos de desktop

---

## 🔐 Segurança

### Checklist de Segurança:

- ✅ Use HTTPS (https://, não http://)
- ✅ Adicione CSP headers (Content Security Policy)
- ✅ Monitore logs de erro
- ✅ Faça backups regulares
- ✅ Mantenha dependências atualizadas

### Exemplo de CSP Header:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

---

## 💰 Estimativa de Custos

| Plataforma | Custo | Notas |
|-----------|------|-------|
| GitHub Pages | R$ 0 | Gratuito, próprio domínio pago |
| Netlify | R$ 0 | Gratuito com recursos básicos |
| Vercel | R$ 0 | Gratuito com recursos básicos |
| Firebase | R$ 0 | Gratuito até 10GB |
| VPS | R$ 10-50/mês | DigitalOcean, Linode, etc |

---

## 🚨 Troubleshooting

### Página branca/erro 404
- Verifique se todos os arquivos foram enviados
- Confirme as permissões de arquivo (644)
- Teste em incógnito (sem cache)

### Botões do WhatsApp não funcionam
- Verifique a variável `WHATSAPP_NUMBER` no `script.js`
- Teste o link diretamente: `https://wa.me/55...`
- Confirme se tem WhatsApp instalado

### Performance lenta
- Use CDN (Cloudflare gratuito)
- Optimize imagens
- Reduza tamanho do CSS/JS
- Habilite gzip compression

---

## 📞 Suporte

Para dúvidas sobre deploy:
1. Consulte a documentação oficial de cada plataforma
2. Procure em fóruns (Stack Overflow, Reddit)
3. Abra issue no repositório

---

**Última atualização:** 2026-06-06
