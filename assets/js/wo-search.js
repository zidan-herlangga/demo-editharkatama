document.addEventListener("DOMContentLoaded", () => {
  const packagesContainer = document.getElementById("packages");
  const modalElement = document.getElementById("exampleModal");
  const closeBtn = document.querySelector(".btn-close");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalVenue = document.getElementById("modal-venue");
  const modalPrice = document.getElementById("modal-price");
  const modalDescription = document.getElementById("modal-description");
  const modalActionBtn = document.getElementById("modal-action-btn");
  const copyBtn = document.getElementById("modal-copy-btn");

  const modal = new bootstrap.Modal(modalElement);
  let currentPackage = null;

  const packages = [
    // Paket 300 Orang
    {
      name: "Paket 300 Orang",
      venue: "venue1",
      price: 50500000,
      description: `Menu
Nasi Putih
Soup Kimlo / Soup Ayam Jamur
 Ayam Panggang Saus Kecap / Ayam Ricarica / Ayam Cah Bumbu Steak
Ikan Fillet / Ikan Rica Rica / Ikan Pesmol
Asinan Slada / Capcay / Mie Cah Saicin Bakso
Kerupuk
Dessert
Puding Buah
Buah Segar
Ice Cream
Aneka Kue Basah
Pondokan
Es Puter 1 galon
Siomay 100 porsi
Dekorasi
Pelaminan 6 meter standar
Mini Garden
Meja Buffe 1 area
Meja Dessert
2 Meja Penerima Tamu
2 Pasang Standing Jalan
Karpet Jalan
Pergola 1 buah
Tempat Angpao
Extra
1 Buku Penerima Tamu + Spidol
Qori & Saritilawah
Tata Rias & Busana Nasional
1 Pasang Baju Pengantin + Make up untuk Akad Nikah
Make up 2 Ibu Pengantin
2 Beskap untuk Bapak Pengantin
2 Penerima Tamu
Menu Box
Pilihan Menu:

 Box A: Lemper - Kue Lapis, Kacang - Kacangan - Aqua
 Box B: Lemper - Kue Lapis - Pastel, Kacang - Kacangan - Aqua
 Box C: Nasi Putih - Ayam (pilihan), Telur Balado - Cah Buncis Bakso, Pisang - Kerupuk - Aqua
Jenis Snack Manis
Brownis Panggang
Kue Pisang
Lapis Surabaya
Soes Buah
Soes Telair
Black Florest
Roil Panggang
Lumpur Manis
Cake Tape
Jenis Snack Asin
Cheese Roll
Sosis Solo
Lemper
Krocket Kentang
Sus`,
      image: "/assets/img/dekorasi/dekorasi-3.jpg", // Ensure this path is correct
    },

    // Paket 400 Orang
    {
      name: "Paket 400 Orang",
      venue: "venue2",
      price: 60500000,
      description: `Menu
Nasi Putih
Nasi Goreng
Soup Kimlo / Soup Ayam Jamur / Soup Ayam Telor
Puyuh
 Daging Lada Hitam / Daging Masak Paprika / Daging Masak Wijen
Bihun Goreng / Mie Goreng
Asinan Slada / Capcay / Cah Jagung Jamur
Kerupuk
Dessert
Buah (Semangka, Melon)
Jus (Orange, Jambu)
Pudding (Coklat, Buah)
Snack (Keju, Coklat, Sus)
Air Minum
Pondokan
Es Puter 1 Galon
Mie Bakso 100 Porsi
Sate Ayam 100 Porsi
Pempek 100 Porsi
Dekorasi
Pelaminan 8 Meter Standar
Mini Garden
Meja Buffe 2 Area
Meja Dessert
2 Meja Penerima Tamu
2 Pasang Standing Jalan
Karpet Jalan
Gajebo Jalan
2 Tempat Angpao
Tata Rias & Busana Nasional
1 Pasang Baju Pengantin + Make up untuk Akad Nikah
1 Pasang Baju Resepsi + Make up untuk Pengantin
Make up 2 Ibu Pengantin
2 Beskap untuk Bapak Pengantin
2 Pasang Among Tamu
4 Penerima Tamu
MC untuk Akad Nikah
Photo & Video Shooting
1 Album + 1 Keping DVD
Extra
2 Buku Penerima Tamu
Qori
Makanan Setelah Akad Nikah (Soto Ayam + Nasi 100 Porsi)
Pilihan Pesanan Snack Box
Jenis Snack Manis
Brownis Panggang
Kue Pisang
Lapis Surabaya
Soes Buah
Soes Telair
Black Florest
Roil Panggang
Lumpur Manis
Cake Tape
Jenis Snack Asin
Cheese Roll
Sosis Solo
Lemper
Krocket Kentang
Sus`,
      image: "/assets/img/dekorasi/dekorasi-4.jpg", // Ensure this path is correct
    },

    // Paket 500 Orang
    {
      name: "Paket 500 Orang",
      venue: "venue3",
      price: 68500000,
      description: `Menu
Nasi Putih
Nasi Goreng
Soup Kimlo / Soup Ayam Jamur / Soup Sosis
Daging Rollade / Daging Lada Hitam / Daging Cah Paprika
Ayam Cah Bumbu Steak / Rollade Steak / Ayam Bumbu Madu
Ikan Fillet / Ikan Asam Manis
 Asinan Slada / Capcay / Slada Buah / Slada Sayuran / Slada Betawi
Kerupuk
Dessert
Buah (Semangka, Melon)
Jus (Orange, Jambu)
Pudding (Coklat, Buah)
Snack (Keju, Coklat, Sus)
Air Minum
Pondokan
Es Puter 2 Galon
Mie Bakso 150 Porsi
Sate Ayam 150 Porsi
Pempek 150 Porsi
Siomay 150 Porsi
Dekorasi
Pelaminan 10 Meter Standar
Mini Garden
Meja Buffe 2 Area
Meja Dessert
2 Meja Penerima Tamu
2 Pasang Standing Jalan
Karpet Jalan
Gajebo Jalan
2 Tempat Angpao
Tata Rias & Busana Nasional
1 Pasang Baju Pengantin + Make up untuk Akad Nikah
1 Pasang Baju Resepsi + Make up untuk Pengantin
Make up 2 Ibu Pengantin
2 Beskap untuk Bapak Pengantin
2 Pasang Among Tamu Baju + Make up
4 Penerima Tamu
MC untuk Akad Nikah
Photo & Video Shooting
1 Album + 1 Keping DVD
Extra
2 Buku Penerima Tamu
Qori
Makanan Setelah Akad Nikah (Soto Ayam + Nasi 100 Porsi)
Pilihan Pesanan Snack Box
Jenis Snack Manis
Brownis Panggang
Kue Pisang
Lapis Surabaya
Soes Buah
Soes Telair
Black Florest
Roil Panggang
Lumpur Manis
Cake Tape
Jenis Snack Asin
Cheese Roll
Sosis Solo
Lemper
Krocket Kentang
Sus`,
      image: "/assets/img/dekorasi/dekorasi-14.jpg", // Ensure this path is correct
    },

    // Paket 600 Orang
    {
      name: "Paket 600 Orang",
      venue: "venue1",
      price: 76500000,
      description: `Menu
Nasi Putih
Nasi Goreng
Soup Kimlo / Soup Ayam Jamur / Soup Sosis
Daging Rollade / Daging Lada Hitam / Daging Cah Paprika
 Ayam Cah Bumbu Steak / Rollade Steak / Ayam Bumbu Madu / Ayam panggang bumbu madu
Ikan Fillet / Ikan Asam Manis
 Asinan Slada / Capcay / Slada Buah / Slada Sayuran / Slada Betawi
Kerupuk
Dessert
Buah (Semangka, Melon)
Jus (Orange, Jambu)
Pudding (Coklat, Buah)
Snack (Keju, Coklat, Sus)
Air Minum
Pondokan
Es Puter 2 Galon
Bakwan Malang 150 Porsi
Sate Ayam 200 Porsi
Pempek 200 Porsi
Siomay 150 Porsi
Dekorasi
Pelaminan 10 Meter Standar
Mini Garden
Meja Buffe 2 Area
Meja Dessert
2 Meja Penerima Tamu
2 Pasang Standing Jalan
Karpet Jalan
Gajebo Jalan
2 Tempat Angpao
Tata Rias & Busana Nasional
1 Pasang Baju Pengantin + Make up untuk Akad Nikah
1 Pasang Baju Resepsi + Make up untuk Pengantin
Make up 2 Ibu Pengantin
2 Beskap untuk Bapak Pengantin
2 Pasang Among Tamu Baju + Make up
4 Penerima Tamu
MC untuk Akad Nikah
Photo & Video Shooting
1 Album + 1 Keping DVD
Extra
2 Buku Penerima Tamu
Qori
Makanan Setelah Akad Nikah (Soto Ayam + Nasi 100 Porsi)
Jenis Snack Manis
Brownis Panggang
Kue Pisang
Lapis Surabaya
Soes Buah
Soes Telair
Black Florest
Roil Panggang
Lumpur Manis
Cake Tape
Jenis Snack Asin
Cheese Roll
Sosis Solo
Lemper
Krocket Kentang
Sus`,
      image: "/assets/img/dekorasi/dekorasi3.jpg", // Ensure this path is correct
    },

    // Paket 700 Orang
    {
      name: "Paket 700 Orang",
      venue: "venue2",
      price: 82500000,
      description: `Menu
Nasi Putih
Nasi Goreng
Soup Kimlo / Soup Ayam Jamur / Soup Sosis
Daging Rollade / Daging Lada Hitam / Daging Cah Paprika
Ayam Bumbu Madu / Ayam Panggang Bumbu Madu
Ikan fillet / Ikan Asam Manis
 Asinan Slada / Capcay / Slada Buah / Slada Sayuran / Slada Betawi
Kerupuk
Dessert
Buah (Semangka, Melon)
Jus (Orange, Jambu)
Pudding (Cokelat, Buah)
Snack (Keju, Cokelat, Sus)
Air Minum
Pondokan
Es Doger 2 Galon
Bakwan Malang 150 Porsi
Sate Ayam 200 Porsi
Pempek 200 Porsi
Siomay 150 Porsi
Zupa Soup 150 Porsi
Dekorasi
Pelaminan 10 Meter Standar
Mini Garden
Meja Buffe 2 area
Meja Dessert
2 Meja Penerima Tamu
3 Pasang Standing Jalan
Karpet Jalan
Gajebo Jalan
Pergola 1 Buah
2 Tempat Angpao
Tata Rias & Busana Nasional
1 Pasang Baju Pengantin + Make up untuk Akad Nikah
1 Pasang Baju Resepsi + Make up untuk Pengantin
Make up 2 Ibu Pengantin
2 Beskap untuk Bapak Pengantin
2 Pasang Among Tamu Baju + Make up
4 Penerima Tamu
MC Untuk Akad Nikah
Photo & Video Shooting
1 Album + 1 Keping DVD
Extra
2 Buku Penerima Tamu
Qori
Makanan Setelah Akad Nikah (Soto Ayam + Nasi 100 Porsi)
Jenis Snack Manis
Brownis Panggang
Kue Pisang
Lapis Surabaya
Soes Buah
Soes Telair
Black Florest
Roil Panggang
Lumpur Manis
Cake Tape
Jenis Snack Asin
Cheese Roll
Sosis Solo
Lemper
Krocket Kentang
Sus`,
      image: "/assets/img/dekorasi/dekorasi3.jpg", // Ensure this path is correct
    },

    // Paket 800 Orang
    {
      name: "Paket 800 Orang",
      venue: "venue2",
      price: 90500000,
      description: `Menu
Nasi Putih
Nasi Goreng
Soup Kimlo / Soup Ayam Jamur / Soup Sosis
 Daging Rollade Steak / Daging Lada Hitam / Daging Cah Paprika
 Ayam Cah Bumbu Steak / Rollade Steak / Ayam Bumbu Madu / Ayam Panggang Bumbu Madu
Ikan Fillet / Ikan Asam Manis
 Asinan Slada / Capcay / Slada Buah / Slada Sayuran / Slada Betawi
Kerupuk
Dessert
Buah (Semangka, Melon)
Jus (Orange, Jambu )
pudding (Coklat, Buah)
Snack (Keju, Cokelat, Sus)
Air Minum
Pondokan
Es Doger 2 Galon
Bakwan Malang 200 Porsi
Sate Ayam 200 Porsi
Pempek 200 Porsi
Siomay 200 Porsi
Zupa Soup 200 Porsi
Dekorasi
Pelaminan 10 Meter Standar
Mini Garden
Meja Buffe 2 Area
Meja Dessert
2 Meja Penerima Tamu
2 Pasang Standing Jalan
Karpet Jalan
Gajebo Jalan
Pergola 1 buah
2 Tempat Angpao
Tata Rias & Busana Nasional
1 Pasang Baju Pengantin + Make up untuk Akad Nikah
1 Pasang Baju Resepsi + Make up untuk Pengantin
Make up 2 Ibu Pengantin
2 Beskap untuk Bapak Pengantin
2 Pasang Among Tamu Baju + Make up
4 Penerima Tamu
MC Untuk Akad Nikah
Photo & Video Shooting
1 Album + 1 Keping DVD
Extra
2 Buku Penerima Tamu
Qori
Makanan Setelah Akad Nikah (Soto Ayam + Nasi 100 Porsi)
Jenis Snack Manis
Brownis Panggang
Kue Pisang
Lapis Surabaya
Soes Buah
Soes Telair
Black Florest
Roil Panggang
Lumpur Manis
Cake Tape
Jenis Snack Asin
Cheese Roll
Sosis Solo
Lemper
Krocket Kentang
Sus`,
      image: "/assets/img/dekorasi/dekorasi3.jpg", // Ensure this path is correct
    },

    // Paket 1000 Orang
    {
      name: "Paket 1000 Orang",
      venue: "venue2",
      price: 98500000,
      description: `Menu
Menu
Nasi Putih
Nasi Goreng
Soup Kimlo / Soup Ayam Jamur / Soup Sosis
 Daging Rollade Steak / Daging Lada Hitam / Daging Cah Paprika
 Ayam Cah Bumbu Steak / Rollade Steak / Ayam Bumbu Madu / Ayam Panggang Bumbu Madu
Ikan Fillet / Ikan Asam Manis
 Asinan Slada / Capcay / Slada Buah / Slada Sayuran / Slada Betawi
Kerupuk
Dessert
Buah (Semangka, Melon)
Jus (Orange, Jambu )
pudding (Coklat, Buah)
Snack (Keju, Cokelat, Sus)
Air Minum
Pondokan
Es Doger 2 Galon
Bakwan Malang 200 Porsi
Sate Ayam 200 Porsi
Pempek 200 Porsi
Siomay 200 Porsi
Zupa Soup 200 Porsi
Kambing Guling 100 Porsi
Dekorasi
Pelaminan 10 Meter Standar
Mini Garden
Meja Buffe 2 Area
Meja Dessert
2 Meja Penerima Tamu
2 Pasang Standing Jalan
Karpet Jalan
Gajebo Jalan
Pergola 1 buah
2 Tempat Angpao
Tata Rias & Busana Nasional
1 Pasang Baju Pengantin + Make up untuk Akad Nikah
1 Pasang Baju Resepsi + Make up untuk Pengantin
Make up 2 Ibu Pengantin
2 Beskap untuk Bapak Pengantin
2 Pasang Among Tamu Baju + Make up
4 Penerima Tamu
MC Untuk Akad Nikah
Photo & Video Shooting
1 Album + 1 Keping DVD
Extra
2 Buku Penerima Tamu
Qori
Makanan Setelah Akad Nikah (Soto Ayam + Nasi 100 Porsi)
Jenis Snack Manis
Brownis Panggang
Kue Pisang
Lapis Surabaya
Soes Buah
Soes Telair
Black Florest
Roil Panggang
Lumpur Manis
Cake Tape
Jenis Snack Asin
Cheese Roll
Sosis Solo
Lemper
Krocket Kentang
Sus`,
      image: "/assets/img/dekorasi/dekorasi3.jpg", // Ensure this path is correct
    },

    //paket hotel horisson bekasi
    {
      name: "Horison Star Wedding Package",
      venue: "Hotel Horison Bekasi",
      price: 81500000,
      description: `Menu
Buffet Set for 200pax
Thai Beef Salad
Tomyam Seafood
Steam Rice
Chicken Kungpao
Chili Fish w/ Manggo Sc
Vegetables Sopo Tofu
Kwetiau Seafood
Pickles, Crackers, Kind of Sambal
Slice Fruits
Ice Water
Orange Juice

LED Screen & TV 
LED Screen 2x3 Meter
Level Led 1 Meter
LED TV 42" (2 Unit)
Make Up & Groom Bride :
 -Make Up & Groom Bride Reception
 -Make Up & Bridal Companion 2 pair
 -Make Up & Bridal Guest Reception 4pax
 -Make Up & Bridal Guest Among 4pair
Wedding Decoration :
 -Wedding Aisle 4.5 Meter
 -Gazebo Entrance Door
 -Mini Garden 
 -Red Carpet & Rugs
 -Angpao Box 2 Units
 -Tiffani Chairs 2pcs
Photo & Video Cinematic
Pra-Wedding Photo Indoor
MC Event
E. Invitation
Sound System + Entertaiment : Organ, Player, Singer, Guitar, Saxophone
Wedding Car

Include : 
< 300 Sqm wedding area
Masker medis 100pcs
Faceshield 50pcs
Sanitizer 2 botol pump
Crew WO 5 Person on the Event

*Include One Night Stay in Duluxe Room for Bride and Groom
`,
      image: "/assets/img/wo/wo1.jpg", // Ensure this path is correct
    },
    {
      name: "Park 5 Cilandak Hotel Package",
      venue: "Park 5 Cilandak Hotel",
      price: 69500000,
      description: `Menu
Prasmanan for 150 Pax
Wedding Decoration
LED Screen & LED TV
Make up Bride & Groom with Dress
Foto & Video
Pra Wedding Indoor
MC
Entertaiment
E. Invitation
Wedding Car

Include :
4 Crew on Your Wedding Day
Desinfectan System for all guest and wedding area 
< 300sqm wedding area 
1 night at Duluxe Room Park 5 Hotel`,
      image: "/assets/img/wo/wo2.jpg", // Ensure this path is correct
    },
    {
      name: "South Lake MGC Package",
      venue: "South Lake Mutiara Gading Timur Bekasi",
      price: 50500000,
      description: `Pelaminan Booth
      Rias + Busana Resepsi 
      Rias + Busana Tamu 2 Pasang
      Rias + Busana Among 2 Pasang
      Pergola Selamat Datang Janur
      Foto & Video Shooting
      Hiburan Organ Tunggal
      Cathering 400 Porsi
      Voucher Hotel Honey Moon Package
      Crew WO
      E-Invitation`,
      image: "/assets/img/wo/wo2.jpg", // Ensure this path is correct
    },
    {
      name: "Paketan Hotel MaxOne 1",
      venue: "Hotel MaxOne",
      price: 45500000,
      description: `Fasilitas Vanue :
      Test Food 6 orang
      Kamar 2 Malam (1 kamar)
      Kamar 1 Malam (1 Kamar)
      BALLROOM 4 Jam
      DOORPRICE HONEYMOON KE BALI (DRAW)
      Dekorasi Pelaminan
      Rias Dan Busana Pengantin
      Prasmanan Buffe Hotel (menu Pilihan Indonesia atau Western)
      Kue Pengantin
      Foto dan Video 
      Sound System
      MC Nasional
      Crew Edith`,
      image: "/assets/img/wo/wo7.jpg", // Ensure this path is correct
    },
    {
      name: "Paketan Hotel MaxOne 2",
      venue: "Hotel MaxOne",
      price: 38500000,
      description: `Fasilitas Vanue :
      Test Food 6 orang
      Kamar 2 Malam (1 kamar)
      Kamar 1 Malam (1 Kamar)
      BALLROOM 4 Jam
      DOORPRICE HONEYMOON KE BALI (DRAW)
      Dekorasi Pelaminan
      Rias Dan Busana Pengantin
      Prasmanan Buffe Hotel (menu Pilihan Indonesia atau Western)
      Kue Pengantin
      Foto dan Video 
      Sound System
      MC Nasional
      Crew Edith`,
      image: "/assets/img/wo/wo4.jpg", // Ensure this path is correct
    },
    {
      name: "Paketan Hotel MaxOne 3",
      venue: "Hotel MaxOne",
      price: 42500000,
      description: `Fasilitas Vanue :
      Test Food 6 orang
      Kamar 2 Malam (1 kamar)
      Kamar 1 Malam (1 Kamar)
      BALLROOM 4 Jam
      DOORPRICE HONEYMOON KE BALI (DRAW)
      Dekorasi Pelaminan
      Rias Dan Busana Pengantin
      Prasmanan Buffe Hotel (menu Pilihan Indonesia atau Western)
      Kue Pengantin
      Foto dan Video 
      Sound System
      MC Nasional
      Crew Edith`,
      image: "/assets/img/wo/wo5.jpg", // Ensure this path is correct
    },
    {
      name: "Paketan Hotel MaxOne 4",
      venue: "Hotel MaxOne",
      price: 35500000,
      description: `Fasilitas Vanue :
      Test Food 6 orang
      Kamar 2 Malam (1 kamar)
      Kamar 1 Malam (1 Kamar)
      BALLROOM 4 Jam
      DOORPRICE HONEYMOON KE BALI (DRAW)
      Dekorasi Pelaminan
      Rias Dan Busana Pengantin
      Prasmanan Buffe Hotel (menu Pilihan Indonesia atau Western)
      Kue Pengantin
      Foto dan Video 
      Sound System
      MC Nasional
      Crew Edith`,
      image: "/assets/img/wo/wo7.jpg", // Ensure this path is correct
    },
    {
      name: "Paketan Hotel MaxOne 5",
      venue: "Hotel MaxOne",
      price: 39900000,
      description: `Fasilitas Vanue :
      Test Food 6 orang
      Kamar 2 Malam (1 kamar)
      Kamar 1 Malam (1 Kamar)
      BALLROOM 4 Jam
      DOORPRICE HONEYMOON KE BALI (DRAW)
      Dekorasi Pelaminan
      Rias Dan Busana Pengantin
      Prasmanan Buffe Hotel (menu Pilihan Indonesia atau Western)
      Kue Pengantin
      Foto dan Video 
      Sound System
      MC Nasional
      Crew Edith`,
      image: "/assets/img/wo/wo5.jpg", // Ensure this path is correct
    },
    {
      name: "Paketan Hotel MaxOne 6",
      venue: "Hotel MaxOne",
      price: 33500000,
      description: `Fasilitas Vanue :
      Test Food 6 orang
      Kamar 2 Malam (1 kamar)
      Kamar 1 Malam (1 Kamar)
      BALLROOM 4 Jam
      DOORPRICE HONEYMOON KE BALI (DRAW)
      Dekorasi Pelaminan
      Rias Dan Busana Pengantin
      Prasmanan Buffe Hotel (menu Pilihan Indonesia atau Western)
      Kue Pengantin
      Foto dan Video 
      Sound System
      MC Nasional
      Crew Edith`,
      image: "/assets/img/wo/wo6.jpg", // Ensure this path is correct
    },
  ];

  function renderPackages(packages) {
    packagesContainer.innerHTML = packages
      .map(
        (pkg) => `
        <div class="package" data-name="${pkg.name}" data-venue="${
          pkg.venue
        }" data-price="${pkg.price}" data-description="${
          pkg.description
        }" data-image="${pkg.image}">
          <!-- <img src="${pkg.image}" alt="${pkg.name}"> -->
          <h3>${pkg.name}</h3>
          <p>${pkg.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}</p>
          <p><i class='bi bi-pin-map'></i> ${pkg.venue}</p>
        </div>
      `
      )
      .join("");
  }

  function filterAndSort() {
    const sortPrice = document.getElementById("sort-price").value;
    const sortVenue = document.getElementById("sort-venue").value;

    let filteredPackages = packages.filter((pkg) => {
      return sortVenue === "all" || pkg.venue === sortVenue;
    });

    if (sortPrice === "asc") {
      filteredPackages.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "desc") {
      filteredPackages.sort((a, b) => b.price - a.price);
    }

    renderPackages(filteredPackages);
  }

  function onSearch() {
    filterAndSort();
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Teks telah disalin ke clipboard!");
      },
      (err) => {
        alert("Gagal menyalin teks: " + err);
      }
    );
  }

  packagesContainer.addEventListener("click", (event) => {
    const packageElem = event.target.closest(".package");
    if (packageElem) {
      const name = packageElem.getAttribute("data-name");
      const venue = packageElem.getAttribute("data-venue");
      const price = parseFloat(packageElem.getAttribute("data-price"));
      const description = packageElem.getAttribute("data-description");
      const image = packageElem.getAttribute("data-image");

      currentPackage = { name, venue, price, description, image };
      modalImage.src = image;
      modalTitle.textContent = name;
      modalVenue.textContent = `📍 Venue: ${venue}`;
      modalPrice.textContent = `Harga: ${price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}`;
      modalDescription.textContent = description;

      modal.show(); // Show the modal using Bootstrap API
    }
  });

  document
    .getElementById("sort-price")
    .addEventListener("change", filterAndSort);
  document
    .getElementById("sort-venue")
    .addEventListener("change", filterAndSort);
  document.getElementById("search-btn")?.addEventListener("click", onSearch); // Ensure button exists

  closeBtn.addEventListener("click", () => modal.hide()); // Hide the modal using Bootstrap API

  modalActionBtn.addEventListener("click", () => {
    if (currentPackage) {
      const message = `Saya ingin membeli ${
        currentPackage.name
      }. Harga ${currentPackage.price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}.`;
      const phoneNumber = "6282298066188"; // Ganti dengan nomor WhatsApp yang sesuai
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    }
  });

  copyBtn.addEventListener("click", () => {
    if (currentPackage) {
      const text = `Nama Paket: ${currentPackage.name}\nVenue: ${
        currentPackage.venue
      }\nHarga: ${currentPackage.price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}\nDeskripsi:\n${currentPackage.description}`;
      copyToClipboard(text);
    }
  });

  renderPackages(packages);
});
