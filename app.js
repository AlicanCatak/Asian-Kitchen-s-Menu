const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//Adım 1: menuContainer ve menuItem Div'leri Oluşturma

const menuContainer = document.createElement("div");
menuContainer.classList.add("row", "gx-4");

//Adım 2: Menü İçin Döngü Kullanma ve menuItem Oluşturma

menu.forEach((item) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-items", "col-12", "col-md-6", "mb-4");
  menuItem.dataset.category = item.category;

  //Adım 3: Menü Bilgileri ve Görseli Ekleme

  const menuInfo = document.createElement("div"); //menü iteminin isim fiyat bilgisi ve açıklamasını içerecek div oluşturdum
  menuInfo.className = "menu-info";
  const titlePrice = document.createElement("span"); //bu kısımda span içerisine h4 etiketli başlık ve ücret ekledim. div de olabilirdi.
  titlePrice.innerHTML = `<h4>${item.title}</h4> <h4>${item.price}</h4>`;
  titlePrice.classList.add("menu-title");
  menuItem.appendChild(menuInfo); //burda artık oluşturduğum divlerin içlerine eklemelerimi yapıyorum. dışardaki divim olan menuItem içine menuInfoyu ekliyorum
  const desc = document.createElement("p"); //burada açıklama için p elementi ekliyorum
  desc.textContent = item.desc;
  desc.className = "menu-text";
  menuInfo.appendChild(titlePrice); //titlePrice'ı ve açıklamayı (desc) menuInfonun içine yerleştiriyorum
  menuInfo.appendChild(desc);

  const img = document.createElement("img"); //görseli ekliyorum
  img.src = item.img;
  img.className = "photo";
  menuItem.appendChild(img);
  menuItem.appendChild(menuInfo);
  menuContainer.appendChild(menuItem);
});

document.querySelector(".section-center").appendChild(menuContainer);

//Adım 4: Butonları Oluşturma

const btnItem = ["All", "Korea", "Japan", "China"];

for (let i = 0; i < btnItem.length; i += 1) {
  const btn = document.createElement("button");
  btn.classList.add("btn-item", "btn", "btn-outline-dark");

  // Butonun içeriğini dizideki ilgili öğe ile dolduruyorum
  btn.innerHTML = btnItem[i];

  // Butona tıklayınca kategoriye göre filtreleme yapıyorum
  btn.addEventListener("click", (e) => {
    const category = e.target.textContent; // Tıklanan butonun kategorisini alıyorum
    filterMenuItems(category); // Menü öğelerini buna göre filtreliyorum
  });

  // Oluşturduğum butonu .btn-container içine ekliyorum
  document.querySelector(".btn-container").appendChild(btn);
}

function filterMenuItems(category) {
  // Tüm menü öğelerini seçiyorum
  const menuItems = document.querySelectorAll(".menu-items");

  // Her menü öğesi için döngü kuruyorum
  menuItems.forEach((menuItem) => {
    // Menü öğesinin hangi kategoriye ait olduğunu kontrol ediyorum
    if (menuItem.dataset.category === category || category === "All") {
      // Eğer seçilen kategoriye aitse veya "All" seçilmişse, öğeyi görünür yapıyorum
      menuItem.style.display = "flex"; // Flex kullanıyorum ki öğeler yatay dizilsin
    } else {
      // Seçilen kategoriye ait değilse, öğeyi gizliyorum
      menuItem.style.display = "none";
    }
  });
}
