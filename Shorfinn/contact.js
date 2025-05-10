document
  .getElementById("emailForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const statusMsg = document.getElementById("statusMessage");

    statusMsg.textContent = "Gönderiliyor...";
    statusMsg.className = "status-message visible";

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xovdwvde", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        statusMsg.textContent = "Mesajınız gönderildi!";
        statusMsg.className = "status-message success visible";
        form.reset();
      } else {
        throw new Error("Sunucu hatası");
      }
    } catch (error) {
      statusMsg.textContent = "Gönderim başarısız!";
      statusMsg.className = "status-message error visible";
    }
  });

  