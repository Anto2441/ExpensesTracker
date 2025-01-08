# Expense Tracker CLI

A simple command-line application to track your expenses, manage budgets, and export data. Built with **Node.js**, this tool is perfect for managing personal finances from the terminal.

## Features

- Add, update, delete, and list expenses.
- View total expenses and summaries for specific months.
- Set a monthly budget and receive warnings when exceeding it.
- Export expenses to a CSV file.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/expense-tracker-cli.git
   cd expense-tracker-cli
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   node app.js
   ```

---

## Usage

### Add an Expense

```bash
node app.js add --description "Lunch" --amount 20
```

**Output:**

```
Expense added successfully (ID: 1)
```

### List All Expenses

```bash
node app.js list
```

**Output:**

```
ID   Date       Description  Amount
1    2024-08-06 Lunch        $20
```

### Update an Expense

```bash
node app.js update --id 1 --description "Lunch with friends" --amount 25
```

**Output:**

```
Expense updated successfully
```

### Delete an Expense

```bash
node app.js delete --id 1
```

**Output:**

```
Expense deleted successfully
```

### View Summary

#### Total Expenses

```bash
node app.js summary
```

**Output:**

```
Total expenses: $20
```

#### Monthly Summary

```bash
node app.js summary --month 8
```

**Output:**

```
Total expenses for August: $20
```

### Set a Monthly Budget

```bash
node app.js set-budget --month 8 --amount 100
```

**Output:**

```
Budget for month 8 set to $100.
```

#### Budget Warning

```bash
node app.js summary --month 8
```

**Output:**

```
Warning: You have exceeded your budget of $100 for month 8.
Total expenses for August: $120.
```

### Export Expenses to CSV

```bash
node app.js export --output expenses.csv
```

**Output:**

```
Expenses exported successfully to expenses.csv
```

---

## Project Structure

```
ExpenseTracker/
├── commands/
│   ├── add.js
│   ├── delete.js
│   ├── list.js
│   ├── update.js
│   ├── summary.js
│   ├── setBudget.js
│   ├── export.js
├── utils/
│   ├── fileHandler.js
├── data/
│   ├── expenses.json
├── app.js
├── package.json
```

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Commander.js**: CLI argument parsing.
- **Chalk**: Colored terminal output.
- **fs**: File system operations.

---

## Enjoy !
