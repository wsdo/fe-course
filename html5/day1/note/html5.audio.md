Audio 对象方法

addTextTrack()	向音频添加新的文本轨道。
canPlayType()	检查浏览器是否能够播放指定的音频类型。
fastSeek()	在音频播放器中指定播放时间。
getStartDate()	返回新的 Date 对象，表示当前时间线偏移量。
load()	重新加载音频元素。
play()	开始播放音频。
pause()	暂停当前播放的音频。

<!--音频的dom属性-->
audioTracks	返回表示可用音频轨道的 AudioTrackList 对象。
autoplay	设置或返回是否在就绪（加载完成）后随即播放音频。
buffered	返回表示音频已缓冲部分的 TimeRanges 对象。
controller	返回表示音频当前媒体控制器的 MediaController 对象。
controls	设置或返回音频是否应该显示控件（比如播放/暂停等）。
crossOrigin	设置或返回音频的 CORS 设置。
currentSrc	返回当前音频的 URL。
currentTime	设置或返回音频中的当前播放位置（以秒计）。
defaultMuted	设置或返回音频默认是否静音。
defaultPlaybackRate	设置或返回音频的默认播放速度。
duration	返回音频的长度（以秒计）。
ended	返回音频的播放是否已结束。
error	返回表示音频错误状态的 MediaError 对象。
loop	设置或返回音频是否应在结束时再次播放。
mediaGroup	设置或返回音频所属媒介组合的名称。
muted	设置或返回是否关闭声音。
networkState	返回音频的当前网络状态。
paused	设置或返回音频是否暂停。
playbackRate	设置或返回音频播放的速度。
played	返回表示音频已播放部分的 TimeRanges 对象。
preload	设置或返回音频的 preload 属性的值。
readyState	返回音频当前的就绪状态。
seekable	返回表示音频可寻址部分的 TimeRanges 对象。
seeking	返回用户当前是否正在音频中进行查找。
src	设置或返回音频的 src 属性的值。
textTracks	返回表示可用文本轨道的 TextTrackList 对象。
volume	设置或返回音频的音量。