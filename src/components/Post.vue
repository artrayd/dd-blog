<template>

<div :class="layout">
  <b-card
    :img-src="postObj.photo"
    tag="article"
    class="mt-4 w-100 shadow rounded-lg border-0"
  >

  <div class="card-title-div">
  
  <b-row >
      
      <!-- if you need to get images from src folder, use this function for b-image -->
      <!-- <b-img :src="getImage(postObj.icon)" width="54"></b-img> -->
      <div :class="layoutImg" class="mb-4"  v-if="postObj.icon">
        <b-img
          class="ml-4 mr-2 d-block"
          :src="postObj.icon"
          height="54">
        </b-img>
      </div>

    <b-col>
      <h4 class="card-title">{{postObj.title}}</h4>
      <h6 class="card-subtitle text-muted mb-2">{{postObj.subtitle}}</h6>
    </b-col>
    
  </b-row>

  </div>

  
    <b-card-text v-if="postObj.text" class="h5 font-weight-normal flex-grow-1 line-height-14">
      <hr/>
      {{postObj.text}}
    </b-card-text>
    
    <!-- If link exists -->
    <b-link
      v-if="postObj.link && postObj.link.href"
      :href="postObj.link.href"
      class=""
      target="_blank"> {{postObj.link.text}}
    </b-link>

    <!-- If has several links -->
    <b-container class="p-0 mt-3" v-else >
      <b-link
        v-for="link in postObj.link"
        :key="link.id"
        :href="link.href + '?utm-source=ddblog'"
        class="mr-3"
        target="_blank"> {{link.text}}</b-link>
      </b-container>

  </b-card>
</div>

</template>

<script>
export default {
  name: 'Post',
  props: {
    postObj: Object,
    view: Boolean
  },

  computed:{
    layout: function(){
      if(this.view){
        return 'col-xl-4 d-flex align-items-stretch'
      } else {
        return 'col-xl-12'
      }
    },

    layoutImg: function(){
      if(this.view){
        return 'row col-12'
      } else {
        return ''
      }
    }
  },

  methods: {
    // if you need to get images from src folder, use this function for b-image
    // getImage: function(path){
    //   if(path){
    //     return require(`@/assets/${path}`)  
    //   }
    // },
  },

  mounted: function(){
    // for debugging
    // console.log (this.postObj)
  }
}
</script>


