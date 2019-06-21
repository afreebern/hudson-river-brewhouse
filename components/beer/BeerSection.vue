<template>
  <section>
    <h2>Craft Beer: Adirondack Tour</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam natus
      fuga cupiditate! Delectus, ullam similique asperiores dolorum natus
      possimus. Voluptate facilis fugiat harum, repellat dolores blanditiis
      reprehenderit eos tempora reiciendis!
    </p>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/f_auto/q_auto/v1561140292/hrbh/Bartender_filling_up_a_dark_with_craft_beer_a_pint_glass_1_euw3gp.jpg');
  min-height: 500px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: #fff;
}
h2 {
  font-family: gastromond, sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
}
p {
  font-family: mr-eaves-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  font-size: 24px;
  max-width: 900px;
  margin: 0 auto;
}

@media only screen and (min-width: 900px) {
  h2 {
    font-size: 72px;
  }
}
</style>
