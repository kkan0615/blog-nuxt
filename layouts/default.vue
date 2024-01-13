<template>
  <div class="min-h-screen w-full flex flex-col">
    <LayoutsHeader />
    <LayoutsSidebar />
    <main class="grow">
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>
