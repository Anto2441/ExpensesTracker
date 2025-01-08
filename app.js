import { Command } from 'commander';
import { addExpense } from './commands/add.js';
import { deleteExpense } from './commands/delete.js';
import { listExpenses } from './commands/list.js';
import { summaryExpenses } from './commands/summary.js';
import { updateExpense } from './commands/update.js';
import { setBudget } from './commands/setBudget.js';
import { exportToCSV } from './commands/export.js';

const program = new Command();

program
  .name('expense-tracker')
  .description('CLI for tracking expenses')
  .version('1.0.0');

program
  .command('add')
  .description('Add a new expense')
  .requiredOption('--description <description>', 'Description of the expense')
  .requiredOption('--amount <amount>', 'Amount of the expense')
  .action(addExpense);

program.command('list').description('List all expenses').action(listExpenses);

program
  .command('delete')
  .description('Delete an expense by ID')
  .option('--id <id>', 'ID of the expense to delete')
  .action(deleteExpense);

program
  .command('summary')
  .description('Show a summary of expenses')
  .option('--month <month>', 'Month (1-12) for which to show the summary')
  .action(summaryExpenses);

program
  .command('update')
  .description('Update an expense by ID')
  .requiredOption('--id <id>', 'ID of the expense to update')
  .requiredOption(
    '--description <description>',
    'New description of the expense'
  )
  .requiredOption('--amount <amount>', 'New amount of the expense')
  .action(updateExpense);

program
  .command('set-budget')
  .description('Set a monthly budget')
  .requiredOption('--month <month>', 'Month (1-12)')
  .requiredOption('--amount <amount>', 'Budget amount')
  .action(setBudget);

program
  .command('export')
  .description('Export all expenses to a CSV file')
  .requiredOption('--output <filePath>', 'Path to the output CSV file')
  .action(exportToCSV);

program.parse(process.argv);
