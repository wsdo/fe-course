self.onmessage = function(ev) {
    // 处理一些 大量的运算
    setTimeout(function() {
        var text = '';
        for (var i = 0; i < 100; i++) {
            text += ev.data + '--' + i + '--' + 'stark'
        }
        self.postMessage(text);
    }, 5000)
}