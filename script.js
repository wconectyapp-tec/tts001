// ============ SAFE-GATE LANDING PAGE SCRIPT ============

// Configuração de números do WhatsApp (AJUSTE COM SEU NÚMERO)
// Formato: 55 + DDD + Número (sem formatação)
const WHATSAPP_NUMBER = '5575988655746'; // Número atualizado para contato

// Mensagens personalizadas para diferentes CTAs
const messages = {
    header: 'Vim a respeito da garagem segura. Gostaria de mais informações e agendar uma visita.',
    hero: 'Vim a respeito da garagem segura. Gostaria de mais informações e agendar uma visita.',
    final: 'Vim a respeito da garagem segura. Gostaria de saber mais sobre o serviço e agendar instalação agora.'
};

// ============ FUNÇÃO PARA ATUALIZAR LINKS DO WHATSAPP ============
function updateWhatsAppLinks() {
    // Atualiza botão do header
    const headerCta = document.querySelector('.header-cta');
    if (headerCta) {
        headerCta.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages.header)}`;
        headerCta.target = '_blank';
    }

    // Atualiza botão principal (CTA Primary)
    const ctaPrimary = document.querySelector('.cta-primary');
    if (ctaPrimary) {
        ctaPrimary.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages.hero)}`;
        ctaPrimary.target = '_blank';
    }

    // Atualiza botão final
    const ctaFinal = document.querySelector('.cta-final-btn');
    if (ctaFinal) {
        ctaFinal.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages.final)}`;
        ctaFinal.target = '_blank';
    }
}

// ============ ANIMAÇÃO DE SCROLL SUAVE CUSTOMIZADA ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Se for apenas "#", não faz nada especial
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        // Se o elemento existe, faz scroll suave
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ EFEITO DE PARALLAX SIMPLES ============
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ============ ANIMAÇÃO DE ENTRADA DOS ELEMENTOS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa os cards de features
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observa os cards de benefícios
document.querySelectorAll('.benefit-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ============ ANIMAÇÃO FADEUP ============
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============ INICIALIZAÇÃO ============
document.addEventListener('DOMContentLoaded', () => {
    console.log('Safe-Gate Landing Page Iniciada');
    updateWhatsAppLinks();
    
    // Log de depuração (remova em produção)
    console.log('WhatsApp Number:', WHATSAPP_NUMBER);
});

// ============ EVENT LISTENER PARA DETECÇÃO DE CLIQUES NOS BOTÕES ============
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cta-button')) {
        // Opcional: Adicionar eventos de tracking aqui
        console.log('Clique em CTA:', e.target.textContent);
    }
});

// ============ SUPORTE A TRACKING DE CONVERSÕES (OPCIONAL) ============
// Descomente e configure com seu serviço de analytics
/*
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData);
    // Aqui você poderia enviar para Google Analytics, Facebook Pixel, etc.
}
*/

// ============ MODO DESENVOLVIMENTO ============
// Descomente a linha abaixo para ver mensagens de debug no console
// const DEBUG = true;
