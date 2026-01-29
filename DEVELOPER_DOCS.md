# Tax Forms App - Developer Documentation

## Overview

A simple, minimal web application for managing tax form data locally. The app stores data in the browser's localStorage, displays it in clean tables with visual section divisions, and provides import/export functionality. Data entry is done via JSON import - entries can be edited after import using the Edit button in each table row.

## Architecture

### Technology Stack
- **Vanilla HTML/CSS/JavaScript** - No build tools or dependencies required
- **localStorage API** - Browser-based local storage for persistence
- **Modern CSS** - CSS variables for theming, Grid/Flexbox for layout

### File Structure

```
Tax Forms App/
├── index.html          # Main HTML structure
├── styles.css          # All styling (includes dark mode support)
├── app.js              # All application logic
├── README.md           # User-facing documentation
└── DEVELOPER_DOCS.md   # This file - developer documentation
```

## Data Structure

### Storage Format

Data is stored in localStorage under the key `taxFormsData` as JSON:

```json
{
  "w2": [
    {
      "id": "1234567890",
      "box_1": 50000.00,
      "box_2": 5000.00,
      "box_a": "123-45-6789",
      ...
    }
  ],
  "1099nec": [...],
  "1099k": [...],
  "1098": [...],
  "1099misc": [...]
}
```

### Entry Structure

Each entry has:
- `id` - Unique identifier (timestamp-based)
- Field values using box-number keys (e.g., `box_1`, `box_a`, `box_12a_code`)

## Form Schemas

### Schema Definition Location

Form schemas are defined in `app.js` in the `FORM_SCHEMAS` constant.

### Schema Structure

Each form type has:
- `name` - Display name (e.g., "Form W-2")
- `fields` - Array of field definitions

Each field definition contains:
- `key` - Field identifier (e.g., `box_1`, `box_a`, `calendar_year`)
- `label` - Short display label (e.g., "1", "a", "For calendar year")
- `description` - Full description (e.g., "Wages, tips, other compensation")
- `category` - One of: `basic`, `income`, `tax`, `other`
- `type` - Field type: `text`, `number`, `currency`, `textarea`, `boolean`
- `required` - Boolean indicating if field is required
- `section` - Section identifier for visual grouping (e.g., `employee_employer`, `wages_taxes`, `federal_tax_data`)

### W-2 Form Schema

The W-2 form is fully standardized with official box numbers and organized into sections:

**Employee/Employer Information Section (`employee_employer`):**
- `form_meta_void` - Void indicator (boolean)
- `box_a` - Employee's SSN
- `box_b` - Employer EIN
- `box_c` - Employer name, address, ZIP (textarea)
- `box_d` - Control number
- `box_e_first_middle` - Employee first name and initial
- `box_e_last` - Employee last name
- `box_e_suffix` - Suffix
- `box_f` - Employee address, ZIP (textarea)

**Wages and Taxes Section (`wages_taxes`):**
- `box_1` - Wages, tips, other compensation (currency, required)
- `box_2` - Federal income tax withheld (currency)
- `box_3` - Social security wages (currency)
- `box_4` - Social security tax withheld (currency)
- `box_5` - Medicare wages and tips (currency)
- `box_6` - Medicare tax withheld (currency)
- `box_7` - Social security tips (currency)
- `box_8` - Allocated tips (currency)
- `box_9` - Verification Number (text)
- `box_10` - Dependent care benefits (currency)
- `box_11` - Nonqualified plans (currency)

**Adjustments and Codes Section (`adjustments_codes`):**
- `box_12a_code`, `box_12a_amount` - Box 12a code and amount
- `box_12b_code`, `box_12b_amount` - Box 12b code and amount
- `box_12c_code`, `box_12c_amount` - Box 12c code and amount
- `box_12d_code`, `box_12d_amount` - Box 12d code and amount
- `box_13_statutory_employee` (boolean)
- `box_13_retirement_plan` (boolean)
- `box_13_third_party_sick_pay` (boolean)
- `box_14` - Other (textarea)

