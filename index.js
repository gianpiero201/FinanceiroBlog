const pix =
  "00020126580014BR.GOV.BCB.PIX0136edfa7fe4-d5f9-4ee2-a4c4-d2d32eb294805204000053039865802BR5916Gianpiero Giglio6009SAO PAULO61080540900062250521zDIBCGx9HnRi4bo1277zu63040EB2";

async function copiarChavePix() {
  await navigator.clipboard.writeText(pix);
}

function toggleQRCode() {
  const qrcodeElement = document.getElementById("qrcode");
  if (!qrcodeElement.style.display || qrcodeElement.style.display === "none") {
    qrcodeElement.style.display = "block";
    generateQRCode();
  } else {
    qrcodeElement.style.display = "none";
  }
}

function generateQRCode() {
  const qrcodeElement = document.getElementById("qrcode");
  if (qrcodeElement.innerHTML === "") {
    new QRCode(qrcodeElement, pix);
  }
}

window.addEventListener("resize", function () {
  const qrcodeElement = document.getElementById("qrcode");
  if (qrcodeElement.style.display === "block") {
    qrcodeElement.innerHTML = "";
    generateQRCode();
  }
});
