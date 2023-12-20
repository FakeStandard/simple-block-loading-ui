
// 取得 Sign in 按鈕元素
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

// 顯示 tooltip
const tooltip = bootstrap.Tooltip.getOrCreateInstance(el) // Returns a Bootstrap tooltip instance
tooltip.show()