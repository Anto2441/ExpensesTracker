import { readData } from '../utils/fileHandler.js';
import fs from 'fs-extra';
import chalk from 'chalk';

export const exportToCSV = async (options) => {
  const { output } = options;

  const data = await readData();
  if (!data || !Array.isArray(data.expenses)) {
    console.log(chalk.red('No expenses found.'));
    return;
  }

  const headers = 'ID,Date,Description,Amount\n';
  const rows = data.expenses.map(
    (expense) =>
      `${expense.id},${expense.date},"${expense.description}",${expense.amount}`
  );
  const csvContent = headers + rows.join('\n');

  try {
    fs.writeFileSync(output, csvContent);
    console.log(chalk.green(`Expenses exported successfully to ${output}`));
  } catch (error) {
    console.log(chalk.red('Failed to export expenses:'), error.message);
  }
};
