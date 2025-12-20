// ============================================
// SISTEMA DE CONTROLE DE ESTOQUE - SUBWAY
// ============================================

// Dados dos produtos pré-configurados
const PRODUCTS_DATA = {
    breads: [
        { id: 'pao_30cm', name: 'Pão 30 cm', emoji: '🥖', initialQty: 0 },
        { id: 'pao_branco', name: 'Pão branco', emoji: '🥖', initialQty: 0 },
        { id: 'pao_9graos', name: 'Pão 9 grãos', emoji: '🥖', initialQty: 0 }
    ],
    drinks: [
        { id: 'agua_sem_gas', name: 'Água sem gás', emoji: '💧', initialQty: 0 },
        { id: 'agua_com_gas', name: 'Água com gás', emoji: '💧', initialQty: 0 },
        { id: 'coca_lata', name: 'Coca Lata', emoji: '🥤', initialQty: 0 },
        { id: 'coca_zero_lata', name: 'Coca Zero Lata', emoji: '🥤', initialQty: 0 },
        { id: 'fanta_laranja_lata', name: 'Fanta Laranja Lata', emoji: '🥤', initialQty: 0 },
        { id: 'fanta_uva_lata', name: 'Fanta Uva Lata', emoji: '🥤', initialQty: 0 },
        { id: 'kuat_lata', name: 'Kuat Lata', emoji: '🥤', initialQty: 0 },
        { id: 'sprite_lata', name: 'Sprite Lata', emoji: '🥤', initialQty: 0 },
        { id: 'sprite_lemon_fresh', name: 'Sprite Lemon Fresh', emoji: '🥤', initialQty: 0 },
        { id: 'schweppes', name: 'Schweppes', emoji: '🥤', initialQty: 0 },
        { id: 'guarana_jesus', name: 'Guaraná Jesus', emoji: '🥤', initialQty: 0 },
        { id: 'del_valle_uva_pet', name: 'Del Valle Uva PET', emoji: '🧃', initialQty: 0 },
        { id: 'del_valle_uva_lata', name: 'Del Valle Uva Lata', emoji: '🧃', initialQty: 0 },
        { id: 'del_valle_maracuja', name: 'Del Valle Maracujá', emoji: '🧃', initialQty: 0 },
        { id: 'del_valle_laranja_pet', name: 'Del Valle Laranja PET', emoji: '🧃', initialQty: 0 },
        { id: 'del_valle_pessego', name: 'Del Valle Pêssego', emoji: '🧃', initialQty: 0 },
        { id: 'suco_laranja', name: 'Suco de Laranja', emoji: '🧃', initialQty: 0 },
        { id: 'suco_uva', name: 'Suco de Uva', emoji: '🧃', initialQty: 0 },
        { id: 'suco_pessego', name: 'Suco de Pêssego', emoji: '🧃', initialQty: 0 }
    ],
    syrups: [
        { id: 'bag_coca_cola', name: 'Bag Coca-Cola', emoji: '🧊', initialQty: 0 },
        { id: 'bag_fanta_laranja', name: 'Bag Fanta Laranja', emoji: '🧊', initialQty: 0 },
        { id: 'bag_coca_zero', name: 'Bag Coca Zero', emoji: '🧊', initialQty: 0 },
        { id: 'bag_kuat', name: 'Bag Kuat', emoji: '🧊', initialQty: 0 },
        { id: 'co2', name: 'CO2', emoji: '🧊', initialQty: 0 }
    ],
    meats: [
        { id: 'proteina_vegana', name: 'Proteína vegana', emoji: '🌱', initialQty: 0 },
        { id: 'carne_insano', name: 'Carne insano', emoji: '🥩', initialQty: 0 },
        { id: 'carne_seca', name: 'Carne seca', emoji: '🥩', initialQty: 0 },
        { id: 'carne_tiras', name: 'Carne em tiras', emoji: '🥩', initialQty: 0 },
        { id: 'steak_churrasco', name: 'Steak churrasco', emoji: '🥩', initialQty: 0 },
        { id: 'presunto', name: 'Presunto', emoji: '🥩', initialQty: 0 },
        { id: 'bacon_fatiado', name: 'Bacon fatiado', emoji: '🥓', initialQty: 0 },
        { id: 'salame_fatiado', name: 'Salame fatiado', emoji: '🥩', initialQty: 0 },
        { id: 'pepperone', name: 'Pepperone', emoji: '🥩', initialQty: 0 },
        { id: 'empanado', name: 'Empanado', emoji: '🍗', initialQty: 0 },
        { id: 'peito_frango', name: 'Peito de frango', emoji: '🍗', initialQty: 0 },
        { id: 'frango_cubos', name: 'Frango em cubos', emoji: '🍗', initialQty: 0 },
        { id: 'frango_tiras', name: 'Frango em tiras', emoji: '🍗', initialQty: 0 },
        { id: 'frango_rotisserie', name: 'Frango Rotisserie', emoji: '🍗', initialQty: 0 },
        { id: 'pernil', name: 'Pernil', emoji: '🥩', initialQty: 0 }
    ],
    cheeses: [
        { id: 'queijo_suico', name: 'Queijo suíço', emoji: '🧀', initialQty: 0 },
        { id: 'queijo_cheddar', name: 'Queijo cheddar', emoji: '🧀', initialQty: 0 },
        { id: 'queijo_ralado', name: 'Queijo ralado', emoji: '🧀', initialQty: 0 },
        { id: 'queijo_mussarela', name: 'Queijo mussarela', emoji: '🧀', initialQty: 0 },
        { id: 'cream_cheese', name: 'Cream cheese', emoji: '🧀', initialQty: 0 },
        { id: 'cheddar_cremoso', name: 'Cheddar cremoso', emoji: '🧀', initialQty: 0 }
    ],
    vegetables: [
        { id: 'alface', name: 'Alface', emoji: '🥬', initialQty: 0 },
        { id: 'tomate', name: 'Tomate', emoji: '🍅', initialQty: 0 },
        { id: 'cebola', name: 'Cebola', emoji: '🧅', initialQty: 0 },
        { id: 'pepino', name: 'Pepino', emoji: '🥒', initialQty: 0 },
        { id: 'pimentao', name: 'Pimentão', emoji: '🫑', initialQty: 0 },
        { id: 'pepino_fatiado', name: 'Pepino fatiado', emoji: '🥒', initialQty: 0 },
        { id: 'azeitona_preta', name: 'Azeitona preta', emoji: '🫒', initialQty: 0 },
        { id: 'cebola_croc', name: 'Cebola Croc', emoji: '🧅', initialQty: 0 }
    ],
    sauces: [
        { id: 'azeite_oliva', name: 'Azeite de oliva', emoji: '🫒', initialQty: 0 },
        { id: 'oregano', name: 'Orégano', emoji: '🌿', initialQty: 0 },
        { id: 'mix_pimentas', name: 'Mix de pimentas', emoji: '🌶️', initialQty: 0 },
        { id: 'molho_cheddar_veg', name: 'Molho Cheddar VEG', emoji: '🧀', initialQty: 0 },
        { id: 'molho_teriyake', name: 'Molho teriyake', emoji: '🍯', initialQty: 0 },
        { id: 'molho_goulash', name: 'Molho Goulash', emoji: '🍲', initialQty: 0 },
        { id: 'molho_chipotle', name: 'Molho chipotle', emoji: '🌶️', initialQty: 0 },
        { id: 'molho_barbecue', name: 'Molho barbecue', emoji: '🔥', initialQty: 0 },
        { id: 'molho_supreme', name: 'Molho Supreme', emoji: '🥄', initialQty: 0 },
        { id: 'mostarda_mel', name: 'Mostarda e mel', emoji: '🍯', initialQty: 0 },
        { id: 'maionese', name: 'Maionese', emoji: '🥄', initialQty: 0 },
        { id: 'maionese_alho', name: 'Maionese Alho', emoji: '🥄', initialQty: 0 },
        { id: 'pasta_alho', name: 'Pasta de alho', emoji: '🧄', initialQty: 0 },
        { id: 'm_temperada', name: 'M. Temperada', emoji: '🥄', initialQty: 0 },
        { id: 'm_parmesan', name: 'M. Parmesan', emoji: '🧀', initialQty: 0 }
    ],
    sides: [
        { id: 'batata_rustica', name: 'Batata Rústica', emoji: '🍟', initialQty: 0 },
        { id: 'saladeira', name: 'Saladeira', emoji: '🥗', initialQty: 0 }
    ],
    snacks: [
        { id: 'ruffles_original', name: 'Ruffles original', emoji: '🍟', initialQty: 0 },
        { id: 'doritos', name: 'Doritos', emoji: '🌮', initialQty: 0 },
        { id: 'cookie', name: 'Cookie', emoji: '🍪', initialQty: 0 },
        { id: 'cookie_gotas_chocolate', name: 'Cookie gotas chocolate', emoji: '🍪', initialQty: 0 },
        { id: 'cookie_chocolate', name: 'Cookie chocolate', emoji: '🍪', initialQty: 0 },
        { id: 'saco_cookies', name: 'Saco de cookies', emoji: '🍪', initialQty: 0 }
    ],
    packaging: [
        { id: 'saco_sos_15cm', name: 'Saco SOS 15 cm', emoji: '🛍️', initialQty: 0 },
        { id: 'saco_sos_30cm', name: 'Saco SOS 30 cm', emoji: '🛍️', initialQty: 0 },
        { id: 'saco_sos_lata', name: 'Saco SOS Lata', emoji: '🛍️', initialQty: 0 },
        { id: 'copo_330ml', name: 'Copo 330 ml', emoji: '🥤', initialQty: 0 },
        { id: 'copo_440ml', name: 'Copo 440 ml', emoji: '🥤', initialQty: 0 },
        { id: 'copo_liso_200ml', name: 'Copo liso 200 ml', emoji: '🥤', initialQty: 0 },
        { id: 'tampa_330ml', name: 'Tampa 330 ml', emoji: '🔲', initialQty: 0 },
        { id: 'tampa_440ml', name: 'Tampa 440 ml', emoji: '🔲', initialQty: 0 },
        { id: 'guardanapo', name: 'Guardanapo', emoji: '📄', initialQty: 0 },
        { id: 'canudo', name: 'Canudo', emoji: '🥤', initialQty: 0 },
        { id: 'papel_setup', name: 'Papel setup', emoji: '📄', initialQty: 0 },
        { id: 'subwrap_40x25', name: 'Subwrap 40x25', emoji: '📦', initialQty: 0 },
        { id: 'subwrap_40x50', name: 'Subwrap 40x50', emoji: '📦', initialQty: 0 },
        { id: 'pote_molho', name: 'Pote molho', emoji: '🥄', initialQty: 0 },
        { id: 'cps', name: 'CPS', emoji: '📦', initialQty: 0 }
    ],
    cleaning: [
        { id: 'saco_lixo_200l', name: 'Saco de lixo 200L', emoji: '🗑️', initialQty: 0 },
        { id: 'saco_lixo_100l', name: 'Saco de lixo 100L', emoji: '🗑️', initialQty: 0 },
        { id: 'saco_lixo_60l', name: 'Saco de lixo 60L', emoji: '🗑️', initialQty: 0 },
        { id: 'saco_lixo_20l', name: 'Saco de lixo 20L', emoji: '🗑️', initialQty: 0 },
        { id: 'papel_higienico', name: 'Papel higiênico', emoji: '🧻', initialQty: 0 },
        { id: 'papel_toalha', name: 'Papel toalha', emoji: '🧻', initialQty: 0 },
        { id: 'sanitizer', name: 'Sanitizer', emoji: '🧴', initialQty: 0 },
        { id: 'multiuso', name: 'Multiuso', emoji: '🧴', initialQty: 0 },
        { id: 'detergente', name: 'Detergente', emoji: '🧴', initialQty: 0 },
        { id: 'sabonete', name: 'Sabonete', emoji: '🧼', initialQty: 0 },
        { id: 'sabonete_bactericida', name: 'Sabonete bactericida', emoji: '🧼', initialQty: 0 },
        { id: 'limpa_vidro_spirit', name: 'Limpa vidro – Spirit', emoji: '🧴', initialQty: 0 },
        { id: 'alcool_gel', name: 'Álcool em gel', emoji: '🧴', initialQty: 0 },
        { id: 'polidor_inox', name: 'Polidor de inox', emoji: '✨', initialQty: 0 },
        { id: 'limpa_piso', name: 'Limpa piso', emoji: '🧹', initialQty: 0 },
        { id: 'limpa_tabua', name: 'Limpa tábua', emoji: '🧹', initialQty: 0 },
        { id: 'desengordurante', name: 'Desengordurante', emoji: '🧴', initialQty: 0 },
        { id: 'pano_rolo', name: 'Pano em rolo', emoji: '🧽', initialQty: 0 },
        { id: 'luvas', name: 'Luvas', emoji: '🧤', initialQty: 0 },
        { id: 'esponja_dupla_face', name: 'Esponja dupla face', emoji: '🧽', initialQty: 0 }
    ],
    labels: [
        { id: 'etiqueta_validade', name: 'Etiqueta de validade', emoji: '🏷️', initialQty: 0 },
        { id: 'etiqueta_validade_freezer', name: 'Etiqueta validade freezer', emoji: '🏷️', initialQty: 0 },
        { id: 'etiqueta_logo', name: 'Etiqueta logo', emoji: '🏷️', initialQty: 0 },
        { id: 'etiqueta_delivery', name: 'Etiqueta delivery', emoji: '🏷️', initialQty: 0 },
        { id: 'bobina', name: 'Bobina', emoji: '📋', initialQty: 0 }
    ],
    utensils: [
        { id: 'talher', name: 'Talher', emoji: '🍴', initialQty: 0 },
        { id: 'redinha_cabelo', name: 'Redinha de cabelo', emoji: '👒', initialQty: 0 }
    ]
};

