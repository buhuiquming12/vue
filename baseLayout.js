
const baseLayout = {
    template: `
        <div style="display: flex; flex-direction: column; min-height: 100vh;">
            <div style="border: 1px solid black; height: 50px; width: 100%;">
                <slot name="up"></slot> 
            </div>
            <div style="display: flex; flex: 1; border: 1px solid black;">
                <div style="border: 1px solid black; width: 20%; padding: 10px;">
                    <slot name="down-left"></slot>
                </div>
                <div style="border: 1px solid black; width: 60%; padding: 10px;">
                    <slot name="down-main"></slot>
                </div>
                <div style="border: 1px solid black; width: 20%; padding: 10px;">
                    <slot name="down-right"></slot>
                </div>
            </div>
        </div>
    `
};