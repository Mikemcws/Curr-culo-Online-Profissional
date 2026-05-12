// Scroll suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Efeito de digitação no cargo (opcional - descomente se quiser)
/*
const cargoElement = document.querySelector('.cargo');
const cargos = [
    'Desenvolvedor Full Stack Jr em Formação',
    'Estudante de ADS',
    'HTML • CSS • JavaScript • React • Node.js'
];
let cargoIndex = 0;
let charIndex = 0;

function digitarCargo() {
    if (charIndex < cargos[cargoIndex].length) {
        cargoElement.textContent += cargos[cargoIndex].charAt(charIndex);
        charIndex++;
        setTimeout(digitarCargo, 50);
    } else {
        setTimeout(apagarCargo, 2000);
    }
}

function apagarCargo() {
    if (charIndex > 0) {
        cargoElement.textContent = cargos[cargoIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(apagarCargo, 30);
    } else {
        cargoIndex = (cargoIndex + 1) % cargos.length;
        setTimeout(digitarCargo, 500);
    }
}

// Iniciar efeito de digitação
window.addEventListener('load', digitarCargo);
*/

// Destacar cards ao passar o mouse
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.borderColor = 'rgba(108, 99, 255, 0.5)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    });
});

// Atualizar ano automaticamente
const anoAtual = new Date().getFullYear();
document.querySelector('.footer p:last-child').innerHTML =
    `Desenvolvido com ❤️ por Mike Willian - ${anoAtual}`;

console.log('👋 Bem-vindo ao meu currículo online!');
console.log('📧 Contato: caciqye@hotmail.com');
console.log('📱 WhatsApp: (16) 99284-7413');
console.log('🚀 Vamos construir algo incrível juntos!');