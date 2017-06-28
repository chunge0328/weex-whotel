
<template>

    <div class="wrapper" @click="cellClick">
        <image :src="logoUrl" class="logo"></image>
        <text style="font-size: 80px">helllo123</text>
        <text>{{this.listData}}</text>
        <list>

            <cell v-for="item in listData.Hotels" @click="cellClick" :item="item">
                <div class="item">
                    <div class="imgcontainer" style="margin: auto">

                        <image resize="cover" v-bind:src="item.Picture" style="height: 400px; width: 750px;"></image>

                    </div>

                    <div class="textarea">

                        <text class="hotelname">{{item.Name}}</text>
                        <text class="hoteldes">{{item.Brief}}</text>

                    </div>

                </div>

            </cell>
        </list>



  </div>

</template>

<script>

    import dataCenter from './fetchdata'

    var modal = weex.requireModule('modal')
//    const events = weex.requireModule('events')



    export default {


        methods: {

            fetchListData:function(userid){

                dataCenter.collection(userid).then((response) => {

                    this.listData = response

                })
            },

             cellClick: function (e) {

//                events.openHotelDetailFromSavePage(e.target.attr.item)
                modal.alert({
                    message: "test",
                    duration: 3
                })

            },

            created: function(){

                modal.alert({
                    message: "test",
                    duration: 3
                })
                this.fetchListData('4706587')

            }

        },

        // 属性
        data: {

//            return {
//                imageList: [
//                    { src: 'http://p1.zmjiudian.com/116YLS711uz_theme'},
//                    { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
//                    { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
//                ],
//
                listData:{},
//
//                logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
//
//            }
            logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png'

        },

//        create() {
//          this.fetchListData('123')
//        },



        //生命周期钩子

//        created: {

//            modal.alert({
//            message: "test",
//            duration: 3
//            })

        //请求数据
            //获取userid
//            this.fetchListData("4706587")

//            events.getUserIDCallBack((userid) => {
//
//                this.fetchListData(userid)
//
//            })
//        },



    }

</script>


<style>

  /*.imgcontainer {*/

  /*}*/
  /*.hotelname{*/

    /*font-size: medium;*/
    /*color: #666;*/

  /*}*/
  /*.hoteldes{*/
    /*font-size: smaller;*/
    /*color: #999;*/
  /*}*/
  /*.textarea{*/
    /*margin: 10px;*/
  /*}*/

  .logo { width: 360px; height: 156px; }
  .wrapper { align-items: center; margin-top: 120px; }


</style>