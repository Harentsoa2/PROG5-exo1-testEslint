import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		rules: {
			"no-unused-vars": "error",
			"no-undef": "error",
            "no-console": "error",
            "camelcase": ["error", { "properties": "always" }],
            "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],
            "no-restricted-syntax": [
                "error",
                {
                    selector: "ClassDeclaration > Identifier[name=/^[a-z]/]",
                    message: "class must be write in PascalCase"
                },
                {
                    selector: "VariableDeclarator > Identifier[name=/^[A-Z]/]",
                    message: "variable must be write in camelCase"
                },
                {
                    selector: "MethodDefinition > Identifier[name=/^[A-Z]/]",
                    message: "methode must be camelCase"
                }
            ]
		},
	},
]);
