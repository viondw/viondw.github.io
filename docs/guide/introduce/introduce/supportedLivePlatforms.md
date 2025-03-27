### 直播平台信息

| 直播平台     | 支持类型       | 链接示例                                                                                     | 特殊注释                                                                 |
|--------------|----------------|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| 虎牙         | 直播           | [`https://www.huya.com/123456`](https://www.huya.com/123456)                                 | 可录制弹幕                                                               |
| 斗鱼         | 直播           | [`https://www.douyu.com/123456`](https://www.douyu.com/123456)                               | 可录制弹幕                                                               |
| YY语音       | 直播           | [`https://www.yy.com/123456`](https://www.yy.com/123456)                                     |                                                                          |
| 哔哩哔哩     | 直播           | [`https://live.bilibili.com/123456`](https://live.bilibili.com/123456)                       | 特殊分区hls流需要单独配置/可录制弹幕                                     |
| acfun        | 直播           | [`https://live.acfun.cn/live/123456`](https://live.acfun.cn/live/123456)                     |                                                                          |
| afreecaTV    | 直播           | [`https://play.afreecatv.com/biliup123/123456`](https://play.afreecatv.com/biliup123/123456) | 录制部分直播时需要登陆                                                   |
| bigo         | 直播           | [`https://www.bigo.tv/123456`](https://www.bigo.tv/123456)                                   |                                                                          |
| 抖音         | 直播           | 直播：[`https://live.douyin.com/123456`](https://live.douyin.com/123456)<br>直播：[`https://live.douyin.com/tiktok`](https://live.douyin.com/tiktok)<br>主页：[`https://www.douyin.com/user/456789`](https://www.douyin.com/user/456789) | 使用主页链接或被风控需配置cookies                                        |
| 快手         | 直播           | [`https://live.kuaishou.com/u/biliup123`](https://live.kuaishou.com/u/biliup123)             | 监控开播需使用中国大陆IPv4家宽，且24小时内单直播间最多120次请求          |
| 网易CC       | 直播           | [`https://cc.163.com/123456`](https://cc.163.com/123456)                                     |                                                                          |
| flextv       | 直播           | [`https://www.flextv.co.kr/channels/123456/live`](https://www.flextv.co.kr/channels/123456/live) |                                                                          |
| 映客         | 直播           | [`https://www.inke.cn/liveroom/index.html?uid=123456`](https://www.inke.cn/liveroom/index.html?uid=123456) |                                                                          |
| 猫耳FM       | 直播           | [`https://fm.missevan.com/live/123456`](https://fm.missevan.com/live/123456)                 | 猫耳为纯音频流                                                           |
| nico         | 直播           | [`https://live.nicovideo.jp/watch/lv123456`](https://live.nicovideo.jp/watch/lv123456)       | 可配置登录信息                                                           |
| twitch       | 直播<br>回放   | 直播：[`https://www.twitch.tv/biliup123`](https://www.twitch.tv/biliup123)<br>回放：[`https://www.twitch.tv/biliup123/videos?filter=archives&sort=time`](https://www.twitch.tv/biliup123/videos?filter=archives&sort=time) | 可配置登录信息/尽量录制回放/可录制弹幕                                   |
| youtube      | 直播<br>回放   | 直播：[`https://www.youtube.com/watch?v=biliup123`](https://www.youtube.com/watch?v=biliup123)<br>直播：[`https://www.youtube.com/@biliup123/live`](https://www.youtube.com/@biliup123/live)<br>回放：[`https://www.youtube.com/@biliup123/videos`](https://www.youtube.com/@biliup123/videos) | 可配置登录信息/尽量录制回放/可配置回放下载日期                           |
| 克拉克拉      |直播           | 直播: [`http://www.hongdoufm.com/room/123456`](http://www.hongdoufm.com/room/123456)<br>直播：[`https://live.kilakila.cn/PcLive/index/detail?id=123456`](https://live.kilakila.cn/PcLive/index/detail?id=123456) | hls/flv

* 理论上streamlink与yt-dlp支持的都可以下载，但不保证可以正常使用，详见:[streamlink支持列表](https://streamlink.github.io/plugins.html)，[yt-dlp支持列表](https://github.com/yt-dlp/yt-dlp/tree/master/yt_dlp/extractor).