const loginComponent = {
    props:['label'],
    emits:['click'],
    data() {
        return {
            account:'*********@qq.com',
            password:''
        }
    },
    template: `
        <div style="margin: 10px">
            <span style="display:inline-block;width:50px">{{label}}:</span><input type="text" v-model="account"><br>
            <span style="display:inline-block;width:50px">密码:</span> <input type="password"v-model="password"><br>
            <span style="float:right"><button @click="$emit('click')">登录</button><a href="#">我要注册</a></span>
        </div>
    `
}