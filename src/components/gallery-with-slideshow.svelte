<script>
  import { onMount } from 'svelte';

  export let gallery_images = "";
  export let artist_name = "";

  let slides, gallery_elements;
  let slideshow, gallery, prev, next, close;

  onMount(() => {
    let curSlide = 0;

    // select all slides
    slides = slideshow.querySelectorAll(".slideshow__slide");

    gallery_elements = gallery.querySelectorAll(".gallery__image");
    console.log( gallery_elements );

    let maxSlide = (slides.length - 1);

    // set initial translateX property to index * 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
    });

    // add event listener and navigation functionality
    // > prev
    prev.addEventListener("click", () => {
      // check if current slide is the first and reset current slide to last
      if (curSlide === 0) {
        curSlide = maxSlide;
      } else {
        curSlide--;
      }

      // move slide by 100%
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
    });

    // > next
    next.addEventListener("click", () => {
      // check if current slide is the last and reset current slide
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      // move slide by -100%
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
    });

    // > close
    close.addEventListener("click", () => {
      slideshow.classList.toggle("slideshow__hidden");
    });

    // > open
    gallery_elements.forEach(( image, gallery_index ) => {
      image.addEventListener("click", () => {

        console.log('test');
        console.log( gallery_index );
        
        // toggle slideshow
        slideshow.classList.toggle("slideshow__hidden");

        // stop window scrolling 
        // TODO;

        // set to correct image
        slides.forEach((slide, slideshow_index) => {
          slide.style.transform = `translateX(${(slideshow_index - gallery_index) * 100}%)`;
        });

      });
    });
  });
</script>

<div bind:this={slideshow} class="slideshow slideshow__hidden">
  <div bind:this={close} class="slideshow__close">wip</div>
  <div bind:this={prev} class="slideshow__prev">wip</div>
  <div bind:this={next} class="slideshow__right">wip</div>

  {#each gallery_images as path, index}
    <div class="slideshow__slide">
      <img 
        class="slideshow__image"
        src={ path }
        alt={`Exhibition documentation of ${ artist_name }'s senior show.`}
      />
    </div>
  {/each}
</div>

<div bind:this={gallery} class="gallery">
  <section class="gallery__images">
    {#each gallery_images as path, index}
      <img
        class="gallery__image"
        src={ path }
        alt={ `Exhibition documentation of ${ artist_name }'s senior show.` }
      />
    {/each}
  </section>
</div>

<style lang="scss">
  .gallery {
    &__images {
      columns: 2;
      /* Laptop + */
      @media (min-width: 768px) {
        columns: 3;
      }
    }
    &__image {
      width: 100%;
      margin-bottom: var(--spacing-item-gap);
      cursor: pointer;
    }
  }

  :global(.slideshow__hidden) {
    display: none;
  }

  .slideshow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--color-black);
    background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
    box-sizing: border-box;
    padding: 110px;
    overflow-x: hidden;
    z-index: 16;

    &__slide {
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;

      box-sizing: border-box;
      padding: var(--spacing-section-gap);

      img {
        width: 100%;
        height: 100%;
        margin: auto;
        object-fit: contain;
      }
    }

    &__prev {
      position: absolute;
      left: var(--spacing-element-gap);
    }
    &__right {
      position: absolute;
      right: var(--spacing-element-gap);
    }
    &__close {
      position: absolute;
      top: var(--spacing-element-gap);
      right: var(--spacing-element-gap);

      float: right;
    }

    &__prev, &__right {
      top: 0;
      bottom: 0;
      margin: auto;
    }

    &__prev, &__right, &__close {
      width: 64px;
      height: 64px;
      background: white;
      mix-blend-mode: exclusion;
      z-index: 16;
      cursor: pointer;
    }
  }
</style>
