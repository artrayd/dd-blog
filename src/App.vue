<template>
  
  <div id="app">
  
    <Menu
      :menuObj="menu"
      :tag="curTag"
      @clicked="changeTag"
      @toggle="toggleView">
      </Menu>

      <!-- All Posts -->
        <b-container class="mb-4">
          <b-row>
            <Post
              v-for="post in posts"
              :key="post.title"
              :postObj="post"
              :view="tableView">
            </Post>
        </b-row>
      
      </b-container>

  </div>


</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'home',
  components: {
    Post,
    Menu
  },
  data: function () {
    return{
      curTag: 'Main', // if you want to start with all tags, comment this line and uncoment the next one
      // curTag: '', uncommennt if you want to start with all tags
      posts: [],
      menu: [],
      postsBack: [],
      tableView: true,
      publicPath: process.env.BASE_URL
    }
  },

  computed: {
  },

  methods: {
    
    toggleView(){
      this.tableView = !this.tableView
    },

    getMenu: function(posts){
      posts.forEach((post)=>{
        if(post.tags.length > 1){
          post.tags.forEach((tag) =>{
            if(!this.menu.includes(tag)){
              this.menu.push(tag)
            }
          })
        } else {
            if(!this.menu.includes(post.tags[0])){
              this.menu.push(post.tags[0])
            }
        }
      })
    },

    changeTag: function(tag, bool){

      tag = this.tagBeauty(tag)

      if (!bool && this.tagBeauty(this.curTag) !== tag){
        this.$router.push('/' + tag )  
        // this.$router.push('/' + tag )  
      }


      this.curTag = tag
      this.posts = []

      // checking allposts
      this.postsBack.forEach((post)=>{
        
        // checking tags more than 1
        if(post.tags.length > 1){

          post.tags.forEach( (postTag) =>{

            if(this.tagBeauty(postTag) === tag){
              this.posts.push(post)
            }

          })
        } 

        else {
            if(this.tagBeauty(post.tags[0]) === tag){
              this.posts.push(post)
            }
          }
      })

      // show all tags, don't use All tag
      if (tag === ''){
        this.posts = this.postsBack;
        this.curTag = 'all'        
      }

    },

    tagBeauty: function(tag){
      return tag.split(" ").join("-").toLowerCase();
    }

  },

  mounted: function(){

    let tag
    if(this.$route.params.tag){
      tag = this.tagBeauty(this.$route.params.tag)  
    }

    fetch(this.publicPath + "posts.json")
        .then(r => r.json())
        .then(json => {
          this.posts = json
          this.postsBack = json
          this.getMenu(json)

          if(tag){
            this.changeTag(tag, true)  
          } else {
            this.changeTag(this.curTag, true)  
          }
          
        })

      // response => {
      // console.log('Error loading json:', response)


    


  }
}
</script>
<style>
  body{
    -webkit-font-smoothing: antialiased;
  }
</style>