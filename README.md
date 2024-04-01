
# add-test-ids

  

`add-test-ids` is a command-line tool that adds unique test IDs to your React components on one click. It's designed to work with `MUI` components.

  

## Installation

  

You can install `add-test-ids` globally with npm:

  

``` sh
npm  install  -g  add-test-ids
```

After installing you run simply the following command in you project root directory.

``` sh
npx add-test-ids
```

This will ask you for two questions: 

``` Please enter a directory path: src ```

``` Please enter file extensions, separated by commas: .tsx, .jsx ```

## Example result

``` javascript
    import React from 'react';

    const ExampleComponent = () => {
      return (
        <Box data-testId="ypq-12h">Example Component</Box>
      )
    }
    
    export default Component;
```

This package will add `data-testId` in the following `MUI` components:

``` javascript
 const  muiElements  = [

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
```

Contributions are welcomed, you can contribute in this github repo: [Repo Link](https://github.com/chrahman/add-test-ids)