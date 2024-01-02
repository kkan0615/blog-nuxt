<template>
  <div class="min-h-screen w-full flex flex-col">
    <LayoutsHeader />
    <main class="mt-14 py-3 grow">
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>
