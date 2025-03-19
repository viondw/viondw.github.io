## 参数

```
ps biliup -h
usage: biliup [-h] [--version] [-H HOST] [-P PORT] [--no-http] [--static-dir STATIC_DIR] [--password PASSWORD] [-v]
              [--config CONFIG] [--no-access-log]
              {start,stop,restart} ...

Stream download and upload, not only for bilibili.

positional arguments:
  {start,stop,restart}  Windows does not support this sub-command.
    start               Run as a daemon process.
    stop                Stop daemon according to "watch_process.pid".

optional arguments:
  -h, --help            show this help message and exit
  --version             show program's version number and exit
  -H HOST               web api host [default: 0.0.0.0]
  -P PORT               web api port [default: 19159]
  --no-http             disable web api
  --static-dir STATIC_DIR
                        web static files directory for custom ui
  --password PASSWORD   web ui password ,default username is biliup
  -v, --verbose         Increase output verbosity
  --config CONFIG       Location of the configuration file (default "./config.yaml")
  --no-access-log       disable web access log
```

### 子命令
- 注：windows无需使用`start`

`start`用于linux(如debian,ubuntu)后台运行，会在当前目录生成一个名为`watch_process.pid`的进程守护文件。如`biliup start`<br />
`stop`用于用于linux(如debian,ubuntu)停止运行，如`biliup stop`<br />
`restart`用于用于linux(如debian,ubuntu)重启,如`biliup restart`

### 可选参数
- `-h, --help`显示帮助信息，如`biliup -h`
- `--version`显示 biliup 的版本号，如`biliup --version`
- `-H HOST`设置主机ip地址，一般用于多ip/网卡使用，多数情况下用不到，如`biliup -H 127.0.0.1`
- `-P PORT`设置项目端口号，默认`19159`，用于项目多开，如`biliup -P 8087`
- `--no-http`禁止webui,但程序仍正常运行，如`biliup --no-http`
- `--static-dir STATIC_DIR`为自定义webui做准备，暂不开放。
- `--password PASSWORD`webui密码，用户名`biliup`如`biliup --password 114514`
- `-v, --verbose`启动调试，用于排查报错等内容。如`biliup -v`
- `--config CONFIG`指定配置文件运行，新版已集成将旧版配置文件转换功能，请将配置文件放置在文件夹内`biliup start`启动转换，如果你执意要用，请每次启动的时候都要用`biliup --config /path/to/config.yaml`来启动。
- `--no-access-log`禁用日志，一般用不上，如`biliup --no-access-log`
