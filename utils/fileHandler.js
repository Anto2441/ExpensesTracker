import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const filePath = path.resolve('data/expenses.json');

export const readData = async () => {
  try {
    const exists = await fs.pathExists(filePath);

    if (!exists) {
      console.log(chalk.yellow('Data file not found. Creating a new one...'));
      await fs.outputJson(filePath, { expenses: [] }, { spaces: 2 });
    }

    const data = await fs.readFile(filePath, 'utf-8');
    const parsedData = JSON.parse(data);

    if (!Array.isArray(parsedData.expenses)) {
      throw new Error('Invalid data format in expenses.json.');
    }

    return parsedData;
  } catch (error) {
    console.error(chalk.red('Error reading data file:'), error.message);
    process.exit(1);
  }
};

export const writeData = async (data) => {
  try {
    if (!Array.isArray(data.expenses)) {
      throw new Error('Data format is invalid. Expenses should be an array.');
    }

    await fs.writeJson(filePath, data, { spaces: 2 });
  } catch (error) {
    console.error(chalk.red('Error writing data file:'), error.message);
    process.exit(1);
  }
};
