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
            name: "เกาะพีพี",
            description: "หมู่เกาะที่มีน้ำทะเลใสและหาดทรายขาวสวยงาม เหมาะสำหรับดำน้ำและพักผ่อน",
            image: "koh_phi_phi.jpg"
        },
        {
            name: "ทะเลแหวก",
            description: "สถานที่มหัศจรรย์ที่เมื่อน้ำลดจะเห็นสันทรายเชื่อมระหว่างเกาะต่างๆ",
            image: "talay_waek.jpg"
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

// ฟังก์ชันสร้างการ์ดแสดงข้อมูลสถานที่ท่องเที่ยว
function displayPlaces(province) {
    placeContainer.innerHTML = ""; // ล้างข้อมูลก่อน

    if (placesData[province]) {
        placesData[province].forEach(place => {
            const card = document.createElement("div");
            card.classList.add("place-card");

            card.innerHTML = `
                <img src="images/${place.image}" alt="${place.name}" class="place-image">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
            `;

            placeContainer.appendChild(card);
        });
    } else {
        placeContainer.innerHTML = "<p>ไม่มีข้อมูลสถานที่ท่องเที่ยวสำหรับจังหวัดนี้</p>";
    }
}

// Event Listener เมื่อมีการเปลี่ยนค่าใน dropdown
provinceSelect.addEventListener("change", function () {
    const selectedProvince = provinceSelect.value;
    displayPlaces(selectedProvince);
});
