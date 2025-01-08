import { readData, writeData } from '../utils/fileHandler.js';

import chalk from 'chalk';

export const addExpense = async (options) => {
  const { description, amount } = options;

  if (!description || !amount || isNaN(amount) || parseFloat(amount) <= 0) {
    console.log(
      chalk.red(
        'Invalid input. Please provide a valid description and a positive amount.'
      )
    );
    return;
  }

  const data = await readData();

  const newExpense = {
    id: data.expenses.length + 1,
    date: new Date().toISOString().split('T')[0],
    description: description.trim(),
    amount: parseFloat(amount),
  };

  data.expenses.push(newExpense);
  await writeData(data);

  console.log(chalk.green(`Expense added successfully (ID: ${newExpense.id})`));
};
