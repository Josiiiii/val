const noBtn = document.getElementById("noBtn");
const sadFaces = document.getElementById("sadFaces");
const yesBtn = document.getElementById("yesBtn");

function moveButton() {
  const container = document.querySelector(".buttons");

  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  const sadEmojis = ["😢", "🥺", "😭", "😿"];
  const sad = document.createElement("span");
  sad.textContent = sadEmojis[Math.floor(Math.random() * sadEmojis.length)] + " ";
  sadFaces.appendChild(sad);
}

// Mobile = tap
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("click", moveButton);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      min-height:100vh;
      background:pink;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      padding:20px;">
      
      <h1 style="color:#ff4d6d;font-size:36px;">YAYYYY 💖💖💖</h1>
      <img src="https://media.tenor.com/zGm5acSjHCIAAAAi/cat-kiss.gif" style="width:60%;max-width:250px;">
      <p style="font-size:20px;color:#d63384;">Best Valentine ever 😘</p>
    </div>
  `;
});
