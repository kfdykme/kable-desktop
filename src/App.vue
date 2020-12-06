<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
       <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传csv</el-button>
        </el-upload> 
    </div>
    <HelloWorld ref="aa" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' 
import A from './util.js' 
 var reader = new FileReader();
export default {
  name: 'app',
  components: {
    HelloWorld
  }, 

  created() {
   
    reader.onload = (i) => {
      console.info('---' + i)
    }
    reader.onloadend = (i) => {
      console.info('reader load end', i) 
      this.handleFile(reader.result)
    } 
  },
  setup() { 
    
    
  },

  methods: {
    update (list) {
      list
      console.info(this.$refs.aa.update(list))
    },
    handleChange (file, fileList) {
      console.log(file)
      console.log(fileList)
      reader.readAsText(file.raw,'gbk') 
    } ,
     handleFile (text) {
      console.info("handleFile Start")
      let infos = A.handleList(text)
      
      console.info("handleFile", infos)
      this.update(infos.map(i => i.to()))
      console.info("handleFile End") 
    } 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
