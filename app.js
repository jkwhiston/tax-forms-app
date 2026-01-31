// Form Field Schemas
const FORM_SCHEMAS = {
    w2: {
        name: 'Form W-2',
        fields: [
            // Employee/Employer Information
            { key: 'form_meta_void', label: 'Void', description: 'Void indicator', category: 'basic', type: 'boolean', section: 'employee_employer' },
            { key: 'box_a', label: 'a', description: "Employee's social security number", category: 'basic', required: true, section: 'employee_employer' },
            { key: 'box_b', label: 'b', description: "Employer identification number (EIN)", category: 'basic', required: true, section: 'employee_employer' },
            { key: 'box_c', label: 'c', description: "Employer's name, address, and ZIP code", category: 'basic', type: 'textarea', required: true, section: 'employee_employer' },
            { key: 'box_d', label: 'd', description: 'Control number', category: 'basic', section: 'employee_employer' },
            { key: 'box_e_first_middle', label: 'e', description: "Employee's first name and initial", category: 'basic', section: 'employee_employer' },
            { key: 'box_e_last', label: 'e', description: "Employee's last name", category: 'basic', section: 'employee_employer' },
            { key: 'box_e_suffix', label: 'e', description: 'Suffix', category: 'basic', section: 'employee_employer' },
            { key: 'box_f', label: 'f', description: "Employee's address and ZIP code", category: 'basic', type: 'textarea', section: 'employee_employer' },
            
            // Wages and Taxes (Numbered Boxes)
            { key: 'box_1', label: '1', description: 'Wages, tips, other compensation', category: 'income', type: 'currency', required: true, section: 'wages_taxes' },
            { key: 'box_2', label: '2', description: 'Federal income tax withheld', category: 'tax', type: 'currency', section: 'wages_taxes' },
            { key: 'box_3', label: '3', description: 'Social security wages', category: 'income', type: 'currency', section: 'wages_taxes' },
            { key: 'box_4', label: '4', description: 'Social security tax withheld', category: 'tax', type: 'currency', section: 'wages_taxes' },
            { key: 'box_5', label: '5', description: 'Medicare wages and tips', category: 'income', type: 'currency', section: 'wages_taxes' },
            { key: 'box_6', label: '6', description: 'Medicare tax withheld', category: 'tax', type: 'currency', section: 'wages_taxes' },
            { key: 'box_7', label: '7', description: 'Social security tips', category: 'income', type: 'currency', section: 'wages_taxes' },
            { key: 'box_8', label: '8', description: 'Allocated tips', category: 'other', type: 'currency', section: 'wages_taxes' },
            { key: 'box_9', label: '9', description: '(Verification Number - appears blank on form)', category: 'other', section: 'wages_taxes' },
            { key: 'box_10', label: '10', description: 'Dependent care benefits', category: 'income', type: 'currency', section: 'wages_taxes' },
            { key: 'box_11', label: '11', description: 'Nonqualified plans', category: 'income', type: 'currency', section: 'wages_taxes' },
            
            // Adjustments and Codes
            { key: 'box_12a_code', label: '12a', description: 'See instructions for box 12 (Code)', category: 'other', section: 'adjustments_codes' },
            { key: 'box_12a_amount', label: '12a', description: 'See instructions for box 12 (Amount)', category: 'income', type: 'currency', section: 'adjustments_codes' },
            { key: 'box_12b_code', label: '12b', description: 'See instructions for box 12 (Code)', category: 'other', section: 'adjustments_codes' },
            { key: 'box_12b_amount', label: '12b', description: 'See instructions for box 12 (Amount)', category: 'income', type: 'currency', section: 'adjustments_codes' },
            { key: 'box_12c_code', label: '12c', description: 'See instructions for box 12 (Code)', category: 'other', section: 'adjustments_codes' },
            { key: 'box_12c_amount', label: '12c', description: 'See instructions for box 12 (Amount)', category: 'income', type: 'currency', section: 'adjustments_codes' },
            { key: 'box_12d_code', label: '12d', description: 'See instructions for box 12 (Code)', category: 'other', section: 'adjustments_codes' },
            { key: 'box_12d_amount', label: '12d', description: 'See instructions for box 12 (Amount)', category: 'income', type: 'currency', section: 'adjustments_codes' },
            { key: 'box_13_statutory_employee', label: '13', description: 'Statutory employee', category: 'other', type: 'boolean', section: 'adjustments_codes' },
            { key: 'box_13_retirement_plan', label: '13', description: 'Retirement plan', category: 'other', type: 'boolean', section: 'adjustments_codes' },
            { key: 'box_13_third_party_sick_pay', label: '13', description: 'Third-party sick pay', category: 'other', type: 'boolean', section: 'adjustments_codes' },
            { key: 'box_14', label: '14', description: 'Other', category: 'other', type: 'textarea', section: 'adjustments_codes' },
            
            // State and Local - State 1
            { key: 'box_15_state_1', label: '15', description: 'State', category: 'other', section: 'state_local' },
            { key: 'box_15_employer_state_id_1', label: '15', description: "Employer's state ID number", category: 'other', section: 'state_local' },
            { key: 'box_16_state_wages_1', label: '16', description: 'State wages, tips, etc.', category: 'income', type: 'currency', section: 'state_local' },
            { key: 'box_17_state_tax_1', label: '17', description: 'State income tax', category: 'tax', type: 'currency', section: 'state_local' },
            { key: 'box_18_local_wages_1', label: '18', description: 'Local wages, tips, etc.', category: 'income', type: 'currency', section: 'state_local' },
            { key: 'box_19_local_tax_1', label: '19', description: 'Local income tax', category: 'tax', type: 'currency', section: 'state_local' },
            { key: 'box_20_locality_name_1', label: '20', description: 'Locality name', category: 'other', section: 'state_local' },
            
            // State and Local - State 2
            { key: 'box_15_state_2', label: '15', description: 'State', category: 'other', section: 'state_local' },
            { key: 'box_15_employer_state_id_2', label: '15', description: "Employer's state ID number", category: 'other', section: 'state_local' },
            { key: 'box_16_state_wages_2', label: '16', description: 'State wages, tips, etc.', category: 'income', type: 'currency', section: 'state_local' },
            { key: 'box_17_state_tax_2', label: '17', description: 'State income tax', category: 'tax', type: 'currency', section: 'state_local' },
            { key: 'box_18_local_wages_2', label: '18', description: 'Local wages, tips, etc.', category: 'income', type: 'currency', section: 'state_local' },
            { key: 'box_19_local_tax_2', label: '19', description: 'Local income tax', category: 'tax', type: 'currency', section: 'state_local' },
            { key: 'box_20_locality_name_2', label: '20', description: 'Locality name', category: 'other', section: 'state_local' }
        ]
    },
    '1099nec': {
        name: 'Form 1099-NEC',
        fields: [
            // Form Meta
            { key: 'calendar_year', label: 'For calendar year', description: 'For calendar year', category: 'basic', type: 'number', required: true, section: 'form_meta' },
            { key: 'void_checkbox', label: 'VOID', description: 'Void indicator', category: 'basic', type: 'boolean', section: 'form_meta' },
            { key: 'corrected_checkbox', label: 'CORRECTED', description: 'Corrected indicator', category: 'basic', type: 'boolean', section: 'form_meta' },
            
            // Payer/Recipient Information
            { key: 'payer_info', label: 'PAYER\'S name, street address, city or town, state or province, country, ZIP or foreign postal code, and telephone no.', description: 'PAYER\'S name, street address, city or town, state or province, country, ZIP or foreign postal code, and telephone no.', category: 'basic', type: 'textarea', required: true, section: 'payer_recipient_info' },
            { key: 'payer_tin', label: 'PAYER\'S TIN', description: 'PAYER\'S TIN', category: 'basic', required: true, section: 'payer_recipient_info' },
            { key: 'recipient_tin', label: 'RECIPIENT\'S TIN', description: 'RECIPIENT\'S TIN', category: 'basic', required: true, section: 'payer_recipient_info' },
            { key: 'recipient_name', label: 'RECIPIENT\'S name', description: 'RECIPIENT\'S name', category: 'basic', required: true, section: 'payer_recipient_info' },
            { key: 'recipient_address', label: 'Street address (including apt. no.)', description: 'Street address (including apt. no.)', category: 'basic', section: 'payer_recipient_info' },
            { key: 'recipient_city_state_zip', label: 'City or town, state or province, country, and ZIP or foreign postal code', description: 'City or town, state or province, country, and ZIP or foreign postal code', category: 'basic', section: 'payer_recipient_info' },
            { key: 'account_number', label: 'Account number (see instructions)', description: 'Account number (see instructions)', category: 'basic', section: 'payer_recipient_info' },
            { key: 'second_tin_not', label: '2nd TIN not.', description: '2nd TIN not.', category: 'basic', type: 'boolean', section: 'payer_recipient_info' },
            
            // Federal Tax Data
            { key: 'box_1', label: '1', description: 'Nonemployee compensation', category: 'income', type: 'currency', required: true, section: 'federal_tax_data' },
            { key: 'box_2', label: '2', description: 'Payer made direct sales totaling $5,000 or more of consumer products to recipient for resale', category: 'other', type: 'boolean', section: 'federal_tax_data' },
            { key: 'box_3', label: '3', description: 'Excess golden parachute payments', category: 'income', type: 'currency', section: 'federal_tax_data' },
            { key: 'box_4', label: '4', description: 'Federal income tax withheld', category: 'tax', type: 'currency', section: 'federal_tax_data' },
            
            // State Tax Data - State 1
            { key: 'box_5_state_1', label: '5', description: 'State tax withheld', category: 'tax', type: 'currency', section: 'state_tax_data' },
            { key: 'box_6_state_1', label: '6', description: 'State/Payer\'s state no.', category: 'other', section: 'state_tax_data' },
            { key: 'box_7_state_1', label: '7', description: 'State income', category: 'income', type: 'currency', section: 'state_tax_data' },
            
            // State Tax Data - State 2
            { key: 'box_5_state_2', label: '5', description: 'State tax withheld', category: 'tax', type: 'currency', section: 'state_tax_data' },
            { key: 'box_6_state_2', label: '6', description: 'State/Payer\'s state no.', category: 'other', section: 'state_tax_data' },
            { key: 'box_7_state_2', label: '7', description: 'State income', category: 'income', type: 'currency', section: 'state_tax_data' }
        ]
    },
    '1099k': {
        name: 'Form 1099-K',
        fields: [
            { key: 'payer', label: 'Payer Name', category: 'basic', required: true },
            { key: 'payerAddress', label: 'Payer Address', category: 'basic' },
            { key: 'payerTin', label: 'Payer TIN', category: 'basic' },
            { key: 'taxYear', label: 'Tax Year', category: 'basic', type: 'number', required: true },
            { key: 'grossAmount', label: 'Gross Amount', category: 'income', type: 'number', required: true },
            { key: 'cardNotPresent', label: 'Card Not Present Transactions', category: 'income', type: 'number' },
            { key: 'merchantCategory', label: 'Merchant Category Code', category: 'other' },
            { key: 'numberOfTransactions', label: 'Number of Transactions', category: 'other', type: 'number' },
            { key: 'federalTax', label: 'Federal Income Tax Withheld', category: 'tax', type: 'number' },
            { key: 'stateTax', label: 'State Income Tax', category: 'tax', type: 'number' },
            { key: 'state', label: 'State', category: 'other' },
            { key: 'notes', label: 'Notes', category: 'other', type: 'textarea' }
        ]
    },
    '1098': {
        name: 'Form 1098',
        fields: [
            { key: 'lender', label: 'Lender Name', category: 'basic', required: true },
            { key: 'lenderAddress', label: 'Lender Address', category: 'basic' },
            { key: 'lenderTin', label: 'Lender TIN', category: 'basic' },
            { key: 'taxYear', label: 'Tax Year', category: 'basic', type: 'number', required: true },
            { key: 'mortgageInterest', label: 'Mortgage Interest Received', category: 'income', type: 'number', required: true },
            { key: 'outstandingPrincipal', label: 'Outstanding Principal', category: 'other', type: 'number' },
            { key: 'mortgageInsurance', label: 'Mortgage Insurance Premiums', category: 'other', type: 'number' },
            { key: 'points', label: 'Points Paid', category: 'other', type: 'number' },
            { key: 'refundAmount', label: 'Refund Amount', category: 'other', type: 'number' },
            { key: 'notes', label: 'Notes', category: 'other', type: 'textarea' }
        ]
    },
    '1099misc': {
        name: 'Form 1099-MISC',
        fields: [
            { key: 'payer', label: 'Payer Name', category: 'basic', required: true },
            { key: 'payerAddress', label: 'Payer Address', category: 'basic' },
            { key: 'payerTin', label: 'Payer TIN', category: 'basic' },
            { key: 'taxYear', label: 'Tax Year', category: 'basic', type: 'number', required: true },
            { key: 'rents', label: 'Rents', category: 'income', type: 'number' },
            { key: 'royalties', label: 'Royalties', category: 'income', type: 'number' },
            { key: 'otherIncome', label: 'Other Income', category: 'income', type: 'number' },
            { key: 'federalTax', label: 'Federal Income Tax Withheld', category: 'tax', type: 'number' },
            { key: 'fishingBoat', label: 'Fishing Boat Proceeds', category: 'income', type: 'number' },
            { key: 'medicalPayments', label: 'Medical and Health Care Payments', category: 'other', type: 'number' },
            { key: 'nonemployeeCompensation', label: 'Nonemployee Compensation', category: 'income', type: 'number' },
            { key: 'substitutePayments', label: 'Substitute Payments', category: 'other', type: 'number' },
            { key: 'cropInsurance', label: 'Crop Insurance Proceeds', category: 'other', type: 'number' },
            { key: 'stateTax', label: 'State Income Tax', category: 'tax', type: 'number' },
            { key: 'state', label: 'State', category: 'other' },
            { key: 'notes', label: 'Notes', category: 'other', type: 'textarea' }
        ]
    }
};

