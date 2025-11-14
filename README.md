# todo-api-tests-ts

Small TS API test automation

---

### ✅ Project 2 — Todo API Tests (repo: `todo-api-tests-ts`)

# ✅ Todo API Tests (TypeScript + Vitest)

This project covers basic **CRUD API testing** using [Vitest](https://vitest.dev/) and [Axios](https://axios-http.com/).  
It interacts with a simple placeholder “Todo” API to validate endpoints and response structures.

---

## 🧰 Stack

- **TypeScript**
- **Vitest**
- **Axios**
- **Node.js**

---

## 🧾 Test Scenarios

| Scenario          | Method | Endpoint     | Expected Status |
| ----------------- | ------ | ------------ | --------------- |
| Get all todos     | GET    | `/todos`     | 200             |
| Create a new todo | POST   | `/todos`     | 201             |
| Update a todo     | PUT    | `/todos/:id` | 200             |
| Delete a todo     | DELETE | `/todos/:id` | 200             |

---

## ▶️ Run Tests

```bash
npm install
npm test


💡 Highlights

Tests all CRUD operations on a RESTful endpoint.

Written with clear async/await structure.

Uses Axios for easy request handling and response validation.

Great example of simple, real-world API automation in TypeScript.
```
````
