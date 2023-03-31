<template>
    <div class="slideshow">
        <div class="slideshow-images">
            <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt"
                :class="{ active: index === activeImage }">
        </div>
        <div class="slideshow-controls">
            <button @click="previousImage" style="color: black;"> ⇦ </button>
            <button @click="nextImage" style="color: black;"> ⇨ </button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            images: [
                {
                    src: "bilde1.jpg",
                    alt: "bilde1"
                },
                {
                    src: "studiebok-app-2.jpg",
                    alt: "studiebok-app-2.jpg"
                },
                {
                    src: "studiebok-app-4.jpg",
                    alt: "studiebok-app-4.jpg"
                },
                {
                    src: "tudiebok-app-5.jpg",
                    alt: "studiebok-app-5.jpg"
                }
            ],
            activeImage: 0
        };
    },
    methods: {
        previousImage() {
            this.activeImage = (this.activeImage === 0) ? this.images.length - 1 : this.activeImage - 1;
        },
        nextImage() {
            this.activeImage = (this.activeImage === this.images.length - 1) ? 0 : this.activeImage + 1;
        },
        startTimer() {
            setInterval(() => {
                this.nextImage();
            }, 4200);
        }
    },
    mounted() {
        this.startTimer();
    }
};
</script>
  
<style scoped>
.slideshow {
    position: relative;
    width: 100%;
    height: 500px;
}

.slideshow-images {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slideshow-images img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1.3s ease-in-out;
}

.slideshow-images img.active {
    opacity: 1;
}

.slideshow-controls {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slideshow-controls button {
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: white;
    margin: 0 1rem;
    cursor: pointer;
}
</style>
  