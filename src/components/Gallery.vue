<template>
  <div class="gallery">
    <img class="gallery__image" src="../assets/image-2.jpg" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.gallery {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery__image {
  height: 100%;
  max-width: 100%;
  object-fit: cover;
}
</style>