// Estado global da aplicação
let currentUser = null;
let inventory = {};
let responsibleName = null; // Nome do responsável pelo inventário

// ============================================
// SISTEMA DE AUTENTICAÇÃO
// ============================================

// Inicializar sistema de autenticação
function initAuth() {
    // Sempre mostrar a tela de login ao abrir o site
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
    // Limpar inventário da memória
    inventory = {};
    responsibleName = null;
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
    
    // Sempre zerar todas as quantidades ao fazer login (antes de carregar)
    resetInventoryOnLogin();
    
    // Garantir que todos os produtos estejam no inventário
    ensureAllProductsInInventory();
    
    renderProducts();
    updateTotalUsed();
    updateResponsibleDisplay();
    setupMainListeners();
}

// ============================================
// GERENCIAMENTO DE INVENTÁRIO
// ============================================

// Zerar todas as quantidades ao fazer login
function resetInventoryOnLogin() {
    // Inicializar inventário vazio (todas as quantidades zeradas)
    inventory = initializeEmptyInventory();
    // Definir o responsável como o usuário atual
    responsibleName = currentUser;
    
    // Salvar o inventário zerado (sobrescreve qualquer dado anterior)
    const today = getTodayDate();
    const dataToSave = {
        inventory: inventory,
        responsible: responsibleName || currentUser,
        date: today,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem(`inventory_${currentUser}_${today}`, JSON.stringify(dataToSave));
}

// Carregar inventário do localStorage
function loadInventory() {
    const today = getTodayDate();
    const saved = localStorage.getItem(`inventory_${currentUser}_${today}`);
    
    if (saved) {
        const data = JSON.parse(saved);
        // Compatibilidade com formato antigo
        if (data.inventory) {
            inventory = data.inventory;
            // Se houver responsável salvo, usar ele; senão, usar o usuário atual
            responsibleName = data.responsible || currentUser;
        } else {
            // Formato antigo (apenas inventory direto)
            inventory = data;
            responsibleName = currentUser;
        }
    } else {
        // Inicializar inventário vazio
        inventory = initializeEmptyInventory();
        // Definir o responsável como o usuário atual
        responsibleName = currentUser;
    }
    
    // Garantir que todos os produtos estejam no inventário
    ensureAllProductsInInventory();
    
    // Atualizar exibição do responsável
    updateResponsibleDisplay();
}

// Salvar inventário no localStorage
function saveInventory() {
    const today = getTodayDate();
    const dataToSave = {
        inventory: inventory,
        responsible: responsibleName || currentUser,
        date: today,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem(`inventory_${currentUser}_${today}`, JSON.stringify(dataToSave));
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
    renderProductCategory('drinks', 'drinksGrid');
    renderProductCategory('syrups', 'syrupsGrid');
    renderProductCategory('meats', 'meatsGrid');
    renderProductCategory('cheeses', 'cheesesGrid');
    renderProductCategory('vegetables', 'vegetablesGrid');
    renderProductCategory('sauces', 'saucesGrid');
    renderProductCategory('sides', 'sidesGrid');
    renderProductCategory('snacks', 'snacksGrid');
    renderProductCategory('packaging', 'packagingGrid');
    renderProductCategory('cleaning', 'cleaningGrid');
    renderProductCategory('labels', 'labelsGrid');
    renderProductCategory('utensils', 'utensilsGrid');
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
        <div class="product-quantity editable-quantity" id="qty_${productId}" contenteditable="false" tabindex="0">${currentQuantity}</div>
        <div class="product-controls">
            <button type="button" class="quantity-btn decrease" data-product="${productId}" data-action="decrease" ${currentQuantity === 0 ? 'disabled' : ''}>-</button>
            <button type="button" class="quantity-btn increase" data-product="${productId}" data-action="increase">+</button>
        </div>
    `;
    
    // Adicionar listeners aos botões usando event delegation mais robusta
    const decreaseBtn = card.querySelector('.decrease');
    const increaseBtn = card.querySelector('.increase');
    const quantityElement = card.querySelector('.product-quantity');
    
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
    
    // Tornar quantidade editável ao clicar
    if (quantityElement) {
        quantityElement.addEventListener('click', function(e) {
            e.stopPropagation();
            // Tornar editável
            this.contentEditable = 'true';
            this.focus();
            // Selecionar todo o texto
            const range = document.createRange();
            range.selectNodeContents(this);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        });
        
        quantityElement.addEventListener('blur', function() {
            // Quando perder o foco, validar e atualizar
            const newValue = parseInt(this.textContent.trim()) || 0;
            // Garantir que não seja negativo
            const finalValue = Math.max(0, newValue);
            this.textContent = finalValue;
            this.contentEditable = 'false';
            
            // Atualizar o inventário com o novo valor
            if (inventory[productId]) {
                const oldValue = inventory[productId].quantity || 0;
                const difference = finalValue - oldValue;
                if (difference !== 0) {
                    updateQuantity(productId, difference);
                }
            }
        });
        
        quantityElement.addEventListener('keydown', function(e) {
            // Permitir Enter para confirmar
            if (e.key === 'Enter') {
                e.preventDefault();
                this.blur();
            }
            // Permitir Escape para cancelar
            if (e.key === 'Escape') {
                e.preventDefault();
                this.textContent = inventory[productId]?.quantity || 0;
                this.contentEditable = 'false';
                this.blur();
            }
            // Permitir apenas números, backspace, delete, arrow keys, etc.
            if (!/[0-9]/.test(e.key) && 
                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab', 'Enter', 'Escape'].includes(e.key) &&
                !(e.ctrlKey && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase()))) {
                e.preventDefault();
            }
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
    
    // Atualizar interface (apenas se não estiver em modo de edição)
    const quantityElement = document.getElementById(`qty_${productId}`);
    if (quantityElement && quantityElement.contentEditable !== 'true') {
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
    const exportBtn = document.getElementById('exportBtn');
    // Remover listener anterior se existir
    const newExportBtn = exportBtn.cloneNode(true);
    exportBtn.parentNode.replaceChild(newExportBtn, exportBtn);
    newExportBtn.addEventListener('click', exportInventory);
    
    // Importar inventário
    const importBtn = document.getElementById('importBtn');
    // Remover listener anterior se existir
    const newImportBtn = importBtn.cloneNode(true);
    importBtn.parentNode.replaceChild(newImportBtn, importBtn);
    newImportBtn.addEventListener('click', () => {
        document.getElementById('fileInput').click();
    });
    
    // Configurar listener do fileInput (remover anterior se existir)
    const fileInput = document.getElementById('fileInput');
    const newFileInput = fileInput.cloneNode(true);
    fileInput.parentNode.replaceChild(newFileInput, fileInput);
    newFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            importInventory(file);
            // Limpar o valor do input para permitir importar o mesmo arquivo novamente
            e.target.value = '';
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

// Atualizar exibição do responsável
function updateResponsibleDisplay() {
    const responsibleElement = document.getElementById('responsibleName');
    if (responsibleElement) {
        responsibleElement.textContent = responsibleName || currentUser || '-';
    }
}

// Exportar inventário para arquivo JSON
function exportInventory() {
    const today = getTodayDate();
    const exportData = {
        date: today,
        user: currentUser,
        responsible: responsibleName || currentUser, // Salvar o responsável
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
                
                // Se o arquivo importado tem um responsável, usar ele
                if (importedData.responsible) {
                    responsibleName = importedData.responsible;
                }
                
                saveInventory();
                renderProducts();
                updateTotalUsed();
                updateResponsibleDisplay();
                
                // Limpar o input file para evitar loops
                const fileInput = document.getElementById('fileInput');
                if (fileInput) {
                    fileInput.value = '';
                }
                
                alert('Inventário importado com sucesso!');
            } else {
                alert('Arquivo inválido! O arquivo não contém dados de inventário.');
            }
        } catch (error) {
            alert('Erro ao importar arquivo! Verifique se o arquivo é um JSON válido.');
            console.error('Erro na importação:', error);
            
            // Limpar o input file mesmo em caso de erro
            const fileInput = document.getElementById('fileInput');
            if (fileInput) {
                fileInput.value = '';
            }
        }
    };
    
    reader.readAsText(file);
}

// Limpar/zerar todos os dados do inventário
function clearInventory() {
    if (confirm('Tem certeza que deseja limpar todos os dados do inventário de hoje?\n\nEsta ação não pode ser desfeita!\n\nO responsável será atualizado para você.')) {
        // Zerar todas as quantidades
        Object.keys(inventory).forEach(productId => {
            if (inventory[productId]) {
                inventory[productId].quantity = 0;
            }
        });
        
        // Redefinir o responsável para o usuário atual
        responsibleName = currentUser;
        
        // Salvar e atualizar interface
        saveInventory();
        renderProducts();
        updateTotalUsed();
        updateResponsibleDisplay();
        
        alert('Inventário limpo com sucesso!\nTodas as quantidades foram zeradas.\nVocê é agora o responsável pelo inventário.');
    }
}

// ============================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ============================================

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
});

