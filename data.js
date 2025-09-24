const fileInput = document.getElementById("file");
const square = document.getElementById("square");
const downloadButton = document.getElementById("download");

square.style.display = "none";

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    square.style.display = "block";

    reader.onload = (e) => {
      const imageUrl = e.target.result;

      square.style.backgroundImage = `url('${imageUrl}')`;
      square.style.backgroundSize = "cover";
      square.style.backgroundPosition = "center";
      square.style.backgroundRepeat = "no-repeat";
    };

    reader.readAsDataURL(file);
  }
});

downloadButton.addEventListener("click", () => {
  if (square.style.display !== "none") {
    html2canvas(square, {
      useCORS: true,
    }).then((canvas) => {
      const link = document.createElement("a");

      link.download = "imagem_customizada.png";
      link.href = canvas.toDataURL("image/png");

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  } else {
    alert("Por favor, selecione uma imagem antes de fazer o download!");
  }
});
