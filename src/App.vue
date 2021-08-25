<template>
  <main class="main">
    <div 
      :class="{ 'modal-background': showModalBg }" 
      @click="removeBg"
      data-testid="modal-bg"
    ></div>

    <modal-post
      v-if="selectedPost" 
      :post="selectedPost"
      data-testid="modal"
    ></modal-post>

    <post-list
      :posts="loadScreenPosts" 
      @id-to-main="showModalPost"
      data-testid="post-list"
    ></post-list>

    <load-more-btn
      @click="increaseNumberOfPosts" 
      v-if="initalNumberOfPosts < 20" 
    ></load-more-btn>
  </main>
</template>

<script>
import getData from "./services/DataService";
// import resolvedData from './services/ResolvedDataService';
import PostList    from "./components/PostList.vue";
import ModalPost   from './components/ModalPost.vue';
import LoadMoreBtn from './components/LoadMoreBtn.vue';

export default {
  name: "App",
  components: {
    PostList,
    ModalPost,
    LoadMoreBtn
  },
  data() {
    return {
      posts: [],
      initalNumberOfPosts: 4,
      numberToIncreaseBy: 4,
      selectedPost: null,
      showModalBg: false
    }
  },
  methods: {
    showModalPost(id) {
      this.showModalBg  = true;
      this.selectedPost = this.posts[id];
    },
    removeBg() {
      this.showModalBg  = false;
      this.selectedPost = null;
    },
    increaseNumberOfPosts() {
      this.initalNumberOfPosts += this.numberToIncreaseBy;
    }
  },
  computed: {
    loadScreenPosts() {
      return this.posts.slice(0, this.initalNumberOfPosts);
    }
  },
  async created() {
    try {
      this.posts = await getData()
    } catch (err) {
      return err
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700&display=swap');

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Open Sans';
}

.main {
    padding: 130px 85px 60px 85px;
    position: relative;
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 1600px) {
    .main {
        padding: 100px 70px;
    }
}

@media screen and (max-width: 1200px) {
    .main {
        padding: 80px 50px;
    }
}

@media screen and (max-width: 992px) {
    .main {
        padding: 98px 61px;
    }
}

@media screen and (max-width: 768px) {
    .main {
        padding: 89px 169px;
    }
}

@media screen and (max-width: 600px) {
    .main {
        padding: 30px;
    }
}

@media screen and (max-width: 300px) {
    .main {
        padding: 20px;
    }
}

/* MODAL BACKGROUND */
.modal-background {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    transition: all 0.3s;
}
</style>
