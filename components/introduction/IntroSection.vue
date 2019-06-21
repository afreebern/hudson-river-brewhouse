<template>
  <section>
    <div class="info-box">
      <h2>Welcome!</h2>
      <h3>to the Hudson River Brewhouse</h3>
      <h4>Local. Fresh. Authentic.</h4>
      <p>
        These three words here at Hudson River Brewhouse are put into everything
        that we do. From truly great coffee, to the huge selection of craft
        beers that we have here. Hudson River is your one stop shop, From your
        morning pick-me-up to winding down after work, We've got it all,
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  background-color: #fff;
  padding: 40px 20px;
}

.image-box {
  height: 600px;
  min-width: 320px;
  width: 600px;
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1561137056/hrbh/building-two_h2rb0w.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate(90deg);
}
h2 {
  font-family: gastromond, sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 42px;
  text-align: center;
}

h3 {
  font-size: 22px;
  font-family: mr-eaves-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  transform: translateY(-10px);
  padding-left: 12px;
  margin-bottom: 20px;
  text-align: center;
}
h4 {
  font-size: 32px;
  font-family: mr-eaves-sans, sans-serif;
  font-weight: 700;
  font-style: normal;
  text-align: center;
}

p {
  text-align: center;
  font-size: 20px;
}

@media only screen and (min-width: 900px) {
  h2 {
    font-size: 72px;
  }
  h3 {
    font-size: 32px;
  }
  h4 {
    font-size: 54px;
  }
  p {
    max-width: 900px;
    margin: 0 auto;
  }
}
</style>
