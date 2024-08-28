var liked = false;

const addToCart = document.querySelectorAll(
  ".add-to-cart.btn-wrap.cart-link.d-flex.align-items-center"
);

const quickView = document.querySelectorAll("button i.icon icon-screen-full");
const likeItem = document.querySelectorAll(
  "button.wishlist-btn i.icon.icon-heart"
);

addToCart.forEach((item) => {
  item.addEventListener("click", function () {
    window.location.href = "single-post.html";
  });
});

quickView.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(item);
  });
});

likeItem.forEach((item) => {
  item.addEventListener("click", function () {
    item.style.color = liked ? "red" : "black";
    liked = !liked;
  });
});
