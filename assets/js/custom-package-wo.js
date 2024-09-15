/**
 * Custom Package Untuk WO (Wedding Organizer)
 */
document
  .getElementById("sendPackageCustom")
  .addEventListener("click", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Dapatkan nilai input dari form
    const fullName = document.getElementById("fullName").value;
    const weddingDate = document.getElementById("weddingDate").value;
    const eventLocation = document.getElementById("eventLocation").value;
    const guestCount = document.getElementById("guestCount").value;
    const theme = document.getElementById("theme").value;
    const budget = document.getElementById("budget").value;
    const specialMessage = document.getElementById("specialMessage").value;
    const confirmationCheck =
      document.getElementById("confirmationCheck").checked;

    // Membuat pesan whatsapp
    const message =
      `*Halo, saya ingin memesan custom dengan detail berikut:* \n\n` +
      `- Nama Lengkap: ${fullName}\n` +
      `- Tanggal Pernikahan: ${weddingDate}\n` +
      `- Tempat Acara: ${eventLocation}\n` +
      `- Jumlah Tamu: ${guestCount}\n` +
      `- Tema atau Konsep: ${theme}\n` +
      `- Anggaran Total: ${budget}\n` +
      `- Pesan Khusus: ${specialMessage}`;

    // WhatsApp URL
    const phoneNumber = "6282298066188"; // WhatsApp number
    const waURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Validasi input
    if (
      fullName === "" ||
      weddingDate === "" ||
      eventLocation === "" ||
      guestCount === "" ||
      theme === "" ||
      budget === "" ||
      specialMessage == "" ||
      !confirmationCheck
    ) {
      alert("Harap lengkapi semua data yang dibutuhkan!");
      return;
    } else {
      window.open(waURL, "_blank");
    }
  });

/**
 * Custom Package Untuk Banner Awal
 */
document
  .getElementById("sendPackageCustom")
  .addEventListener("click", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const productType = document.getElementById("productType").value;
    const customDescription =
      document.getElementById("customDescription").value;
    const quantity = document.getElementById("quantity").value;
    const specifications = document.getElementById("specifications").value;
    const deliveryDate = document.getElementById("deliveryDate").value;

    // Create WhatsApp message
    const message =
      `*Halo, saya ingin memesan custom dengan detail berikut:* \n\n` +
      `- Jenis Produk/Layanan: ${productType}\n` +
      `- Deskripsi Kustomisasi: ${customDescription}\n` +
      `- Jumlah Pesanan: ${quantity}\n` +
      `- Spesifikasi: ${specifications}\n` +
      `- Tanggal Pengiriman: ${deliveryDate}`;

    // WhatsApp URL
    const phoneNumber = "6282298066188"; // WhatsApp number
    const waURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Validate input
    if (
      productType === "" ||
      customDescription === "" ||
      quantity === "" ||
      specifications === "" ||
      deliveryDate === ""
    ) {
      alert("Harap lengkapi semua data yang dibutuhkan!");
    } else {
      window.open(waURL, "_blank");
    }
  });
