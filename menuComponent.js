
const menuComponent = {
    props: ["menus","modelValue"],
    emits: ["update:modelValue"],
    template: `
    <ul v-bind="$attrs">
        <li v-for="menu in menus">
            <font style="cursor:pointer" @click="folder(menu)" v-if="menu.show">-</font>
            <font style="cursor:pointer" @click="folder(menu)" v-if="!menu.show">+</font>
            <a href="#" @click.prevent="$emit('update:modelValue', menu.name)">{{menu.name}}</a>
            <ul v-show="menu.show">
                <li v-for="submenu in menu.subMenus">
                    <a href="#" @click.prevent="$emit('update:modelValue', submenu.name)">{{submenu.name}}</a>
                </li>
            </ul>
        </li>
    </ul>`,
    inheritAttrs: false,
    methods: {
        folder(menu){
            menu.show = !menu.show;
        }
    }
}