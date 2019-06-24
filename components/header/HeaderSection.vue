<template>
  <section>
    <div ref="social" @scroll="addBackdrop()" class="social-icons">
      <a target="_blank" href="https://www.facebook.com/HudsonRiverBrewhouse/">
        <img
          src="https://res.cloudinary.com/dipgyyv6a/image/upload/v1561141941/hrbh/facebook-bisque_pime4e.svg"
          alt="facebook"
        />
      </a>
      <a target="_blank" href="https://www.instagram.com/hudsonriverbrewhouse/">
        <img
          src="https://res.cloudinary.com/dipgyyv6a/image/upload/v1561141941/hrbh/insta-bisque_sus9xx.svg"
          alt="instagram"
        />
      </a>
    </div>
    <div class="section-wrap">
      <div>
        <h1>
          Hudson River Brewhouse
        </h1>
        <div class="sub-header-flex">
          <h2>Coffee</h2>
          <h2>Tea</h2>
          <h2>Craft Beer</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },
  methods: {
    handleScroll() {
      if ((this.scrolled = window.scrollY > 0)) {
        this.$refs.social.classList.add('backdrop')
      } else {
        this.$refs.social.classList.remove('backdrop')
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.section-wrap {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1561137054/hrbh/beer-wall-three_l7avdf.jpg');
  background-size: cover;
  background-position: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-shadow: 4px 4px 5px #000;
}

h1 {
  color: bisque;
  text-align: center;
  margin-bottom: 60px;
  font-size: 60px;
  line-height: 0.8;
  font-family: gastromond, sans-serif;
  font-weight: 400;
  font-style: italic;
}

.bigger {
  font-size: 80px;
}

h2 {
  color: bisque;
  text-align: center;
  line-height: 1;
  font-size: 42px;
  font-family: gastromond, sans-serif;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 20px;
}

.social-icons {
  position: fixed;
  top: 20px;
  left: 0px;
  z-index: 5;
  transition: 0.5s;
  padding: 5px;
  img {
    height: 40px;
    margin-right: 10px;
    padding-left: 4px;
    padding-top: 4px;
    &:hover {
      cursor: pointer;
    }
  }
}
.backdrop {
  background-color: rgba(178, 34, 34, 0.4);
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0px;
  img {
    margin-bottom: 5px;
  }
}

@media only screen and (min-width: 900px) {
  .section-wrap {
    background-position: fixed;
  }
  h1 {
    font-size: 72px;
    margin-bottom: 40px;
  }
  .sub-header-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top: 2px solid bisque;
    padding-top: 20px;
  }
  h2 {
    margin-bottom: 0px;
    font-size: 60px;
  }
}
</style>