// Supabase: Project Settings → API. Client is created from UMD global (window.supabase) so app works from file:// locally.
const SUPABASE_URL = 'https://gbdzyovqxdjllmshmsjb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_oHSV_DvQjVtQN90Ws61Wkg_imvf4VYd';
let supabase = null;

// App State
let currentFormType = 'w2';
let editingEntryId = null;
let data = {};

// Initialize App: UI first (theme, listeners, first paint) so Import/theme work immediately; then Supabase + data in background.
function init() {
    loadTheme();
    initializeEventListeners();

    // Sync load from localStorage for first paint
    const saved = localStorage.getItem('taxFormsData');
    if (saved) {
        try {
            data = JSON.parse(saved);
        } catch (e) {
            data = {};
        }
    }
    Object.keys(FORM_SCHEMAS).forEach(formType => {
        if (!data[formType]) data[formType] = [];
    });

    renderTable(currentFormType);
    loadColumnPreferences(currentFormType);
    showStorageIndicator();

    // Supabase + loadData in background (no blocking; works when opened from file://)
    setTimeout(function runSupabaseAndData() {
        try {
            if (typeof window.supabase !== 'undefined' && typeof window.supabase.createClient === 'function') {
                supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                console.log('Tax Forms App: using Supabase for storage');
            } else {
                supabase = null;
                console.warn('Tax Forms: Supabase script not loaded — using localStorage.');
            }
        } catch (e) {
            console.error('Supabase createClient failed:', e);
            supabase = null;
        }
        loadData().then(function () {
            renderTable(currentFormType);
            showStorageIndicator();
        }).catch(function (e) {
            console.error('loadData failed:', e);
            showStorageIndicator();
        });
    }, 0);
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Update header indicator only (Storage: Supabase / Storage: This device only)
function showStorageIndicator() {
    const headerEl = document.getElementById('storageIndicator');
    if (!headerEl) return;
    if (supabase) {
        headerEl.textContent = 'Storage: Supabase';
        headerEl.setAttribute('aria-label', 'Data is saved to Supabase');
    } else {
        headerEl.textContent = 'Storage: This device only';
        headerEl.setAttribute('aria-label', 'Data is saved to this device only');
    }
}

// Migration mapping from old field names to new box-number keys
const W2_FIELD_MIGRATION = {
    'employer': 'box_c',
    'employerAddress': 'box_c', // Combined into box_c
    'employerEin': 'box_b',
    'taxYear': 'form_meta_year',
    'wages': 'box_1',
    'federalTax': 'box_2',
    'socialSecurityWages': 'box_3',
    'socialSecurityTax': 'box_4',
    'medicareWages': 'box_5',
    'medicareTax': 'box_6',
    'stateTax': 'box_17_state_tax_1',
    'state': 'box_15_state_1',
    'localTax': 'box_19_local_tax_1',
    'notes': 'box_14'
};

// Migrate W-2 data from old field names to new box-number keys
async function migrateW2Data() {
    if (!data.w2 || !Array.isArray(data.w2)) {
        return;
    }

    let needsMigration = false;
    const migratedEntries = data.w2.map(entry => {
        // Check if entry uses old field names
        const hasOldFields = Object.keys(W2_FIELD_MIGRATION).some(oldKey => entry.hasOwnProperty(oldKey));
        
        if (!hasOldFields) {
            // Already migrated or uses new structure
            return entry;
        }

        needsMigration = true;
        const migratedEntry = { ...entry };

        // Migrate each old field to new field
        Object.keys(W2_FIELD_MIGRATION).forEach(oldKey => {
            if (migratedEntry.hasOwnProperty(oldKey)) {
                const newKey = W2_FIELD_MIGRATION[oldKey];
                const value = migratedEntry[oldKey];
                
                // Handle special cases
                if (oldKey === 'employer' || oldKey === 'employerAddress') {
                    // Combine employer name and address into box_c
                    if (!migratedEntry[newKey]) {
                        migratedEntry[newKey] = '';
                    }
                    if (oldKey === 'employer' && value) {
                        migratedEntry[newKey] = (migratedEntry[newKey] || '') + value;
                    }
                    if (oldKey === 'employerAddress' && value) {
                        migratedEntry[newKey] = (migratedEntry[newKey] || '') + (migratedEntry[newKey] ? '\n' : '') + value;
                    }
                } else {
                    // Simple field mapping
                    if (!migratedEntry[newKey]) {
                        migratedEntry[newKey] = value;
                    }
                }
                
                // Remove old field (but keep it if it's the only source for a combined field)
                if (oldKey !== 'employer' && oldKey !== 'employerAddress') {
                    delete migratedEntry[oldKey];
                }
            }
        });

        // Clean up old fields after migration
        Object.keys(W2_FIELD_MIGRATION).forEach(oldKey => {
            if (migratedEntry.hasOwnProperty(oldKey)) {
                delete migratedEntry[oldKey];
            }
        });

        return migratedEntry;
    });

    if (needsMigration) {
        data.w2 = migratedEntries;
        if (supabase) {
            for (const entry of data.w2) {
                const { id, ...dataOnly } = entry;
                await supabase.from('form_entries').update({ data: dataOnly }).eq('id', id);
            }
        } else {
            saveData();
        }
        console.log('W-2 data migrated successfully');
    }
}

// Load Data from Supabase or localStorage
async function loadData() {
    if (supabase) {
        const { data: rows, error } = await supabase.from('form_entries').select('*');
        if (error) {
            console.error('Supabase load error:', error);
            showToast(`Database error: ${error.message || error.code || 'Could not load'}`, 'error');
            data = {};
        } else {
            data = {};
            Object.keys(FORM_SCHEMAS).forEach(formType => {
                data[formType] = [];
            });
            (rows || []).forEach(row => {
                const { id: _ignored, ...rest } = row.data || {};
                const entry = { id: row.id, ...rest };
                if (data[row.form_type]) {
                    data[row.form_type].push(entry);
                }
            });
        }
    } else {
        const saved = localStorage.getItem('taxFormsData');
        if (saved) {
            try {
                data = JSON.parse(saved);
            } catch (e) {
                console.error('Error loading data:', e);
                data = {};
            }
        }
    }

    // Initialize empty arrays for each form type if they don't exist
    Object.keys(FORM_SCHEMAS).forEach(formType => {
        if (!data[formType]) {
            data[formType] = [];
        }
    });

    // Migrate W-2 data if needed
    await migrateW2Data();
}

// Save Data to localStorage (only used when Supabase is not configured)
function saveData() {
    if (supabase) return;
    try {
        localStorage.setItem('taxFormsData', JSON.stringify(data));
    } catch (e) {
        console.error('Error saving data:', e);
        showToast('Error saving data', 'error');
    }
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const formType = e.target.dataset.form;
            switchForm(formType);
        });
    });

    // Modal Close Buttons
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('closeImportModal').addEventListener('click', closeImportModal);
    document.getElementById('cancelBtn').addEventListener('click', closeModal);

    // Form Submit
    document.getElementById('entryForm').addEventListener('submit', handleFormSubmit);

    // Export Buttons
    document.getElementById('exportTableBtn').addEventListener('click', exportCurrentTable);
    document.getElementById('exportAllBtn').addEventListener('click', exportAll);

    // Delete All Button
    document.getElementById('deleteAllBtn').addEventListener('click', handleDeleteAll);

    // Import Button
    document.getElementById('importBtn').addEventListener('click', openImportModal);
    document.getElementById('fileInputBtn').addEventListener('click', () => {
        document.getElementById('fileInput').click();
    });
    document.getElementById('fileInput').addEventListener('change', handleFileSelect);
    document.getElementById('submitJsonBtn').addEventListener('click', handleJsonTextSubmit);

    // Drag and Drop
    const dropZone = document.getElementById('dropZone');
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);
    dropZone.addEventListener('dragleave', handleDragLeave);

    // Theme Toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Column Filter Checkboxes
    document.querySelectorAll('.filter-checkbox input').forEach(checkbox => {
        checkbox.addEventListener('change', handleColumnFilterChange);
    });

    // Column Filter Actions
    document.getElementById('showAllColumns').addEventListener('click', showAllColumns);
    document.getElementById('hideOptionalColumns').addEventListener('click', hideOptionalColumns);
}

