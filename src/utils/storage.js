// 로컬 스토리지에 items라는 배열 안에 장바구니 상품 추가
export const addCartItemToLocalStorage = (productId, product) => {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify({ selectedAll: false, items: [] }));
  }

  const productsInStorage = JSON.parse(localStorage.getItem("cart"));
  const findProduct = productsInStorage.items.find((item) => item.id === productId);

  if (findProduct) {
    return;
  } else {
    const productInfo = {
      id: productId,
      image: product.image,
      price: product.price,
      quantity: 1,
      selected: false,
      title: product.title,
    };
    // cart 객체의 items 배열에 추가
    productsInStorage.items.push(productInfo);
    localStorage.setItem("cart", JSON.stringify(productsInStorage));
  }
};

// 로컬 스토리지 장바구니 상품 제거
export const removeCartItemFromLocalStorage = (productId) => {
  const productsInStorage = JSON.parse(localStorage.getItem("cart"));
  productsInStorage.items = productsInStorage.items.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(productsInStorage));
};

// 로컬 스토리지 장바구니 조회
export const getCartItemsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart"))?.items || [];
};

// 로컬 스토리지 장바구니 카운트
export const getCartCountFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart"))?.items?.length || 0;
};
