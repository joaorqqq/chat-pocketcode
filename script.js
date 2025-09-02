let url = "https://chat-pocketcode.vercel.app/api/chat";

function enviarMensagem() {
  const user = document.getElementById("user").value;
  const text = document.getElementById("text").value;
  if(!user || !text) return alert("Preencha todos os campos");

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, text })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("text").value = "";
    receberMensagens();
  });
}

function receberMensagens() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const messagesDiv = document.getElementById("messages");
      messagesDiv.innerHTML = "";
      data.forEach(msg => {
        const div = document.createElement("div");
        div.textContent = msg.user + ": " + msg.text;
        messagesDiv.appendChild(div);
      });
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
}

setInterval(receberMensagens, 3000);