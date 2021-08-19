<template>
    <button class="load-more">load more</button>
</template>

<script>
export default {
    name: "LoadMoreBtn"
}
</script>

<style>
    .load-more {
    background-color: #0081FF;
    color: #fff;
    padding: 20px;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
    font-size: 16px;
    line-height: 13px;
    font-weight: 700;
    cursor: pointer;
    margin: 75px auto 0 auto;
    display: block;
    transition: all 0.3s;
    }

    .load-more:hover {
        transform: translateY(-5px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .load-more:active {
        transform: translateY(-3px);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .remove-btn {
        display: none;
        pointer-events: none;
    }
</style>