## 参数
获取命令帮助 `biliup --help`
```
Upload video to bilibili.

Usage: biliup [OPTIONS] <COMMAND>

Commands:
  login     登录B站并保存登录信息
  renew     手动验证并刷新登录信息
  upload    上传视频
  append    是否要对某稿件追加视频
  show      打印视频详情
  dump-flv  输出flv元数据
  download  下载视频
  server    启动web服务，默认端口19159
  list      列出所有已上传的视频
  help      Print this message or the help of the given subcommand(s)

Options:
  -p, --proxy <PROXY>              配置代理
  -u, --user-cookie <USER_COOKIE>  登录信息文件 [default: cookies.json]
      --rust-log <RUST_LOG>        [default: tower_http=debug,info]
  -h, --help                       Print help
  -V, --version                    Print version
```

### 启动录制服务

```shell
启动web服务，默认端口19159

Usage: biliup server [OPTIONS]

可选参数:
  -b, --bind <BIND>  Specify bind address [default: 0.0.0.0]
  -p, --port <PORT>  Port to use [default: 19159]
      --auth         开启登录密码认证
  -h, --help         Print help
```

