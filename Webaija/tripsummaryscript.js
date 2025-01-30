document.addEventListener("DOMContentLoaded", () => {
  const tripContent = document.getElementById("tripContent");
  const planTripButton = document.getElementById("planTripButton");
  const placeDetailButton = document.getElementById("placeDetailButton");

  // ข้อมูลรายละเอียดทริปในรูปแบบ array
  const tripDetails = [
    { day: "วันที่ 1", events: [
      "13:00 น. เดินทางถึงสนามบินภูเก็ต (HKT) รับรองและเดินทางไปเขาหลัก (1.5-2 ชั่วโมง)",
      "15:00 น. เช็คอินพักที่เขาหลัก",
      "16:00 น. เที่ยวชมชายหาดเขาหลัก พักผ่อนริมทะเล",
      "19:00 น. รับประทานอาหารเย็นที่ร้านอาหารทะเลในเขาหลัก"
    ]},
    { day: "วันที่ 2", events: [
      "08:00 น. รับประทานอาหารเช้าที่โรงแรม",
      "09.00 น. เดินทางไปยังนํ้าตกสายรุ้ง เที่ยวชมนํ้าตกและธรรมชาติ (ประมาณ 1 ชั่วโมง)",
      "10:30 น. เดินทางไปยังวัดสวรรค์คูหา เที่ยวชมวัดและธรรมชาติ (ประมาณ 1 ชั่วโมง)",
      "12:00 น. รับประทานอาหารกลางวันที่ร้านอาหารใกล้เคียง",
      "13:30 น. เดินทางกลับที่พัก พักผ่อน",
      "18:00 น. รับประทานอาหารเย็น และพักผ่อน"
    ]},
    { day: "วันที่ 3", events: [
      "08:00 น. รับประทานอาหารเช้าที่โรงแรม",
      "09:00 น. เช็คเอ้าท์จากโรงแรม",
      "10:00 น. เดินทางไปยังจุดชมวิวเสม็ดนางชี ชมวิวทะเลและอ่าวพังงา (ประมาณ 1 ชั่วโมง)",
      "11:30 น. เดินทางไปสนามบินภูเก็ต เพื่อเดินทางกลับ"
    ]}
  ];

  // สร้างโครงสร้าง HTML สำหรับแสดงข้อมูลทริป
  const displayTripDetails = () => {
    tripContent.innerHTML = ""; // ล้างเนื้อหาก่อนเพื่อไม่ให้ข้อมูลซ้ำ
    tripDetails.forEach(dayDetail => {
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
  };

  const displayPlaceDetail = () => {
    tripContent.innerHTML = ""; // ล้างเนื้อหาก่อน
    const placeDetail = document.createElement("div");
    placeDetail.innerHTML = "<h3>สถานที่ท่องเที่ยวที่น่าสนใจ</h3><ul><li>เขาหลัก</li><li>น้ำตกสายรุ้ง</li><li>วัดสวรรค์คูหา</li><li>จุดชมวิวเสม็ดนางชี</li></ul>";
    tripContent.appendChild(placeDetail);
  };

  // ตั้งค่าให้ปุ่มทำงาน
  planTripButton.addEventListener("click", (e) => {
    e.preventDefault(); // ป้องกันการไปหน้าอื่น
    window.location.href = "Home.html"; // เปลี่ยนไปยังหน้า Home.html
  });

  placeDetailButton.addEventListener("click", (e) => {
    e.preventDefault(); // ป้องกันการไปหน้าอื่น
    displayPlaceDetail(); // แสดงรายละเอียดสถานที่
  });

  // เริ่มต้นแสดงเนื้อหาทริปเมื่อหน้าโหลด
  displayTripDetails();
});
