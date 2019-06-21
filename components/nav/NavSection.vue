<template>
  <section class="section-container">
    <div class="nav-section">
      <div class="nav-button" @click="activateMenu()">
        <div class="line-container">
          <div
            id="horizontal"
            ref="lines"
            class="nav-button-line"
            :class="{ 'menu-trigger': menuActive }"
          ></div>
          <div
            id="vertical"
            ref="lines"
            class="nav-button-line"
            :class="{ 'menu-trigger2': menuActive }"
          ></div>
        </div>
      </div>
      <div class="nav-menu" :class="{ 'menu-active': menuActive }">
        <h3 class="menu-item">Home</h3>
        <h3 class="menu-item">Menu</h3>
        <h3 class="menu-item">Contact Us</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
      stickyMenuActive: false
    }
  },
  methods: {
    activateMenu() {
      if (this.menuActive === false) {
        this.menuActive = true
      } else {
        this.menuActive = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-section {
  width: 100%;
  padding: 20px 20px;
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
}

.nav-button {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 3px solid bisque;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-shadow: 2px 2px 5px #000;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 7px #000;
  }
  .nav-button-line {
    width: 30px;
    height: 8px;
    background-color: bisque;
  }

  #horizontal,
  #vertcal {
    position: absolute;
  }
  #vertical {
    transform: rotate(90deg);
  }
}

.menu-trigger {
  animation-name: spin;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.menu-trigger2 {
  animation-name: spin2;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(410deg);
  }
}

@keyframes spin2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}
.green {
  background-color: GREEN;
  transition: 0.5s;
}

.nav-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  right: 0px;
  opacity: 0;
  font-family: mr-eaves-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  .menu-item {
    margin-right: 10px;
    color: bisque;
    font-size: 20px;
    text-shadow: 2px 2px 2px #000;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      transition: 0.5s;
    }
  }
}

.menu-active {
  display: flex;
  opacity: 1;
  right: 70px;
  transition: 1s;
}

@media only screen and (min-width: 900px) {
  .nav-menu {
    .menu-item {
      font-size: 30px;
      margin-right: 20px;
    }
  }
}
</style>
