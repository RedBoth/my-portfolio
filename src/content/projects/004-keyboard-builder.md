---
title: 'Keyboard Builder | Configurador E-commerce Interactivo'
description: 'Una experiencia de compra inmersiva que permite a los usuarios personalizar productos y visualizar cambios en tiempo real con animaciones fluidas.'
image: '/projects/keyboard-builder.webp'
github: 'https://github.com/RedBoth/keyboard-builder'
demo: 'https://keyfantasy.netlify.app/'
tags: ['React', 'Zustand', 'Framer Motion', 'TailwindCSS']
---

<div class="not-prose mb-12 bg-brand-secondary/90 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
  
  <div class="flex flex-col md:flex-row md:items-baseline gap-4 border-b border-white/10 pb-4 mb-8">
    <h2 class="text-3xl font-bold text-brand-text m-0">Más allá del carrito de compras</h2>
    <span class="text-xs font-mono text-brand-yellow uppercase tracking-widest bg-brand-yellow/10 px-2 py-1 rounded">Generative UI</span>
  </div>

  <div class="flex flex-col lg:flex-row gap-10">   
    <div class="flex-1 space-y-6">
      <p class="text-brand-muted leading-relaxed text-lg">
        En el e-commerce moderno, una foto estática ya no es suficiente. Los usuarios quieren sentir que están construyendo algo único. El desafío de este proyecto fue crear una herramienta que cerrara la brecha entre <strong class="text-brand-text font-semibold">la imaginación del cliente y el producto final</strong>.
      </p>
      <p class="text-brand-muted leading-relaxed">
        En lugar de cargar 100 imágenes diferentes para cada combinación posible de colores, decidí construir el producto visualmente usando código.
      </p>
    </div>   
    <div class="flex-1">
      <div class="bg-black/40 border-l-4 border-brand-yellow p-6 rounded-r-2xl relative h-full flex flex-col justify-center shadow-inner">
        <span class="text-xs font-mono text-brand-yellow/80 block mb-3 tracking-widest">// THE_GOAL</span>
        <p class="text-xl text-brand-text italic font-medium leading-relaxed m-0">
          "Crear un 'Gemelo Digital' del producto que reaccione instantáneamente a cada decisión del usuario, calculando precios y estética en tiempo real sin recargas."
        </p>
      </div>
    </div>

  </div>

  <div class="mt-10 pt-8 border-t border-white/10">
    <p class="text-brand-muted leading-relaxed m-0 max-w-3xl text-lg">
      El resultado es un configurador altamente performante donde el teclado se "dibuja" en el navegador usando <strong class="text-brand-yellow font-bold">CSS Grid y Framer Motion</strong>, permitiendo transiciones suaves que serían imposibles con imágenes tradicionales.
    </p>
  </div>

</div>


<div class="not-prose mt-16 mb-12">
  <div class="flex items-baseline gap-4 mb-8">
    <h2 class="text-3xl font-bold text-brand-text m-0">Ingeniería Visual y Lógica</h2>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">   
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition duration-300 group flex flex-col h-full shadow-xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">01_LOGIC</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Lógica de Precios Atómica</h3>
      </div>
      <p class="text-brand-muted mb-6 flex-grow leading-relaxed">
        Calcular el precio final sumando componentes base + extras variables puede volverse caótico si se maneja en el componente visual.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-purple uppercase tracking-wider block mb-1 text-sm">Solución: Zustand Store</span>
        <p class="text-brand-muted/80 m-0 text-sm">
          Centralización de la lógica. El store recalcula el total automáticamente con cada selección, garantizando integridad de datos.
        </p>
      </div>
    </div>
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition duration-300 group flex flex-col h-full shadow-xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">02_VISUALS</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">UI Generativa vs Imágenes</h3>
      </div>
      <p class="text-brand-muted mb-6 flex-grow leading-relaxed">
        Usar imágenes PNG para cada combinación de colores (Case + Keycaps + Switches) requeriría cientos de archivos y tiempos de carga lentos.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-purple uppercase tracking-wider block mb-1 text-sm">Solución: Programmatic CSS</span>
        <p class="text-brand-muted/80 m-0 text-sm">
          El teclado es un componente React complejo renderizado con CSS. Cambio de colores instantáneo con peso cercano a cero.
        </p>
      </div>
    </div>
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition duration-300 group md:col-span-2 shadow-xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">03_EXPERIENCE</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Micro-interacciones Premium</h3>
      </div>
      <div class="flex flex-col md:flex-row gap-8">
        <p class="text-brand-muted leading-relaxed flex-1">
          En un configurador de lujo, los cambios bruscos rompen la inmersión. Necesitaba que los colores se "fundieran" suavemente al cambiar.
        </p>
        <div class="flex-1 bg-black/40 p-5 rounded-xl border-l-2 border-brand-yellow">
          <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1 text-sm">Tecnología: Framer Motion</span>
          <p class="text-brand-muted/90 m-0">
            Implementación de <code>AnimatePresence</code> y transiciones de color interpoladas para dar una sensación táctil y fluida a cada clic.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>


<div class="not-prose mt-16 bg-brand-secondary/90 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
    <h2 class="text-2xl font-bold text-brand-text mb-6">Próximos Pasos</h2>
    <p class="text-brand-muted mb-10 leading-relaxed max-w-3xl text-lg">
        Este configurador establece la base para una plataforma de e-commerce "Headless" totalmente personalizada.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">        
        <div class="p-6 border border-white/10 rounded-2xl bg-black/20 hover:bg-black/40 transition-colors flex items-center gap-4">
            <div>
               <span class="text-xs text-brand-muted/50 font-mono block mb-1">NEXT STEP 01</span>
               <span class="text-brand-yellow font-bold text-lg">Shareable Links (URL)</span>
            </div>
        </div>
        <div class="p-6 border border-white/10 rounded-2xl bg-black/20 hover:bg-black/40 transition-colors flex items-center gap-4">
            <div>
               <span class="text-xs text-brand-muted/50 font-mono block mb-1">NEXT STEP 02</span>
               <span class="text-brand-yellow font-bold text-lg">Integración con Stripe</span>
            </div>
        </div>
    </div>
</div>