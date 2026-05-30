export function initScripts() {
  if ((window as any).__scriptsInitialized) return;
  (window as any).__scriptsInitialized = true;

  // ── Scroll progress
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      progressBar.style.transform = `scaleX(${Math.min(pct,1)})`;
    }, { passive: true });
  }

  // ── Nav scroll
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ── Cursor glow
  if (window.matchMedia('(pointer:fine)').matches) {
    const glow = document.getElementById('cursor-glow');
    if (glow) {
      let mx = -100, my = -100, cx = -100, cy = -100;
      document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
      (function animGlow() {
        cx += (mx - cx) * 0.14; cy += (my - cy) * 0.14;
        glow.style.transform = `translate(${cx}px, ${cy}px)`;
        requestAnimationFrame(animGlow);
      })();
    }
  }

  // ── Hero counter
  function animCounter(el: HTMLElement | null, target: number, dur: number) {
    if (!el) return;
    const s = Date.now();
    (function t() {
      const p = Math.min((Date.now()-s)/dur, 1);
      const e = 1 - Math.pow(1-p, 3);
      el.textContent = Math.round(target * e).toString();
      if (p < 1) requestAnimationFrame(t);
    })();
  }
  setTimeout(() => animCounter(document.getElementById('heroCounter'), 12, 1200), 900);

  // ── Live activity counter
  (function() {
    const el = document.getElementById('liveCount');
    if (!el) return;
    let base = 8 + Math.floor(Math.random() * 8);
    el.textContent = base.toString();
    setInterval(() => {
      const delta = Math.random() < 0.5 ? 1 : -1;
      base = Math.max(4, Math.min(base + delta, 24));
      el.textContent = base.toString();
    }, 3800);
  })();

  // ── Particle canvas
  (function() {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W=0, H=0;
    const pts: any[] = [];
    
    function initParticles() {
      pts.length = 0;
      // Adjust complexity based on width
      const numParticles = W < 600 ? 30 : W < 900 ? 50 : 80;
      
      for (let i = 0; i < numParticles; i++) {
        pts.push({
          x: Math.random()*W, y: Math.random()*H,
          vx: (Math.random()-.5)*.28, vy: (Math.random()-.5)*.28,
          r: Math.random()*1.4+.3, a: Math.random()*.45+.1,
          lime: Math.random() > .65
        });
      }
    }

    let resizeTimeout: any;
    function resize() {
      const wrap = document.getElementById('hero-wrap');
      if (!wrap) return;
      W = canvas.width = wrap.offsetWidth;
      H = canvas.height = wrap.offsetHeight;
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initParticles, 150);
    }
    
    // Initial setup
    const wrap = document.getElementById('hero-wrap');
    if (wrap) {
      W = canvas.width = wrap.offsetWidth;
      H = canvas.height = wrap.offsetHeight;
      initParticles();
    }

    window.addEventListener('resize', resize, { passive: true });
    
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(canvas);

    (function draw() {
      requestAnimationFrame(draw);
      if (!isVisible) return;
      
      ctx.clearRect(0,0,W,H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = p.lime ? `rgba(200,255,0,${p.a})` : `rgba(248,240,232,${p.a*.35})`;
        ctx.fill();
      });
      // Connection distance scales slightly with width
      const connectionDist = W < 600 ? 80 : 110;
      
      for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++) {
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
        const d=dx*dx+dy*dy;
        const distSq = connectionDist * connectionDist;
        if (d<distSq) {
          const actualDist = Math.sqrt(d);
          ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
          ctx.strokeStyle=`rgba(200,255,0,${(1-actualDist/connectionDist)*0.07})`; ctx.lineWidth=.5; ctx.stroke();
        }
      }
    })();
  })();

  // ── Universal IntersectionObserver
  const IO_SEL = '.reveal,.reveal-left,.reveal-right,.tools-grid,.moat-grid,.pricing-grid,.testi-grid,.steps-grid,.solution-grid';
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll(IO_SEL).forEach(el => io.observe(el));

  // ── Hero title parallax
  const heroTitle = document.querySelector('.hero-title') as HTMLElement;
  if (heroTitle) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroTitle.style.transform = `translateY(${y * 0.16}px)`;
      heroTitle.style.opacity = Math.max(0, 1 - y/480).toString();
    }, { passive: true });
  }

  // ── Magnetic buttons
  document.querySelectorAll('.btn-primary').forEach(btn => {
    const el = btn as HTMLElement;
    el.addEventListener('mousemove', (e: any) => {
      const r = el.getBoundingClientRect();
      const dx=(e.clientX-r.left-r.width/2)*.22, dy=(e.clientY-r.top-r.height/2)*.22;
      el.style.transform=`translate(${dx}px,${dy}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform=''; });
  });

  // ── 3D tilt on testimonial cards
  document.querySelectorAll('.testi-card').forEach(card => {
    const el = card as HTMLElement;
    el.addEventListener('mousemove', (e: any) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width/2, cy = r.top + r.height/2;
      const rx = ((e.clientY-cy)/r.height)*10;
      const ry = ((e.clientX-cx)/r.width)*(-10);
      el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
      setTimeout(() => el.style.transition = '', 500);
    });
  });

  // ── Custom cursor
  (function() {
    const c = document.getElementById('custom-cursor');
    if (!c || !window.matchMedia('(pointer:fine)').matches) {
      if (c) c.style.display = 'none';
      return;
    }
    let mx=-100,my=-100,cx=-100,cy=-100;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
    (function anim() {
      cx += (mx-cx)*0.95; cy += (my-cy)*0.95;
      c.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(anim);
    })();
    const hoverEls = 'a,button,.tool-card,.testi-card,.price-card,.moat-card,.stat-box,.trust-badge';
    document.querySelectorAll(hoverEls).forEach(el => {
      el.addEventListener('mouseenter', () => c.classList.add('hovering'));
      el.addEventListener('mouseleave', () => c.classList.remove('hovering'));
    });
    document.addEventListener('mousedown', () => c.classList.add('clicking'));
    document.addEventListener('mouseup', () => c.classList.remove('clicking'));
  })();

  // ── Section dots tracking
  (window as any).scrollToSection = function(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  (function() {
    const dots = document.querySelectorAll('.section-dot');
    const sections = ['hero-wrap','pain','solution','tools','moat','comparison','howitworks','testimonials','pricing'];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = sections.indexOf(e.target.id);
          if (idx >= 0) {
            dots.forEach(d => d.classList.remove('active'));
            if (dots[idx]) dots[idx].classList.add('active');
          }
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    // Hide dots on mobile
    if (window.innerWidth < 900) {
      const dotsNav = document.getElementById('sectionDots');
      if (dotsNav) dotsNav.style.display = 'none';
    }
  })();

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    (window as any).closeMobile = function() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    };
  }

  // ── FAQ (Removed in favor of React State in FaqSection)
}
