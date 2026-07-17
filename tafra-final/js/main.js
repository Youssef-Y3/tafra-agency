/* =========================================
   TAFRA — Main JavaScript · 2026 Edition
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader')?.classList.add('hidden');
    }, 3500);
  });

  /* ---------- AOS ---------- */
  if (window.AOS) {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 80 });
  }

  /* ---------- Cursor ---------- */
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  const hoverOn  = () => ring?.classList.add('hover');
  const hoverOff = () => ring?.classList.remove('hover');

  if (dot && ring && window.innerWidth > 900 && matchMedia('(hover: hover)').matches) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    });
    (function animate() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(animate);
    })();
    const bindHovers = (root = document) => {
      root.querySelectorAll('[data-cursor="hover"], a, button, input, select, textarea').forEach(el => {
        el.addEventListener('mouseenter', hoverOn);
        el.addEventListener('mouseleave', hoverOff);
      });
    };
    bindHovers();
    window.__tafraBindHovers = bindHovers;
  }

  /* ---------- Navbar + Progress ---------- */
  const nav = document.getElementById('navbar');
  const progress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 50);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = ((window.scrollY / h) * 100) + '%';
    }
  });

  /* ---------- Mobile menu ---------- */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links?.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => {
      toggle?.classList.remove('open');
      links?.classList.remove('open');
    })
  );

  /* ---------- Counter animation ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.count;
        let cur = 0;
        const step = Math.max(1, target / 60);
        const timer = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(timer); }
          el.textContent = Math.floor(cur);
        }, 25);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));

  /* ---------- Works: render + filter ---------- */
  const grid = document.getElementById('worksGrid');
  const renderWorks = (filter = 'all') => {
    if (!grid || !window.TAFRA_WORKS) return;
    const items = filter === 'all'
      ? window.TAFRA_WORKS
      : window.TAFRA_WORKS.filter(w => w.category === filter);
    if (items.length === 0) {
      grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--grey);opacity:.6;padding:40px">No works in this category yet. <a href="#booking" style="color:var(--red)">Be the first →</a></p>`;
      return;
    }
    grid.innerHTML = items.map(w => `
      <a class="work-card" href="${w.link || '#'}" target="_blank" data-cursor="hover">
        <img src="${w.image}" alt="${w.title}" loading="lazy"
             onerror="this.src='https://placehold.co/600x450/0d0d0d/FF0000?text=${encodeURIComponent(w.title)}'"/>
        <div class="work-overlay">
          <span class="cat">${w.category}</span>
          <h4>${w.title}</h4>
          <p>${w.description}</p>
        </div>
      </a>
    `).join('');
    if (window.__tafraBindHovers) window.__tafraBindHovers(grid);
  };
  renderWorks();
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWorks(btn.dataset.filter);
    });
  });

  /* ---------- Pricing: render + tabs + currency ---------- */
  const priceTable = document.getElementById('priceTable');
  let currentTab = 'design';
  let currentCurrency = 'USD';

  const renderPricing = () => {
    if (!priceTable || !window.TAFRA_PRICING) return;
    const items = window.TAFRA_PRICING[currentTab] || [];
    const header = `
      <div class="price-row header">
        <span>#</span>
        <span>Service</span>
        <span>Price (${currentCurrency})</span>
        <span></span>
      </div>`;
    const rows = items.map((it, i) => {
      const price = currentCurrency === 'USD' ? '$' + it.usd : it.egp + ' EGP';
      return `
        <div class="price-row">
          <span class="price-num">${String(i + 1).padStart(2, '0')}</span>
          <div class="price-name">
            ${it.name}
            <span class="price-name-ar">${it.ar}</span>
          </div>
          <span class="price-value">${price}</span>
          <span class="price-action">
            <a href="#booking" data-cursor="hover" data-service="${it.name}">Book →</a>
          </span>
        </div>`;
    }).join('');
    priceTable.innerHTML = header + rows;

    // Bind service pre-select
    priceTable.querySelectorAll('[data-service]').forEach(a => {
      a.addEventListener('click', () => {
        const msg = document.querySelector('textarea[name="message"]');
        if (msg) msg.value = `I'm interested in: ${a.dataset.service}\n\nCan you send more details?`;
      });
    });
    if (window.__tafraBindHovers) window.__tafraBindHovers(priceTable);
  };
  renderPricing();

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      renderPricing();
    });
  });

  /* ---------- Currency toggle (Pricing table + Packages) ---------- */
  document.querySelectorAll('.currency-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.currency-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cur = btn.dataset.currency;
      currentCurrency = cur;

      // Package prices
      document.querySelectorAll('.pkg-price').forEach(price => {
        const amount = price.querySelector('.amount');
        const symbol = price.querySelector('.currency');
        if (!amount) return;
        if (cur === 'USD') {
          amount.textContent = amount.dataset.usd;
          symbol.textContent = '$';
        } else {
          const val = +amount.dataset.egp;
          amount.textContent = val.toLocaleString('en-US');
          symbol.textContent = 'EGP ';
        }
      });

      renderPricing();
    });
  });

  /* ---------- Package pre-select in form ---------- */
  document.querySelectorAll('[data-package]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sel = document.getElementById('packageSelect');
      if (sel) sel.value = btn.dataset.package;
    });
  });

  /* ---------- Contact form (Web3Forms + Formspree + mailto fallback) ---------- */
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.classList.add('loading');
    status.className = 'form-status';
    status.textContent = '';

    const fd = new FormData(form);
    const data = Object.fromEntries(fd);

    let sent = false;
    let errorDetail = '';

    // 1) Try Web3Forms
    if (data.access_key && data.access_key !== 'REPLACE_WITH_WEB3FORMS_KEY') {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data)
        });
        const json = await res.json();
        if (json.success) sent = true;
        else errorDetail = json.message || 'Web3Forms rejected the submission';
      } catch (err) { errorDetail = err.message; }
    }

    // 2) Try Formspree (backup)
    if (!sent && window.TAFRA_CONFIG?.formspreeUrl) {
      try {
        const res = await fetch(window.TAFRA_CONFIG.formspreeUrl, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: fd
        });
        if (res.ok) sent = true;
      } catch (err) { /* silent */ }
    }

    btn.classList.remove('loading');

    if (sent) {
      status.className = 'form-status success';
      status.innerHTML = `✓ Message sent successfully! We'll reply within 24 hours to <b>${data.email}</b>.`;
      form.reset();
      // Also offer WhatsApp
      setTimeout(() => {
        const waMsg = `Hi TAFRA! I'm ${data.name}.\nService: ${data.service}\nPackage: ${data.package || '-'}\n\n${data.message}`;
        if (confirm('✓ Message sent!\n\nOpen WhatsApp too for a faster reply?')) {
          window.open(`https://wa.me/201060690384?text=${encodeURIComponent(waMsg)}`, '_blank');
        }
      }, 400);
    } else {
      // Final fallback: mailto with pre-filled body
      const subject = `🔥 New TAFRA Lead: ${data.name}`;
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || '-'}`,
        `Company: ${data.company || '-'}`,
        `Service: ${data.service || '-'}`,
        `Package: ${data.package || '-'}`,
        `Budget: ${data.budget || '-'}`,
        `Timeline: ${data.timeline || '-'}`,
        ``,
        `Message:`,
        data.message || ''
      ].join('\n');
      const waMsg = `Hi TAFRA! I'm ${data.name}.\nService: ${data.service}\n\n${data.message}`;
      window.location.href = `mailto:youssef.y3e@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      status.className = 'form-status success';
      status.innerHTML = `
        ⚠ Backend not configured yet — opening your email app now.<br>
        Or reach us instantly on <a href="https://wa.me/201060690384?text=${encodeURIComponent(waMsg)}" target="_blank">WhatsApp →</a>
      `;
    }
  });

  /* ---------- Back to top ---------- */
  document.getElementById('backToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
