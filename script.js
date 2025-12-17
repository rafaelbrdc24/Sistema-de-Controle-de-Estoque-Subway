// ============================================
// SISTEMA DE CONTROLE DE ESTOQUE - SUBWAY
// ============================================

// Dados dos produtos pré-configurados
const PRODUCTS_DATA = {
    breads: [
        { id: 'bread_italian', name: 'Pão Italiano', emoji: '🍞', initialQty: 0 },
        { id: 'bread_9grain', name: 'Pão 9 Grãos', emoji: '🥖', initialQty: 0 },
        { id: 'bread_parmesan', name: 'Pão Parmesão', emoji: '🧀', initialQty: 0 },
        { id: 'bread_flatbread', name: 'Flatbread', emoji: '🥯', initialQty: 0 },
        { id: 'bread_wrap', name: 'Wrap', emoji: '🌯', initialQty: 0 }
    ],
    condiments: [
        { id: 'mayo', name: 'Maionese', emoji: '🥄', initialQty: 0 },
        { id: 'mustard', name: 'Mostarda', emoji: '🟡', initialQty: 0 },
        { id: 'ketchup', name: 'Ketchup', emoji: '🍅', initialQty: 0 },
        { id: 'ranch', name: 'Ranch', emoji: '🥛', initialQty: 0 },
        { id: 'chipotle', name: 'Chipotle', emoji: '🌶️', initialQty: 0 },
        { id: 'honey_mustard', name: 'Mel e Mostarda', emoji: '🍯', initialQty: 0 },
        { id: 'sweet_onion', name: 'Cebola Doce', emoji: '🧅', initialQty: 0 },
        { id: 'bbq', name: 'Barbecue', emoji: '🔥', initialQty: 0 }
    ],
    ingredients: [
        { id: 'lettuce', name: 'Alface', emoji: '🥬', initialQty: 0 },
        { id: 'tomato', name: 'Tomate', emoji: '🍅', initialQty: 0 },
        { id: 'onion', name: 'Cebola', emoji: '🧅', initialQty: 0 },
        { id: 'pepper', name: 'Pimentão', emoji: '🫑', initialQty: 0 },
        { id: 'pickles', name: 'Picles', emoji: '🥒', initialQty: 0 },
        { id: 'olives', name: 'Azeitonas', emoji: '🫒', initialQty: 0 },
        { id: 'jalapeno', name: 'Jalapeño', emoji: '🌶️', initialQty: 0 },
        { id: 'cheese', name: 'Queijo', emoji: '🧀', initialQty: 0 },
        { id: 'bacon', name: 'Bacon', emoji: '🥓', initialQty: 0 },
        { id: 'chicken', name: 'Frango', emoji: '🍗', initialQty: 0 },
        { id: 'ham', name: 'Presunto', emoji: '🥩', initialQty: 0 },
        { id: 'turkey', name: 'Peito de Peru', emoji: '🦃', initialQty: 0 }
    ],
    supplies: [
        { id: 'napkins', name: 'Guardanapos', emoji: '📄', initialQty: 0 },
        { id: 'cups', name: 'Copos', emoji: '🥤', initialQty: 0 },
        { id: 'lids', name: 'Tampas', emoji: '🔲', initialQty: 0 },
        { id: 'straws', name: 'Canudos', emoji: '🥤', initialQty: 0 },
        { id: 'bags', name: 'Sacolas', emoji: '🛍️', initialQty: 0 },
        { id: 'gloves', name: 'Luvas', emoji: '🧤', initialQty: 0 },
        { id: 'wrappers', name: 'Embalagens', emoji: '📦', initialQty: 0 }
    ]
};

// Estado global da aplicação
let currentUser = null;
let inventory = {};

// ============================================
// SISTEMA DE AUTENTICAÇÃO
// ============================================

// Inicializar sistema de autenticação
function initAuth() {
    // Verificar se há usuário logado
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = savedUser;
        showMainScreen();
        return;
    }
    
    showLoginScreen();
    setupAuthListeners();
}

// Configurar listeners de autenticação
function setupAuthListeners() {
    // Login
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (login(username, password)) {
            showMainScreen();
        } else {
            alert('Usuário ou senha incorretos!');
        }
    });
    
    // Registro
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('newUsername').value;
        const password = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }
        
        if (register(username, password)) {
            alert('Usuário cadastrado com sucesso!');
            document.getElementById('showLogin').click();
        } else {
            alert('Usuário já existe!');
        }
    });
    
    // Alternar entre login e registro
    document.getElementById('showRegister').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('registerForm').classList.remove('hidden');
    });
    
    document.getElementById('showLogin').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    });
}

