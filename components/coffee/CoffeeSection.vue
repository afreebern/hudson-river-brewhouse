<template>
  <section class="section-padding">
    <div class="info">
      <h2>Truly Great Coffee.</h2>
      <p>
        We have a clear mission to deliver premium quality coffees as well as
        new and different roasts to out customers. We will work to earn your
        loyalty by bringing bright, bold, beautiful tastes to your morning or
        afternoon cup. Visit and enjoy the roasts on hand, served to order, and
        leave us with your thoughts.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  color: #fff;
  background-color: #000;
  background-image: url('~assets/coffee-cup.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  padding: 30px 10px;
  min-height: 500px;
  h2 {
    font-family: gastromond, sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 40px;
    margin-bottom: 20px;
  }
  p {
    font-size: 24px;
    font-family: mr-eaves-sans, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}

@media only screen and (min-width: 900px) {
  section {
    min-height: 500px;
    background-position-x: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  p {
    max-width: 900px;
  }
}
</style>
