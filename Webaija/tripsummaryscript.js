document.addEventListener("DOMContentLoaded", () => {
  const tripContent = document.getElementById("tripContent");
  const planTripButton = document.getElementById("planTripButton");
  const placeDetailButton = document.getElementById("placeDetailButton");

  // ดึงข้อมูลจาก URL (query parameters)
  const urlParams = new URLSearchParams(window.location.search);
  const province = urlParams.get('province') || "จังหวัดไม่ระบุ";  // จังหวัด
  const days = parseInt(urlParams.get('days')) || 0;               // จำนวนวัน

  // อัปเดตหัวข้อทริป
  const tripTitle = document.getElementById("tripTitle");
  tripTitle.textContent = `${province} ${days} วัน`;

  // ข้อมูลรายละเอียดทริป
  const tripDetails = {
    "Phang Nga": {
      1: [
        { day: "วันที่ 1", events: ["**เกาะสุรินทร์** (ต้องจองทัวร์ล่วงหน้า)", "06:00 น. ออกเดินทางจากภูเก็ตไปยังท่าเรือเพื่อไปเกาะสุรินทร์", "08:00 น. - 16:00 น. ดำน้ำดูปะการัง เที่ยวชมเกาะสุรินทร์", "17:00 น. เดินทางกลับภูเก็ต"] }
      ],
      2: [
        { day: "วันที่ 1", events: ["13:00 น. เดินทางถึงสนามบินภูเก็ต (HKT)", "15:00 น. เช็คอินพักที่เขาหลัก", "16:00 น. เที่ยวชมชายหาดเขาหลัก"] },
        { day: "วันที่ 2", events: ["08:00 น. รับประทานอาหารเช้าที่โรงแรม", "09:00 น. เดินทางไปยังน้ำตกสายรุ้ง", "12:00 น. รับประทานอาหารกลางวันที่ร้านอาหารใกล้เคียง"] }
      ],
      3: [
        { day: "วันที่ 1", events: ["เดินทางถึงภูเก็ตและเที่ยวเขาหลัก"] },
        { day: "วันที่ 2", events: ["น้ำตกสายรุ้งและกิจกรรมชายหาด"] },
        { day: "วันที่ 3", events: ["ชมวิวเสม็ดนางชีและเดินทางกลับ"] }
      ]
    }
  };

  // ฟังก์ชันแสดงรายละเอียดทริป
  const displayTripDetails = () => {
    tripContent.innerHTML = ""; // ล้างเนื้อหาก่อน
    if (tripDetails[province] && tripDetails[province][days]) {
      tripDetails[province][days].forEach(dayDetail => {
        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day");

        const dayTitle = document.createElement("h3");
        dayTitle.textContent = dayDetail.day;
        dayContainer.appendChild(dayTitle);

        const eventList = document.createElement("ul");
        dayDetail.events.forEach(event => {
          const listItem = document.createElement("li");
          listItem.textContent = event;
          eventList.appendChild(listItem);
        });

        dayContainer.appendChild(eventList);
        tripContent.appendChild(dayContainer);
      });
    } else {
      tripContent.textContent = "ไม่มีข้อมูลสำหรับจังหวัดหรือจำนวนวันที่เลือก";
    }
  };

  // ตั้งค่าให้ปุ่มทำงาน
  planTripButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "Home.html"; // เปลี่ยนไปยังหน้า Home.html
  });

  placeDetailButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "plan_detail.html";
  });

  // เริ่มต้นแสดงเนื้อหาทริปเมื่อหน้าโหลด
  displayTripDetails();
});