// Format W-2 Header - Combines label with description
function formatW2Header(field) {
    if (!field.description) {
        return field.label;
    }
    
    // If label and description are the same, avoid duplication
    if (field.label === field.description) {
        return field.label;
    }
    
    // Combine: "[identifier] - [description]"
    return `${field.label} - ${field.description}`;
}

// Switch Form Type
function switchForm(formType) {
    currentFormType = formType;
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.form === formType) {
            btn.classList.add('active');
        }
    });

    // Render table and load column preferences
    renderTable(formType);
    loadColumnPreferences(formType);
}

// Render Table
function renderTable(formType) {
    const entries = data[formType] || [];
    const schema = FORM_SCHEMAS[formType];
    const tableHead = document.getElementById('tableHead');
    const tableBody = document.getElementById('tableBody');
    const emptyState = document.getElementById('emptyState');

    // Clear existing content
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';

    if (entries.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    // Get visible columns based on filter preferences
    const visibleColumns = getVisibleColumns(formType);
    
    // Create header row
    const headerRow = document.createElement('tr');
    
    // Add Actions column header
    const actionsHeader = document.createElement('th');
    actionsHeader.textContent = 'Actions';
    actionsHeader.className = 'actions-cell';
    headerRow.appendChild(actionsHeader);

    // Add field headers with section dividers
    let previousSection = null;
    schema.fields.forEach(field => {
        if (visibleColumns.includes(field.key)) {
            const th = document.createElement('th');
            
            // For all forms with descriptions, use formatted header with description
            if (field.description) {
                th.textContent = formatW2Header(field);
            } else {
                // For forms without descriptions, use standard label
                th.textContent = field.label;
            }
            
            th.dataset.field = field.key;
            
            // Add section divider class if section changed
            if ((formType === 'w2' || formType === '1099nec') && field.section && field.section !== previousSection) {
                th.classList.add('section-divider');
                previousSection = field.section;
            } else if ((formType === 'w2' || formType === '1099nec') && field.section) {
                previousSection = field.section;
            }
            
            // Tooltips removed - descriptions now in header text
            headerRow.appendChild(th);
        }
    });

    tableHead.appendChild(headerRow);

    // Create data rows
    entries.forEach(entry => {
        const row = document.createElement('tr');
        row.dataset.id = entry.id;

        // Add Actions cell
        const actionsCell = document.createElement('td');
        actionsCell.className = 'actions-cell';
        
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'btn btn-secondary btn-small';
        editBtn.addEventListener('click', () => openEditModal(entry.id));
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn btn-danger btn-small';
        deleteBtn.addEventListener('click', () => handleDeleteEntry(entry.id));

        actionsCell.appendChild(editBtn);
        actionsCell.appendChild(deleteBtn);
        row.appendChild(actionsCell);

        // Add field cells with section dividers
        let previousSection = null;
        schema.fields.forEach(field => {
            if (visibleColumns.includes(field.key)) {
                const td = document.createElement('td');
                const value = entry[field.key];
                
                // Format value based on field type
                if (field.type === 'currency' || field.type === 'number') {
                    if (value !== null && value !== undefined && value !== '') {
                        const numValue = typeof value === 'number' ? value : parseFloat(value);
                        if (!isNaN(numValue)) {
                            // Year fields should display without locale formatting (no commas)
                            const isYearField = field.key.toLowerCase().includes('year');
                            if (field.type === 'currency') {
                                td.textContent = '$' + numValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                            } else if (isYearField) {
                                // Display year as plain number without commas
                                td.textContent = numValue.toString();
                            } else {
                                td.textContent = numValue.toLocaleString('en-US');
                            }
                        } else {
                            td.textContent = '';
                        }
                    } else {
                        td.textContent = '';
                    }
                } else if (field.type === 'boolean') {
                    td.textContent = value === true || value === 'true' ? '✓' : '';
                } else {
                    td.textContent = value || '';
                }
                
                // Add section divider class if section changed
                if ((formType === 'w2' || formType === '1099nec') && field.section && field.section !== previousSection) {
                    td.classList.add('section-divider');
                    previousSection = field.section;
                } else if ((formType === 'w2' || formType === '1099nec') && field.section) {
                    previousSection = field.section;
                }
                
                row.appendChild(td);
            }
        });

        tableBody.appendChild(row);
    });
}

// Get Visible Columns
function getVisibleColumns(formType) {
    const preferences = loadColumnPreferences(formType);
    const schema = FORM_SCHEMAS[formType];
    const visibleColumns = [];

    schema.fields.forEach(field => {
        const category = field.category || 'other';
        if (preferences[category] !== false) {
            visibleColumns.push(field.key);
        }
    });

    return visibleColumns;
}

// Handle Column Filter Change
function handleColumnFilterChange(e) {
    const category = e.target.dataset.category;
    const isChecked = e.target.checked;
    
    saveColumnPreference(currentFormType, category, isChecked);
    renderTable(currentFormType);
}

// Save Column Preference
function saveColumnPreference(formType, category, visible) {
    const key = `columnPrefs_${formType}`;
    const preferences = JSON.parse(localStorage.getItem(key) || '{}');
    preferences[category] = visible;
    localStorage.setItem(key, JSON.stringify(preferences));
    
    // Update checkbox state
    const checkbox = document.querySelector(`input[data-category="${category}"]`);
    if (checkbox) {
        checkbox.checked = visible;
    }
}

// Load Column Preferences
function loadColumnPreferences(formType) {
    const key = `columnPrefs_${formType}`;
    const preferences = JSON.parse(localStorage.getItem(key) || '{"basic": true, "income": true, "tax": true, "other": true}');
    
    // Update checkboxes
    Object.keys(preferences).forEach(category => {
        const checkbox = document.querySelector(`input[data-category="${category}"]`);
        if (checkbox) {
            checkbox.checked = preferences[category] !== false;
        }
    });

    return preferences;
}

// Show All Columns
function showAllColumns() {
    ['basic', 'income', 'tax', 'other'].forEach(category => {
        saveColumnPreference(currentFormType, category, true);
    });
    renderTable(currentFormType);
}

// Hide Optional Columns
function hideOptionalColumns() {
    saveColumnPreference(currentFormType, 'basic', true);
    saveColumnPreference(currentFormType, 'income', true);
    saveColumnPreference(currentFormType, 'tax', false);
    saveColumnPreference(currentFormType, 'other', false);
    renderTable(currentFormType);
}

// Open Edit Modal
function openEditModal(entryId) {
    editingEntryId = entryId;
    const entry = data[currentFormType].find(e => e.id === entryId);
    if (!entry) return;

    document.getElementById('modalTitle').textContent = 'Edit Entry';
    const form = document.getElementById('entryForm');
    form.innerHTML = '';
    
    const schema = FORM_SCHEMAS[currentFormType];
    schema.fields.forEach(field => {
        const formGroup = createFormField(field, entry[field.key]);
        form.appendChild(formGroup);
    });

    document.getElementById('entryModal').classList.add('active');
}

// Create Form Field
function createFormField(field, value = '') {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const label = document.createElement('label');
    
    // For W-2 form, use formatted label with description
    let labelText;
    if (currentFormType === 'w2' && field.description) {
        labelText = formatW2Header(field);
    } else {
        labelText = field.label;
    }
    label.textContent = labelText + (field.required ? ' *' : '');
    label.setAttribute('for', field.key);
    // Tooltips removed - descriptions now in label text

    let input;
    if (field.type === 'textarea') {
        input = document.createElement('textarea');
        input.rows = 3;
    } else if (field.type === 'boolean') {
        // Boolean fields use checkboxes
        input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = value === true || value === 'true' || value === 1;
        // For checkboxes, we need to handle the value differently
        input.addEventListener('change', function() {
            // Store as boolean in a hidden input for form submission
            const hiddenInput = formGroup.querySelector('input[type="hidden"]');
            if (hiddenInput) {
                hiddenInput.value = this.checked ? 'true' : 'false';
            }
        });
        // Add hidden input to store the boolean value for form submission
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = field.key;
        hiddenInput.value = input.checked ? 'true' : 'false';
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        formGroup.appendChild(hiddenInput);
        return formGroup;
    } else if (field.type === 'number' || field.type === 'currency') {
        input = document.createElement('input');
        input.type = 'number';
        input.step = '0.01';
    } else {
        input = document.createElement('input');
        input.type = 'text';
    }

    input.id = field.key;
    input.name = field.key;
    
    // Set value appropriately
    if (field.type === 'number' || field.type === 'currency') {
        if (value !== null && value !== undefined && value !== '') {
            input.value = typeof value === 'number' ? value : parseFloat(value) || '';
        } else {
            input.value = '';
        }
    } else {
        input.value = value || '';
    }
    
    if (field.required) {
        input.required = true;
    }

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    return formGroup;
}

// Close Modal
function closeModal() {
    document.getElementById('entryModal').classList.remove('active');
    editingEntryId = null;
}

// Handle Form Submit
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const entryData = {};
    
    const schema = FORM_SCHEMAS[currentFormType];
    schema.fields.forEach(field => {
        const value = formData.get(field.key);
        
        if (field.type === 'boolean') {
            // Boolean fields: convert string to boolean
            entryData[field.key] = value === 'true' || value === true;
        } else if (field.type === 'number' || field.type === 'currency') {
            // Number/Currency fields: parse as float
            if (value && value !== '') {
                entryData[field.key] = parseFloat(value) || 0;
            } else {
                entryData[field.key] = '';
            }
        } else {
            // Text fields: keep as string
            entryData[field.key] = value || '';
        }
    });

    if (editingEntryId) {
        await editEntry(currentFormType, editingEntryId, entryData);
    }

    closeModal();
}

