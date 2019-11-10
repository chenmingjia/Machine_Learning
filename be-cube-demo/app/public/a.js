
var content = React.createElement( 'button', { onClick: () => console.log(123) },'Like'); // 第三个参数可以分开也可以写成一个数组
window.CC = content

class El6 extends React.Component {
    render() {
        return <div>
            <h1>这是第6个标签组件</h1>
            <span>以组件方式定义</span>
        </div>
    }
}

window.El4 = El6

console.log('OK', window.CC)