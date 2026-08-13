---
title: 'Traditional Pizza | Sitio web de pizzería'
description: 'Un sitio web moderno y atractivo para una pizzería local, que incluye un menú interactivo, opciones de pedido y reserva en linea.'
image: '/projects/traditional-pizza.webp'
github: 'https://github.com/RedBoth/traditional-pizza.git'
demo: 'https://traditional-pizza.netlify.app/'
tags: ['Astro', 'TailwindCSS', 'NodeJS']
---

<div class="not-prose mb-12 bg-brand-secondary/90 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
  
  <div class="flex flex-col md:flex-row md:items-baseline gap-4 border-b border-white/10 pb-4 mb-8">
    <h2 class="text-3xl font-bold text-brand-text m-0">Cómo construí Traditional Pizza</h2>
    <span class="text-xs font-mono text-brand-yellow uppercase tracking-widest bg-brand-yellow/10 px-2 py-1 rounded">UX Case Study</span>
  </div>

  <div class="flex flex-col lg:flex-row gap-10"> 
    <div class="flex-1 space-y-6">
      <p class="text-brand-muted leading-relaxed text-lg">
        Vivimos en la era digital, pero muchas pizzerías locales siguen dependiendo de menús en PDF difíciles de leer en móviles o páginas de Facebook desactualizadas.
      </p>
      <p class="text-brand-muted leading-relaxed">
        Me di cuenta de que la fricción al momento de pedir comida hace que los negocios pierdan clientes. El objetivo no era solo hacer una "web bonita", sino construir una experiencia de compra fluida e instantánea.
      </p>
    </div>
    <div class="flex-1">
      <div class="bg-black/40 border-l-4 border-brand-yellow p-6 rounded-r-2xl relative h-full flex flex-col justify-center shadow-inner">
        <span class="text-xs font-mono text-brand-yellow/80 block mb-3 tracking-widest">// PERFORMANCE_MATTERS</span>       
        <p class="text-xl text-brand-text italic font-medium leading-relaxed m-0">
          "El cliente come con los ojos, pero pide con el pulgar. Si la web tarda más de 3 segundos en cargar el menú, el cliente se va a la competencia."
        </p>
      </div>
    </div>

  </div>

  <div class="mt-10 pt-8 border-t border-white/10">
    <p class="text-brand-muted text-lg leading-relaxed m-0 max-w-3xl">
      Traditional Pizza nació para modernizar la presencia digital del negocio local, utilizando tecnologías modernas para garantizar un <strong class="text-brand-yellow font-bold">rendimiento del 100%</strong> y una navegación intuitiva.
    </p>
  </div>

</div>


<div class="not-prose mt-16 mb-12">
  <div class="flex items-baseline gap-4 mb-8">
    <h2 class="text-3xl font-bold text-brand-text m-0">Desafíos de Ingeniería</h2>
    <span class="text-xs font-mono text-brand-yellow uppercase tracking-widest bg-brand-yellow/10 px-2 py-1 rounded">Frontend Focus</span>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition duration-300 group flex flex-col h-full shadow-xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">01_PERFORMANCE</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Cero JavaScript Bloqueante</h3>
      </div>
      <p class="text-brand-muted mb-6 flex-grow leading-relaxed">
        Las webs tradicionales (SPAs) envían demasiado código innecesario, ralentizando la carga en conexiones móviles 3G/4G.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-purple uppercase tracking-wider block mb-1 text-sm">Estrategia</span>
        <p class="text-brand-muted/80 m-0 text-sm">
          Uso de <strong>Astro Static Site Generation (SSG)</strong> para enviar HTML puro, logrando un puntaje de 100 en Lighthouse.
        </p>
      </div>
    </div>
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition duration-300 group flex flex-col h-full shadow-xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">02_ARCHITECTURE</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Componentización Escalable</h3>
      </div>
      <p class="text-brand-muted mb-6 flex-grow leading-relaxed">
        Mantener la consistencia visual en un menú extenso y variado sin repetir código HTML ni clases CSS.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-purple uppercase tracking-wider block mb-1 text-sm">Estrategia</span>
        <p class="text-brand-muted/80 m-0 text-sm">
          Arquitectura basada en componentes reutilizables y un sistema de diseño atómico con <strong>TailwindCSS</strong>.
        </p>
      </div>
    </div>
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition duration-300 group md:col-span-2 shadow-xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">03_INTERACTIVITY</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Interactividad Ligera</h3>
      </div>
      <div class="flex flex-col md:flex-row gap-8">
        <p class="text-brand-muted leading-relaxed flex-1">
          Se necesitaba interactividad para el menú y el carrito, pero cargar un framework completo como React afectaría el SEO y la velocidad inicial.
        </p>
        <div class="flex-1 bg-black/40 p-5 rounded-xl border-l-2 border-brand-yellow">
          <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1 text-sm">Solución Aplicada</span>
          <p class="text-brand-muted/90 m-0">
            Implementación de lógica con <strong>Vanilla JavaScript</strong> optimizado para manipulación del DOM sin dependencias pesadas.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="not-prose mt-16 bg-brand-secondary/90 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
    <h2 class="text-2xl font-bold text-brand-text mb-6">Impacto y Roadmap</h2>
    <p class="text-brand-muted mb-10 leading-relaxed max-w-3xl text-lg">
        Este proyecto demuestra cómo la elección correcta del stack tecnológico puede transformar la experiencia de un negocio local, priorizando al usuario final sobre la complejidad innecesaria.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="p-6 border border-white/10 rounded-2xl bg-black/20 hover:bg-black/40 transition-colors flex items-center gap-4">
            <div>
               <span class="text-xs text-brand-muted/50 font-mono block mb-1">NEXT STEP 01</span>
               <span class="text-brand-yellow font-bold text-lg">Pasarela de Pagos</span>
            </div>
        </div>
        <div class="p-6 border border-white/10 rounded-2xl bg-black/20 hover:bg-black/40 transition-colors flex items-center gap-4">
            <div>
               <span class="text-xs text-brand-muted/50 font-mono block mb-1">NEXT STEP 02</span>
               <span class="text-brand-yellow font-bold text-lg">Panel Admin (CMS)</span>
            </div>
        </div>
    </div>
</div>