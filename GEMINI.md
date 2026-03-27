# GEMINI.md

## Project Overview

This project is a web application.
The goal is to build a clean, maintainable, and scalable web system.

## Tech Stack

* Frontend: React + Vite
* Styling: Tailwind CSS
* Package Manager: npm
* Build Tool: Vite
* Lint: ESLint
* Formatter: Prettier

> Note: repository saat ini adalah frontend landing page; backend dan database tidak termasuk dalam scope.

## Project Structure


Use the following structure when creating files:

```
src/
 ├─ components/
 ├─ pages/
 ├─ services/
 ├─ utils/
 ├─ hooks/
 ├─ styles/
 └─ assets/
```

Guidelines:

* `components/` → reusable UI components
* `pages/` → page-level components
* `services/` → API calls and business logic
* `utils/` → helper functions
* `hooks/` → custom React hooks
* `styles/` → global styles
* `assets/` → images, icons, etc.

## Coding Guidelines

### General Rules

* Write clean and readable code.
* Use descriptive variable and function names.
* Avoid duplicated code.
* Prefer modular architecture.

### JavaScript Rules

* Use ES6+ syntax.
* Use `const` and `let`, avoid `var`.
* Prefer arrow functions.

Example:

```javascript
const getUser = async (id) => {
  const response = await api.get(`/users/${id}`)
  return response.data
}
```

### React Rules

* Use functional components.
* Use hooks instead of class components.
* Keep components small and reusable.

Example:

```javascript
function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}
```

## Styling Rules

* Use Tailwind CSS for styling.
* Avoid inline styles unless necessary.
* Keep styling consistent.

Example:

```
className="flex items-center justify-center p-4 rounded-lg"
```

## API Integration

* All API calls should be placed in `/services`.
* Do not place API logic inside components.

Example:

```
services/
 └─ userService.js
```

## Error Handling

* Always handle API errors.
* Display user-friendly error messages.

Example:

```javascript
try {
  const data = await fetchUsers()
} catch (error) {
  console.error(error)
}
```

## Security Guidelines

* Never expose API keys.
* Validate user inputs.
* Sanitize data before sending to the backend.

## Git Guidelines

Commit message format:

```
feat: add login page
fix: fix navbar bug
refactor: clean authentication logic
```

## Development Commands

Install dependencies

```
npm install
```

Run development server

```
npm run dev
```

Build production

```
npm run build
```

## Testing

* Write unit tests for important logic.
* Place tests in `__tests__` folders.

Example:

```
src/components/__tests__/
```

## AI Agent Instructions

When modifying this project:

* Follow the project structure.
* Do not rename files unless necessary.
* Do not introduce new dependencies without explanation.
* Always keep code modular and readable.
