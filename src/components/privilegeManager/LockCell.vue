<template>
     <div class="cell">
     <span>{{this.name}}</span>
     <input type="checkbox" name="name" @click="$emit('adduuid')" />
     </div>
</template>

<script>
export default {
    props:{
        name:{
            type:String
        }
    }
}
</script>

<style  scoped>
.cell{
    width: 100%;
    height:40px;
    border-bottom: 2px solid brown;
}
.cell span{
    float: left;
    font-size:20px;
    /* margin-right: 240px; */
}
.cell input{
    float:right;
    margin:auto;
    height:30px;
    width: 30px;
}
</style>