**State and Local Section (`state_local`):**
- State 1: `box_15_state_1`, `box_15_employer_state_id_1`, `box_16_state_wages_1`, `box_17_state_tax_1`, `box_18_local_wages_1`, `box_19_local_tax_1`, `box_20_locality_name_1`
- State 2: `box_15_state_2`, `box_15_employer_state_id_2`, `box_16_state_wages_2`, `box_17_state_tax_2`, `box_18_local_wages_2`, `box_19_local_tax_2`, `box_20_locality_name_2`

**Field Labels:** W-2 uses clean labels without "Box" prefix (e.g., "1", "a", "12a") with descriptions shown in headers.

### 1099-NEC Form Schema

The 1099-NEC form is fully standardized with sections:

**Form Meta Section (`form_meta`):**
- `calendar_year` - For calendar year (number, required)
- `void_checkbox` - VOID indicator (boolean)
- `corrected_checkbox` - CORRECTED indicator (boolean)

**Payer/Recipient Information Section (`payer_recipient_info`):**
- `payer_info` - Payer's full address info (textarea, required)
- `payer_tin` - Payer's TIN (required)
- `recipient_tin` - Recipient's TIN (required)
- `recipient_name` - Recipient's name (required)
- `recipient_address` - Street address
- `recipient_city_state_zip` - City, state, ZIP
- `account_number` - Account number
- `second_tin_not` - 2nd TIN notice (boolean)

**Federal Tax Data Section (`federal_tax_data`):**
- `box_1` - Nonemployee compensation (currency, required)
- `box_2` - Direct sales checkbox (boolean)
- `box_3` - Excess golden parachute payments (currency)
- `box_4` - Federal income tax withheld (currency)

**State Tax Data Section (`state_tax_data`):**
- State 1: `box_5_state_1`, `box_6_state_1`, `box_7_state_1`
- State 2: `box_5_state_2`, `box_6_state_2`, `box_7_state_2`

### Other Forms

Forms 1099-K, 1098, and 1099-MISC currently use simplified field structures. They will be updated to match the standardized format with sections and descriptions in future updates.

## Key Functions

### Data Management

- `loadData()` - Loads data from localStorage, initializes empty arrays for each form type
- `saveData()` - Saves data to localStorage
- `migrateW2Data()` - Migrates old W-2 field names to new box-number keys (runs automatically on load)

### Table Rendering

- `renderTable(formType)` - Renders table for specified form type
  - Shows labels with descriptions for forms that have them (e.g., "1 - Wages, tips, other compensation")
  - Prevents duplication when label equals description (shows just label)
  - Formats currency values with $ and 2 decimals
  - Formats year fields without locale formatting (no commas, e.g., "2025" not "2,025")
  - Formats boolean values as checkmarks (✓) or empty
  - Respects column visibility preferences
  - Adds visual section dividers (thicker left border) when section changes
  - Applies section divider styling to both headers and data cells

- `formatW2Header(field)` - Formats headers for all forms with descriptions
  - Returns just label if no description
  - Returns just label if label equals description (prevents duplication)
  - Otherwise returns "label - description" format
- `getVisibleColumns(formType)` - Returns list of visible columns based on filter preferences

### CRUD Operations

- `editEntry(formType, entryId, entryData)` - Updates existing entry
- `deleteEntry(formType, entryId)` - Deletes single entry
- `deleteTable(formType)` - Deletes all entries for form type

**Note:** The "Add Entry" functionality has been removed. All data entry is done via JSON import. Entries can be edited after import using the Edit button in table rows.

### Form Handling

- `openEditModal(entryId)` - Opens modal for editing existing entry
- `createFormField(field, value)` - Creates form field element
  - Handles different field types (text, number, currency, textarea, boolean/checkbox)
  - Uses formatted labels with descriptions when available
- `handleFormSubmit(e)` - Processes form submission, converts values appropriately

### Import/Export

- `handleJsonTextSubmit()` - Handles JSON text import from textarea
- `cleanJsonText(jsonText)` - Cleans JSON by removing citation markers (`[cite_start]`) and other invalid syntax
- `parseJsonError(error, jsonText)` - Parses JSON errors for user-friendly messages
- `importData(file)` - Handles file import (drag-and-drop or file picker)
- `validateImportData(data)` - Validates imported data structure
- `mapFieldsToForm(importedData, formType)` - Maps imported data to form field structure
- `exportCurrentTable()` - Copies current form's data to clipboard
- `exportAll()` - Copies all data to clipboard
- `copyToClipboard(text)` - Copies text to clipboard with fallback for older browsers

