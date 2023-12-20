
const el = document.getElementById('btnSign')

// 透過 callback 函數對 click 事件新增事件處理器
el.addEventListener('click', function () {
    // 當元素被點選後出現 Loading 遮罩
    toggleLoading(true)

    // 一秒後關閉遮罩
    setTimeout(() => {
        toggleLoading(false)
    }, 2000)
})

function toggleLoading(show) {
    document.querySelector('.loading').style.display = show ? 'block' : 'none'
}


// 透過提供回呼函數的方式對「click」事件新增處理器。
// 當元素被點選後會出現「Element clicked!」的彈出訊息。