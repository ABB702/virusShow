<template>
  <div id = "commentsApp" v-if="flag">
      <section class="output">
        <ul>
          <li v-show="comments.length==0">No Data{{searchCont}}</li>
          <li v-for="item in comments" :key="item.id">
            <div class="iconusr"><img src="../assets/usr.png" alt="图标"></div>
            <div class="comusr">
              <div class="usr">{{item.name}}</div>
              <p class="info">{{item.content}}</p>
              <div class="comdate">{{item.date|dateFormat}}&emsp;{{Number(item.id) + 1}}楼
                <el-button size="mini" @click='delComment(item.id)' type="danger" icon="el-icon-delete" circle></el-button>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section class="input">
          <article class="inputCont">
              <input type="text" v-model="inputCom" @keyup.enter='addComment' placeholder="发表评论">
          </article>
          <div></div>
          <button class="addBut" @click='addComment'>√</button>
          <!-- <article>
              <input type="text" v-model.lazy="searchCont">
          </article> -->
      </section>
    </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      comments: [],
      inputCom: '',
      searchCont: '',
      username: '',
      flag: false
    }
  },
  mounted: function () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.get('/comments').then(ret => {
        this.comments = ret.data
        // this.$set(this.comments[0], 'id', 0)
        this.flag = true
        // console.log(this.flag)
      })
      const token = window.sessionStorage.getItem('token')
      this.$http.get('/users/' + token).then(ret => {
        this.username = ret.data.name
      })
    },
    addComment: function () {
      const maxId = Math.max.apply(Math, this.comments.map(item => item.id))
      if (this.inputCom != '') {//eslint-disable-line
        const p = {
          id: maxId + 1,
          name: this.username,
          content: this.inputCom,
          date: new Date()
        }
        this.comments.push(p)
        this.inputCom = ''
        //  当地显示完成后提交给服务器
        this.$http.post('/comments', p).then(ret => {
          this.$message.success('评论成功')
        })
      }
    },
    delComment: function (id) {
      if (!confirm('确定删除评论？')) return
      const index = this.comments.findIndex(item => item.id == id)//eslint-disable-line
      this.comments.splice(index, 1)
      this.$http.delete('/comments/' + index).then(ret => {
        this.$message.success('删除成功')
      })
    }
    // search: function (i) {
    //   const x = this.comments.filter(item =>
    //     item.name.includes(this.searchCont) ||
    //     item.content.includes(this.searchCont))
    //   console.log('this.comments')
    //   console.log(x)
    //   return x
    // }
  },
  filters: {
    dateFormat: function (dateStr) {
      dateStr = new Date(dateStr)
      const y = dateStr.getFullYear()
      const m = (dateStr.getMonth() + 1).toString().padStart(2, '0')
      const d = dateStr.getDate().toString().padStart(2, '0')
      const hh = dateStr.getHours().toString().padStart(2, '0')
      const mm = dateStr.getMinutes().toString().padStart(2, '0')
      const ss = dateStr.getSeconds().toString().padStart(2, '0')
      return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    }
  }

}
</script>
<style lang="less" scoped>
#commentsApp {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4%;
  margin: 0px;
  background-image: url('../assets/provinces.png');
  background-size: cover;
  background-repeat:no-repeat;
  .output {
    box-sizing: border-box;
    font-size: 10px;
    margin-top:10px;
    height: 200px;
    width: 100%;
    overflow-y: auto;
    ul {
      padding: 0px;
      margin: 0px;
      list-style: none;
      li {
        text-align: left;
        .iconusr {
          box-sizing: content-box;
          float:left;
          width: 20px;
          height: 20px;
          img {
            width: 20px;
            height: 20px;
          }
        }
        .comusr {
          position: relative;
          margin-left:24px;
          padding:4px 0 2px;
          border-top:1px solid #e5e9ef;
          .usr {
            font-size: 10px;
            font-weight: 700;
            color: #eb4d4b;
          }
          .info {
            font-size: 10px;
            color: #7ed6df;
          }
          .comdate {
            font-size: 10px;
            color: #c7ecee;
          }
        }
      }
    }
  }
  .input {
    box-sizing: border-box;
    margin-top:10px;
    height: auto;
    width: 100%;
    .inputCont {
      width:80%;
      float:left;
      margin-right: 10px;
      input {
        box-sizing: border-box;
        width:100%;
        font-size: 10px;
        border:0;
        border-radius: 2px;
        border-bottom: 1px solid white;
        padding:1px 2px;
        background: rgba(47, 121, 121, 0);
        color:#fff;
      }
    }
    div {
      width:5%;
    }
    button {
      width:15%;
      height:20px;
      font-size:10px;
      font-weight: 600;
      color:#fff;
      background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%);
      border: 0;
      border-radius:2px;
    }

  }
}
</style>
