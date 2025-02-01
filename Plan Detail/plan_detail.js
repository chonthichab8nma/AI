document.addEventListener("DOMContentLoaded", () => {
    const tripContent = document.getElementById("tripContent");
    const planTripButton = document.getElementById("planTripButton");
    const placeDetailButton = document.getElementById("placeDetailButton");
});

// ดึง Element
const provinceSelect = document.getElementById("province");
const placeContainer = document.getElementById("place-container");

// ข้อมูลสถานที่ท่องเที่ยวของแต่ละจังหวัด
const placesData = {
    krabi: [
        {
            name: "1. สระมรกต",
            description: "เป็นแหล่งท่องเที่ยวธรรมชาติที่มีชื่อเสียงในจังหวัดกระบี่ ประเทศไทย เป็นน้ำพุร้อนธรรมชาติ ที่เกิดจากกระแสน้ำใต้ดินไหลผ่านชั้นหินปูน ทำให้น้ำมีสีเขียวมรกต ใสสะอาดและสวยงามเป็นเอกลักษณ์",
            image: "emerald_pool.jpg"
        },
        {
            name: "2. อ่าวไร่เลย์",
            description: "เป็นสถานที่ท่องเที่ยวชื่อดังของจังหวัดกระบี่ ประเทศไทย ขึ้นชื่อเรื่องชายหาดที่สวยงาม น้ำทะเลใสและบรรยากาศเงียบสงบ เหมาะสำหรับการเล่นน้ำทะเล พักผ่อน และปีนเขา",
            image: "railay_beach.jpg"
        },
        {
            name: "3. เกาะพีพี",
            description: "สวรรค์กลางทะเลอันดามัน เป็นหมู่เกาะที่มีชื่อเสียงระดับโลกตั้งอยู่ในจังหวัดกระบี่ ประเทศไทย ขึ้นชื่อเรื่องน้ำทะเลใส หาดทรายขาว และแนวปะการังที่สวยงาม ทำให้เป็นจุดหมายปลายทางยอดนิยมสำหรับการดำน้ำดูปะการังและท่องเที่ยวทางทะเล",
            image: "koh_phi_phi.jpg"
        },
        {
            name: "4. เขาขนาบน้ำ",
            description: "แลนด์มาร์กสำคัญของกระบี่ เป็นหนึ่งในจุดท่องเที่ยวที่โดดเด่นของ จังหวัดกระบี่ มีลักษณะเป็น ภูเขาหินปูนคู่ขนานกัน ตั้งตระหง่านขนาบสองฝั่งของแม่น้ำกระบี่ ทำให้วิวบริเวณนี้มีเอกลักษณ์และสวยงาม เหมาะสำหรับการถ่ายภาพ และชมทิวทัศน์ของแม่น้ำและทะเล",
            image: "khao_khanap_nam.jpg"
        }

    ],
    phuket: [
        {
            name: "หาดป่าตอง",
            description: "ชายหาดยอดนิยมของภูเก็ตที่เต็มไปด้วยกิจกรรมทางน้ำและสถานบันเทิงยามค่ำคืน",
            image: "patong_beach.jpg"
        },
        {
            name: "เมืองเก่าภูเก็ต",
            description: "ย่านเก่าที่มีสถาปัตยกรรมสไตล์ชิโน-โปรตุกีสและร้านกาแฟสุดชิค",
            image: "old_phuket_town.jpg"
        }
    ],
    suratthani: [
        {
            name: "เกาะสมุย",
            description: "เกาะที่มีชายหาดสวย น้ำทะเลใส และเป็นแหล่งท่องเที่ยวสำคัญของไทย",
            image: "koh_samui.jpg"
        },
        {
            name: "อุทยานแห่งชาติเขาสก",
            description: "สถานที่ท่องเที่ยวธรรมชาติที่มีภูเขาหินปูนสูงใหญ่และทะเลสาบสวยงาม",
            image: "khao_sok.jpg"
        }
    ]
};

// ฟังก์ชันแสดงข้อมูลสถานที่
function displayPlaces(province) {
    const container = document.getElementById("place-container");
    container.innerHTML = ""; // ล้างข้อมูลเก่าออก

    if (placesData[province]) {
        placesData[province].forEach(place => {
            const placeCard = document.createElement("div");
            placeCard.classList.add("place-card");

            // สร้างส่วนของข้อมูลสถานที่
            const placeInfo = document.createElement("div");
            placeInfo.classList.add("place-info");

            const placeName = document.createElement("h3");
            placeName.textContent = place.name;
            placeName.classList.add("place-name");

            const placeDescription = document.createElement("p");
            placeDescription.textContent = place.description;
            placeDescription.classList.add("place-description");

            placeInfo.appendChild(placeName);
            placeInfo.appendChild(placeDescription);

            // สร้างปุ่มดูรายละเอียด (ขยายคำบรรยาย)
            const showMoreButton = document.createElement("button");
            showMoreButton.classList.add("show-more-btn");
            showMoreButton.textContent = "ดูรายละเอียด";  // ข้อความปุ่ม
            showMoreButton.onclick = function () {
                toggleDescription(placeDescription, showMoreButton);
            };

            // สร้างปุ่มอ่านเพิ่มเติม (ไปยังหน้าอื่น)
            const readMoreButton = document.createElement("button");
            readMoreButton.classList.add("read-more-btn");
            readMoreButton.textContent = "อ่านเพิ่มเติม";  // ข้อความปุ่ม
            readMoreButton.onclick = function () {
                window.location.href = `details.html?place=${place.name}`; // เปลี่ยน URL ไปยังหน้ารายละเอียด
            };

            // สร้างส่วนของรูปภาพ
            const placeImage = document.createElement("img");
            placeImage.src = `images/${province}/${place.image}`;
            placeImage.alt = place.name;
            placeImage.classList.add("place-image");

            // จัดวางภาพและข้อมูลใน place-card
            placeCard.appendChild(placeInfo);
            placeCard.appendChild(placeImage);
            placeCard.appendChild(showMoreButton); // เพิ่มปุ่มดูรายละเอียด
            placeCard.appendChild(readMoreButton); // เพิ่มปุ่มอ่านเพิ่มเติม

            container.appendChild(placeCard);
        });
    }
}

// ฟังก์ชันเปิด/ปิดการแสดงคำบรรยาย
function toggleDescription(descriptionElement, buttonElement) {
    if (descriptionElement.style.maxHeight === "none") {
        // ซ่อนคำบรรยายและแสดงปุ่ม "ดูรายละเอียด"
        descriptionElement.style.maxHeight = "50px"; // ปรับขนาดสูงสุดของข้อความที่จะแสดง
        buttonElement.textContent = "ดูรายละเอียด"; // เปลี่ยนข้อความปุ่มกลับเป็น "ดูรายละเอียด"
    } else {
        // แสดงข้อความทั้งหมดและแสดงปุ่ม "ซ่อนรายละเอียด"
        descriptionElement.style.maxHeight = "none";
        buttonElement.textContent = "ซ่อนรายละเอียด"; // เปลี่ยนข้อความปุ่มเป็น "ซ่อนรายละเอียด"
    }
}

// ดึงค่าจังหวัดเมื่อมีการเปลี่ยนแปลง
document.getElementById("province").addEventListener("change", function () {
    displayPlaces(this.value);
});


// Event Listener เมื่อมีการเปลี่ยนค่าใน dropdown
provinceSelect.addEventListener("change", function () {
    const selectedProvince = provinceSelect.value;
    displayPlaces(selectedProvince);
});


