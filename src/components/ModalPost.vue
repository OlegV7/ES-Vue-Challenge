<template>
    <section class="modal" data-modal-testid="modal">

        <div class="modal-card">
            <img :src="post.image" alt="Main Image" class="modal-card__img">

            <div class="modal-card__text">
                <div class="card__top">
                    <div class="card__profile">
                        <img :src="post.profile_image" alt="Profile Image" class="card__profile-image">
            
                        <div class="card__profile-text">
                            <h3 class="card__profile-name">{{ post.name }}</h3>
            
                            <p class="card__profile-date">{{ date }}</p>
                        </div>
                    </div>
                    
                    <a :href="post.source_link">
                        <img :src="logo" alt="Instagram Logo" class="card__instagram-logo">
                    </a>
                </div>

                <div class="card__line"></div>

                <p class="card__caption">
                    <a :href="post.source_link" class="card__caption-link">#Lorem</a>{{ post.caption }}
                </p>

                <div class="card__bottom">
                    <img src="../assets/heart.svg" alt="Heart Logo" class="card__bottom-heart">
            
                    <div class="card__bottom-likes">{{ post.likes }}</div>
                </div>                
            </div>
        </div>

    </section>
</template>

<script>
import createDate from '../services/DateService';

export default {
    name: "ModalPost",
    props: {
        post: {
            type: Object,
            required: true,
            description: 'The indivudial post that should be rendered on the modal.'
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
/* MODAL CARD */
.modal-card {
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    
    max-width: 875px;
    /* max-height: 526px; */
    /* min-height: 200px; */

    padding: 10px;
    background-color: #fff;
    z-index: 15;

    display: flex;
    flex-direction: row;
    /* align-items: center; */
    transition: all 0.3s;
}

.modal-card__img {
    max-width: 506px;
    height: 100%;
    max-height: 400px;
    /* margin-right: 10px; */
    margin: auto 10px auto 0;
}

.modal-card__text {
    width: 306px;
    height: 100%;
}

@media screen and (max-width: 992px) {
    /* .modal-card {
        flex-direction: column;
        align-items: center;
    } */

    .modal-card__img {
        max-height: 270px;
        /* margin-right: 0; */
    }

    .modal-card__text {
        max-width: 306px;
        height: 100%;
        padding-bottom: 5px;
    }
}

@media screen and (max-width: 768px) {
    .modal-card {
        flex-direction: column;
        align-items: center;
    }

    .modal-card__img {
        margin-right: 0;
    }
    
}

@media screen and (max-width: 500px) {
    .modal-card {
        width: 80%;
    }

    .modal-card__img {
        height: 100%;
        width: 100%;
    }

    .modal-card__text {
        width: 100%;
        height: 100%;
    }
}

@media screen and (max-height: 420px) {
    .modal-card {
        transform: translate(-52.5%, -50%);

        flex-direction: row;
        margin: 15px;
        width: 90%;
        padding: 5px;
    }

    .modal-card__img {
        margin-right: 5px;
    }
}

@media screen and (max-height: 360px) {
    .modal-card {
        transform: translate(-52.5%, -55%);
    }

    .modal-card__img {
        width: 60%;
    }
}

@media screen and (max-height: 300px) {
    .modal-card {
        transform: translate(-52.5%, -52.5%);
        margin: 5px;
        height: 90%;
    }

    .modal-card__img {
        width: 60%;
    }
}
</style>