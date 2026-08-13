---
title: 'LotePro | Plataforma de gestión de lotes agrícolas'
description: 'Una aplicación web para la gestión eficiente de lotes agrícolas, permitiendo a los usuarios monitorear y administrar sus cultivos de manera efectiva.'
image: '/projects/lotepro.webp'
github: 'https://github.com/RedBoth/Campo-app'
demo: 'https://lotepro.netlify.app'
tags: ['React', 'NodeJS', 'Firebase']
---

<div class="not-prose mb-12 bg-brand-secondary/90 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
  
  <div class="flex items-baseline gap-4 border-b border-white/10 pb-4 mb-8">
    <h2 class="text-3xl font-bold text-brand-text m-0">Cómo surgió la idea</h2>
  </div>

  <div class="flex flex-col lg:flex-row gap-10">   
    <div class="flex-1 space-y-6">
      <p class="text-brand-muted leading-relaxed text-lg">
        Todo comenzó con una charla familiar. Mi hermano es ingeniero agrónomo y, hablando sobre su trabajo diario, me confesó una de sus mayores frustraciones: <strong class="text-brand-text font-semibold">el caos de la información</strong>.
      </p>
      <p class="text-brand-muted leading-relaxed">
        Me explicó que, aunque el trabajo en el campo es extremadamente técnico y preciso, la gestión de los datos seguía dependiendo de métodos manuales y desconectados.
      </p>
    </div>
    <div class="flex-1">
      <div class="bg-brand-secondary/50 border-l-4 border-brand-yellow p-6 rounded-r-2xl relative h-full flex flex-col justify-center shadow-inner">
        <span class="text-xs font-mono text-brand-yellow/80 block mb-3 tracking-widest">// USER_PAIN_POINT</span>
        <p class="text-xl text-brand-text italic font-medium leading-relaxed m-0">
          "Los datos están por todos lados. Entre planillas, notas en el celular y papeles sueltos, la información histórica de los lotes se termina perdiendo."
        </p>
      </div>
    </div>

  </div>

  <div class="mt-10 pt-8 border-t border-white/10">
    <p class="text-brand-muted leading-relaxed m-0 max-w-3xl text-lg">
      Como desarrollador, no pude evitar traducir este problema en una arquitectura de software. Me propuse el desafío de crear una herramienta que centralizara esta dispersión, eliminando el miedo a perder información. Así nació <strong class="text-brand-yellow font-bold">LotePro</strong>.
    </p>
  </div>
</div>


<div class="not-prose mt-16 mb-12">
  <div class="flex items-baseline gap-4 mb-8">
    <h2 class="text-3xl font-bold text-brand-text m-0">Desafíos Técnicos</h2>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/30 transition duration-300 group flex flex-col h-full shadow-2xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">01_ISSUE</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Lógica Dispersa</h3>
      </div>
      <p class="text-brand-muted mb-6 flex-grow leading-relaxed">
        Los IDs de los lotes se duplicaban y generaban errores por tener la lógica de creación repetida en múltiples componentes sin un control centralizado.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-purple uppercase tracking-wider block mb-1 text-sm">Solución</span>
        <p class="text-brand-muted/80 m-0 text-sm">
          Refactorización completa extrayendo la lógica a <strong>Custom Hooks</strong> reutilizables.
        </p>
      </div>
    </div>
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/30 transition duration-300 group flex flex-col h-full shadow-2xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">02_ISSUE</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Race Conditions</h3>
      </div>
      <p class="text-brand-muted mb-6 flex-grow leading-relaxed">
        El usuario tenía que loguearse dos veces debido a redirecciones prematuras antes de que Firebase confirmara la sesión.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-purple uppercase tracking-wider block mb-1 text-sm">Solución</span>
        <p class="text-brand-muted/80 m-0 text-sm">
          Implementación de un <strong>Auth Listener</strong> para sincronizar el renderizado con el estado real.
        </p>
      </div>
    </div>
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/30 transition duration-300 group md:col-span-2 shadow-2xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">03_ISSUE</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Integración API Externa</h3>
      </div>
      <div class="flex flex-col md:flex-row gap-8">
        <p class="text-brand-muted leading-relaxed flex-1">
          Mi primera integración compleja (Clima). El reto principal fue manejar las estructuras JSON anidadas y los tiempos de espera variables sin congelar la UI.
        </p>
        <div class="flex-1 bg-black/20 p-5 rounded-xl border-l-2 border-brand-yellow">
          <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1 text-sm">Solución</span>
          <p class="text-brand-muted/90 m-0">
            Manejo avanzado de <strong>Promesas y Estados de Carga</strong> para mejorar la experiencia de usuario (UX).
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="not-prose mt-16 bg-brand-secondary/90 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
    <h2 class="text-2xl font-bold text-brand-text mb-6">Conclusión y Roadmap</h2>
    <p class="text-brand-muted mb-10 leading-relaxed max-w-3xl text-lg">
        Este proyecto me enseñó a pensar como ingeniero: a dividir problemas grandes en pequeños y a no tener miedo de reescribir código para hacerlo mejor.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="p-6 border border-white/10 rounded-xl bg-brand-secondary/50 hover:bg-brand-secondary/70 transition-colors flex items-center gap-4">
            <div>
               <span class="text-xs text-brand-muted/50 font-mono block mb-1">NEXT STEP 01</span>
               <span class="text-brand-yellow font-bold text-lg">Modo Offline (PWA)</span>
            </div>
        </div>
        <div class="p-6 border border-white/10 rounded-xl bg-brand-secondary/50 hover:bg-brand-secondary/70 transition-colors flex items-center gap-4">
            <div>
               <span class="text-xs text-brand-muted/50 font-mono block mb-1">NEXT STEP 02</span>
               <span class="text-brand-yellow font-bold text-lg">Visualización de Datos</span>
            </div>
        </div>
    </div>
</div>