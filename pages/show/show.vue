<template>
    <view>
        <view class="middlebox">
            <view class="release">
                <view class="list">
                    <view class="img" @tap="navigator"><image src="/static/static/index-icon/release.png"></image></view>
                    <navigator url="../release/release"><view class="button">+查询</view></navigator>
                </view>
                <view class="font">查询主播</view>
            </view>
            <view class="release">
                <view class="list">
                    <view class="img" @tap="navigator"><image src="/static/static/index-icon/search.png"></image></view>
                    <navigator url="../release/release"><view class="button">+查询</view></navigator>
                </view>
                <view class="font">查询节目</view>
            </view>
        </view>
        <view class="ts">tps:听说点击小飞机和放大镜，会进入神秘世界...</view>
    </view>
</template>

<script>
'use strict';

const e = {};

var r = require('../../common/vendor.js')._export_sfc(e, [
    [
        'render',
        function (e, r) {
            return {};
        }
    ]
]);

uni.createPage(r);
</script>
<style>
.middlebox {
    margin-top: 80rpx;
    display: flex;
    justify-content: space-evenly;
}
.middlebox .release {
    width: 300rpx;
    height: 260rpx;
    background-color: #fff;
    border-radius: 30rpx;
}
.middlebox .img image {
    width: 80rpx;
    height: 80rpx;
    margin: 30rpx;
}
.middlebox .font {
    margin-left: 30rpx;
    margin-top: 20rpx;
}
.middlebox .list {
    display: flex;
}
.middlebox .list .button {
    background-color: #ffd23c;
    width: 140rpx;
    height: 70rpx;
    line-height: 70rpx;
    text-align: center;
    border-radius: 30rpx;
    margin-top: 25rpx;
}
.ts {
    font-size: 24rpx;
    color: #afafaf;
    margin-left: 55rpx;
    margin-top: 30rpx;
}
</style>
