# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
# spotify-clone

# 📌 React Login Form with TailwindCSS, React Hook Form & Yup Validation

A modern, responsive **Login Form** built with:
- ⚛ **React**
- 🎨 **TailwindCSS**
- ✅ **React Hook Form**
- 🔍 **Yup** validation schema

This form includes:
- Email and password fields with validation
- Show/Hide password toggle
- Responsive design for mobile & desktop
- Clean and minimal UI
- Error messages with **custom text**
- Icons for better UX

---

## 🚀 Features

- **Real-time validation** using `Yup`
- **Strong password rule**:  
  - 8–16 characters  
  - At least **1 lowercase letter**  
  - At least **1 uppercase letter**  
  - At least **1 number**  
  - At least **1 special character**
- **Eye toggle** to show/hide password
- Mobile-friendly layout
- Fully customizable styles via TailwindCSS

---

## 📂 Project SCREEN SHOTS

## MOBILE

<img width="747" height="714" alt="Screenshot 2025-08-11 123907" src="https://github.com/user-attachments/assets/eb29258b-865c-4f5b-8a0b-eed67d78b1e3" />

## DESKTOP

<img width="1919" height="857" alt="Screenshot 2025-08-11 123748" src="https://github.com/user-attachments/assets/da426ee0-4da7-4856-88bf-6403d2079d82" />




