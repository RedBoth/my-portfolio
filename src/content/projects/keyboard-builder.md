---
title: 'Keyboard Builder | Configurador E-commerce Interactivo'
description: 'Una experiencia de compra inmersiva que permite a los usuarios personalizar productos y visualizar cambios en tiempo real con animaciones fluidas.'
image: '/projects/keyboard-builder.webp'
github: 'https://github.com/RedBoth/keyboard-builder'
demo: 'https://keyfantasy.netlify.app/'
tags: ['React', 'Zustand', 'Framer Motion', 'TailwindCSS']
---

<div class="not-prose mb-16">
  
  <div class="flex items-baseline gap-4 border-b border-white/10 pb-2 mb-6">
    <h2 class="text-2xl font-bold text-white m-0">Más allá del carrito de compras</h2>
    <span class="text-xs font-mono text-brand-yellow uppercase tracking-widest">Generative UI</span>
  </div>

  <div class="flex flex-col md:flex-row gap-8">   
    <div class="flex-1">
      <p class="text-gray-300 leading-relaxed text-lg mb-6">
        En el e-commerce moderno, una foto estática ya no es suficiente. Los usuarios quieren sentir que están construyendo algo único. El desafío de este proyecto fue crear una herramienta que cerrara la brecha entre <strong class="text-white">la imaginación del cliente y el producto final</strong>.
      </p>
      <p class="text-gray-400 leading-relaxed">
        En lugar de cargar 100 imágenes diferentes para cada combinación posible de colores, decidí construir el producto visualmente usando código.
      </p>
    </div>
    <div class="flex-1">
      <div class="bg-white/5 border-l-2 border-brand-yellow p-6 rounded-r-lg relative h-full flex flex-col justify-center">
        <span class="text-xs font-mono text-gray-500 block mb-3 opacity-70">// THE_GOAL</span>
        <p class="text-xl text-white italic font-medium leading-relaxed m-0">
          "Crear un 'Gemelo Digital' del producto que reaccione instantáneamente a cada decisión del usuario, calculando precios y estética en tiempo real sin recargas."
        </p>
      </div>
    </div>

  </div>

  <div class="mt-8 pt-6 border-t border-white/5">
    <p class="text-gray-300 leading-relaxed m-0 max-w-3xl text-lg">
      El resultado es un configurador altamente performante donde el teclado se "dibuja" en el navegador usando <strong class="text-brand-yellow">CSS Grid y Framer Motion</strong>, permitiendo transiciones suaves que serían imposibles con imágenes tradicionales.
    </p>
  </div>

</div>

<div class="not-prose mt-16 mb-12">
  <div class="flex items-baseline gap-4 border-b border-white/10 pb-2 mb-8">
    <h2 class="text-2xl font-bold text-white m-0">Ingeniería Visual y Lógica</h2>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group flex flex-col h-full">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">01_LOGIC</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Lógica de Precios Atómica</h3>
      </div>
      <p class="text-gray-400 mb-6 flex-grow leading-relaxed">
        Calcular el precio final sumando componentes base + extras variables puede volverse caótico si se maneja en el componente visual.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1">Solución: Zustand Store</span>
        <p class="text-gray-300 m-0">
          Centralización de la lógica de negocio. El store recalcula el total automáticamente cada vez que se modifica una selección, garantizando integridad de datos.
        </p>
      </div>
    </div>
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group flex flex-col h-full">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">02_VISUALS</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">UI Generativa vs Imágenes</h3>
      </div>
      <p class="text-gray-400 mb-6 flex-grow leading-relaxed">
        Usar imágenes PNG para cada combinación de colores (Case + Keycaps + Switches) requeriría cientos de archivos y tiempos de carga lentos.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1">Solución: Programmatic CSS</span>
        <p class="text-gray-300 m-0">
          El teclado es un componente React complejo renderizado con CSS. Esto permite cambiar colores vía props instantáneamente, con un peso de archivo cercano a cero.
        </p>
      </div>
    </div>
    <div class="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-yellow/40 transition duration-300 group md:col-span-2">
      <div class="mb-4">
        <span class="text-xs font-mono text-gray-500 block mb-1">03_EXPERIENCE</span>
        <h3 class="text-xl font-bold text-white group-hover:text-brand-yellow transition duration-300">Micro-interacciones Premium</h3>
      </div>
      <div class="flex flex-col md:flex-row gap-6">
        <p class="text-gray-400 leading-relaxed flex-1">
          En un configurador de lujo, los cambios bruscos rompen la inmersión. Necesitaba que los colores se "fundieran" al cambiar.
        </p>
        <div class="flex-1 bg-black/20 p-4 rounded border-l-2 border-brand-yellow">
          <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1">Tecnología: Framer Motion</span>
          <p class="text-gray-300 m-0">
            Implementación de <code>AnimatePresence</code> y transiciones de color interpoladas para dar una sensación táctil y fluida a cada clic.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="not-prose border-t border-white/10 pt-10 mt-12">
    <h2 class="text-2xl font-bold text-white mb-4">Próximos Pasos</h2>
    <p class="text-gray-300 mb-8 leading-relaxed max-w-3xl">
        Este configurador establece la base para una plataforma de e-commerce "Headless" totalmente personalizada.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-4 border border-white/10 rounded bg-white/5">
            <span class="text-xs text-gray-500 font-mono block mb-1">NEXT STEP 01</span>
            <span class="text-brand-yellow font-bold text-lg">Persistencia de URL (Shareable Links)</span>
        </div>
        <div class="p-4 border border-white/10 rounded bg-white/5">
            <span class="text-xs text-gray-500 font-mono block mb-1">NEXT STEP 02</span>
            <span class="text-brand-yellow font-bold text-lg">Integración con Stripe</span>
        </div>
    </div>
</div>