// Função de login
function login(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[username] && users[username].password === password) {
        currentUser = username;
        localStorage.setItem('currentUser', username);
        return true;
    }
    
    return false;
}

// Função de registro
function register(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[username]) {
        return false; // Usuário já existe
    }
    
    users[username] = { password: password, createdAt: new Date().toISOString() };
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

// Função de logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLoginScreen();
    // Limpar formulários
    document.getElementById('loginForm').reset();
    document.getElementById('registerForm').reset();
}

// ============================================
// NAVEGAÇÃO ENTRE TELAS
// ============================================

function showLoginScreen() {
    document.getElementById('loginScreen').classList.add('active');
    document.getElementById('mainScreen').classList.remove('active');
}

function showMainScreen() {
    document.getElementById('loginScreen').classList.remove('active');
    document.getElementById('mainScreen').classList.add('active');
    
    // Atualizar interface
    document.getElementById('currentUser').textContent = currentUser;
    updateDate();
    loadInventory();
    renderProducts();
    updateTotalUsed();
    setupMainListeners();
}

// ============================================
// GERENCIAMENTO DE INVENTÁRIO
// ============================================

// Carregar inventário do localStorage
function loadInventory() {
    const today = getTodayDate();
    const saved = localStorage.getItem(`inventory_${currentUser}_${today}`);
    
    if (saved) {
        inventory = JSON.parse(saved);
    } else {
        // Inicializar inventário vazio
        inventory = initializeEmptyInventory();
    }
    
    // Garantir que todos os produtos estejam no inventário
    ensureAllProductsInInventory();
}

// Salvar inventário no localStorage
function saveInventory() {
    const today = getTodayDate();
    localStorage.setItem(`inventory_${currentUser}_${today}`, JSON.stringify(inventory));
    updateTotalUsed();
}

// Inicializar inventário vazio
function initializeEmptyInventory() {
    const empty = {};
    
    Object.keys(PRODUCTS_DATA).forEach(category => {
        PRODUCTS_DATA[category].forEach(product => {
            empty[product.id] = {
                id: product.id,
                name: product.name,
                emoji: product.emoji,
                quantity: 0,
                category: category
            };
        });
    });
    
    return empty;
}

// Garantir que todos os produtos estejam no inventário
function ensureAllProductsInInventory() {
    Object.keys(PRODUCTS_DATA).forEach(category => {
        PRODUCTS_DATA[category].forEach(product => {
            if (!inventory[product.id]) {
                inventory[product.id] = {
                    id: product.id,
                    name: product.name,
                    emoji: product.emoji,
                    quantity: 0,
                    category: category
                };
            }
        });
    });
}

// Obter data de hoje no formato YYYY-MM-DD
function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// Atualizar data na interface
function updateDate() {
    const today = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    document.getElementById('currentDate').textContent = today.toLocaleDateString('pt-BR', options);
}

// ============================================
// RENDERIZAÇÃO DE PRODUTOS
// ============================================

function renderProducts() {
    renderProductCategory('breads', 'breadsGrid');
    renderProductCategory('condiments', 'condimentsGrid');
    renderProductCategory('ingredients', 'ingredientsGrid');
    renderProductCategory('supplies', 'suppliesGrid');
}

function renderProductCategory(category, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    PRODUCTS_DATA[category].forEach(product => {
        // Garantir que o produto está no inventário
        if (!inventory[product.id]) {
            inventory[product.id] = {
                id: product.id,
                name: product.name,
                emoji: product.emoji,
                quantity: 0,
                category: category
            };
        }
        
        const productData = inventory[product.id];
        const card = createProductCard(productData);
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    // Garantir que temos o ID do produto
    const productId = product.id;
    const currentQuantity = product.quantity || 0;
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = productId;
    
    card.innerHTML = `
        <div class="product-image">${product.emoji}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-quantity" id="qty_${productId}">${currentQuantity}</div>
        <div class="product-controls">
            <button type="button" class="quantity-btn decrease" data-product="${productId}" data-action="decrease" ${currentQuantity === 0 ? 'disabled' : ''}>-</button>
            <button type="button" class="quantity-btn increase" data-product="${productId}" data-action="increase">+</button>
        </div>
    `;
    
    // Adicionar listeners aos botões usando event delegation mais robusta
    const decreaseBtn = card.querySelector('.decrease');
    const increaseBtn = card.querySelector('.increase');
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            updateQuantity(productId, -1);
        });
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            updateQuantity(productId, 1);
        });
    }
    
    return card;
}

// ============================================
// ATUALIZAÇÃO DE QUANTIDADES
// ============================================

