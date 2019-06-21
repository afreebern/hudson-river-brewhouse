<template>
  <section>
    <div class="text-box">
      <h2>Great Wine Selection</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        natus fuga cupiditate! Delectus, ullam similique asperiores dolorum
        natus possimus. Voluptate facilis fugiat harum, repellat dolores
        blanditiis reprehenderit eos tempora reiciendis!
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/f_auto/q_auto/v1561138827/hrbh/Pouring_red_wine_from_bottle_into_the_wineglass_on_black_itqde9.jpg');
  background-color: #0f0d10;
  min-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: -220px;
  color: #fff;
  padding: 20px;
}
h2 {
  font-family: gastromond, sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
}
p {
  font-family: mr-eaves-sans, sans-serif;
  font-weight: 400;
  text-align: center;
  font-style: normal;
  font-size: 20px;
}

.text-box {
  background-color: rgba(0, 0, 0, 0.5);
}

@media only screen and (min-width: 900px) {
  section {
    background-position-x: 200px;
    justify-content: flex-start;
    padding-left: 40px;
    h2 {
      text-align: left;
    }
    p {
      max-width: 600px;
      text-align: left;
    }
  }
  .text-box {
    background-color: none;
  }
}
</style>
