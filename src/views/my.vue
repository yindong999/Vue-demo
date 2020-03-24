<template>
  <div>
    <div>我的页面</div>
    <div>日期：{{time}}</div>
    <div>时间戳：{{time_pointer}}</div>
    <router-link to="namedView">命名视图组合一</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link :to="{path:'/my/namedView2'}">命名视图组合二</router-link>
    <br />下面有视图三个，有一个是默认命名的，两个是重新命名的====》配置好命名视图，路由中配置好组件，可以让不同的组件显示在不同的路由中；
    <!-- 默认命名视图 -->
    <router-view class="view one"></router-view>
    <!-- 重新命名的视图a -->
    <router-view class="view two" name="a"></router-view>
    <!-- 重新命名的视图b -->
    <router-view class="view three" name="b"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "",
      time_pointer: ""
    };
  },
  created() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    //  getDay()返回表示星期的某一天的数字。返回值是 0（周日） 到 6（周六） 之间的一个整数。
    const day = date.getDay();
    var h = date.getHours();
    h = h < 10 ? "0" + h : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    const arr_week = new Array(
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六"
    );
    const week = arr_week[day];
    this.time =
      y +
      "年" +
      m +
      "月" +
      d +
      "日 " +
      "第" +
      day +
      "天" +
      " " +
      week +
      " " +
      h +
      ":" +
      minute +
      ":" +
      second;
    //  通过时间戳获得年月日时分秒
    var date2 = new Date(new Date().getTime());
    this.time_pointer =
      date2.getFullYear() + "-" + date2.getMonth() + "-" + date2.getDate();
  }
};
</script>
<style lang='scss' scoped>
.one {width: 100%;height: 100px;border: 1px solid red;background:skyblue;}
.two {width: 20%;height: 300px;float: left;border: 1px solid blue;background:salmon;}
.three {width: 80%;height: 300px;float: right;border: 1px solid orange;background:chartreuse;}
</style>