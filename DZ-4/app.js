document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".phoneContainer");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.map((i) => {
        const card = document.createElement("div");
        card.innerHTML = `<div class="card">
          <p>${i.description}</p>
          <span>${i.price}</span>
          <img class="card_img" src="${i.image}" alt="#">
        </div>`;
        wrapper.append(card);
      });
    });
});
