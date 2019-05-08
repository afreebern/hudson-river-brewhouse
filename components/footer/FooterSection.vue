<template>
  <section>
    <div class="flex-container">
      <div class="location flex-block">
        <p>171 Main Street<br />Hudson Falls NY 12839</p>
        <phone>518-555-555</phone>
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

div {
  outline: 1px solid reD;
}

.flex-container {
  display: flex;
  flex-direction: column;
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
    text-decoration: underline;
    &:hover {
      color: bisque;
      transition: 0.5s;
    }
  }
}
</style>
