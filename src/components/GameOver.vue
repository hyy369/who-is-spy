<template>
    <div>
        <div class="block"></div>
        <br>
        <h2>Game Over</h2>
        <br>
        <h3>{{spy_win?'Spy Win':'Spy Not Win'}}</h3>
        <br>
        <div class="weui-flex">
            <div class="weui-flex__item"></div>
            <div class="weui-flex__item">
                <button type="button" class="weui-btn weui-btn_default" @click="next_row">Next</button>
            </div>
            <div class="weui-flex__item"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameOver',
    data: function() {
        return {
            spy_win: 0
        }
    },
    methods: {
        next_row: function() {
            this.$router.push('/');
        }
    },
    beforeMount: function() {
        this.spy_win = this.global_data.spy_win;
    }
}
</script>

<style scoped>
.block {
    height: 100px;
    width: 100%;
}

h2 {
    text-align: center;
}

h3 {
    text-align: center;
}
</style>
