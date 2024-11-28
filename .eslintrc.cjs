require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint-config-gev/js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["eslint-config-gev/next"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        ecmaVersion: 12,
        sourceType: "module",
      },
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
};
