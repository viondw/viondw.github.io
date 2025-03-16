```
PS D:\\biliup> biliup -h
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