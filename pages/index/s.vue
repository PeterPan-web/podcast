<template>
  <view>
    <view class="search">
      <view class="img" @tap="search">
        <image src="/static/static/index-icon/search.png"></image>
      </view>
      <view class="input"><input type="text" placeholder="别输入了还没开发呢" /></view>
    </view>
    <view class="announcement-title">
      <view class="img">
        <image src="/static/static/index-icon/announcement.png"></image>
      </view>
      <view class="font">最新公告</view>
    </view>
    <view class="announcement-center">
      <view v-for="(item, index) in b" :key="item.b">
        <view class="list">
          <view class="li"></view>
          <view class="font">{{ item.a }}</view>
        </view>
      </view>
    </view>
    <view class="anchortext">本台头牌</view>
    <view class="anchorShow">
      <view class="figure" v-for="(item, index) in c" :key="item.c">
        <view class="head">
          <image :src="item.a"></image>
        </view>

        <view class="font">
          <text>{{ item.b }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  var t = require('../../common/vendor.js');

  const a = {
    data: () => ({
      bulletin: '',
      topCard: '',
      bannerList: [{
          id: 1,
          url: '/static/static/common/1.jpg'
        },
        {
          id: 2,
          url: '/static/static/common/2.jpg'
        },
        {
          id: 3,
          url: '/static/static/common/3.jpg'
        },
        {
          id: 4,
          url: '/static/static/common/4.jpg'
        },
        {
          id: 5,
          url: '/static/static/common/5.png'
        }
      ]
    }),

    onLoad() {
      this.getTopCard();
      this.getBulletin();
    },

    methods: {
      getBulletin(a) {
        t.rn
          .callFunction({
            name: 'bulletin',
            data: {
              api: 'getBulletin'
            }
          })
          .then((t) => {
            this.bulletin = t.result.data;
          });
      },

      getTopCard(a) {
        t.rn
          .callFunction({
            name: 'TopCard',
            data: {
              api: 'getTopCard'
            }
          })
          .then((t) => {
            this.topCard = t.result.data;
          });
      }
    }
  };

  var n = t._export_sfc(a, [
    [
      'render',
      function(a, n, e, i, r, o) {
        return {
          a: t.f(this.bannerList, (t, a, n) => ({
            a: t.url,
            b: a
          })),
          b: t.f(this.bulletin, (a, n, e) => ({
            a: t.t(a.content),
            b: n
          })),
          c: t.f(r.topCard, (a, n, e) => ({
            a: a.avatar,
            b: t.t(a.name),
            c: n
          }))
        };
      }
    ]
  ]);

  uni.createPage(n);
</script>
<style>
  .headBg {
    margin-top: -10rpx;
    background-color: #ffd23c;
    height: 400rpx;
    border-bottom-right-radius: 80rpx;
    border-bottom-left-radius: 80rpx;
  }

  .headBg .content {
    background-color: #fff;
    width: 90%;
    height: 250rpx;
    margin: 50rpx auto;
    border-radius: 60rpx;
  }

  .title {
    width: 100%;
    height: 300rpx;
  }

  .title .swip {
    box-shadow: 4rpx 4rpx 8rpx rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    height: 280rpx;
    width: 650rpx;
    margin-top: 10rpx;
    border-radius: 20rpx;
    overflow: hidden;
  }

  .title .swip image {
    width: 100%;
  }

  .search {
    display: flex;
    width: 90%;
    background-color: #fff;
    height: 80rpx;
    margin: 0 auto;
    margin-top: -40rpx;
    border-radius: 60rpx;
  }

  .search .img {
    margin-top: 17rpx;
    margin-left: 27rpx;
  }

  .search .img image {
    width: 50rpx;
    height: 50rpx;
  }

  .search .input {
    margin-top: 20rpx;
    margin-left: 27rpx;
    color: #b6b6b6;
    font-size: 30rpx;
  }

  .announcement-title {
    display: flex;
  }

  .announcement-title .font {
    margin-top: 66rpx;
    margin-left: 20rpx;
    font-size: 35rpx;
    font-weight: 700;
  }

  .announcement-title .img {
    margin-left: 70rpx;
    margin-top: 50rpx;
  }

  .announcement-title .img image {
    width: 80rpx;
    height: 80rpx;
  }

  .announcement-center {
    margin: 0 auto;
    width: 80%;
    background-color: #fff;
    padding: 20rpx;
    border-radius: 50rpx;
    box-shadow: 5px 5px #b6b6b6;
  }

  .announcement-center .list {
    display: flex;
    margin: 30rpx;
  }

  .announcement-center .list .li {
    background-color: #ffd23c;
    border-radius: 50%;
    width: 30rpx;
    height: 30rpx;
    margin-top: 10rpx;
  }

  .announcement-center .list .font {
    margin-top: 5rpx;
    margin-left: 25rpx;
    width: 480rpx;
  }

  .anchortext {
    margin-top: 66rpx;
    margin-left: 20rpx;
    font-size: 35rpx;
    font-weight: 700;
  }

  .anchorShow {
    display: flex;
    margin: 40rpx 20rpx;
    border-radius: 50rpx;
    box-shadow: 5px 5px #b6b6b6;
    width: 100%rpx;
    flex-flow: row wrap;
  }

  .figure {
    width: 200rpx;
    padding-bottom: 2orpx;
    margin: 10rpx;
  }

  .figure image {
    width: 150rpx;
    height: 150rpx;
    margin: 30rpx;
    border-radius: 100%;
  }

  .font {
    text-align: center;
  }

  .starNum {
    text-align: center;
    display: flex;
    margin-left: 55rpx;
  }

  .starText {
    margin-top: 33rpx;
  }
</style>
