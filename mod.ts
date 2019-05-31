const {writeFile, run, cwd} = Deno;

export function genPackageJSON() {
    return JSON.stringify({"devDependencies": {"typescript-deno-plugin": "^1.2.4"}});
}

export function genTsconfigJSON() {
    return JSON.stringify({
        "compilerOptions": {
            "plugins": [
                {
                    "name": "typescript-deno-plugin"
                }
            ]
        }
    })
}

export function genGitIgnore() {
    return 'node_modules\n' +
        'tsconfig.json\n' +
        'package.json\n' +
        '*.lock';
}

export function genFiles(contents: ([string, () => string])[]) {
    return Promise.all(contents.map((item: [string, () => string]) => writeFile(item[0], new TextEncoder().encode(item[1]()))))
}

export async function initDenoProject() {
    const curPath = cwd();
    await genFiles([
        [`${curPath}/.gitignore`, genGitIgnore],
        [`${curPath}/package.json`, genPackageJSON],
        [`${curPath}tsconfig.json`, genTsconfigJSON],
    ]);
    await run({
        args: ["npm", "install"],
    }).status();
}


