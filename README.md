# Demo Web Shop Automation

Automated UI and API testing of the Tricentis Demo Web Shop.

## Project Overview

This project covers three UI automation scenarios using Playwright and Page Object Model (POM), along with API testing using Postman and Newman.

The UI tests cover invalid login, user registration with cart functionality, and product search through checkout. The API tests cover retrieving users, fetching a single user, and updating user information.

## Tech Stack

- **Language:** JavaScript
- **UI Automation:** Playwright
- **Design Pattern:** Page Object Model (POM)
- **API Testing:** Postman
- **API Execution:** Newman
- **Reporting:** Playwright HTML Report and Allure Report
- **Version Control:** Git and GitHub
- **Runtime:** Node.js

## Installation & Setup

### Prerequisites

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/dibya888/Demo-WebShop-Automation.git
cd Demo-WebShop-Automation
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Install Allure Command Line

Allure Command Line is included in the project dependencies and will be installed automatically with `npm install`.

## Test Execution

### Run Individual UI Tests

**Q1 – Invalid Login**
```bash
npm run test:q1
```

**Q2 – Register and Add Product to Cart**
```bash
npm run test:q2
```

**Q3 – Product Search and Checkout**
```bash
npm run test:q3
```

### Run All UI Tests

```bash
npm run test:ui
```

### Run API Tests

```bash
npm run test:api
```

### Run UI and API Tests Together

```bash
npm run test:all
```

## Reporting

### Playwright HTML Report

After executing the UI tests, open the HTML report using:

```bash
npm run report:html
```

### Allure Report

Generate the Allure report:

```bash
npm run report:allure
```

Open the generated report:

```bash
npm run report:allure:open
```

## API Test Collection

The Postman collection is available in the `api-tests` directory:

`api-tests/Demo Web Shop API Tests.postman_collection.json`

The collection contains three requests:

1. **Get All Users** – Retrieves all users and validates the response.
2. **Get Single User** – Retrieves a selected user using the saved user ID.
3. **Update User** – Updates the user's name, email, and company name, then validates the response.

The collection can be executed locally using Newman through `npm run test:api`.