// Edit Entry
async function editEntry(formType, entryId, entryData) {
    const index = data[formType].findIndex(e => e.id === entryId);
    if (index === -1) return;
    if (supabase) {
        const { error } = await supabase.from('form_entries').update({ data: entryData }).eq('id', entryId);
        if (error) {
            console.error('Error updating entry:', error);
            showToast('Error updating entry', 'error');
            return;
        }
    }
    data[formType][index] = {
        ...data[formType][index],
        ...entryData,
        id: entryId
    };
    if (!supabase) saveData();
    renderTable(formType);
    showToast('Entry updated successfully', 'success');
}

// Handle Delete Entry
async function handleDeleteEntry(entryId) {
    if (confirm('Are you sure you want to delete this entry?')) {
        await deleteEntry(currentFormType, entryId);
    }
}

// Delete Entry
async function deleteEntry(formType, entryId) {
    if (supabase) {
        const { error } = await supabase.from('form_entries').delete().eq('id', entryId);
        if (error) {
            console.error('Error deleting entry:', error);
            showToast('Error deleting entry', 'error');
            return;
        }
    }
    data[formType] = data[formType].filter(e => e.id !== entryId);
    if (!supabase) saveData();
    renderTable(formType);
    showToast('Entry deleted successfully', 'success');
}

