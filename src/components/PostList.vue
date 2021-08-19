<template>

  <section class="card-layout">
    <Post 
      v-for="(post, index) in posts" 
      :key="index" 
      :post="post" 
      :id="index" 
      @id-to-modal="addId" 
    />
  </section>

</template>

<script>
import Post from './Post.vue'

export default {
  name: "PostList",
  components: {
    Post
  },
  props: {
    posts: Array
  },
  methods: {
    addId(id) {
      this.$emit('id-to-main', id);
    }
  }
};
</script>

<style scoped>
.card-layout {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}

@media screen and (max-width: 992px) {
    .card-layout {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 768px) {
    .card-layout {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
}

.card-layout > * {
    margin: 0 auto;
}
</style>
