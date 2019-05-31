import {runTests, test} from "https://deno.land/std/testing/mod.ts";
import {assertEquals} from "https://deno.land/std/testing/asserts.ts";
import {genPackageJSON, genTsconfigJSON, genGitIgnore} from "./mod.ts";

test({
    name: "gen package.json",
    fn(): void {
        assertEquals(genPackageJSON(), '{"devDependencies":{"typescript-deno-plugin":"^1.2.4"}}');
    }
});

test({
    name: "gen tsconfig.json",
    fn(): void {
        assertEquals(genTsconfigJSON(), '{"compilerOptions":{"plugins":[{"name":"typescript-deno-plugin"}]}}')
    }
});

test({
    name: "gen .gitignore",
    fn(): void {
        assertEquals(genGitIgnore(), 'node_modules\n' +
            'tsconfig.json\n' +
            'package.json\n' +
            '*.lock')
    }
});

runTests();