// Handle Delete All
async function handleDeleteAll() {
    if (confirm(`Are you sure you want to delete all entries for ${FORM_SCHEMAS[currentFormType].name}? This cannot be undone.`)) {
        await deleteTable(currentFormType);
    }
}

// Delete Table
async function deleteTable(formType) {
    if (supabase) {
        const { error } = await supabase.from('form_entries').delete().eq('form_type', formType);
        if (error) {
            console.error('Error deleting entries:', error);
            showToast('Error deleting entries', 'error');
            return;
        }
    }
    data[formType] = [];
    if (!supabase) saveData();
    renderTable(formType);
    showToast('All entries deleted', 'success');
}

// Export Current Table
function exportCurrentTable() {
    const tableData = data[currentFormType] || [];
    const json = JSON.stringify(tableData, null, 2);
    copyToClipboard(json);
    showToast('Table data copied to clipboard', 'success');
}

// Export All
function exportAll() {
    const json = JSON.stringify(data, null, 2);
    copyToClipboard(json);
    showToast('All data copied to clipboard', 'success');
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(err => {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    });
}

// Open Import Modal
function openImportModal() {
    document.getElementById('importModal').classList.add('active');
    document.getElementById('importStatus').textContent = '';
    document.getElementById('fileInput').value = '';
    document.getElementById('jsonTextInput').value = '';
}

