document.addEventListener("DOMContentLoaded", () => {
  const tripContent = document.getElementById("tripContent");
  const planTripButton = document.getElementById("planTripButton");
  const provinceSelect = document.getElementById("province");
  const daysSelect = document.getElementById("days");

  // ข้อมูลแพ็กเกจทริป
  const tripPackages = [
    {
      name: "แพ็คเกจ 1: 3 วัน 2 คืน เน้นเขาหลักและใกล้เคียง",
      days: 3,
      description: "เที่ยวชมเขาหลักและธรรมชาติใกล้เคียง",
      details: [
        "วันที่ 1: เดินทางถึงภูเก็ต, เช็คอินที่เขาหลัก, เที่ยวชมชายหาดเขาหลัก",
        "วันที่ 2: เที่ยวชมวัดสวรรค์คูหา, นํ้าตกสายรุ้ง, รับประทานอาหารที่ร้านท้องถิ่น",
        "วันที่ 3: ชมวิวเสม็ดนางชี, เดินทางกลับภูเก็ต"
      ]
    },
    {
      name: "แพ็คเกจ 2: 4 วัน 3 คืน เน้นเกาะและอ่าวพังงา",
      days: 4,
      description: "เกาะยาวน้อย, อ่าวพังงา, การท่องเที่ยวทางทะเล",
      details: [
        "วันที่ 1: เดินทางถึงภูเก็ต, เดินทางไปเกาะยาวน้อย",
        "วันที่ 2: ทัวร์เกาะยาวน้อย, เดินทางไปอ่าวพังงา",
        "วันที่ 3: ทัวร์อ่าวพังงา, ชมธรรมชาติ, เกาะปันหยี",
        "วันที่ 4: เรียนรู้วิถีชีวิตชาวบ้านบางพัฒน์, เดินทางกลับภูเก็ต"
      ]
    },
    {
      name: "แพ็คเกจ 3: 5 วัน 4 คืน เน้นเกาะและธรรมชาติ",
      days: 5,
      description: "เกาะยาวน้อย, อ่าวพังงา, เกาะสิมิลัน",
      details: [
        "วันที่ 1-2: ตามแพ็คเกจ 2",
        "วันที่ 3: ดำน้ำดูปะการังที่เกาะสิมิลัน",
        "วันที่ 4: เที่ยวชมอุทยานแห่งชาติอ่าวพังงา",
        "วันที่ 5: เดินทางกลับภูเก็ต"
      ]
    },
    {
      name: "แพ็คเกจ 4: 2 วัน 1 คืน เน้นเขาหลักและใกล้เคียง (เวอร์ชั่นเร่งด่วน)",
      days: 2,
      description: "ทริปเร่งด่วนไปยังเขาหลักและจุดชมวิว",
      details: [
        "วันที่ 1: เดินทางถึงภูเก็ต, เที่ยวชมเขาหลัก, รับประทานอาหารท้องถิ่น",
        "วันที่ 2: ชมวิวเสม็ดนางชี, เดินทางกลับภูเก็ต"
      ]
    },
    {
      name: "แพ็คเกจ 5: 1 วัน ทริปเดย์ทริป เกาะสุรินทร์",
      days: 1,
      description: "ทริปเกาะสุรินทร์, ดำน้ำดูปะการัง",
      details: [
        "วันที่ 1: เดินทางไปเกาะสุรินทร์, ดำน้ำดูปะการัง, เที่ยวชมเกาะ, กลับภูเก็ต"
      ]
    }
  ];

  // ฟังก์ชันแสดงรายละเอียดแพ็กเกจ
  const displayTripDetails = (selectedDays) => {
    tripContent.innerHTML = ""; // ล้างข้อมูลเก่าออก

    // กรองแพ็กเกจตามจำนวนวันที่เลือก
    const filteredPackages = tripPackages.filter(package => package.days === selectedDays);

    if (filteredPackages.length === 0) {
      tripContent.innerHTML = "<p>ไม่มีทริปสำหรับจำนวนวันที่เลือก</p>";
      return;
    }

    filteredPackages.forEach(pkg => {
      const packageContainer = document.createElement("div");
      packageContainer.classList.add("package");
      
      const title = document.createElement("h3");
      title.textContent = pkg.name;
      packageContainer.appendChild(title);

      const description = document.createElement("p");
      description.textContent = pkg.description;
      packageContainer.appendChild(description);

      const detailsList = document.createElement("ul");
      pkg.details.forEach(detail => {
        const listItem = document.createElement("li");
        listItem.textContent = detail;
        detailsList.appendChild(listItem);
      });
      packageContainer.appendChild(detailsList);

      tripContent.appendChild(packageContainer);
    });
  };

  // เมื่อกดปุ่มแสดงทริป
  planTripButton.addEventListener("click", (e) => {
    const selectedDays = parseInt(daysSelect.value); // รับจำนวนวันที่เลือก
    displayTripDetails(selectedDays); // แสดงข้อมูลทริปตามวันที่เลือก
  });
});
