# Playwright TypeScript Practice Framework 🚀

This repository is my daily-progress Playwright + TypeScript automation project.  
I’m building tests from **basics → advanced**, using multiple public practice websites and modern Playwright features (POM, fixtures, tracing, CI, etc.).

## ✅ Primary Practice Site (Start Here)
### Practice Software Testing
- Site: https://practicesoftwaretesting.com/
- Why: beginner-friendly UI, good for learning Playwright fundamentals (locators, navigation, assertions, simple flows)

---

## 🌐 Additional Practice Websites (Used Across Levels)

### 1) The Internet (Herokuapp)
- Site: https://the-internet.herokuapp.com/
- Best for: alerts, dynamic loading, auth, frames, file upload/download, tables, drag-and-drop

### 2) Automation Exercise
- Site: https://automationexercise.com/
- Best for: realistic e-commerce flows (catalog, cart, checkout), data-driven tests, end-to-end journeys

### 3) ExpandTesting Practice Site
- Site: https://practice.expandtesting.com/
- Best for: UI controls and multiple small scenarios (forms, alerts, interactions, edge cases)

### 4) Sauce Demo
- Site: https://www.saucedemo.com/
- Best for: login + shopping flow, sorting/filtering, assertions on lists, regression-style suites

### 5) UI Test Automation Playground
- Site: https://testing-playground.com/
- Best for: locator mastery, tricky UI interactions, keyboard/mouse events

---

## 🏆 Recommended Learning Progression (Basics → Advanced)

| Stage | Website | Goal |
|------|---------|------|
| Beginner | PracticeSoftwareTesting | Locators, navigation, assertions, basic E2E |
| Core fundamentals | The Internet | Waits, dynamic UI, alerts, frames, uploads/downloads |
| Real workflows | Automation Exercise | E2E flows + data-driven testing |
| UI controls | ExpandTesting | Components, validations, edge cases |
| Sorting & regression | Sauce Demo | Cart/checkout + list validations |
| Locator mastery | Testing Playground | Challenging selectors + interactions |

---

## 🧩 What I’m Practicing (Playwright Features)

### Basics
- Locators: `getByRole`, `getByLabel`, `getByPlaceholder`, `locator()`
- Actions: `click`, `fill`, `type`, `selectOption`, keyboard/mouse
- Assertions: `toHaveText`, `toBeVisible`, `toHaveURL`, `toHaveTitle`

### Intermediate
- Page Object Model (POM)
- Test hooks: `beforeEach`, `afterEach`
- Fixtures and test data
- Screenshots/videos on failure
- HTML reporting

### Advanced
- Tracing (`trace: on-first-retry`)
- Network interception & mocking (`page.route`)
- API testing using Playwright `request`
- Auth reuse via `storageState`
- Parallel execution, retries, sharding
- GitHub Actions CI pipeline

---

## ▶️ How to Run Tests Locally

### Install dependencies
```bash
npm install

Run all tests
npx playwright test

Run in headed mode
npx playwright test --headed

Run a single test file
npx playwright test tests/e2e/<file-name>.spec.ts

View HTML report
npx playwright show-report

📌 Daily Progress Workflow

After adding new tests/features:

git status
git add .
git commit -m "Day X: <short meaningful message>"
git push

This keeps my commit history as a visible learning log.