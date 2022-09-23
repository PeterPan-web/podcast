<template>
  <view>
    <view class="message data-v-79dae658">
      <view class="input data-v-79dae658"><input class="data-v-79dae658" type="text" placeholder="说点啥" :value="a"
          @input="b" /></view>
      <view class="messageBtn data-v-79dae658"><button class="btn data-v-79dae658" @tap="c">留言</button></view>
    </view>
    <view class="showContent data-v-79dae658">
      <view class="data-v-79dae658" v-for="(item, index) in d" :key="item.f">
        <view class="listShow data-v-79dae658" :style="'background-color:' + item.e">
          <view class="itemLogo data-v-79dae658">
            <view class="data-v-79dae658">
              <image class="data-v-79dae658" :src="item.a"></image>
            </view>
            <view class="itemLogotext data-v-79dae658">{{ item.b }}</view>
          </view>
          <view class="itemText data-v-79dae658">{{ item.c }}</view>
          <view class="itemTime data-v-79dae658">{{ item.d }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  'use strict';

  var t = require('../../common/vendor.js');

  const e = {
    data: () => ({
      userinfo: '',
      messageContent: '',
      list: [],
      colorlists: [
        'hsl(42, 48%, 54%)',
        'hsl(138, 24%, 48%)',
        'rgb(200, 138, 131)',
        'rgb(84, 221, 226)',
        'rgb(178, 199, 168)',
        'rgb(16, 195, 195)',
        'hsl(0, 21%, 68%)',
        'rgb(226, 166, 198)',
        'hsl(278, 17%, 66%)',
        'rgb(153, 199, 235)'
      ]
    }),

    onLoad() {
      this.getlist();
      this.getInfo();
    },

    methods: {
      changecolor() {
        let t = Math.floor(Math.random() * this.colorlists.length);
        return this.colorlists[t];
      },

      getInfo() {
        let that = this;
        uni.getStorage({
          key: 'userinfo',
          success: (e) => {
            if (e.data) {
              that.userinfo = JSON.parse(e.data);
            }
          }
        });
      },

      getlist(e) {
        t.rn
          .callFunction({
            name: 'fun',
            data: {
              api: 'getMessages',
              api: e || 'getMessages',
              token: t.index.getStorageSync('token')
            }
          })
          .then((t) => {
            this.list = t.result.data;
          });
      },

      publish() {
        if (this.userinfo) {
          if (this.messageContent) {
            t.rn
              .callFunction({
                name: 'fun',
                data: {
                  api: 'publish',
                  content: this.messageContent,
                  color: this.changecolor(),
                  userinfo: this.userinfo,
                  time: new Date().toLocaleString()
                }
              })
              .then((e) => {
                this.list.unshift({
                  _id: e.result.id,
                  content: this.messageContent,
                  color: this.changecolor(),
                  userinfo: this.userinfo,
                  time: new Date().toLocaleString()
                });
                this.messageContent = '';
                wx.showToast({
                  title: '留言成功',
                  icon: 'success'
                });
              });
          }
        } else {
          wx.showToast({
            title: '请登录',
            icon: 'error'
          });
        }
      }
    }
  };

  var s = t._export_sfc(e, [
    [
      'render',
      function(e, s, n, o, i, a) {
        return {
          a: i.messageContent,
          b: t.o(
            t.m((t) => (i.messageContent = t.detail.value), {
              lazy: true
            })
          ),
          c: t.o((t) => a.publish()),
          d: t.f(this.list, (e, s, n) => ({
            a: e.userinfo.avatarUrl,
            b: t.t(e.userinfo.nickName),
            c: t.t(e.content),
            d: t.t(e.time),
            e: e.color,
            f: e._id
          }))
        };
      }
    ],
    ['__scopeId', 'data-v-79dae658']
  ]);

  uni.createPage(s);
</script>
<style>
  .title .login.data-v-79dae658 {
    text-align: center;
  }

  .title .admin.data-v-79dae658 {
    color: #000;
    background-color: #ffd23c;
    width: 250rpx;
  }

  .title .login .img.data-v-79dae658 {
    margin-top: -350rpx;
    margin-left: 80rpx;
    margin-bottom: 50rpx;
    display: flex;
  }

  .title .login .font.data-v-79dae658 {
    font-size: 45rpx;
    margin-top: 50rpx;
    margin-left: 30rpx;
    color: #1a1a1a;
  }

  .update image.data-v-79dae658 {
    width: 60rpx;
    height: 60rpx;
    margin-top: 52rpx;
  }

  .title .login .img .image image.data-v-79dae658 {
    height: 120rpx;
    width: 120rpx;
    border-radius: 50%;
    border: #fff solid 10rpx;
  }

  .loginButton.data-v-79dae658 {
    margin-top: 50rpx;
  }

  .message.data-v-79dae658 {
    display: flex;
    width: 90%;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 5rpx;
    border-radius: 60rpx;
  }

  .message .input.data-v-79dae658 {
    margin-top: 20rpx;
    margin-left: 27rpx;
    color: #b6b6b6;
    font-size: 30rpx;
    flex: 1;
  }

  .btn.data-v-79dae658 {
    background-color: gold;
    border-radius: 50rpx;
    font-size: 30rpx;
  }

  .showContent.data-v-79dae658 {
    width: 100%rpx;
    height: 100%rpx;
    margin-top: 10rpx;
  }

  .listShow.data-v-79dae658 {
    margin-top: 40rpx;
    border-radius: 60rpx;
    background-color: bisque;
    padding: 40rpx 40rpx 60rpx 30rpx;
  }

  .itemLogo.data-v-79dae658 {
    display: flex;
  }

  .itemLogotext.data-v-79dae658 {
    margin-left: 30rpx;
    line-height: 120rpx;
    font-size: 40rpx;
  }

  .itemLogo image.data-v-79dae658 {
    width: 120rpx;
    height: 120rpx;
    border-radius: 100%;
  }

  .itemText.data-v-79dae658 {
    margin-top: 30rpx;
    margin-left: 30rpx;
    font-size: 35rpx;
  }

  .itemTime.data-v-79dae658 {
    margin-top: 20rpx;
    font-size: 25rpx;
  }
</style>
