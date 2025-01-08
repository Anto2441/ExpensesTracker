import { readData, writeData } from '../utils/fileHandler.js';
import chalk from 'chalk';

export const setBudget = async (options) => {
  const { month, amount } = options;

  if (
    !month ||
    isNaN(month) ||
    parseInt(month, 10) < 1 ||
    parseInt(month, 10) > 12
  ) {
    console.log(
      chalk.red('Invalid month. Please enter a value between 1 and 12.')
    );
    return;
  }

  if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
    console.log(chalk.red('Invalid amount. Please enter a positive value.'));
    return;
  }

  const data = await readData();

  const monthIndex = parseInt(month, 10);
  data.budgets = data.budgets || {};
  data.budgets[monthIndex] = parseFloat(amount);

  await writeData(data);

  console.log(chalk.green(`Budget for month ${month} set to $${amount}.`));
};
