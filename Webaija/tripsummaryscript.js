 // ดึงข้อมูลจาก URL (query parameters)
 const urlParams = new URLSearchParams(window.location.search);
 const province = urlParams.get('province');  // จังหวัด
 const days = urlParams.get('days');          // จำนวนวัน

 // แสดงข้อมูลจังหวัดและวันในหัวข้อ
 const tripTitle = document.getElementById("tripTitle");
 tripTitle.textContent = `${province} ${days} วัน`;

 // ข้อมูลรายละเอียดทริป
 const tripDetails = {
   "Phang Nga": {
     1: [
       { day: "วันที่ 1", events: [
         "**เกาะสุรินทร์** (ต้องจองทัวร์ล่วงหน้า)",
         "* 06:00 น. ออกเดินทางจากภูเก็ตไปยังท่าเรือเพื่อไปเกาะสุรินทร์",
         "* 08:00 น. - 16:00 น. ดำน้ำดูปะการัง เที่ยวชมเกาะสุรินทร์",
         "* 17:00 น. เดินทางกลับภูเก็ต"
       ]}
     ],
     2: [
       { day: "วันที่ 1", events: [
         "13:00 น. เดินทางถึงสนามบินภูเก็ต (HKT) รับรองและเดินทางไปเขาหลัก (1.5-2 ชั่วโมง)",
         "15:00 น. เช็คอินพักที่เขาหลัก",
         "16:00 น. เที่ยวชมชายหาดเขาหลัก พักผ่อนริมทะเล",
         "19:00 น. รับประทานอาหารเย็นที่ร้านอาหารทะเลในเขาหลัก"
       ]},
       { day: "วันที่ 2", events: [
         "08:00 น. รับประทานอาหารเช้าที่โรงแรม",
         "09.00 น. เดินทางไปยังน้ำตกสายรุ้ง เที่ยวชมน้ำตกและธรรมชาติ (ประมาณ 1 ชั่วโมง)",
         "12:00 น. รับประทานอาหารกลางวันที่ร้านอาหารใกล้เคียง"
       ]}
     ],
     3: [
       { day: "วันที่ 1", events: [
         "13:00 น. เดินทางถึงสนามบินภูเก็ต (HKT) รับรองและเดินทางไปเขาหลัก (1.5-2 ชั่วโมง)",
         "15:00 น. เช็คอินพักที่เขาหลัก",
         "16:00 น. เที่ยวชมชายหาดเขาหลัก พักผ่อนริมทะเล",
         "19:00 น. รับประทานอาหารเย็นที่ร้านอาหารทะเลในเขาหลัก"
       ]},
       { day: "วันที่ 2", events: [
         "08:00 น. รับประทานอาหารเช้าที่โรงแรม",
         "09.00 น. เดินทางไปยังน้ำตกสายรุ้ง เที่ยวชมน้ำตกและธรรมชาติ (ประมาณ 1 ชั่วโมง)",
         "12:00 น. รับประทานอาหารกลางวันที่ร้านอาหารใกล้เคียง"
       ]},
       { day: "วันที่ 3", events: [
         "08:00 น. รับประทานอาหารเช้าที่โรงแรม",
         "09.00 น. เช็คเอ้าท์จากโรงแรม",
         "10:00 น. เดินทางไปยังจุดชมวิวเสม็ดนางชี ชมวิวทะเลและอ่าวพังงา (ประมาณ 1 ชั่วโมง)",
         "11:30 น. เดินทางไปสนามบินภูเก็ต เพื่อเดินทางกลับ"
       ]}
     ]
   }
 };

 // ฟังก์ชันแสดงรายละเอียดทริป
 const displayTripDetails = () => {
   const tripContent = document.getElementById("tripContent");
   tripContent.innerHTML = ""; // ล้างเนื้อหาก่อน

   const selectedProvinceDetails = tripDetails[province];
   const selectedDaysDetails = selectedProvinceDetails ? selectedProvinceDetails[days] : null;

   if (selectedDaysDetails) {
     selectedDaysDetails.forEach(dayDetail => {
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
     tripContent.innerHTML = "ข้อมูลทริปไม่พบสำหรับจังหวัดหรือจำนวนวันที่เลือก.";
   }
 };

 // เรียกใช้งานแสดงรายละเอียดทริป
 displayTripDetails();