function updateQuantity(productId, change) {
    // Garantir que o produto existe no inventário
    if (!inventory[productId]) {
        const product = findProductById(productId);
        if (product) {
            inventory[productId] = {
                id: product.id,
                name: product.name,
                emoji: product.emoji,
                quantity: 0,
                category: product.category
            };
        } else {
            return;
        }
    }
    
    const currentQty = inventory[productId].quantity || 0;
    const newQuantity = currentQty + change;
    
    // Validação: não permitir quantidades negativas
    if (newQuantity < 0) {
        return;
    }
    
    inventory[productId].quantity = newQuantity;
    
    // Atualizar interface
    const quantityElement = document.getElementById(`qty_${productId}`);
    if (quantityElement) {
        quantityElement.textContent = newQuantity;
    }
    
    // Atualizar estado do botão de diminuir
    const decreaseBtn = document.querySelector(`[data-product="${productId}"][data-action="decrease"]`);
    if (decreaseBtn) {
        decreaseBtn.disabled = newQuantity === 0;
    }
    
    // Salvar e atualizar total
    saveInventory();
}

function findProductById(productId) {
    for (const category of Object.keys(PRODUCTS_DATA)) {
        const product = PRODUCTS_DATA[category].find(p => p.id === productId);
        if (product) {
            return { ...product, category };
        }
    }
    return null;
}

// ============================================
// CÁLCULO DO TOTAL USADO
// ============================================

function updateTotalUsed() {
    let total = 0;
    Object.keys(inventory).forEach(productId => {
        total += inventory[productId].quantity || 0;
    });
    
    document.getElementById('totalUsed').textContent = total;
}

// ============================================
// EXPORTAÇÃO E IMPORTAÇÃO DE DADOS
// ============================================

function setupMainListeners() {
    // Sistema de Abas
    setupTabs();
    
    // Exportar inventário
    document.getElementById('exportBtn').addEventListener('click', exportInventory);
    
    // Importar inventário
    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('fileInput').click();
    });
    
    document.getElementById('fileInput').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            importInventory(file);
        }
    });
    
    // Limpar dados
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearInventory);
    }
    
    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        // Remover event listeners anteriores para evitar duplicação
        const newLogoutBtn = logoutBtn.cloneNode(true);
        logoutBtn.parentNode.replaceChild(newLogoutBtn, logoutBtn);
        
        newLogoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (confirm('Deseja realmente sair?')) {
                logout();
            }
        });
    }
}

// Configurar sistema de abas
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remover classe active de todos os botões e conteúdos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado e conteúdo correspondente
            button.classList.add('active');
            const targetContent = document.getElementById(`tab-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Exportar inventário para arquivo JSON
function exportInventory() {
    const today = getTodayDate();
    const exportData = {
        date: today,
        user: currentUser,
        inventory: inventory,
        exportedAt: new Date().toISOString()
    };
    
    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `inventory_${today}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(`Inventário exportado com sucesso!\nArquivo: inventory_${today}.json\n\nSalve este arquivo na pasta sincronizada com o Google Drive.`);
}

// Importar inventário de arquivo JSON
function importInventory(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            
            if (importedData.inventory) {
                // Mesclar dados importados com inventário atual
                Object.keys(importedData.inventory).forEach(productId => {
                    if (inventory[productId]) {
                        // Se o produto já existe, manter a maior quantidade ou somar
                        // Por padrão, vamos substituir para restaurar o estado exato
                        inventory[productId] = importedData.inventory[productId];
                    } else {
                        inventory[productId] = importedData.inventory[productId];
                    }
                });
                
                saveInventory();
                renderProducts();
                updateTotalUsed();
                
                alert('Inventário importado com sucesso!');
            } else {
                alert('Arquivo inválido! O arquivo não contém dados de inventário.');
            }
        } catch (error) {
            alert('Erro ao importar arquivo! Verifique se o arquivo é um JSON válido.');
            console.error('Erro na importação:', error);
        }
    };
    
    reader.readAsText(file);
}

// Limpar/zerar todos os dados do inventário
function clearInventory() {
    if (confirm('Tem certeza que deseja limpar todos os dados do inventário de hoje?\n\nEsta ação não pode ser desfeita!')) {
        // Zerar todas as quantidades
        Object.keys(inventory).forEach(productId => {
            if (inventory[productId]) {
                inventory[productId].quantity = 0;
            }
        });
        
        // Salvar e atualizar interface
        saveInventory();
        renderProducts();
        updateTotalUsed();
        
        alert('Inventário limpo com sucesso! Todas as quantidades foram zeradas.');
    }
}

// ============================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ============================================

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
});

