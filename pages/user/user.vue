<template>
    <view>
        <view class="title data-v-366b0912">
            <view v-if="a" class="logoShow data-v-366b0912">
                <view class="leftImg data-v-366b0912"><image class="data-v-366b0912" :src="b"></image></view>
                <view class="rightName data-v-366b0912">{{ c }}</view>
                <view class="outImg data-v-366b0912" @tap="d"><image class="data-v-366b0912" src="/static/static/index-icon/delete.png" alt=""></image></view>
            </view>
            <view v-if="e" class="loginButton data-v-366b0912"><button class="admin data-v-366b0912" type="primary" @tap="f">登录</button></view>
        </view>
        <view class="bottom data-v-366b0912">
            <view class="bottom-content data-v-366b0912">
                <view class="me-about data-v-366b0912">
                    <text class="data-v-366b0912">关于</text>
                    <image class="data-v-366b0912" src="/static/static/img/next.png"></image>
                </view>
                <navigator class="data-v-366b0912">
                    <view class="me-about data-v-366b0912">
                        <text class="data-v-366b0912">分享</text>
                        <image class="data-v-366b0912" src="/static/static/img/next.png"></image>
                    </view>
                </navigator>
                <view class="me-about data-v-366b0912">
                    <button open-type="feedback" class="feedback data-v-366b0912">反馈与建议</button>
                    <image class="data-v-366b0912" src="/static/static/img/next.png"></image>
                </view>
                <navigator class="data-v-366b0912">
                    <view class="me-about data-v-366b0912">
                        <text class="data-v-366b0912">帮助</text>
                        <image class="data-v-366b0912" src="/static/static/img/next.png"></image>
                    </view>
                </navigator>
            </view>
        </view>
    </view>
</template>

<script>
'use strict';

var e = require('../../common/vendor.js');

const s = {
    data: () => ({
        userinfo: ''
    }),

    onLoad() {
        let that = this;
        uni.getStorage({
            key: 'userinfo',
            success: (s) => {
                if (s.data) {
                    that.userinfo = JSON.parse(s.data);
                }
            }
        });
    },

    methods: {
        getUser(e) {
            uni.getUserProfile({
                desc: '用于登录小程序',
                success: (e) => {
                    console.log(e);
                    uni.setStorage({
                        key: 'userinfo',
                        data: JSON.stringify(e.userInfo)
                    });
                    uni.reLaunch({
                        url: '/pages/user/user'
                    });
                }
            });
        },

        outUser() {
            this.userinfo = '';
            uni.clearStorage();
        }
    }
};

var r = e._export_sfc(s, [
    [
        'render',
        function (s, r, o, t, a, i) {
            return e.e(
                {
                    a: this.userinfo
                },
                this.userinfo
                    ? {
                          b: a.userinfo.avatarUrl,
                          c: e.t(a.userinfo.nickName),
                          d: e.o((e) => i.outUser())
                      }
                    : {},
                {
                    e: !this.userinfo
                },
                this.userinfo
                    ? {}
                    : {
                          f: e.o((e) => i.getUser())
                      }
            );
        }
    ],
    ['__scopeId', 'data-v-366b0912']
]);

uni.createPage(r);
</script>
<style>
.title.data-v-366b0912 {
    background-color: #ffd23c;
}
.outImg image.data-v-366b0912 {
    margin-top: 70rpx;
    margin-right: 30rpx;
    width: 70rpx;
    height: 70rpx;
}
.title .logoShow.data-v-366b0912 {
    width: 100%rpx;
    display: flex;
    padding: 20rpx;
}
.leftImg image.data-v-366b0912 {
    width: 180rpx;
    height: 180rpx;
    border-radius: 100%;
}
.rightName.data-v-366b0912 {
    height: 100rpx;
    line-height: 100rpx;
    flex: 1;
    padding: 30rpx;
    font-size: 40rpx;
}
.title .login.data-v-366b0912 {
    text-align: center;
}
.title .admin.data-v-366b0912 {
    color: #000;
    background-color: #ffd23c;
    width: 250rpx;
}
.loginButton.data-v-366b0912 {
    background-color: #ffd23c;
    margin-top: 30rpx;
}
.bottom-content.data-v-366b0912 {
    width: 95%;
    border-radius: 5%;
    margin: auto;
    background-color: #fdfdfd;
    padding-bottom: 35rpx;
    box-shadow: 5rpx 5rpx 10rpx 5rpx #e1e1e1;
}
.me-about.data-v-366b0912 {
    display: flex;
    margin: 20rpx 40rpx;
    padding: 30rpx 0rpx;
    justify-content: space-between;
    border-bottom: 2rpx solid rgb(238, 238, 238);
}
.me-about image.data-v-366b0912 {
    align-self: center;
    width: 35rpx;
    height: 35rpx;
}
.feedback.data-v-366b0912 {
    margin: 0;
    padding: 0;
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    color: #000;
    font-size: 32rpx;
    font-weight: 400;
    flex-grow: 1;
    line-height: 35rpx;
}
.feedback.data-v-366b0912:after {
    border: none;
}
</style>
