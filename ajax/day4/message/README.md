## 留言板
使用 php mysql ajax 技术
无刷新留言

页面布局
提交留言
获取留言内容
展示到页面

## 设计数据库
    id
    user_id   用户的id
    username  用户的名字
    content   留言内容
    status    留言状态  10:正常显示 20:删除
    created_time  创建时间
    update_time   更新时间

接口 api
    <!-- 约定好使用post 还是get -->
    约定使用post
    获取前端提交过来的数据
    然后插入到数据库

2017年5月15日09:54:38
## 把session里面用户名和用户id存到留言板的表里

$_SESSION['id'] = $user['id'];
$_SESSION['name'] = $user['name'];
$_SESSION['status'] = $user['status'];