### Column Filtering

- `handleColumnFilterChange(e)` - Handles checkbox changes for column visibility
- `saveColumnPreference(formType, category, visible)` - Saves column visibility preference
- `loadColumnPreferences(formType)` - Loads saved column preferences
- `showAllColumns()` - Shows all columns
- `hideOptionalColumns()` - Hides optional columns (tax and other categories)

### Theme Management

- `toggleTheme()` - Switches between light and dark mode
- `setTheme(theme)` - Sets theme and saves preference
- `loadTheme()` - Loads saved theme preference on app start
- `updateThemeIcon(theme)` - Updates theme toggle icon

### User Feedback

- `showToast(message, type)` - Shows toast notification (success, error, info)
- `showImportStatus(message, type)` - Shows import status message

## User Interface

### Toolbar

The main toolbar contains:
- **Import** (Primary button) - Main data entry method, highlighted with `btn-primary` class
- **Copy Table** - Exports current form's data to clipboard
- **Copy All** - Exports all forms' data to clipboard
- **Delete All** - Deletes all entries for current form type

**Note:** There is no "Add Entry" button. All data entry is done via JSON import.

### Empty State

When no entries exist, the app displays: "No entries yet. Use the Import button to import your tax form data."

### Table Actions

Each table row has an "Actions" column with:
- **Edit** button - Opens edit modal for that entry
- **Delete** button - Deletes that specific entry

## Current Features

### Implemented Features

1. **Form Management**
   - Support for 5 form types: W-2, 1099-NEC, 1099-K, 1098, 1099-MISC
   - W-2 and 1099-NEC forms fully standardized with official box numbers/field keys
   - Edit and delete entries (no manual add - import only)
   - Delete all entries for a form type
   - Visual section divisions in tables for better readability

2. **Data Display**
   - Clean table view with all fields
   - Headers show labels with descriptions for standardized forms (e.g., "1 - Wages, tips, other compensation")
   - Prevents duplication when label equals description
   - Currency formatting ($ and 2 decimals)
   - Year fields display without commas (e.g., "2025" not "2,025")
   - Boolean display (checkmarks)
   - Column visibility filtering by category (Basic Info, Income, Tax Withheld, Other)
   - Column preferences saved per form type
   - Visual section dividers (thicker left border) between form sections
   - Vertical column separators for easier reading

3. **Import/Export**
   - **Primary workflow**: Import is the main data entry method (highlighted Import button)
   - Drag-and-drop JSON file import
   - Click-to-upload file import
   - Paste JSON text import
   - JSON cleaning (removes citation markers, invalid syntax)
   - Copy table data to clipboard
   - Copy all data to clipboard
   - Automatic field mapping for imports

4. **Theme Support**
   - Light/dark mode toggle
   - Theme preference persistence
   - Smooth transitions

5. **User Feedback**
   - Toast notifications for operations
   - Import status messages
   - Error messages with helpful context

### W-2 Specific Features

- **Standardized Box Numbers**: All fields use official IRS box numbers
- **Clean Labels**: Labels use simplified format without "Box" prefix (e.g., "1", "a", "12a")
- **Descriptive Headers**: Headers show "[label] - [description]" format (e.g., "1 - Wages, tips, other compensation")
- **Section Divisions**: Fields organized into 4 sections with visual dividers:
  - Employee/Employer Information
  - Wages and Taxes (Numbered Boxes)
  - Adjustments and Codes
  - State and Local
- **No Tooltips**: Descriptions are inline in headers (tooltips removed)
- **Compact Headers**: Headers wrap text, use reduced padding/font size
- **Data Migration**: Automatic migration from old field names to box numbers

### 1099-NEC Specific Features

- **Standardized Field Keys**: All fields use official form field identifiers
- **Section Divisions**: Fields organized into 4 sections:
  - Form Meta
  - Payer/Recipient Information
  - Federal Tax Data
  - State Tax Data (supports 2 states)
- **Descriptive Headers**: Headers show "[label] - [description]" format when different, or just label when same

