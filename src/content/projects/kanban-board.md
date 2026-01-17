---
title: 'Kanban Board | Gestión de tareas profesional'
description: 'Un tablero interactivo de alta performance para la gestión de proyectos, con Drag & Drop fluido, persistencia de datos y filtrado en tiempo real.'
image: '/projects/kanban-board.webp'
github: 'https://github.com/RedBoth/kanban-board'
demo: 'https://optimizeflux.netlify.app/'
tags: ['React', 'TypeScript', 'Zustand', 'TailwindCSS']
---

<div class="not-prose mb-16">
  
  <div class="flex items-baseline gap-4 border-b border-white/10 pb-2 mb-6">
    <h2 class="text-2xl font-bold text-white m-0">El Salto a la Interactividad Compleja</h2>
    <span class="text-xs font-mono text-brand-yellow uppercase tracking-widest">Frontend Mastery</span>
  </div>

  <div class="flex flex-col md:flex-row gap-8">   
    <div class="flex-1">
      <p class="text-gray-300 leading-relaxed text-lg mb-6">
        Cualquiera puede hacer una "To-Do List" básica. Sin embargo, cuando intentas escalar eso a un sistema con múltiples columnas, reordenamiento libre y edición en tiempo real, <strong class="text-white">el manejo del estado se vuelve un infierno</strong>.
      </p>
      <p class="text-gray-400 leading-relaxed">
        Mi objetivo con este proyecto no era solo "mover cajitas", sino dominar la arquitectura de una aplicación rica en interacciones (Rich Internet Application), donde la fluidez y la respuesta inmediata son la prioridad número uno.
      </p>
    </div>
    <div class="flex-1">
      <div class="bg-white/5 border-l-2 border-brand-yellow p-6 rounded-r-lg relative h-full flex flex-col justify-center">
        <span class="text-xs font-mono text-gray-500 block mb-3 opacity-70">// THE_CHALLENGE</span>
        <p class="text-xl text-white italic font-medium leading-relaxed m-0">
          "El usuario espera que la interfaz reaccione a la velocidad de su pensamiento. Un retraso de 100ms al soltar una tarjeta rompe la ilusión de control."
        </p>
      </div>
    </div>

  </div>

  <div class="mt-8 pt-6 border-t border-white/5">
    <p class="text-gray-300 leading-relaxed m-0 max-w-3xl text-lg">
      El resultado es una aplicación que se siente nativa. Implementada con <strong class="text-brand-yellow">React y TypeScript</strong>, gestiona actualizaciones optimistas y persistencia local sin sacrificar ni un frame de rendimiento.
    </p>
  </div>

</div>

<div class="not-prose mt-16 mb-12">
  <div class="flex items-baseline gap-4 border-b border-white/10 pb-2 mb-8">
    <h2 class="text-2xl font-bold text-white m-0">Arquitectura e Ingeniería</h2>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group flex flex-col h-full">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">01_STATE_MANAGEMENT</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Adiós al Prop Drilling</h3>
      </div>
      <p class="text-gray-400 mb-6 flex-grow leading-relaxed">
        Usar Context API provocaría re-renderizados innecesarios en todo el tablero cada vez que se mueve una tarjeta pequeña.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1">Solución: Zustand</span>
        <p class="text-gray-300 m-0">
          Implementación de un store atómico y selectores precisos. Los componentes solo se renderizan cuando cambian sus datos específicos.
        </p>
      </div>
    </div>
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group flex flex-col h-full">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">02_INTERACTION</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Drag & Drop Robusto</h3>
      </div>
      <p class="text-gray-400 mb-6 flex-grow leading-relaxed">
        El problema clásico de "la columna vacía": intentar soltar un item en una lista sin items suele fallar en muchas librerías.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1">Solución: @dnd-kit</span>
        <p class="text-gray-300 m-0">
          Lógica de detección de colisiones personalizada y zonas de aterrizaje (droppables) dinámicas para una UX a prueba de errores.
        </p>
      </div>
    </div>
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group md:col-span-2">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">03_DATA_INTEGRITY</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Persistencia y Filtrado</h3>
      </div>
      <div class="flex flex-col md:flex-row gap-6">
        <p class="text-gray-400 leading-relaxed flex-1">
          Una App que pierde datos al recargar (F5) no sirve. Además, filtrar tareas no debería destruir el orden original de los elementos.
        </p>
        <div class="flex-1 bg-black/20 p-4 rounded border-l-2 border-brand-yellow">
          <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1">Solución Aplicada</span>
          <p class="text-gray-300 m-0">
            Middleware de <strong>persistencia automática</strong> en LocalStorage y lógica de filtrado visual no destructiva.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="not-prose border-t border-white/10 pt-10 mt-12">
    <h2 class="text-2xl font-bold text-white mb-4">Próximos Pasos</h2>
    <p class="text-gray-300 mb-8 leading-relaxed max-w-3xl">
        Este proyecto sentó las bases de una aplicación SaaS real. El sistema ya es funcional para uso personal, pero la arquitectura permite escalar fácilmente.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-4 border border-white/10 rounded bg-white/5">
            <span class="text-xs text-gray-500 font-mono block mb-1">NEXT STEP 01</span>
            <span class="text-brand-yellow font-bold text-lg">Backend con Supabase</span>
        </div>
        <div class="p-4 border border-white/10 rounded bg-white/5">
            <span class="text-xs text-gray-500 font-mono block mb-1">NEXT STEP 02</span>
            <span class="text-brand-yellow font-bold text-lg">Colaboración en Tiempo Real</span>
        </div>
        <div class="p-4 border border-white/10 rounded bg-white/5">
            <span class="text-xs text-gray-500 font-mono block mb-1">NEXT STEP 03</span>
            <span class="text-brand-yellow font-bold text-lg">Completar detalles de UI</span>
        </div>
    </div>
</div>