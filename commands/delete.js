import { readData, writeData } from '../utils/fileHandler.js';

import chalk from 'chalk';

export const deleteExpense = async (options) => {
  const { id } = options;

  if (!id || isNaN(id)) {
    console.log(chalk.red('Invalid ID. Please provide a numeric ID.'));
    return;
  }

  const data = await readData();

  const index = data.expenses.findIndex(
    (expense) => expense.id === parseInt(id)
  );

  if (index === -1) {
    console.log(chalk.red('Expense not found.'));
    return;
  }

  data.expenses.splice(index, 1);
  await writeData(data);

  console.log(chalk.green(`Expense deleted successfully.`));
};
