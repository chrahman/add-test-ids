#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Array of MUI v4 elements
const muiElements = [
  'AppBar',
  'Avatar',
  'Backdrop',
  'Badge',
  'BottomNavigation',
  'BottomNavigationAction',
  'Box',
  'Button',
  'ButtonBase',
  'ButtonGroup',
  'Card',
  'CardActionArea',
  'CardActions',
  'CardContent',
  'CardHeader',
  'CardMedia',
  'Checkbox',
  'Chip',
  'CircularProgress',
  'ClickAwayListener',
  'Collapse',
  'Container',
  'CssBaseline',
  'Dialog',
  'DialogActions',
  'DialogContent',
  'DialogContentText',
  'DialogTitle',
  'Divider',
  'Drawer',
  'ExpansionPanel',
  'ExpansionPanelActions',
  'ExpansionPanelDetails',
  'ExpansionPanelSummary',
  'Fab',
  'Fade',
  'FilledInput',
  'FormControl',
  'FormControlLabel',
  'FormGroup',
  'FormHelperText',
  'FormLabel',
  'Grid',
  'GridList',
  'GridListTile',
  'GridListTileBar',
  'Hidden',
  'Icon',
  'IconButton',
  'Input',
  'InputLabel',
  'LinearProgress',
  'Link',
  'List',
  'ListItem',
  'ListItemAvatar',
  'ListItemIcon',
  'ListItemSecondaryAction',
  'ListItemText',
  'ListSubheader',
  'Menu',
  'MenuItem',
  'MenuList',
  'MobileStepper',
  'Modal',
  'NativeSelect',
  'OutlinedInput',
  'Pagination',
  'PaginationItem',
  'Paper',
  'Popover',
  'Popper',
  'Portal',
  'Radio',
  'RadioGroup',
  'RootRef',
  'Select',
  'Slide',
  'Slider',
  'Snackbar',
  'SnackbarContent',
  'Step',
  'StepButton',
  'StepConnector',
  'StepContent',
  'StepIcon',
  'StepLabel',
  'Stepper',
  'SvgIcon',
  'SwipeableDrawer',
  'Switch',
  'Tab',
  'Table',
  'TableBody',
  'TableCell',
  'TableContainer',
  'TableFooter',
  'TableHead',
  'TablePagination',
  'TableRow',
  'TableSortLabel',
  'Tabs',
  'TextField',
  'TextareaAutosize',
  'Toolbar',
  'Tooltip',
  'Typography',
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36).substring(0, 5);
}

// Function to add data-testId attribute
function addTestIDs(sourceCode, fileName) {
  let updatedCode = sourceCode;
  let hashedId = hashString(fileName);

  // Iterate over each MUI element and add data-testid attribute
  muiElements.forEach((element, index) => {
    // unique id with multiplying Math.random() to avoid collision
    let uniqueId = hashedId.toString(36).substring(2, 5) + '-' + Math.random().toString(36).substring(2, 5);
    const regex = new RegExp(`<${element}(\\s|>)`, 'g');
    updatedCode = updatedCode.replace(regex, `<${element} data-testId="${uniqueId}"$1`);
  });

  return updatedCode;
}

// Function to process a single file
function processFile(filePath) {
  // Read the source code file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Update the source code with data-testid attributes
    const updatedCode = addTestIDs(data, path.basename(filePath));

    // Write the updated code back to the file
    fs.writeFile(filePath, updatedCode, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`Test IDs added successfully to ${filePath}`);
    });
  });
}

// Function to process all files in a directory (including nested directories)
function processDirectory(dirPath, fileExtensions) {
  // Read all files in the directory
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    // Process each file
    files.forEach((file) => {
      const filePath = path.join(dirPath, file);

      // Check if the file is a directory
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        if (stats.isDirectory()) {
          // Recursively process the directory
          processDirectory(filePath, fileExtensions);
        } else if (fileExtensions.includes(path.extname(filePath))) {
          // Process only .tsx files
          processFile(filePath);
        }
      });
    });
  });
}

// // Start processing the src directory
// const srcPath = 'src'; // Adjust the path as needed
// processDirectory(srcPath);



function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter a directory path: ', (dirPath) => {
    rl.question('Please enter file extensions, separated by commas: ', (fileExtensions) => {
      fileExtensions = fileExtensions.split(',').map(ext => ext.trim());
      // Start processing the provided directory
      processDirectory(dirPath, fileExtensions);

      rl.close();
    });
  });
}

// Get command-line arguments
const args = process.argv.slice(2);
const dirPath = args[0];
const fileExtensions = args.slice(1);

// Run the main function
main(dirPath, fileExtensions);