## Data Migration

### W-2 Migration

The app includes automatic migration for W-2 data from old field names to new box-number keys:

**Old → New Mapping:**
- `employer` → `box_c`
- `employerAddress` → `box_c` (combined)
- `employerEin` → `box_b`
- `taxYear` → `form_meta_year`
- `wages` → `box_1`
- `federalTax` → `box_2`
- `socialSecurityWages` → `box_3`
- `socialSecurityTax` → `box_4`
- `medicareWages` → `box_5`
- `medicareTax` → `box_6`
- `stateTax` → `box_17_state_tax_1`
- `state` → `box_15_state_1`
- `localTax` → `box_19_local_tax_1`
- `notes` → `box_14`

Migration runs automatically on app load if old data structure is detected.

## JSON Import Format

### Expected Format

The app expects JSON in one of these formats:

**Single Entry Array:**
```json
[
  {
    "box_1": 50000.00,
    "box_2": 5000.00,
    "box_a": "123-45-6789"
  }
]
```

**Form Type Object:**
```json
{
  "w2": [
    {
      "box_1": 50000.00,
      "box_2": 5000.00
    }
  ]
}
```

**Full Schema:**
```json
{
  "w2": [...],
  "1099nec": [...],
  "1099k": [...]
}
```

### Field Value Types

- **Currency/Number**: Must be numbers (not strings), e.g., `50000.00` not `"$50,000"`
- **Text**: Strings, use `\n` for line breaks in addresses
- **Boolean**: `true` or `false` (not strings)
- **Empty Values**: Use `""` for strings, `0` or `0.00` for numbers, `false` for booleans

### JSON Cleaning

The import function automatically cleans:
- Citation markers: `[cite_start]` → removed
- Trailing commas before closing braces/brackets
- Single-line comments (`//`)
- Multi-line comments (`/* */`)

## Column Filtering

### Categories

- **Basic Info**: Boxes a-f, form meta, employee info
- **Income**: Boxes 1, 3, 5, 7, 10, 11, 12 amounts, Box 16 (state wages), Box 18 (local wages)
- **Tax Withheld**: Boxes 2, 4, 6, Box 17 (state tax), Box 19 (local tax)
- **Other**: Boxes 8, 9, 12 codes, Box 13 checkboxes, Box 14, Box 15 (state info), Box 20 (locality)

### Storage

Column preferences are stored in localStorage with keys like `columnPrefs_w2`:
```json
{
  "basic": true,
  "income": true,
  "tax": false,
  "other": false
}
```

## CSS Architecture

### CSS Variables