// Clean JSON Text - Remove invalid syntax like citation markers
function cleanJsonText(jsonText) {
    let cleaned = jsonText;
    const cleaningLog = [];
    
    // Remove citation markers like [cite_start]
    const citeStartPattern = /\[cite_start\]/g;
    if (citeStartPattern.test(cleaned)) {
        const matches = cleaned.match(citeStartPattern);
        cleaned = cleaned.replace(citeStartPattern, '');
        if (matches) {
            cleaningLog.push(`Removed ${matches.length} citation marker(s)`);
        }
    }
    
    // Remove trailing commas before closing braces/brackets (common JSON error)
    cleaned = cleaned.replace(/,(\s*[}\]])/g, '$1');
    
    // Remove single-line comments (// comments) - not standard JSON but sometimes present
    cleaned = cleaned.replace(/\/\/.*$/gm, '');
    
    // Remove multi-line comments (/* comments */) - not standard JSON
    cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, '');
    
    return {
        cleaned: cleaned.trim(),
        wasCleaned: cleaningLog.length > 0,
        cleaningLog: cleaningLog
    };
}

// Parse JSON error to extract helpful information
function parseJsonError(error, jsonText) {
    let message = 'Invalid JSON format';
    let suggestion = '';
    
    // Try to extract line and column from error message
    const lineMatch = error.message.match(/line (\d+)/i);
    const columnMatch = error.message.match(/column (\d+)/i);
    const positionMatch = error.message.match(/position (\d+)/i);
    
    if (lineMatch) {
        const lineNum = parseInt(lineMatch[1]);
        const lines = jsonText.split('\n');
        if (lineNum <= lines.length) {
            const problemLine = lines[lineNum - 1];
            message = `Error on line ${lineNum}`;
            suggestion = `Problem area: "${problemLine.trim().substring(0, 50)}..."`;
        }
    } else if (positionMatch) {
        const pos = parseInt(positionMatch[1]);
        const beforePos = jsonText.substring(Math.max(0, pos - 30), pos);
        const afterPos = jsonText.substring(pos, Math.min(jsonText.length, pos + 30));
        message = `Error near position ${pos}`;
        suggestion = `Problem area: "...${beforePos}>>>HERE<<<${afterPos}..."`;
    }
    
    // Common error suggestions
    if (error.message.includes('property name')) {
        suggestion += ' Check for missing quotes around property names or invalid characters.';
    } else if (error.message.includes('Unexpected token')) {
        suggestion += ' Check for missing commas, extra commas, or invalid characters.';
    } else if (error.message.includes('end of JSON')) {
        suggestion += ' The JSON appears to be incomplete or cut off.';
    }
    
    return { message, suggestion };
}

