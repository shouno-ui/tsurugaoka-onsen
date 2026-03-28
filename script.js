// つるが丘温泉 - JavaScript

// ヘッダースクロールエフェクト
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// モバイルメニュー
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  const spans = menuToggle.querySelectorAll('span');
  if (nav.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// ナビリンククリック時にメニューを閉じる
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// スクロールアニメーション（段階的に表示）
const observerOptions = {
  threshold: 0.05,
  rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// アニメーション対象要素を段階的に表示
const animTargets = document.querySelectorAll(
  '.bath-card, .sauna-card, .feature-card, .flow-step, .info-item, .price-item, .amenity'
);

animTargets.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.6s ease ${i % 6 * 0.08}s, transform 0.6s ease ${i % 6 * 0.08}s`;
  observer.observe(el);
});

// セクションタイトルのアニメーション
document.querySelectorAll('.section-title').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});
