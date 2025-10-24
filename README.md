# Project Overview

This is a task for validating sohoz booking process using Playwright and TypeScript. 

# Prerequisites
Make sure you have Node.js and npm installed before getting started. You can verify the installation with:
```sh
node -v
npm -v
```

# Playwright setup and test run

Install Playwright and dependencies
```sh
npm init playwright@latest
```
Run UI tests locally

```sh
npx playwright test
```
For debugging in UI mode: 
```sh
npx playwright test --ui
```
# Project Straucture 

sohoj-ui-automation/
├── .github/
│ └── workflows/
│ └── playwright.yml
│
├── node_modules/
│
├── playwright-report/
│
├── test-results/
│ ├── ticket-booking-flow-test-chromium/
│ ├── ticket-booking-flow-test-firefox/
│ └── .last-run.json
│
├── tests/
│ └── ticket-booking-flow.spec.ts
│
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md

# Notes 

Please note that, after selecting the booking parameters; there were only a single vendor for tickets. This hindered further assertions of the ticket price comparison as asked for. 
Also, in aspect of design pattern, POM can be used for this flow for better usuablity for further test scope./n # small text add using cli
