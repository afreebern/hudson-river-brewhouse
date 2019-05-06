<template>
  <section>
    <div class="banner"></div>
    <div>
      <h2>LOCAL <span class="thinner">FLAVOR</span></h2>
      <p>
        Adirondack brewery tour all in one location. Featuring Common Roots,
        Battle Hill and other local favorites.
      </p>

      <div class="flex-container">
        <div class="flex-block">
          <img src="~/assets/common-roots.png" alt="common roots logo" />
        </div>
        <div class="flex-block">
          <img src="~/assets/fiddlehead.png" alt="fiddlehead logo" />
        </div>
        <div class="flex-block">
          <img src="~/assets/mean-max.png" alt="mean max logo" />
        </div>
        <div class="flex-block">
          <img src="~/assets/paradox.png" alt="paradox logo" />
        </div>
        <div class="flex-block">
          <img src="~/assets/adirondack.png" alt="adirondack logo" />
        </div>
        <div class="flex-block">
          <img src="~/assets/battle-hill.png" alt="battle hill logo" />
        </div>
        <div class="flex-block">
          <img src="~/assets/northway.jpg" alt="northway logo" />
        </div>
        <div class="flex-block">
          <img src="~/assets/taylor.jpg" alt="taylor logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-bottom: 40px;
  padding-top: 20px;
}
.banner {
  background-image: url('~assets/beer-shot.jpg');
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 300px;
  margin-bottom: 40px;
}
h2 {
  text-align: center;
  font-size: 53px;
  margin-bottom: 10px;
}
p {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  font-size: 16px;
  margin-bottom: 30px;
}
.thinner {
  font-weight: 200;
}

.flex-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.flex-block {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  img {
    width: 80%;
  }
}

@media only screen and (min-width: 900px) {
  .flex-container {
    flex-direction: row;
    max-width: 1200px;
  }
  .flex-block {
    width: 25%;
  }
  .banner {
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 60px;
  }
}
</style>
