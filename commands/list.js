import { readData } from '../utils/fileHandler.js';

import chalk from 'chalk';

export const listExpenses = async () => {
  const data = await readData();

  if (data.expenses.length === 0) {
    console.log(chalk.yellow('No expenses recorded.'));
    return;
  }

  console.log(chalk.blue('ID      Date       Description  Amount'));
  data.expenses.forEach((expense) => {
    console.log(
      chalk.green(
        `${expense.id}   ${expense.date}        ${
          expense.description
        }     $${expense.amount.toFixed(2)}`
      )
    );
  });
};