The app uses CSS variables for theming:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  --accent-color: #4a90e2;
  ...
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #e0e0e0;
  ...
}
```

### Key Styles

- **Table Headers**: Compact, wrappable text, reduced padding/font size
- **Table Borders**: Vertical borders between columns (1px), thicker left border (3px) for section dividers
- **Section Dividers**: Thicker left border (3px) and subtle background color on section header cells
- **Actions Column**: Simple horizontal button layout, "Actions" header text
- **Modals**: Slide-in animation, backdrop blur
- **Toasts**: Slide-in from right, auto-dismiss after 3 seconds
- **Responsive**: Mobile-friendly with sidebar collapsing to horizontal nav

## Known Limitations

1. **Forms Partially Standardized**: W-2 and 1099-NEC are fully standardized with sections and descriptions. Forms 1099-K, 1098, and 1099-MISC still use simplified field structures and will be updated in the future.

2. **No Manual Add**: Data entry is import-only. There is no "Add Entry" button - all entries must be imported via JSON.

3. **PDF/Image Import**: Not implemented. Currently only supports JSON import.

4. **Data Validation**: Limited validation - doesn't check if currency values are reasonable or if required fields are present before saving.

5. **No Undo/Redo**: No undo functionality for deletions or edits.

6. **No Search/Filter**: No ability to filter table rows by values, only column visibility.

## Extending the App

### Adding a New Form Type

1. Add form schema to `FORM_SCHEMAS` in `app.js`:
```javascript
'1099int': {
    name: 'Form 1099-INT',
    fields: [
        { key: 'payer', label: 'Payer Name', category: 'basic', required: true },
        ...
    ]
}
```

2. Add navigation button in `index.html`:
```html
<button class="nav-item" data-form="1099int">Form 1099-INT</button>
```

3. Initialize empty array in `loadData()` (automatic if using `Object.keys(FORM_SCHEMAS)`)

### Standardizing Other Forms

To standardize other forms like W-2 and 1099-NEC:

1. Update field definitions to use official box numbers/field keys
2. Add `description` field to each field definition (use same value as label if they're identical to prevent duplication)
3. Add `section` property to group related fields (e.g., `form_meta`, `payer_recipient_info`, `federal_tax_data`)
4. Clean up `label` values (remove "Box" prefix, use simple identifiers)
5. The `formatW2Header()` function already handles all forms - it will automatically format headers and prevent duplication
6. The `renderTable()` function already supports section dividers for all forms - just ensure fields have `section` properties
7. Add data migration if field names change

### Adding New Field Types

1. Update `createFormField()` to handle new type
2. Update `handleFormSubmit()` to process new type
3. Update `renderTable()` to display new type appropriately
4. Add CSS styling if needed

## Testing

### Manual Testing Checklist

- [ ] Import JSON for each form type (file and text)
- [ ] Edit entry after import
- [ ] Delete entry
- [ ] Delete all entries
- [ ] Verify section dividers display correctly (W-2, 1099-NEC)
- [ ] Verify headers don't show duplication (label - label)
- [ ] Verify year fields display without commas
- [ ] Verify vertical column separators display
- [ ] Export data (table and all)
- [ ] Column filtering (show/hide categories)
- [ ] Dark mode toggle
- [ ] Theme persistence (reload page)
- [ ] Column preference persistence
- [ ] W-2 data migration (if old data exists)

### Common Issues

1. **Import fails**: Check JSON format, ensure it's valid after cleaning
2. **Fields not showing**: Check column filter preferences
3. **Data not saving**: Check browser localStorage quota, check console for errors
4. **Theme not persisting**: Check localStorage access, check `loadTheme()` is called

## Browser Compatibility

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Mobile browsers**: Responsive design works, but table may be cramped

## Future Enhancements (Not Implemented)

- PDF/image import with OCR
- Row filtering/search
- Undo/redo functionality
- Data validation
- Export to CSV/Excel
- Print functionality
- Multi-language support
- Field-level validation
- Custom field categories
- Form templates

## Code Organization

### File: `app.js`

**Structure:**
1. Form schemas (top)
2. App state variables
3. Initialization
4. Data management functions
5. UI rendering functions
6. CRUD operations
7. Import/export functions
8. Theme functions
9. Utility functions

**Key Constants:**
- `FORM_SCHEMAS` - All form definitions
- `W2_FIELD_MIGRATION` - Migration mapping for W-2

**Key State Variables:**
- `currentFormType` - Currently selected form type
- `editingEntryId` - ID of entry being edited (null when not editing)
- `data` - All form data loaded from localStorage

## Notes for Developers

1. **localStorage Key**: `taxFormsData` - stores all form data
2. **Theme Storage**: `theme` - stores current theme preference
3. **Column Preferences**: `columnPrefs_[formType]` - stores column visibility per form type
4. **Header Formatting**: Use `formatW2Header()` function for all forms with descriptions - it automatically prevents duplication when label equals description
5. **Section Dividers**: Fields with `section` property automatically get visual dividers when section changes in `renderTable()`
6. **Year Fields**: Year fields (keys containing "year") are displayed without locale formatting to avoid commas
7. **JSON Cleaning**: Always clean JSON before parsing in import functions
8. **Error Handling**: Use `showToast()` and `showImportStatus()` for user feedback
9. **Field Types**: Handle `currency`, `number`, `boolean`, `textarea`, `text` types appropriately
10. **Empty Values**: Always provide defaults (empty string, 0, false) to prevent undefined values
11. **Import-First Workflow**: The app is designed for import-first workflow - no manual add functionality
12. **Table Styling**: Vertical borders (1px) between columns, section dividers (3px left border) for visual grouping

## Contact/Support

For questions about the codebase, refer to this documentation. The app is designed to be simple and maintainable - most functionality is in `app.js` with clear function names.
