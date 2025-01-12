1. # Create new project by Vite

```bash
npm create vite@latest holidaze-noroff --template react-ts
```

2. # Go to holidaze directory

```bash
cd holidaze-noroff
```

3. # Install dependencies

```bash
npm install
```

4. # Install SASS

```bash
npm install sass
```

5. # Add Bootstrap & React Bootstrap

```bash
npm install bootstrap react-bootstrap
```

6. # Add Bootstrap CSS to main.tsx

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

7. # Install plugin ESLint for TSDoc support

```bash
npm install eslint-plugin-tsdoc --save-dev
```

8. # Update eslint.config.js

```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import tsdoc from "eslint-plugin-tsdoc";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      tsdoc: tsdoc,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "tsdoc/syntax": "warn",
    },
  }
);
```

9. # Install TypeDoc

```bash
npm install typedoc --save-dev

```

10. # Add scripts to package.json

```json
"scripts": {
    "docs": "typedoc --entryPoints src/main.tsx --out docs"
  },
```

11. # Install http-server

```bash
npm install http-server --save-dev
```

12. # Run TSDoc

```bash
npm run docs
```

13. # Add scripts to package.json

```json
"scripts": {
  "serve-docs": "http-server ./docs"
}
```

14. # Run http-server

```bash
npm run serve-docs
```
