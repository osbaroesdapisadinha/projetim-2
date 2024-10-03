// Inicializa o contador de itens no carrinho
let cartCount = 0;

// Seleciona todos os botões de compra
const buyButtons = document.querySelectorAll('.produto button');

// Adiciona um evento de clique a cada botão de compra
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Aumenta o contador de itens no carrinho
    cartCount++;
    // Exibe um alerta informando que o produto foi adicionado ao carrinho
    alert('Produto adicionado ao carrinho!');

    // Atualiza o contador de produtos no carrinho na interface
    updateCartCount();
  });
});

// Função para atualizar o contador no cabeçalho
function updateCartCount() {
  const cartItemCount = document.getElementById('cart-count');
  if (cartItemCount) {
    cartItemCount.textContent = cartCount;
  }
}
