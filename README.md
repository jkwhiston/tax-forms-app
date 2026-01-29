# Tax Forms App

A simple, minimal web application for managing tax form data locally. Store, view, edit, and export data for various tax forms including W-2, 1099-NEC, 1099-K, 1098, and 1099-MISC.

## Features

- **Local Storage**: All data is stored locally in your browser - no server required
- **Multiple Form Types**: Support for W-2, 1099-NEC, 1099-K, 1098, and 1099-MISC
- **CRUD Operations**: Add, edit, and delete entries easily
- **Column Filtering**: Show/hide columns by category (Basic Info, Income, Tax Withheld, Other)
- **Dark Mode**: Toggle between light and dark themes
- **Import/Export**: Import JSON files via drag-and-drop or file upload, export data to clipboard
- **Clean UI**: Minimal, modern design that's easy to use

## Getting Started

1. Open `index.html` in your web browser (Chrome, Firefox, Safari, or Edge)
2. That's it! The app runs entirely in your browser - no installation needed

## How to Use

### Adding Entries
1. Select a form type from the sidebar (e.g., "Form W-2")
2. Click "Add Entry"
3. Fill in the form fields
4. Click "Save"

### Editing Entries
1. Find the entry in the table
2. Click the "Edit" button
3. Make your changes
4. Click "Save"

### Deleting Entries
- Click "Delete" on an individual entry
- Click "Delete All" to remove all entries for the current form type

### Filtering Columns
- Use the checkboxes above the table to show/hide column categories
- Categories: Basic Info, Income, Tax Withheld, Other
- Click "Show All" to display all columns
- Click "Hide Optional" to show only essential columns

### Importing Data
1. Click "Import"
2. Drag and drop a JSON file onto the drop zone, or click "Choose File"
3. The app will automatically map fields and add entries

### Exporting Data
- **Copy Table**: Copies all entries for the current form type to clipboard
- **Copy All**: Copies all data from all form types to clipboard

### Dark Mode
- Click the theme toggle button (🌙/☀️) in the header
- Your preference is saved automatically

## Data Storage

All data is stored in your browser's localStorage. This means:
- Data persists between sessions
- Data is stored locally on your computer
- Clearing browser data will delete your entries
- Consider exporting important data regularly

## File Format

When exporting, data is saved as JSON. Example structure:

```json
{
  "w2": [
    {
      "id": "1234567890",
      "employer": "Acme Corp",
      "wages": 50000,
      "federalTax": 5000,
      "taxYear": 2024
    }
  ],
  "1099nec": []
}
```

## Browser Compatibility

Works best in modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- This app runs entirely in your browser - no internet connection required after initial load
- All data is stored locally - never sent to any server
- For best results, use a modern browser with JavaScript enabled

---
*Last updated: January 2026*
