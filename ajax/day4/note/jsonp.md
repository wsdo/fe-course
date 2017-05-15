JSONP(JSON with Padding)是JSON的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题。由于同源策略，一般来说位于 server1.example.com 的网页无法与不是 server1.example.com的服务器沟通，而 HTML 的<script> 元素是一个例外。利用 <script> 元素的这个开放策略，网页可以得到从其他来源动态产生的 JSON 资料，而这种使用模式就是所谓的 JSONP。用 JSONP 抓到的资料并不是 JSON，而是任意的JavaScript，用 JavaScript 直译器执行而不是用 JSON 解析器解析。

无论ajax怎么请求一个不是同一个域的时候，都会产生跨域行为，然而在html里面
使用 script 的src 引入的属性不存在跨域行为

自己模拟的
info({name:'stark',age:18});

http://yx.xianjian.com/p/api.php?method=wf&api_key=nimakdkeiLdkfen2lidkdlDLLEKd&page=1&per_page=10&tag=&type=5&order=2&_ksTS=1494829656978_32&jsoncallback=jsonp33


info({"stat":"ok","photos":{"page":1, "pages":37, "perpage":10, "total":"0", "photo":[{"id":"239", "owner":"", "subject":"姚仙监制 新仙剑梦圆CG", "url":"newpalCG.FLV","tags":"新仙剑,视频,人物,","like":"1099","comment":"38","type":"3","height":"230"},{"id":"154", "owner":"", "subject":"赵灵儿（萝莉版）高清壁纸", "url":"13536663407715.jpg","tags":"新仙剑,赵灵儿,壁纸,美图,","like":"1410","comment":"44","type":"1","height":"241"},{"id":"76", "owner":"", "subject":"即墨花灯节", "url":"13535657946500.jpg","tags":"仙剑奇侠传四,同人,云天河,柳梦璃,韩菱纱,慕容紫英,","like":"1257","comment":"47","type":"1","height":"277"},{"id":"210", "owner":"", "subject":"新仙剑人物技能展示", "url":"20121124010a.FLV","tags":"新仙剑,人物,技能,视频,","like":"1075","comment":"50","type":"3","height":"230"},{"id":"31", "owner":"", "subject":"云天河、韩菱纱携手前行", "url":"13535521044645.jpg","tags":"云天河,韩菱纱,仙剑奇侠传四,同人,","like":"894","comment":"17","type":"1","height":"300"},{"id":"191", "owner":"", "subject":"千年等候只为你", "url":"13537761965160.jpg","tags":"龙葵,新仙剑,人物,壁纸,美图,","like":"861","comment":"32","type":"1","height":"237"},{"id":"119", "owner":"", "subject":"遥灵党的福音 灵儿美到哭", "url":"13535721621699.jpg","tags":"新仙剑,壁纸,高清,遥灵,李逍遥,赵灵儿,虐心,","like":"719","comment":"9","type":"1","height":"144"},{"id":"244", "owner":"", "subject":"无所谓好与不好，人生如梦", "url":"13539298117442.jpg","tags":"慕容紫英,仙剑奇侠传四,人物,司徒御雪,","like":"661","comment":"20","type":"1","height":"249"},{"id":"116", "owner":"", "subject":"仙剑四主角全家福", "url":"13535717546618.jpg","tags":"韩菱纱,云天河,柳梦璃,慕容紫英,","like":"610","comment":"25","type":"1","height":"595"},{"id":"97", "owner":"", "subject":"玩家同人作品：灵儿", "url":"13535697168295.jpg","tags":"赵灵儿,仙剑奇侠传,","like":"540","comment":"2","type":"1","height":"270"},{"id":"333", "owner":"", "subject":"那些年我们一起翘盼的烟火", "url":"13543792192097.jpg","tags":"柳梦璃,韩菱纱,慕容紫英,云天河,仙剑奇侠传四,人物,美图,哈比krismens,","like":"518","comment":"10","type":"1","height":"156"}]}})



info(对象)
对象不重要，重要的是外面的方法

```
/demo/api/jsonpcallback.php?jsoncallback=starks
$callbackname = $_GET['jsoncallback'];
$arr = array(
  'name' => "srark",
  "age" => 18,
  "msg" => "现在我们学习jsonp原理"
);
echo $callbackname."(".json_encode($arr).")";
```
