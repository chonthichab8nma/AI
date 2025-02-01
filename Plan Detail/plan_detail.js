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
            description: "เป็นสถานที่ท่องเที่ยวชื่อดังของจังหวัดกระบี่ ประเทศไทย ขึ้นชื่อเรื่องชายหาดที่สวยงาม น้ำทะเลใส และบรรยากาศเงียบสงบ เหมาะสำหรับการเล่นน้ำทะเล พักผ่อน และปีนเขา",
            image: "railay_beach.jpg"
        },
        {
            name: "3. เกาะพีพี",
            description: "สวรรค์กลางทะเลอันดามัน เป็นหมู่เกาะที่มีชื่อเสียงระดับโลก ตั้งอยู่ใน จังหวัดกระบี่ ประเทศไทย ขึ้นชื่อเรื่อง น้ำทะเลใส หาดทรายขาว และแนวปะการังที่สวยงาม ทำให้เป็นจุดหมายปลายทางยอดนิยมสำหรับการ ดำน้ำดูปะการังและท่องเที่ยวทางทะเล",
            image: "emerald_pool.jpg"
        },
        {
            name: "4. อ่าวไร่เลย์",
            description: "เป็นสถานที่ท่องเที่ยวชื่อดังของจังหวัดกระบี่ ประเทศไทย ขึ้นชื่อเรื่องชายหาดที่สวยงาม น้ำทะเลใส และบรรยากาศเงียบสงบ เหมาะสำหรับการเล่นน้ำทะเล พักผ่อน และปีนเขา",
            image: "railay_beach.jpg"
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
            placeName.classList.add("place-name"); // เพิ่มคลาสให้จัดตำแหน่งชื่อสถานที่

            const placeDescription = document.createElement("p");
            placeDescription.textContent = place.description;

            placeInfo.appendChild(placeName);
            placeInfo.appendChild(placeDescription);

            // สร้างส่วนของรูปภาพ
            const placeImage = document.createElement("img");
            placeImage.src = `images/${province}/${place.image}`; // ดึงรูปจากโฟลเดอร์จังหวัด
            placeImage.alt = place.name;
            placeImage.classList.add("place-image");

            // จัดวางภาพและข้อมูลใน place-card
            placeCard.appendChild(placeInfo);
            placeCard.appendChild(placeImage);

            container.appendChild(placeCard);
        });
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
