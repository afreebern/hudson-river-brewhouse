<template>
  <section>
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
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url('/assets/beer-wall-three.jpg');
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

@media only screen and (min-width: 900px) {
  section {
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