// Handle JSON Text Submit
async function handleJsonTextSubmit() {
    const jsonText = document.getElementById('jsonTextInput').value.trim();
    
    if (!jsonText) {
        showImportStatus('Please paste JSON data', 'error');
        return;
    }
    
    // Clean the JSON text first
    const { cleaned, wasCleaned, cleaningLog } = cleanJsonText(jsonText);
    
    // Show cleaning feedback if anything was cleaned
    if (wasCleaned && cleaningLog.length > 0) {
        showImportStatus(`Cleaned JSON: ${cleaningLog.join(', ')}. Attempting to import...`, 'info');
    }
    
    try {
        const importedData = JSON.parse(cleaned);
        const validated = validateImportData(importedData);
        
        if (validated) {
            await processImportedData(importedData);
            // Update status if cleaning occurred
            if (wasCleaned) {
                showImportStatus(`Successfully imported! (Note: ${cleaningLog.join(', ')})`, 'success');
            }
        } else {
            showImportStatus('Invalid data format - the JSON structure doesn\'t match expected tax form data', 'error');
        }
    } catch (error) {
        console.error('JSON parse error:', error);
        
        // Parse error for better user feedback
        const { message, suggestion } = parseJsonError(error, cleaned);
        let errorMsg = message;
        if (suggestion) {
            errorMsg += '. ' + suggestion;
        }
        
        // If cleaning occurred but still failed, mention it
        if (wasCleaned) {
            errorMsg += ' (Note: JSON was cleaned but still contains errors)';
        }
        
        showImportStatus(errorMsg, 'error');
    }
}

