const goodCart = {
    props: ['books'],
    computed: {
        totalBooks() {
            return this.books.filter(book => book.count > 0);
        },
        totalPrice() {
            return this.totalBooks.reduce((sum, book) => sum + book.price * book.count, 0);
        }
    },
    template: `
        <div>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background-color: #f5f5f5;">
                        <th style="padding: 10px; border: 1px solid #ddd;">序号</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">商品名称</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">单价</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">数量</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">金额</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in totalBooks" :key="index" :style="index % 2 ? 'background-color: #f9f9f9;' : ''">
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">{{index + 1}}</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">{{book.title}}</td>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">{{book.price}}</td>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
                            <add-minus-component v-model="book.count"></add-minus-component>
                        </td>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">{{(book.price * book.count).toFixed(1)}}</td>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
                            <button style="padding: 2px 8px;">删除</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="6" style="padding: 10px; border: 1px solid #ddd; text-align: right;">
                            总计：￥{{totalPrice.toFixed(1)}}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    `,
    components: {
        addMinusComponent
    }
}