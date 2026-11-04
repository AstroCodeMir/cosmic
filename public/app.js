// document.addEventListener('DOMContentLoaded', () => {
//   const animateItems = document.querySelectorAll('[data-animate]');
//   const fadeItems = document.querySelectorAll('[data-fade]');

//   const observer = new IntersectionObserver((entries, obs) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         if (entry.target.hasAttribute('data-animate')) {
//           entry.target.classList.remove('opacity-0', 'translate-y-5');
//         }
//         if (entry.target.hasAttribute('data-fade')) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-2');
//         }
//         obs.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.2 });

//   animateItems.forEach(el => observer.observe(el));
//   fadeItems.forEach(el => observer.observe(el));

//   // ——— Mobile Menu Toggle ———
//   const wrapper = document.getElementById('mobile-menu-wrapper');
//   const openBtn = document.getElementById('open-menu-btn');
//   const closeBtn = document.getElementById('close-menu-btn');
//   const backdrop = wrapper.querySelector('.fixed.inset-0');
//   const panel = wrapper.querySelector('.fixed.inset-y-0');

//   openBtn?.addEventListener('click', e => {
//     e.stopPropagation();
//     wrapper.classList.remove('hidden', 'translate-x-full');
//     wrapper.classList.add('translate-x-0');
//   });

//   closeBtn?.addEventListener('click', e => {
//     e.stopPropagation();
//     wrapper.classList.remove('translate-x-0');
//     wrapper.classList.add('translate-x-full');
//     setTimeout(() => wrapper.classList.add('hidden'), 300);
//   });

//   panel?.addEventListener('click', e => {
//     e.stopPropagation();
//   });

//   backdrop?.addEventListener('click', () => {
//     wrapper.classList.remove('translate-x-0');
//     wrapper.classList.add('translate-x-full');
//     setTimeout(() => wrapper.classList.add('hidden'), 300);
//   });


//   document.addEventListener('click', e => {
//     if (
//       !wrapper.classList.contains('hidden') &&
//       !wrapper.contains(e.target) &&
//       !openBtn.contains(e.target)
//     ) {
//       wrapper.classList.remove('translate-x-0');
//       wrapper.classList.add('translate-x-full');
//       setTimeout(() => wrapper.classList.add('hidden'), 300);
//     }
//   });

//   // ——— Social Icons Initialization ———
//   const socials = [
//     { name: 'X', icon: 'x', link: '#' },
//     { name: 'Instagram', icon: 'instagram', link: '#' },
//     { name: 'GitHub', icon: 'github', link: '#' },
//     { name: 'LinkedIn', icon: 'linkedin', link: '#' }
//   ];
//   const container = document.getElementById('social-icons');

//   if (container) {
//     socials.forEach(({ name, icon, link }) => {
//       const a = document.createElement('a');
//       a.href = link;
//       a.setAttribute('aria-label', name);
//       a.className = 'text-gray-400 hover:text-white transition';
//       a.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
//       container.appendChild(a);
//     });

//     if (typeof lucide !== 'undefined' && lucide.createIcons) {
//       lucide.createIcons();
//     }
//   }
// });


document.addEventListener('DOMContentLoaded', () => {
  // ——— Fade & Animate Items ———
  const animateItems = document.querySelectorAll('[data-animate]');
  const fadeItems = document.querySelectorAll('[data-fade]');
  const progressBars = document.querySelectorAll('.progress-bar');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section Animations
        if (entry.target.hasAttribute('data-animate')) {
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
        if (entry.target.hasAttribute('data-fade')) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-2');
        }

        // Progress Bar Animation
        if (entry.target.classList.contains('progress-bar')) {
          const progress = entry.target.getAttribute('data-progress');
          entry.target.style.width = progress + '%';
          entry.target.style.transition = 'width 1.5s ease-out';
        }

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe animated sections
  animateItems.forEach(el => observer.observe(el));
  fadeItems.forEach(el => observer.observe(el));

  // Observe progress bars (start at 0%)
  progressBars.forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
  });

  // ——— Mobile Menu Toggle ———
  const wrapper = document.getElementById('mobile-menu-wrapper');
  const openBtn = document.getElementById('open-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');
  const backdrop = wrapper?.querySelector('.fixed.inset-0');
  const panel = wrapper?.querySelector('.fixed.inset-y-0');

  openBtn?.addEventListener('click', e => {
    e.stopPropagation();
    wrapper.classList.remove('hidden', 'translate-x-full');
    wrapper.classList.add('translate-x-0');
  });

  closeBtn?.addEventListener('click', e => {
    e.stopPropagation();
    wrapper.classList.remove('translate-x-0');
    wrapper.classList.add('translate-x-full');
    setTimeout(() => wrapper.classList.add('hidden'), 300);
  });

  panel?.addEventListener('click', e => {
    e.stopPropagation();
  });

  backdrop?.addEventListener('click', () => {
    wrapper.classList.remove('translate-x-0');
    wrapper.classList.add('translate-x-full');
    setTimeout(() => wrapper.classList.add('hidden'), 300);
  });

  document.addEventListener('click', e => {
    if (
      !wrapper?.classList.contains('hidden') &&
      !wrapper?.contains(e.target) &&
      !openBtn?.contains(e.target)
    ) {
      wrapper.classList.remove('translate-x-0');
      wrapper.classList.add('translate-x-full');
      setTimeout(() => wrapper.classList.add('hidden'), 300);
    }
  });

  // ——— Social Icons Initialization ———
  const socials = [
    { name: 'X', icon: 'x', link: '#' },
    { name: 'Instagram', icon: 'instagram', link: '#' },
    { name: 'GitHub', icon: 'github', link: '#' },
    { name: 'LinkedIn', icon: 'linkedin', link: '#' }
  ];
  const container = document.getElementById('social-icons');

  if (container) {
    socials.forEach(({ name, icon, link }) => {
      const a = document.createElement('a');
      a.href = link;
      a.setAttribute('aria-label', name);
      a.className = 'text-gray-400 hover:text-white transition';
      a.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
      container.appendChild(a);
    });

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }
});
