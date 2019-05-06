<!--
battle Hill
mean max
paradox
northway
adirondack
common roots
fiddlehead
rs taylor

font--
comfortaa
-->

<template>
  <section>
    <nav-section />
    <header-section />
    <intro-section />
    <local-flavor-section />
    <coffee-section />
    <beer-section />
    <footer-section />
  </section>
</template>

<script>
import NavSection from '~/components/nav/NavSection.vue'
import HeaderSection from '~/components/header/HeaderSection.vue'
import IntroSection from '~/components/introduction/IntroSection.vue'
import LocalFlavorSection from '~/components/local-flavor/LocalFlavorSection.vue'
import CoffeeSection from '~/components/coffee/CoffeeSection.vue'
import BeerSection from '~/components/beer/BeerSection.vue'
import FooterSection from '~/components/footer/FooterSection.vue'

export default {
  components: {
    NavSection,
    HeaderSection,
    IntroSection,
    LocalFlavorSection,
    CoffeeSection,
    BeerSection,
    FooterSection
  }
}
</script>
