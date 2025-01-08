import { readData, writeData } from '../utils/fileHandler.js';
import chalk from 'chalk';

export const updateExpense = async (options) => {
  const { id, description, amount } = options;

  if (
    !id ||
    !description ||
    !amount ||
    isNaN(amount) ||
    parseFloat(amount) <= 0
  ) {
    console.log(
      chalk.red(
        'Invalid input. Please provide a valid ID, description, and a positive amount.'
      )
    );
    return;
  }

  const data = await readData();

  if (!data || !Array.isArray(data.expenses)) {
    console.log(chalk.red('No expenses found.'));
    return;
  }

  const expenseIndex = data.expenses.findIndex(
    (expense) => expense.id === parseFloat(id)
  );

  if (expenseIndex === -1) {
    console.log(chalk.red(`Expense with ID ${id} not found.`));
    return;
  }

  data.expenses[expenseIndex] = {
    ...data.expenses[expenseIndex],
    description: description.trim(),
    amount: parseFloat(amount),
  };

  await writeData(data);

  console.log(chalk.green(`Expense with ID ${id} updated successfully.`));
};
