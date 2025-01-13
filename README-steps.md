# Create new project by Vite

```bash
npm create vite@latest holidaze-noroff --template react-ts
```

# Go to holidaze directory

```bash
cd holidaze-noroff
```

# Install dependencies

```bash
npm install
```

# Install SASS

```bash
npm install sass
```

# Add Bootstrap & React Bootstrap

```bash
npm install bootstrap react-bootstrap
```

# Add Bootstrap CSS to main.tsx

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

# Install plugin ESLint for TSDoc support

```bash
npm install eslint-plugin-tsdoc --save-dev
```

# Update eslint.config.js

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

# Install TypeDoc

```bash
npm install typedoc --save-dev

```

# Add scripts to package.json

```json
"scripts": {
    "docs": "typedoc --entryPoints src/main.tsx --out docs"
  },
```

# Install http-server

```bash
npm install http-server --save-dev
```

# Run TSDoc

```bash
npm run docs
```

# Add scripts to package.json

```json
"scripts": {
  "serve-docs": "http-server ./docs"
}
```

# Run http-server

```bash
npm run serve-docs
```

# Install Jest in project

```bash
npm install --save-dev jest @types/jest ts-jest babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript

```

# Create file (if not exists) babel.config.cjs

```javascript
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
};
```

# Add scripts to package.json

```json
  "scripts": {
    "test": "jest"
  },
```

# Create jest.config.cjs

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
```

# Install React Testing Library

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

# Create jest.setup.js

```javascript
import "@testing-library/jest-dom";
```

# Install jest-environment-jsdom

```bash
npm install --save-dev jest-environment-jsdom

```

# Install Testing Library

```bash
npm install --save-dev @testing-library/jest-dom
```

# Install types for Testing Library

```bash
npm install --save-dev @types/testing-library__jest-dom
npm install --save-dev @types/jest @testing-library/jest-dom
npm install --save-dev @testing-library/jest-dom @types/jest

```

# Create directory and file src/**tests**/example.test.ts

```javascript
describe("Example Test Suite", () => {
  test("Example Test Case", () => {
    expect(1 + 1).toBe(2);
  });
});
```

# file tsconfig.json must contain code:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "jsx": "react-jsx",
    "noEmit": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    "types": ["jest", "@testing-library/jest-dom"],
    "allowImportingTsExtensions": true
  },
  "include": ["src", "jest.setup.js"],
  "exclude": ["node_modules"]
}
```

# create .github/workflow/ci-cd-pipeline.yaml

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      # fetch code from repo
      - name: Checkout code
        uses: actions/checkout@v3

      # install Node.js
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 22

      # install dependencies
      - name: Install dependencies
        run: npm install

      # run tests
      - name: Run tests
        run: npm test

      # build app
      - name: Build project
        run: npm run build
```

# create deploy.yaml (deploy to GitHub Pages)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "dist"

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

# Install react-router-dom

```bash
npm i react-router-dom
```
