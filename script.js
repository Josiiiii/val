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
      
      <h1 style="color:#ff4d6d;font-size:36px;">YAYAYAYYAYAYA I LOVE YOU SO MUCH MY BABYY</h1>
      <h2 style="color:#ff4d6d;font-size:36px;">hi sweeticakes u majke me very very happy and i cant wait to see you again BRRRRR
       and give you all the hugs and kisses in the world and spoil you like the princess you are i love you so much 😘💕</h2>
       <h3 style="color:#ff4d6d;fo6nt-size:36px;">PRETTIEST GIRL IN THE WHOLE WORLLDDDD </h3>
        <div class="gif-row">
                     <img src="cats-kittens.gif" class="cats">
             <img src="roses-sparkle.gif" class="cats">
              <img src="love-minions.gif" class="cats">
         </div>
      <h3 style="color:#ff4d6d;font-size:36px;">FIRST VALENTINES TGG AWAWAW I MISS YOU SO FERASKING MUHC</h3>
      <p style="font-size:20px;color:#d63384;">best Valentine ever 😘</p>
    </div>
  `;
});
