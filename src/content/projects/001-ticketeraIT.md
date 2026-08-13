---
title: 'Ticketera Enterprise | Plataforma ITSM Multi-tenant'
description: 'Una solución B2B para la gestión centralizada de tickets de soporte e inventario de hardware con arquitectura multi-tenant e imputación de horas.'
image: '/projects/ticketera.webp'
github: 'https://github.com/RedBoth/TicketeraIT'
demo: '/#'
tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL']
---

<div class="not-prose mb-12 bg-brand-secondary/90 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
  
  <div class="flex items-baseline gap-4 border-b border-white/10 pb-4 mb-8">
    <h2 class="text-3xl font-bold text-brand-text m-0">Cómo surgió la idea</h2>
  </div>

  <div class="flex flex-col lg:flex-row gap-10">   
    <div class="flex-1 space-y-6">
      <p class="text-brand-muted leading-relaxed text-lg">
        Al analizar cómo interactúan los equipos de soporte TI con múltiples empresas, noté una problemática constante: <strong class="text-brand-text font-semibold">la falta de aislamiento de datos y el descontrol en el seguimiento de soporte</strong>.
      </p>
      <p class="text-brand-muted leading-relaxed">
        Muchas organizaciones gestionan solicitudes de soporte, equipamientos de red y registros de horas trabajadas en canales informales, perdiendo trazabilidad y complicando la auditoría por cliente.
      </p>
    </div>
    <div class="flex-1">
      <div class="bg-brand-secondary/50 border-l-4 border-brand-yellow p-6 rounded-r-2xl relative h-full flex flex-col justify-center shadow-inner">
        <span class="text-xs font-mono text-brand-yellow/80 block mb-3 tracking-widest">// USER_PAIN_POINT</span>
        <p class="text-xl text-brand-text italic font-medium leading-relaxed m-0">
          "Administrar diferentes clientes en una misma herramienta suele generar fuga de datos o requerir plataformas complejas e inaccesibles."
        </p>
      </div>
    </div>

  </div>

  <div class="mt-10 pt-8 border-t border-white/10">
    <p class="text-brand-muted leading-relaxed m-0 max-w-3xl text-lg">
      Me propuse diseñar una plataforma B2B/ITSM escalable que combinara una <strong class="text-brand-yellow font-bold">Consola Global de Torre de Control</strong> para técnicos y <strong class="text-brand-yellow font-bold">entornos privados (Multi-tenant)</strong> para cada cliente con su propia identidad visual e inventario.
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
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Navegación e Hibridación de Contexto</h3>
      </div>
      <p class="text-brand-muted mb-6 flex-grow leading-relaxed">
        Los técnicos necesitaban auditar un tenant particular sin perder el acceso directo a la consola global de administración, provocando confusión visual entre niveles de jerarquía.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-purple uppercase tracking-wider block mb-1 text-sm">Solución</span>
        <p class="text-brand-muted/80 m-0 text-sm">
          Diseño de una <strong>Sidebar adaptativa jerárquica</strong> con código cromático (Global Console vs Modo Auditoría de Tenant).
        </p>
      </div>
    </div>    
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/30 transition duration-300 group flex flex-col h-full shadow-2xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">02_ISSUE</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Mutación de Estado en Tiempo Real</h3>
      </div>
      <p class="text-brand-muted mb-6 flex-grow leading-relaxed">
        Al resolver un ticket o imputar horas, la pantalla no actualizaba los permisos de edición inmediatamente ni ocultaba el formulario para tickets cerrados.
      </p>
      <div class="pt-4 border-t border-white/10">
        <span class="font-bold text-brand-purple uppercase tracking-wider block mb-1 text-sm">Solución</span>
        <p class="text-brand-muted/80 m-0 text-sm">
          Integración de <strong>Server Actions con revalidatePath</strong> y renderizado condicional según el ciclo de vida del ticket.
        </p>
      </div>
    </div>
    <div class="bg-brand-secondary/90 p-8 rounded-2xl border border-white/10 hover:border-brand-purple/30 transition duration-300 group md:col-span-2 shadow-2xl">
      <div class="mb-4">
        <span class="text-xs font-mono text-brand-muted/60 block mb-1">03_ISSUE</span>
        <h3 class="text-xl font-bold text-brand-text group-hover:text-brand-yellow transition duration-300">Modelado de Datos Relacional Complejo</h3>
      </div>
      <div class="flex flex-col md:flex-row gap-8">
        <p class="text-brand-muted leading-relaxed flex-1">
          Relacionar usuarios, tickets, registros de horas e inventarios manteniendo aislamiento estricto por tenant y gestionando atributos como Direcciones MAC y Números de Serie opcionales.
        </p>
        <div class="flex-1 bg-black/20 p-5 rounded-xl border-l-2 border-brand-yellow">
          <span class="font-bold text-brand-yellow uppercase tracking-wider block mb-1 text-sm">Solución</span>
          <p class="text-brand-muted/90 m-0">
            Esquema robusto en <strong>Prisma ORM & PostgreSQL</strong> con migraciones seguras y validaciones de tipos en TypeScript.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="not-prose mt-16 bg-brand-secondary/90 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
    <h2 class="text-2xl font-bold text-brand-text mb-6">Conclusión y Roadmap</h2>
    <p class="text-brand-muted mb-10 leading-relaxed max-w-3xl text-lg">
        Desarrollar esta plataforma me permitió afianzar patrones de diseño para arquitecturas B2B multi-tenant, creando software pensado para la operación real de equipos técnicos de alto rendimiento.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="p-6 border border-white/10 rounded-xl bg-brand-secondary/50 hover:bg-brand-secondary/70 transition-colors flex items-center gap-4">
            <div>
               <span class="text-xs text-brand-muted/50 font-mono block mb-1">NEXT STEP 01</span>
               <span class="text-brand-yellow font-bold text-lg">Exportación de Reportes PDF</span>
            </div>
        </div>
        <div class="p-6 border border-white/10 rounded-xl bg-brand-secondary/50 hover:bg-brand-secondary/70 transition-colors flex items-center gap-4">
            <div>
               <span class="text-xs text-brand-muted/50 font-mono block mb-1">NEXT STEP 02</span>
               <span class="text-brand-yellow font-bold text-lg">Notificaciones por Email (Resend)</span>
            </div>
        </div>
    </div>
</div>