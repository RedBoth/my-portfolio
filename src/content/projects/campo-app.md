---
title: 'LotePro | Plataforma de gestión de lotes agrícolas'
description: 'Una aplicación web para la gestión eficiente de lotes agrícolas, permitiendo a los usuarios monitorear y administrar sus cultivos de manera efectiva.'
image: '/projects/lotepro.webp'
github: 'https://github.com/RedBoth/Campo-app'
demo: 'https://lotepro.netlify.app'
tags: ['React', 'NodeJS', 'Firebase']
---

<div class="not-prose mb-16">
  
  <div class="flex items-baseline gap-4 border-b border-white/10 pb-2 mb-6">
    <h2 class="text-2xl font-bold text-white m-0">Cómo surgió la idea</h2>
  </div>

  <div class="flex flex-col md:flex-row gap-8">   
    <div class="flex-1">
      <p class="text-gray-300 leading-relaxed text-lg mb-6">
        Todo comenzó con una charla familiar. Mi hermano es ingeniero agrónomo y, hablando sobre su trabajo diario, me confesó una de sus mayores frustraciones: <strong class="text-white">el caos de la información</strong>.
      </p>
      <p class="text-gray-400 leading-relaxed">
        Me explicó que, aunque el trabajo en el campo es extremadamente técnico y preciso, la gestión de los datos seguía dependiendo de métodos manuales y desconectados.
      </p>
    </div>
    <div class="flex-1">
      <div class="bg-white/5 border-l-2 border-brand-yellow p-6 rounded-r-lg relative h-full flex flex-col justify-center">
        <span class="text-xs font-mono text-gray-500 block mb-3 opacity-70">// USER_PAIN_POINT</span>
        <p class="text-xl text-white italic font-medium leading-relaxed m-0">
          "Los datos están por todos lados. Entre planillas, notas en el celular y papeles sueltos, la información histórica de los lotes se termina perdiendo."
        </p>
      </div>
    </div>

  </div>

  <div class="mt-8 pt-6 border-t border-white/5">
    <p class="text-gray-300 leading-relaxed m-0 max-w-3xl text-lg">
      Como desarrollador, no pude evitar traducir este problema en una arquitectura de software. Me propuse el desafío de crear una herramienta que centralizara esta dispersión, eliminando el miedo a perder información. Así nació <strong class="text-brand-yellow">LotePro</strong>.
    </p>
  </div>

</div>

<div class="not-prose mt-16 mb-12">
  <div class="flex items-baseline gap-4 border-b border-white/10 pb-2 mb-8">
    <h2 class="text-2xl font-bold text-white m-0">Desafíos Técnicos</h2>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group flex flex-col h-full">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">01_ISSUE</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Lógica Dispersa</h3>
      </div>
      <p class="text-gray-400 mb-6 flex-grow leading-relaxed">
        Los IDs de los lotes se duplicaban y generaban errores por tener la lógica de creación repetida en múltiples componentes sin un control centralizado.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1">Solución Aplicada</span>
        <p class="text-gray-300 m-0">
          Refactorización completa extrayendo la lógica a <strong>Custom Hooks</strong> reutilizables.
        </p>
      </div>
    </div>
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group flex flex-col h-full">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">02_ISSUE</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Race Conditions</h3>
      </div>
      <p class="text-gray-400 mb-6 flex-grow leading-relaxed">
        El usuario tenía que loguearse dos veces debido a redirecciones prematuras antes de que Firebase confirmara la sesión.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1">Solución Aplicada</span>
        <p class="text-gray-300 m-0">
          Implementación de un <strong>Auth Listener</strong> para sincronizar el renderizado con el estado real de la sesión.
        </p>
      </div>
    </div>
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group md:col-span-2">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">03_ISSUE</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Integración API Externa</h3>
      </div>
      <div class="flex flex-col md:flex-row gap-6">
        <p class="text-gray-400 leading-relaxed flex-1">
          Mi primera integración compleja (Clima). El reto principal fue manejar las estructuras JSON anidadas y los tiempos de espera variables sin congelar la UI.
        </p>
        <div class="flex-1 bg-black/20 p-4 rounded border-l-2 border-brand-yellow">
          <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1">Solución Aplicada</span>
          <p class="text-gray-300 m-0">
            Manejo avanzado de <strong>Promesas y Estados de Carga</strong> para mejorar la experiencia de usuario (UX).
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="not-prose border-t border-white/10 pt-10 mt-12">
    <h2 class="text-2xl font-bold text-white mb-4">Conclusión y Roadmap</h2>
    <p class="text-gray-300 mb-8 leading-relaxed max-w-3xl">
        Este proyecto me enseñó a pensar como ingeniero: a dividir problemas grandes en pequeños y a no tener miedo de reescribir código para hacerlo mejor.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-4 border border-white/10 rounded bg-white/5">
            <span class="text-xs text-gray-500 font-mono block mb-1">NEXT STEP 01</span>
            <span class="text-brand-yellow font-bold text-lg">Modo Offline (PWA)</span>
        </div>
        <div class="p-4 border border-white/10 rounded bg-white/5">
            <span class="text-xs text-gray-500 font-mono block mb-1">NEXT STEP 02</span>
            <span class="text-brand-yellow font-bold text-lg">Visualización de Datos</span>
        </div>
    </div>
</div>