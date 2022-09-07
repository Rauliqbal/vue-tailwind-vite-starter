<template>
 <router-view v-slot="{Component}">
    <nav class="flex justify-center items-center py-8 gap-8 text-lg  ">
      <router-link class="hover:text-blue-500 transition-all" to="/">Home</router-link>
      <router-link class="hover:text-blue-500 transition-all" to="/about">about</router-link>
    </nav>
    <transition name="fade" mode="out-in">      
      <component :is="Component"/>
    </transition>
   
  </router-view>
</template>


<style type="text/css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
