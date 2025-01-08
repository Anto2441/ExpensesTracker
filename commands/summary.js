import { readData } from '../utils/fileHandler.js';
import chalk from 'chalk';

export const summaryExpenses = async (options) => {
  const { month } = options;

  const data = await readData();
  if (!data || !Array.isArray(data.expenses)) {
    console.log(chalk.red('No expenses found.'));
    return;
  }

  const currentYear = new Date().getFullYear();
  let filteredExpenses = data.expenses;
  let total = 0;

  if (month) {
    filteredExpenses = filteredExpenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return (
        expenseDate.getFullYear() === currentYear &&
        expenseDate.getMonth() + 1 === parseInt(month, 10)
      );
    });
    total = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

    const monthBudget = data.budgets ? data.budgets[parseInt(month, 10)] : null;
    if (monthBudget && total > monthBudget) {
      console.log(
        chalk.red(
          `Warning: You have exceeded your budget of $${monthBudget} for month ${month}.`
        )
      );
    }
    console.log(
      chalk.green(`Total expenses for month ${month}: $${total.toFixed(2)}`)
    );
  } else {
    total = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    console.log(chalk.green(`Total expenses: $${total.toFixed(2)}`));
  }
};
