<template>

  <b-navbar toggleable="lg" sticky class="m-0 pt-3 pb-3 bg-body">

    <b-navbar-toggle target="nav-collapse" class="mb-2"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mt-2">

        <b-nav-item
        v-for="item in menuObj"
        :key="item"
        :active="tagBeauty(item) === tagBeauty(tag)"
        @click="changeTag(item)">
        {{item}}
        </b-nav-item>

      </b-navbar-nav>
    </b-collapse>

      <b-navbar-nav right class="d-none d-xl-block">
        <b-nav-item active @click="toggleView">Toggle View</b-nav-item>
      </b-navbar-nav>

  </b-navbar>


</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuObj: Array,
    tag: String
  },

  methods:{
    toggleView: function(){
      this.$emit('toggle')
    },
    changeTag: function(item){
      this.$emit('clicked', item)
    },

    tagBeauty: function(tag){
      return tag.split(" ").join("-").toLowerCase();
    }
  }
}
</script>

<style scoped>
.navbar-nav .nav-item .nav-link{
  padding: 0.25rem 1rem;
  transition: all .2s;
  will-change: all;
  text-transform: uppercase;
  line-height: 2;
}
.navbar-nav .nav-item .active{
  background: #fff;
  border-radius: 4rem;
  margin: auto .5rem;
  background: #FFFFFF;
  box-shadow: 0 6px 12px 0 rgba(0,0,0,0.15);
  border-radius: 14px;

}
</style>
