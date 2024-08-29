document.addEventListener("DOMContentLoaded", function () {
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
      const image =
        item.parentElement.parentElement.parentElement.firstElementChild
          .firstElementChild;

      const productDetails =
        item.parentElement.parentElement.nextElementSibling;

      const pname = productDetails.firstElementChild;
      const price = pname.nextElementSibling;

      const data = {
        image: image.getAttribute("src"),
        pname: pname.textContent,
        price: price.textContent,
      };

      const queryString = new URLSearchParams(data).toString();

      const singlePostUrl = `single-post.html?${queryString}`;
      window.location.href = singlePostUrl;
    });
  });

  quickView.forEach((item) => {
    item.addEventListener("click", function () {});
  });

  likeItem.forEach((item) => {
    item.addEventListener("click", function () {
      item.style.color = liked ? "red" : "black";
      liked = !liked;
    });
  });
});
