<template>
    <div class="card" @click="getPost">

        <div class="card__top">
            <div class="card__profile">
            <img :src="post.profile_image" alt="Profile Image" class="card__profile-image">

                <div class="card__profile-text">
                    <h3 class="card__profile-name">{{ post.name }}</h3>

                    <p class="card__profile-date">{{ date }}</p>
                </div>
            </div>
            
            <a :href="post.source_link" target="_blank">
                <img :src="logo" alt="Instagram Logo" class="card__instagram-logo">
            </a>
        </div>

        <img :src="post.image" alt="Card Main Image" class="card__image-main">
            
            <p class="card__caption">
                <a :href="post.source_link" target="_blank" class="card__caption-link">#Lorem</a> {{ post.caption }}
            </p>

        <div class="card__end">
            <div class="card__line"></div>

            <div class="card__bottom">
                <img src="../assets/heart.svg" alt="Heart Logo" class="card__bottom-heart">

                <div class="card__bottom-likes">{{ post.likes }}</div>
            </div>
        </div>
                
    </div>
</template>

<script>
import createDate from '../services/DateService';

export default {
    name: "Post",
    emits: [
        'id-to-modal'
    ],
    props: {
        post: {
            type: Object,
            required: true,
            description: 'Individial post to be rendered to screen'
        },
        id: {
            type: Number,
            required: true,
            description: 'Unique post identifier'
        }
    },
    methods: {
        getPost() {
            this.$emit('id-to-modal', this.id);
        }
    },
    computed: {
        logo() {
            return this.post.source_link === 'https://www.facebook.com/EmbedSocial/' ? '/facebook.svg' : '/instagram-logo.svg';
        },
        date() {
            const { month, day, year } = createDate(this.post.date);

            return `${day} ${month} ${year}`;
        }
    }
}
</script>

<style>
.card {
    position: relative;
    background-color: #fff;
    border: 1px solid #E0E0E0;
    max-width: 430px;
    height: 100%;
    padding: 22px 15px;
    cursor: pointer;
    transition: all 0.3s;

    display: flex;
    flex-direction: column;
}

.card__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 23px;
}

.card__profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

/* .card__profile-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
} */

.card__profile-image {
    margin-right: 15px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
}

.card__profile-name {
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
}

.card__profile-date {
    font-size: 12px;
    line-height: 16px;
    margin-top: -12.5px;
}

.card__instagram-logo {
    width: 24px;
}

.card__image-main {
    width: 100%;
    max-height: 200px;
    /* min-height: 150px; */
    max-height: 325px;
    margin-bottom: 19px;
}

.card__caption {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
}

.card__caption-link {
    color: #4F9DE8;
}

.card__line {
    width: 100%;
    border-top: 1px solid #E0E0E0;
    margin: 20px 0 15px 0;
}

.card__bottom {
    display: flex;
}

.card__bottom-heart {
    width: 15px;
    margin-right: 4.5px;
}

.card__bottom-likes {
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
}

.card__end {
    display: flex;
    margin-top: auto;
    flex-direction: column;
}
</style>