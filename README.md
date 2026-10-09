QBot — AI-Powered Test Automation Framework

Automate testing. Generate test cases with AI. Analyze failures faster.

QBot is an AI-powered test automation framework that combines web and mobile test automation with AI-assisted test generation and failure analysis. It helps developers and testers streamline repetitive testing workflows, execute tests, review results, and investigate failures through a centralized dashboard.

Overview

QBot brings test creation, execution, and analysis into one workflow:

Requirements → AI-Assisted Test Generation → Automated Execution → Result Analysis → AI-Assisted Suggestions

Key Features

🌐 Automated Web Testing

Browser automation using Playwright.

Automated validation of user workflows, including navigation, form submission, and interactive elements.

Repeatable browser-based testing.

📱 Mobile Application Testing

Mobile test automation using Appium.

Automated execution of mobile application workflows.

Support for repeatable mobile testing scenarios.

🤖 AI-Assisted Test Generation

Google Gemini API integration for generating test cases from natural-language requirements.

Faster test scenario creation with AI assistance.

Support for turning testing requirements into actionable test scenarios.

📊 Test Execution Dashboard

Centralized interface for managing testing workflows.

Test execution results and pass/fail status.

Visibility into testing activity and outcomes.

🔍 AI-Assisted Failure Analysis

AI-assisted interpretation of failed test cases.

Contextual explanations and potential troubleshooting suggestions.

Support for investigating test failures more efficiently.

Technology Stack

Web automation: Playwright

Mobile automation: Appium

AI integration: Google Gemini API

Frontend: Vite and TypeScript, where used in the implementation

Update this section to include the exact backend, database, and other technologies used by the project.

Getting Started

Prerequisites

Git

Node.js and npm, if required by the project

Any additional runtime or mobile testing dependencies required by the implementation

Gemini API credentials for AI-powered features

Installation

git clone https://github.com/suyogdeore08/QBot.git
cd QBot
npm install

Configuration

Review .env.example for the required environment variables.

Create a local environment file following the project's configuration instructions.

Add your own Gemini API credentials if required.

Never commit API keys or other secrets.

Run the Application

Use the scripts defined in package.json. For example, if the development script is named dev:

npm run dev

Follow the project's documentation for starting any additional backend services, browser tests, or mobile testing infrastructure.

Project Structure

The repository includes a src/ directory and frontend configuration files. Refer to the source code and project documentation for the detailed module structure and testing components.

Screenshots and Demo



Contributing

Contributions, feedback, and suggestions are welcome. Open an issue to discuss major changes before submitting a pull request.



QBot — AI-powered test automation for web and mobile applications.

Repository: https://github.com/suyogdeore08/QBot
