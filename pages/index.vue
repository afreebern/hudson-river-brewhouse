<!--
battle Hill
mean max
paradox
northway
adirondack
common roots
fiddlehead
rs taylor

food

music - whats the message?
-->

<template>
  <section>
    <nav-section />
    <header-section />
    <intro-section />
    <local-flavor-section />
  </section>
</template>

<script>
import NavSection from '~/components/nav/NavSection.vue'
import HeaderSection from '~/components/header/HeaderSection.vue'
import IntroSection from '~/components/introduction/IntroSection.vue'
import LocalFlavorSection from '~/components/local-flavor/LocalFlavorSection.vue'

export default {
  components: {
    NavSection,
    HeaderSection,
    IntroSection,
    LocalFlavorSection
  }
}
</script>
