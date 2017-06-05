// 创建数据库
var db = openDatabase('message', '1.0', 'message content', 5 * 1024 * 1024);

// 创建数据表
db.transaction(function(tx) {
    tx.executeSql("create table if not exists message (id integer primary key asc, content text, created_time text)")
})

// 加载留言里面的内容
loadContent();
// 获取表单
var msgContent = document.getElementById('note-form');

// 获取表单的内容
var content = msgContent.elements['note-content'];

// 当键盘抬起的时候自动存储表单的内容
content.addEventListener('keyup', function() {
    localStorage.setItem('content', content.value);
})

// 下次刷新的时候，把本地存储的内容直接给表单赋值
content.value = localStorage.getItem('content');

// 提交留言
function submitContent(event) {
    event.preventDefault();
    var status = msgContent.elements['submit-btn'].value;
    // 获取表单的内容，插入到数据库里面
    var contentValue = content.value;

    // 获取隐藏域
    var msgId = msgContent.elements['note-id'].value;

    if (status === 'submit') {
        db.transaction(function(tx) {
            tx.executeSql("insert into message (content, created_time) values (?, DAtetime('now','localtime'))", [contentValue], onSuccess, onError);
        })
    } else {
        db.transaction(function(tx) {
            tx.executeSql("update message set content = ? where id = ?", [contentValue, msgId], onSuccess, onError);
        })
    }

}


function onSuccess(tx, res) {
    console.log('成功');
    loadContent()
}

function onError(tx, e) {
    console.log('失败' + e.message);
}

// 提交
var submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', submitContent);


function deleteContent(id) {
    db.transaction(function(tx) {
        tx.executeSql('delete from message where id = ?', [id], onSuccess, onError)
    })
}

function editContent(id) {
    db.transaction(function(tx) {
        tx.executeSql('select * from message where id = ?', [id], function(tx, res) {
            msgContent.elements['note-content'].value = res.rows.item(0).content;
            msgContent.elements['submit-btn'].value = 'update';
            msgContent.elements['submit-btn'].innerHTML = '更新';
            msgContent.elements['note-id'].value = id;
        })
    })
}

// 显示留言里面的内容

function displayContent(tx, res) {


    var contentContainer = document.getElementById('note-list');
    contentContainer.innerHTML = '';
    for (var i = 0; i < res.rows.length; i++) {
        var contentEntry = res.rows.item(i);
        contentContainer.innerHTML += `
            <li class="list-group-item"> 
            ${contentEntry.content}
            <div class="btn-group btn-group-xs pull-right">
                <button class="btn btn-default"   onclick="deleteContent(${contentEntry.id})" > 删除 </button>
                <button class="btn btn-default"   onclick="editContent(${contentEntry.id})" > 编辑 </button>
                <small class="pull-right note-date">
                </small>
            </div>
            </li>
        `;
    }
}

function loadContent() {
    db.transaction(function(tx) {
        tx.executeSql("select * from message order by id desc", [], displayContent, onError);
    })
}