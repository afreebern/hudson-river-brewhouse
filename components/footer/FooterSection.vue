<template>
  <section>
    <div class="flex-container">
      <div class="location flex-block">
        <p>171 Main Street<br />Hudson Falls NY 12839</p>
        <phone>518-555-555</phone><br />
        <mail-to>drake@hudsonriverbrewhouse.com</mail-to>
      </div>
      <div class="hours flex-block">
        <h2>Hours of Operation</h2>
        <p>Monday: closed</p>
        <p>Tuesday-Thursday: 7am - 9pm</p>
        <p>Saturday: 9am - 10pm</p>
        <p>Sunday: 9am - 9pm</p>
      </div>
      <div class="links flex-block">
        <a href="">Contact</a>
        <a href="">Menu</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  background-color: #000;
  color: #fff;
  padding: 20px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}

.flex-block {
  padding: 10px 0 10px 0;
}

.location,
.hours {
  text-align: center;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    padding: 0 20px;
    color: #fff;
    &:hover {
      color: bisque;
      transform: rotate(10deg);
      transition: 0.5s;
      text-decoration: underline;
    }
  }
}

@media only screen and (min-width: 900px) {
  .flex-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .links {
    flex-direction: column;
    text-align: Center;
  }
}
</style>
