export const addToCart = (cartItems, product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
  
    if (existingProduct) {
      return cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
  
    return [...cartItems, { ...product, quantity: 1 }];
  };
  
  export const removeFromCart = (cartItems, productId) => {
    return cartItems.filter(item => item.id !== productId);
  };
  
  export const updateQuantity = (cartItems, productId, quantity) => {
    if (quantity <= 0) {
      return removeFromCart(cartItems, productId);
    }
  
    return cartItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
  };
  