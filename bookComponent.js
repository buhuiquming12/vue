const bookComponent = {
    props: ['bookInfo','imageStyle','bookStyle'],
    components: {
        addMinusComponent
    },
    template: `
    <div :class="bookStyle">
      <img :src="bookInfo.imagePath" :class="imageStyle"><br>
      书名：{{ bookInfo.title }}<br>
      作者：{{ bookInfo.author }}<br>
      单价：{{ bookInfo.price }}
      <add-minus-component v-model="bookInfo.count" style="float:right"></add-minus-component>
    </div>
  `
}