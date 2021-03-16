<template>
  <div class="gallery">
    <link v-for="photo in photos" :key="photo" rel="preload" as="image" :href="photo" />
    <img
      v-for="(photo, index) in photos"
      v-show="isCurrentPhoto(index)"
      :key="photo"
      class="gallery__image"
      :src="photo"
      rel="prefetch"
    />
    <div class="gallery__right-arrow" @click="increment">ᐅ</div>
    <div class="gallery__left-arrow" @click="decrement">ᐊ</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        require("../assets/image-1.jpg"),
        require("../assets/image-2.jpg"),
        require("../assets/image-3.jpg"),
        require("../assets/image-4.jpg"),
        require("../assets/image-5.jpg"),
        require("../assets/image-6.jpg")
      ],
      currentPhoto: 0
    }
  },
  created() {
    window.addEventListener("keydown", this.changeCurrentPhoto)
  },
  unmounted() {
    window.removeEventListener("keydown", this.changeCurrentPhoto)
  },
  methods: {
    changeCurrentPhoto(event) {
      if (event.key === "ArrowLeft") {
        this.decrement()
      } else if (event.key === "ArrowRight") {
        this.increment()
      }
    },
    increment() {
      const maxIndex = this.photos.length - 1
      if (maxIndex === this.currentPhoto) {
        return (this.currentPhoto = 0)
      }

      this.currentPhoto++
    },
    decrement() {
      const minIndex = 0
      if (minIndex === this.currentPhoto) {
        return (this.currentPhoto = this.photos.length - 1)
      }

      this.currentPhoto--
    },
    isCurrentPhoto(index) {
      return index === this.currentPhoto
    }
  }
}
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
.gallery__right-arrow {
  position: absolute;
  right: 20px;
  font-size: 32px;
  cursor: pointer;
}
.gallery__left-arrow {
  position: absolute;
  left: 20px;
  font-size: 32px;
  cursor: pointer;
}
</style>
