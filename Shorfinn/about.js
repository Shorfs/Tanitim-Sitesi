function copyPhoneNumber() {
  const phoneNumber = "0542 646 75 99";
  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      alert("Telefon numarası panoya kopyalandı!");
    })
    .catch((err) => {
      console.error("Kopyalama hatası: ", err);
    });
}
