<template>
  <section>
    <div class="flex-container">
      <h2>MUSIC IS OUR PASSION</h2>
      <h3>Here at the Hudson River Brewhouse</h3>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1561396574/hrbh/guitar_u2bkjj.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  border-top: 3px solid bisque;
  border-bottom: 3px solid bisque;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: mr-eaves-sans, sans-serif;
}

.flex-container {
  // background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
}

h2 {
  color: #fff;
  font-size: 6vw;
  letter-spacing: 1vw;
}

h3 {
  color: #fff;
  font-size: 2vw;
  text-align: center;
}
</style>
