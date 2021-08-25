<template>
  <section class="card-layout">
    <post-list-item
      v-for="(post, index) in posts" 
      :key="index" 
      :post="post" 
      :id="index" 
      @id-to-modal="addId" 
    ></post-list-item>
  </section>
</template>

<script>
import PostListItem from './PostListItem.vue'

export default {
  name: "PostList",
  components: {
    PostListItem
  },
  emits: [
    'id-to-main'
  ],
  props: {
    posts: {
      type: Array,
      required: true,
      descrition: 'An array of props from the JSON file.'
    }
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
