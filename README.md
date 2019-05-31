# Deno-Dev-Tools

deno 开发者工具。

1. 初始化命令

编辑你的`~/.bash_profile`

```bash
alias init_deno_project="deno run --allow-run --allow-write https://raw.githubusercontent.com/youth95/deno-dev-tools/master/init_project.ts"
```

然后
```bash
mkdir my_project
cd my_project
init_deno_project
```

init_deno_project 将会自动生成一些内容来辅助你的IDE。