---
title: 'Traditional Pizza | Sitio web de pizzería'
description: 'Un sitio web moderno y atractivo para una pizzería local, que incluye un menú interactivo, opciones de pedido y reserva en linea.'
image: '/projects/traditional-pizza.webp'
github: 'https://github.com/RedBoth/traditional-pizza.git'
demo: 'https://traditional-pizza.netlify.app/'
tags: ['Astro', 'TailwindCSS', 'NodeJS']
---

<div class="not-prose mb-16">
  
  <div class="flex items-baseline gap-4 border-b border-white/10 pb-2 mb-6">
    <h2 class="text-2xl font-bold text-white m-0">Cómo construí Traditional Pizza</h2>
    <span class="text-xs font-mono text-brand-yellow uppercase tracking-widest">UX Case Study</span>
  </div>

  <div class="flex flex-col md:flex-row gap-8"> 
    <div class="flex-1">
      <p class="text-gray-300 leading-relaxed text-lg mb-6">
        Vivimos en la era digital, pero muchas pizzerías locales siguen dependiendo de menús en PDF difíciles de leer en móviles o páginas de Facebook desactualizadas.
      </p>
      <p class="text-gray-400 leading-relaxed">
        Me di cuenta de que la fricción al momento de pedir comida hace que los negocios pierdan clientes. El objetivo no era solo hacer una "web bonita", sino construir una experiencia de compra fluida e instantánea.
      </p>
    </div>
    <div class="flex-1">
      <div class="bg-white/5 border-l-2 border-brand-yellow p-6 rounded-r-lg relative h-full flex flex-col justify-center">
        <span class="text-xs font-mono text-gray-500 block mb-3 opacity-70">// PERFORMANCE_MATTERS</span>       
        <p class="text-xl text-white italic font-medium leading-relaxed m-0">
          "El cliente come con los ojos, pero pide con el pulgar. Si la web tarda más de 3 segundos en cargar el menú, el cliente se va a la competencia."
        </p>
      </div>
    </div>

  </div>

  <div class="mt-8 pt-6 border-t border-white/5">
    <p class="text-gray-300 text-lg leading-relaxed m-0 max-w-3xl">
      Traditional Pizza nació para modernizar la presencia digital del negocio local, utilizando tecnologías modernas para garantizar un <strong class="text-white">rendimiento del 100%</strong> y una navegación intuitiva.
    </p>
  </div>

</div>

<div class="not-prose mt-16 mb-12">
  <div class="flex items-baseline gap-4 border-b border-white/10 pb-2 mb-8">
    <h2 class="text-2xl font-bold text-white m-0">Desafíos de Ingeniería</h2>
    <span class="text-xs font-mono text-brand-yellow uppercase tracking-widest">Frontend Focus</span>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group flex flex-col h-full">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">01_PERFORMANCE</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Cero JavaScript Bloqueante</h3>
      </div>
      <p class="text-gray-400 mb-6 flex-grow leading-relaxed">
        Las webs tradicionales (SPAs) envían demasiado código innecesario, ralentizando la carga en conexiones móviles 3G/4G.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="text-xs font-bold text-brand-yellow uppercase tracking-wider block mb-1">Estrategia</span>
        <p class="text-gray-300 m-0">
          Uso de <strong>Astro Static Site Generation (SSG)</strong> para enviar HTML puro al navegador, logrando un puntaje de 100 en Lighthouse.
        </p>
      </div>
    </div>
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group flex flex-col h-full">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">02_ARCHITECTURE</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Componentización Escalable</h3>
      </div>
      <p class="text-gray-400 mb-6 flex-grow leading-relaxed">
        Mantener la consistencia visual en un menú extenso y variado sin repetir código HTML ni clases CSS.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="text-xs font-bold text-brand-yellow uppercase tracking-wider block mb-1">Estrategia</span>
        <p class="text-gray-300 m-0">
          Arquitectura basada en componentes reutilizables y un sistema de diseño atómico con <strong>TailwindCSS</strong>.
        </p>
      </div>
    </div>
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group md:col-span-2">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">03_INTERACTIVITY</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Interactividad Ligera</h3>
      </div>
      <div class="flex flex-col md:flex-row gap-6">
        <p class="text-gray-400 leading-relaxed flex-1">
          Se necesitaba interactividad para el menú y el carrito, pero cargar un framework completo como React afectaría el SEO y la velocidad inicial.
        </p>
        <div class="flex-1 bg-black/20 p-4 rounded border-l-2 border-brand-yellow">
          <span class="text-xs font-bold text-brand-yellow uppercase tracking-wider block mb-1">Solución Aplicada</span>
          <p class="text-gray-300 m-0">
            Implementación de lógica con <strong>Vanilla JavaScript</strong> optimizado para manipulación del DOM sin dependencias pesadas.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="not-prose border-t border-white/10 pt-10 mt-12">
    <h2 class="text-2xl font-bold text-white mb-4">Impacto y Roadmap</h2>
    <p class="text-gray-300 mb-8 leading-relaxed max-w-3xl">
        Este proyecto demuestra cómo la elección correcta del stack tecnológico puede transformar la experiencia de un negocio local, priorizando al usuario final sobre la complejidad innecesaria.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-4 border border-white/10 rounded bg-white/5">
            <span class="text-xs text-gray-500 font-mono block mb-1">NEXT STEP 01</span>
            <span class="text-brand-yellow font-bold text-lg">Integración Pasarela de Pagos</span>
        </div>
        <div class="p-4 border border-white/10 rounded bg-white/5">
            <span class="text-xs text-gray-500 font-mono block mb-1">NEXT STEP 02</span>
            <span class="text-brand-yellow font-bold text-lg">Panel de Administración (CMS)</span>
        </div>
    </div>
</div>