// Close Import Modal
function closeImportModal() {
    document.getElementById('importModal').classList.remove('active');
    document.getElementById('importStatus').textContent = '';
}

// Handle File Select
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        importData(file);
    }
}

// Handle Drag Over
function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add('drag-over');
}

// Handle Drag Leave
function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('drag-over');
}

// Handle Drop
function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('drag-over');

    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/json' || file.name.endsWith('.json')) {
        importData(file);
    } else {
        showImportStatus('Please drop a JSON file', 'error');
    }
}

// Process Imported Data
async function processImportedData(importedData) {
    const mapped = mapFieldsToForm(importedData, currentFormType);
    let importedCount = 0;
    const entriesToAdd = Array.isArray(mapped) ? mapped : [mapped];

    for (const entry of entriesToAdd) {
        if (supabase) {
            const dataToStore = { ...entry };
            delete dataToStore.id;
            const { data: inserted, error } = await supabase
                .from('form_entries')
                .insert({ form_type: currentFormType, data: dataToStore })
                .select('id')
                .single();
            if (error) {
                console.error('Supabase import error:', error);
                const msg = error.message || (error.code ? `Code: ${error.code}` : 'Unknown error');
                showImportStatus(`Import failed: ${msg}`, 'error');
                showToast(`Import failed: ${msg}`, 'error');
                return;
            }
            data[currentFormType].push({ ...entry, id: inserted.id });
        } else {
            if (!entry.id) {
                entry.id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
            }
            data[currentFormType].push(entry);
        }
        importedCount++;
    }

    if (!supabase) saveData();
    renderTable(currentFormType);
    if (supabase) {
        showImportStatus(`Successfully imported ${importedCount} entry/entries. Saved to Supabase.`, 'success');
    } else {
        showImportStatus(`Successfully imported ${importedCount} entry/entries. Saved to this device only (Supabase not connected).`, 'success');
    }
}

// Import Data
function importData(file) {
    const reader = new FileReader();
    
    reader.onload = async (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            const validated = validateImportData(importedData);
            
            if (validated) {
                await processImportedData(importedData);
            } else {
                showImportStatus('Invalid data format', 'error');
            }
        } catch (error) {
            console.error('Import error:', error);
            showImportStatus('Error reading file: ' + error.message, 'error');
        }
    };
    
    reader.onerror = () => {
        showImportStatus('Error reading file', 'error');
    };
    
    reader.readAsText(file);
}

// Validate Import Data
function validateImportData(data) {
    if (Array.isArray(data)) {
        return data.length > 0 && typeof data[0] === 'object';
    } else if (typeof data === 'object') {
        return Object.keys(data).length > 0;
    }
    return false;
}

// Map Fields to Form
function mapFieldsToForm(importedData, formType) {
    const schema = FORM_SCHEMAS[formType];
    
    // If it's an array, map each entry
    if (Array.isArray(importedData)) {
        return importedData.map(entry => mapSingleEntry(entry, schema));
    }
    
    // If it's an object with form types as keys, extract current form type
    if (importedData[formType]) {
        const entries = importedData[formType];
        if (Array.isArray(entries)) {
            return entries.map(entry => mapSingleEntry(entry, schema));
        }
        return mapSingleEntry(entries, schema);
    }
    
    // Otherwise, treat as single entry
    return mapSingleEntry(importedData, schema);
}

// Map Single Entry
function mapSingleEntry(entry, schema) {
    const mapped = {};
    schema.fields.forEach(field => {
        // Try to find matching field (case-insensitive, handle variations)
        const keys = Object.keys(entry);
        const matchingKey = keys.find(k => 
            k.toLowerCase() === field.key.toLowerCase() ||
            k.toLowerCase().replace(/\s+/g, '') === field.key.toLowerCase().replace(/\s+/g, '')
        );
        
        if (matchingKey !== undefined) {
            const value = entry[matchingKey];
            if (field.type === 'number') {
                mapped[field.key] = parseFloat(value) || 0;
            } else {
                mapped[field.key] = value || '';
            }
        }
    });
    return mapped;
}

// Show Import Status
function showImportStatus(message, type) {
    const statusEl = document.getElementById('importStatus');
    statusEl.textContent = message;
    statusEl.className = `import-status ${type}`;
}

// Theme Functions
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Toast Notification
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastSlideIn 0.3s ease reverse';
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 3000);
}
