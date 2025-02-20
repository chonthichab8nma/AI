document.addEventListener("DOMContentLoaded", () => {
  const tripContent = document.getElementById("tripContent");
  const planTripButton = document.getElementById("button1");
  const placeDetailButton = document.getElementById("button2");
  const tripDetailsSection = document.getElementById("tripDetails");
  const banner = document.querySelector(".banner");

  // ดึงข้อมูลจาก URL (query parameters)
  const urlParams = new URLSearchParams(window.location.search);
  const province = urlParams.get('province');
  const days = parseInt(urlParams.get('days'));

  // ถ้าไม่มีข้อมูลจากหน้า Home.html ให้ redirect กลับไปยัง Home.html
  if (!province || isNaN(days)) {
    window.location.assign("./Home.html");
    return; // หยุดการทำงานของโค้ดที่เหลือ
  }

  // แปลงชื่อจังหวัดจากอังกฤษเป็นไทย
  const provinceMapping = {
    "Phang Nga": "พังงา",
    "Phuket": "ภูเก็ต",
    "Krabi": "กระบี่",
    "Surat Thani": "สุราษฎร์ธานี",
    "Nakhon Si Thammarat": "นครศรีธรรมราช"
  };
  const provinceThai = provinceMapping[province] || province;

  // อัปเดตหัวข้อทริป
  const tripTitle = document.getElementById("tripTitle");
  tripTitle.textContent = `${provinceThai} ${days} วัน`;

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
        { day: "วันที่ 1", events: ["13:00 น. เดินทางถึงสนามบินภูเก็ต (HKT) รับรถเช่าและเดินทางไปยังเขาหลัก (ประมาณ 1.5-2 ชั่วโมง)", "15:00 น. เช็คอินที่พักเขาหลัก", "16:00 น. เที่ยวชมชายหาดเขาหลัก พักผ่อนริมทะเล", "19:00 น. รับประทานอาหารเย็นที่ร้านอาหารทะเลในเขาหลัก"] },
        { day: "วันที่ 2", events: ["08:00 น. รับประทานอาหารเช้าที่โรงแรม", "09:00 น. เดินทางไปยังนํ้าตกสายรุ้ง เที่ยวชมนํ้าตกและธรรมชาติ (ประมาณ 1 ชั่วโมง)", "10:30 น. เดินทางไปยังวัดสวรรค์คูหา เที่ยวชมวัดและธรรมชาติ (ประมาณ 1 ชั่วโมง)", "12:00 น. รับประทานอาหารกลางวันที่ร้านอาหารใกล้เคียง", "13:30 น. เดินทางกลับที่พัก พักผ่อน", "18:00 น. รับประทานอาหารเย็น และพักผ่อน"] },
        { day: "วันที่ 3", events: ["08:00 น. รับประทานอาหารเช้าที่โรงแรม", "09:00 น. เช็คเอ้าท์จากโรงแรม", "10:00 น. เดินทางไปยังจุดชมวิวเสม็ดนางชี ชมวิวทะเลและอ่าวพังงา (ประมาณ 1 ชั่วโมง)", "11:30 น. เดินทางไปสนามบินภูเก็ต เพื่อเดินทางกลับ"] }
      ],
      4: [
        { day: "วันที่ 1", events: ["13:00 น. เดินทางถึงสนามบินภูเก็ต (HKT) เดินทางไปยังท่าเรือเพื่อไปเกาะยาวน้อย (ควรจองเรือล่วงหน้า)", "15:00 น. เช็คอินที่พักบนเกาะยาวน้อย", "16:00 น. สํารวจเกาะยาวน้อย ว่ายนํ้า ดํานํ้าดูปะการัง", "19:00 น. รับประทานอาหารเย็นที่ร้านอาหารบนเกาะ"] },
        { day: "วันที่ 2", events: ["08:00 น. รับประทานอาหารเช้าที่โรงแรม", "09:00 น. ทัวร์เกาะยาวน้อย กิจกรรมทางนํ้าต่างๆ", "13:00 น. รับประทานอาหารกลางวัน", "14:00 น. เดินทางโดยเรือไปยังอ่าวพังงา", "16:00 น. เช็คอินที่พักในอ่าวพังงา (อาจเป็นโรงแรมหรือรีสอร์ทบนแพ)", "19:00 น. รับประทานอาหารเย็น"] },
        { day: "วันที่ 3", events: ["08:00 น. รับประทานอาหารเช้าที่โรงแรม", "09:00 น. ทัวร์อ่าวพังงา ชมธรรมชาติ เกาะต่างๆ (เช่น เกาะปันหยี)", "13:00 น. รับประทานอาหารกลางวัน", "14:00 น. เดินทางกลับไปยังภูเก็ต", "16:00 น. เช็คอินที่พักในภูเก็ต", "19:00 น. รับประทานอาหารเย็น"] },
        { day: "วันที่ 4", events: ["08:00 น. รับประทานอาหารเช้าที่โรงแรม", "09:00 น. เดินทางไปยังหมู่บ้านบางพัฒน์ เรียนรู้วิถีชีวิตชาวบ้าน", "12:00 น. รับประทานอาหารกลางวัน ", "13:00 น. เดินทางไปสนามบินภูเก็ต เพื่อเดินทางกลับ"] }
      ],
      5: [
        { day: "วันที่ 1", events: ["13:00 น. เดินทางถึงสนามบินภูเก็ต (HKT) เดินทางไปยังท่าเรือเพื่อไปเกาะยาวน้อย (ควรจองเรือล่วงหน้า)", "15:00 น. เช็คอินที่พักบนเกาะยาวน้อย", "16:00 น. สํารวจเกาะยาวน้อย ว่ายนํ้า ดํานํ้าดูปะการัง", "19:00 น. รับประทานอาหารเย็นที่ร้านอาหารบนเกาะ"] },
        { day: "วันที่ 2", events: ["08:00 น. รับประทานอาหารเช้าที่โรงแรม", "09:00 น. ทัวร์เกาะยาวน้อย กิจกรรมทางนํ้าต่างๆ", "13:00 น. รับประทานอาหารกลางวัน", "14:00 น. เดินทางโดยเรือไปยังอ่าวพังงา", "16:00 น. เช็คอินที่พักในอ่าวพังงา (อาจเป็นโรงแรมหรือรีสอร์ทบนแพ)", "19:00 น. รับประทานอาหารเย็น"] },
        { day: "วันที่ 3", events: ["08:00 น. เดินทางโดยเรือจากอ่าวพังงาไปยังเกาะสิมิลัน (ควรจองทัวร์ล่วงหน้า)", "09:00 น. - 16:00 น. ดํานํ้าดูปะการัง เที่ยวชมเกาะสิมิลัน", "17:00 น. เดินทางกลับไปยังภูเก็ต ", "19:00 น. รับประทานอาหารเย็น"] },
        { day: "วันที่ 4", events: ["08:00 น. เดินทางไปยังอุทยานแห่งชาติอ่าวพังงา เที่ยวชมธรรมชาติ", "09:00 น. เดินทางไปยังหมู่บ้านบางพัฒน์ เรียนรู้วิถีชีวิตชาวบ้าน", "12:00 น. รับประทานอาหารกลางวัน ", "13:00 น. เดินทางไปสนามบินภูเก็ต เพื่อเดินทางกลับ"] },
        { day: "วันที่ 5", events: ["08:00 น. รับประทานอาหารเช้าที่โรงแรม", "09:00 น. เดินทางไปสนามบินภูเก็ต เพื่อเดินทางกลับ"] }
      ]
    },
    "Nakhon Si Thammarat": {
      1: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เริ่มต้นที่ **วัดพระมหาธาตุวรมหาวิหาร** ชมความงดงามของสถาปัตยกรรมและประวัติศาสตร์อันยาวนาน",
            "10:00 น. เดินทางไป ** วัดเจดีไอ้ไข่ ** สักการะสิ่งศักดิ์สิทธิ์ขอพรความเป็นสิริมงคล ",
            "11:00 น. รับประทานอาหารกลางวัน ร้านอาหารท้องถิ่นใกล้เคียงวัดเจดีย์ไอ้ไข่",
            "12:30 น. เดินทางกลับเข้าตัวเมืองนครศรีธรรมราช",
            "14:00 น. Check in ที่พัก",
            "16:00 น. อิสระพักผ่อนตามอัธยาศัย"
          ]
        }
      ],
      2: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. **นํ้าตกกรุงชิง** สัมผัสธรรมชาติอันบริสุทธิ์ ",
            "12:00 น. รับประทานอาหารกลางวัน ณ นํ้าตกกรุงชิง หรือเตรียมอาหารไปเอง",
            "13:30 น. เดินทางไป **บ้านคีรีวง** ชมวิถีชีวิตชาวบ้านและบรรยากาศของหมู่บ้าน",
            "16:00 น. Check in ที่พัก ที่บ้านคีรีวง หรือในตัวเมืองนครศรีธรรมราช",
            "18.00 น. รับประทานอาหารเย็น ณ ที่พักหรือร้านอาหารในพื้นที่",
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เยี่ยมชม **วัดพระมหาธาตุวรมหาวิหาร**",
            "10:00 น. เดินทางไป **สะพานปลา** ชมบรรยากาศการจับปลาและซื้ออาหารทะเลสดๆ ",
            "11:00 น. รับประทานอาหารกลางวัน ร้านอาหารใกล้สะพานปลา",
            "12.30 น. เดินทางกลับ"
          ]
        }
      ],
      3: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. **นํ้าตกกรุงชิง** สัมผัสธรรมชาติอันบริสุทธิ์ ",
            "12:00 น. รับประทานอาหารกลางวัน ณ นํ้าตกกรุงชิง หรือเตรียมอาหารไปเอง",
            "13:30 น. เดินทางไป **บ้านคีรีวง** ชมวิถีชีวิตชาวบ้านและบรรยากาศของหมู่บ้าน",
            "16:00 น. Check in ที่พัก ที่บ้านคีรีวง หรือในตัวเมืองนครศรีธรรมราช",
            "18.00 น. รับประทานอาหารเย็น ณ ที่พักหรือร้านอาหารในพื้นที่",
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เดินทางไป **หาดสิชล** พักผ่อนและเล่นนํ้าทะเล",
            "17:00 น. กลับที่พัก"
          ]
        },
        {
          day: "วันที่ 3",
          events: [
            "08:00 น. เดินทางไป **หาดขนอม** ชมความสวยงามของชายหาดและวิวทิวทัศน์ ",
            "12:00 น. รับประทานอาหารกลางวัน ณ หาดขนอม",
            "13.30 น. เดินทางกลับ"
          ]
        },

      ],
      4: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. **นํ้าตกกรุงชิง** สัมผัสธรรมชาติอันบริสุทธิ์ ",
            "12:00 น. รับประทานอาหารกลางวัน ณ นํ้าตกกรุงชิง หรือเตรียมอาหารไปเอง",
            "13:30 น. เดินทางไป **บ้านคีรีวง** ชมวิถีชีวิตชาวบ้านและบรรยากาศของหมู่บ้าน",
            "16:00 น. Check in ที่พัก ที่บ้านคีรีวง หรือในตัวเมืองนครศรีธรรมราช",
            "18.00 น. รับประทานอาหารเย็น ณ ที่พักหรือร้านอาหารในพื้นที่",
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เดินทางไป **หาดสิชล** พักผ่อนและเล่นนํ้าทะเล",
            "17:00 น. กลับที่พัก"
          ]
        },
        {
          day: "วันที่ 3",
          events: [
            "08:00 น. อุทยานแห่งชาติเขาหลวง** เดินป่าชมธรรมชาติ",
          ]
        },
        {
          day: "วันที่ 4",
          events: [
            "08:00 น. **สวนตาสรรค์** ชมสวนสวยๆ",
            "10:00 น. เดินทางไป **ตลาดย้อนยุคปากพนัง** ชมบรรยากาศย้อนยุค",
            "12:00 น. รับประทานอาหารกลางวัน ณ ตลาดปากพนัง",
            "13:00 น. เดินทางกลับ"
          ]
        },
      ],
      5: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. **นํ้าตกกรุงชิง** สัมผัสธรรมชาติอันบริสุทธิ์ ",
            "12:00 น. รับประทานอาหารกลางวัน ณ นํ้าตกกรุงชิง หรือเตรียมอาหารไปเอง",
            "13:30 น. เดินทางไป **บ้านคีรีวง** ชมวิถีชีวิตชาวบ้านและบรรยากาศของหมู่บ้าน",
            "16:00 น. Check in ที่พัก ที่บ้านคีรีวง หรือในตัวเมืองนครศรีธรรมราช",
            "18.00 น. รับประทานอาหารเย็น ณ ที่พักหรือร้านอาหารในพื้นที่",
          ]
        },
        {
          day: "วันที่ 2",
          events: ["08:00 น. เดินทางไป **หาดสิชล** พักผ่อนและเล่นนํ้าทะเล",
            "17:00 น. กลับที่พัก"
          ]
        },
        {
          day: "วันที่ 3",
          events: ["08:00 น. อุทยานแห่งชาติเขาหลวง** เดินป่ าชมธรรมชาติ",
          ]
        },
        {
          day: "วันที่ 4",
          events: [
            "08:00 น. **สวนตาสรรค์** ชมสวนสวยๆ",
            "10:00 น. เดินทางไป **ตลาดย้อนยุคปากพนัง** ชมบรรยากาศย้อนยุค",
            "12:00 น. รับประทานอาหารกลางวัน ณ ตลาดปากพนัง",
            "13:00 น. เดินทางกลับ"
          ]
        },
        {
          day: "วันที่ 5",
          events: ["อิสระพักผ่อน ช้อปปิ้ง หรือเที่ยวชมสถานที่ที่สนใจซํ้าอีกครั้ง"
          ]
        }
      ],
    },

    "Phuket": {
      1: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เริ่มต้นที่ **ย่านเมืองเก่าภูเก็ต** ชมสถาปัตยกรรม Sino-Portuguese แวะซื้อของฝากที่ถนนดีบุก จากนั้นไป **สถานแสดงพันธุ์สัตว์น้ำภูเก็ต** ชมความหลากหลายของสิ่งมีชีวิตใต้ทะเล",
            "12:00 น. รับประทานอาหารกลางวันที่ย่านเมืองเก่า จากนั้นเดินทางไป **แหลมพรหมเทพ** ชมพระอาทิตย์ตกดิน (ควรเผื่อเวลาอย่างน้อย 1 ชั่วโมงก่อนพระอาทิตย์ตก) ",
            "16:00 น. เดินทางกลับที่พัก"
          ]
        }
      ],
      2: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เริ่มต้นที่ **หาดป่าตอง** อาบแดด ว่ายน้ำ เล่นน้ำทะเล จากนั้นไป **หาดกะรน** ",
            "12:00 น. รับประทานอาหารกลางวันที่หาดป่าตอง จากนั้นเดินทางไป **ย่านเมืองเก่าภูเก็ต** เดินชมเมืองเก่า ช้อปปิ้ง",
            "16:00 น. รับประทานอาหารเย็นที่ย่านเมืองเก่า อาจแวะดื่มด่ำบรรยากาศยามค่ำคืน"
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เดินทางไป **หาดไม้ขาว** ผ่อนคลายบนชายหาด อาจเล่นกีฬาทางน้ำ",
            "12:00 น. รับประทานอาหารกลางวันที่หาดไม้ขาว จากนั้นเดินทางไป **จุดชมวิวกังหันลม** ชมวิวทิวทัศน์",
            "16:00 น. เดินทางกลับที่พัก"
          ]
        }
      ],
      3: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เริ่มต้นที่ **หาดป่าตอง** อาบแดด ว่ายน้ำ เล่นน้ำทะเล จากนั้นไป **หาดกะรน** ",
            "12:00 น. รับประทานอาหารกลางวันที่หาดป่าตอง จากนั้นเดินทางไป **ย่านเมืองเก่าภูเก็ต** เดินชมเมืองเก่า ช้อปปิ้ง",
            "16:00 น. รับประทานอาหารเย็นที่ย่านเมืองเก่า อาจแวะดื่มด่ำบรรยากาศยามค่ำคืน"
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เดินทางไป **หาดไม้ขาว** ผ่อนคลายบนชายหาด อาจเล่นกีฬาทางน้ำ",
            "12:00 น. รับประทานอาหารกลางวันที่หาดไม้ขาว จากนั้นเดินทางไป **จุดชมวิวกังหันลม** ชมวิวทิวทัศน์",
            "16:00 น. เดินทางกลับที่พัก"
          ]
        },
        {
          day: "วันที่ 3",
          events: [
            "08:00 น. ทริปไป **เกาะไม้ท่อน** โดยเรือ ดำน้ำดูปะการัง เล่นน้ำทะเล (ควรจองทัวร์ล่วงหน้า) ",
            "16:00 น. เดินทางกลับที่พัก"
          ]
        }
      ],
      4: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เริ่มต้นที่ **หาดป่าตอง** อาบแดด ว่ายน้ำ เล่นน้ำทะเล จากนั้นไป **หาดกะรน** ",
            "12:00 น. รับประทานอาหารกลางวันที่หาดป่าตอง จากนั้นเดินทางไป **ย่านเมืองเก่าภูเก็ต** เดินชมเมืองเก่า ช้อปปิ้ง",
            "16:00 น. รับประทานอาหารเย็นที่ย่านเมืองเก่า อาจแวะดื่มด่ำบรรยากาศยามค่ำคืน"
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เดินทางไป **หาดไม้ขาว** ผ่อนคลายบนชายหาด อาจเล่นกีฬาทางน้ำ",
            "12:00 น. รับประทานอาหารกลางวันที่หาดไม้ขาว จากนั้นเดินทางไป **จุดชมวิวกังหันลม** ชมวิวทิวทัศน์",
            "16:00 น. เดินทางกลับที่พัก"
          ]
        },
        {
          day: "วันที่ 3",
          events: [
            "08:00 น. ทริปไป **เกาะไม้ท่อน** โดยเรือ ดำน้ำดูปะการัง เล่นน้ำทะเล (ควรจองทัวร์ล่วงหน้า) ",
            "16:00 น. เดินทางกลับที่พัก"
          ]
        },
        {
          day: "วันที่ 4",
          events: [
            "08:00 น. เดินทางไป **จุดชมวิวสามอ่าว** ชมวิวสวยๆ ของอ่าวต่างๆ จากนั้นไป **วันฉลอง** ช้อปปิ้งรับประทานอาหาร",
            "12:00 น. กลับที่พัก ผ่อนคลาย"
          ]
        },
      ],
      5: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เริ่มต้นที่ **หาดป่าตอง** อาบแดด ว่ายน้ำ เล่นน้ำทะเล จากนั้นไป **หาดกะรน** ",
            "12:00 น. รับประทานอาหารกลางวันที่หาดป่าตอง จากนั้นเดินทางไป **ย่านเมืองเก่าภูเก็ต** เดินชมเมืองเก่า ช้อปปิ้ง",
            "16:00 น. รับประทานอาหารเย็นที่ย่านเมืองเก่า อาจแวะดื่มด่ำบรรยากาศยามค่ำคืน"
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เดินทางไป **หาดไม้ขาว** ผ่อนคลายบนชายหาด อาจเล่นกีฬาทางน้ำ",
            "12:00 น. รับประทานอาหารกลางวันที่หาดไม้ขาว จากนั้นเดินทางไป **จุดชมวิวกังหันลม** ชมวิวทิวทัศน์",
            "16:00 น. เดินทางกลับที่พัก"
          ]
        },
        {
          day: "วันที่ 3",
          events: [
            "08:00 น. ทริปไป **เกาะไม้ท่อน** โดยเรือ ดำน้ำดูปะการัง เล่นน้ำทะเล (ควรจองทัวร์ล่วงหน้า) ",
            "16:00 น. เดินทางกลับที่พัก"
          ]
        },
        {
          day: "วันที่ 4",
          events: [
            "08:00 น. เดินทางไป **จุดชมวิวสามอ่าว** ชมวิวสวยๆ ของอ่าวต่างๆ จากนั้นไป **วันฉลอง** ช้อปปิ้งรับประทานอาหาร",
            "12:00 น. กลับที่พัก ผ่อนคลาย"
          ]
        },
        {
          day: "วันที่ 5",
          events: [
            "กิจกรรมเสริม เช่น นวดไทย เรียนทำอาหารไทย หรือทริปไปยังสถานที่อื่นๆ ที่สนใจ เช่น น้ำตกบางแป"
          ]
        },
      ],

    },
    "Krabi": {
      1: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เดินทางออกจากที่พักไปยัง **สระมรกต** ใช้เวลาเดินทางประมาณ 1 ชั่วโมง เพลิดเพลินกับความใสสะอาดของน้ำและธรรมชาติ",
            "10:00 น. เดินทางต่อไปยัง **น้ำตกธารโบกขรณี** (ใช้เวลาเดินทางประมาณ 30 นาที) ชื่นชมความสวยงามของน้ำตกและธรรมชาติรอบๆ ",
            "11:30 น. ดินทางไปยัง **วัดบางโทง** (ใช้เวลาเดินทางประมาณ 45 นาที) ชมความงามของสถาปัตยกรรมและความสงบของวัด",
            "12:00 น. รับประทานอาหารกลางวัน",
            "13:00 น. ดินทางไปยัง **สุสานหอย** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) ศึกษาประวัติศาสตร์และความสำคัญทางธรณีวิทยา",
            "14:00 น. เดินทางกลับที่พัก"
          ]
        }
      ],
      2: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เดินทางไปยัง **อ่าวไร่เลย์** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) พักผ่อนบนชายหาด เล่นน้ำทะเลปีนเขา",
            "18:00 น. รับประทานอาหารเย็น ชมพระอาทิตย์ตกดินที่อ่าวไร่เลย์ ",
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เดินทางไปยัง **เกาะพีพี** โดยเรือสปีดโบ๊ท (ใช้เวลาเดินทางประมาณ 45 นาที) ดำน้ำดูปะการัง เที่ยวชมอ่าวต่างๆ บนเกาะพีพี",
            "17:00 น. เดินทางกลับที่พัก",
          ]
        }
      ],
      3: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เดินทางไปยัง **อ่าวไร่เลย์** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) พักผ่อนบนชายหาด เล่นน้ำทะเลปีนเขา",
            "18:00 น. รับประทานอาหารเย็น ชมพระอาทิตย์ตกดินที่อ่าวไร่เลย์ ",
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เดินทางไปยัง **เกาะพีพี** โดยเรือสปีดโบ๊ท (ใช้เวลาเดินทางประมาณ 45 นาที) ดำน้ำดูปะการัง เที่ยวชมอ่าวต่างๆ บนเกาะพีพี",
            "17:00 น. เดินทางกลับที่พัก",
          ]
        },
        {
          day: "วันที่ 3",
          events: [
            "08:00 น. เดินทางไปยัง **เขาขนาบน้ำ** (ใช้เวลาเดินทางประมาณ 30 นาที) ถ่ายรูป ชมวิวทิวทัศน์ ",
            "09:00 น. เดินทางไปยัง **ทะเลแหวก** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) ชมความมหัศจรรย์ของทะเลแหวกเล่นน้ำทะเล",
            "11:00 น. เดินทางไปยัง **อ่าวโล๊ะซามะ** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) พักผ่อนบนชายหาด",
            "13:00 น. รับประทานอาหารกลางวัน",
            "14:00 น. เดินทางกลับที่พัก"
          ]
        }
      ],
      4: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เดินทางไปยัง **อ่าวไร่เลย์** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) พักผ่อนบนชายหาด เล่นน้ำทะเลปีนเขา",
            "18:00 น. รับประทานอาหารเย็น ชมพระอาทิตย์ตกดินที่อ่าวไร่เลย์ ",
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เดินทางไปยัง **เกาะพีพี** โดยเรือสปีดโบ๊ท (ใช้เวลาเดินทางประมาณ 45 นาที) ดำน้ำดูปะการัง เที่ยวชมอ่าวต่างๆ บนเกาะพีพี",
            "17:00 น. เดินทางกลับที่พัก",
          ]
        },
        {
          day: "วันที่ 3",
          events: [
            "08:00 น. เดินทางไปยัง **เขาขนาบน้ำ** (ใช้เวลาเดินทางประมาณ 30 นาที) ถ่ายรูป ชมวิวทิวทัศน์ ",
            "09:00 น. เดินทางไปยัง **ทะเลแหวก** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) ชมความมหัศจรรย์ของทะเลแหวกเล่นน้ำทะเล",
            "11:00 น. เดินทางไปยัง **อ่าวโล๊ะซามะ** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) พักผ่อนบนชายหาด",
            "13:00 น. รับประทานอาหารกลางวัน",
            "14:00 น. เดินทางกลับที่พัก"
          ]
        },
        {
          day: "วันที่ 4",
          events: [
            "08:00 น. เดินทางไปยัง **ท่าปอม คลองสองน้ำ** (ใช้เวลาเดินทางประมาณ 1.5 ชั่วโมง) ล่องเรือชมป่าโกงกางและความสวยงามของคลองสองน้ำ",
            "11:00 น. เดินทางกลับที่พัก พักผ่อน",
          ]
        },
      ],
      5: [
        {
          day: "วันที่ 1",
          events: [
            "08:00 น. เดินทางไปยัง **อ่าวไร่เลย์** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) พักผ่อนบนชายหาด เล่นน้ำทะเลปีนเขา",
            "18:00 น. รับประทานอาหารเย็น ชมพระอาทิตย์ตกดินที่อ่าวไร่เลย์ ",
          ]
        },
        {
          day: "วันที่ 2",
          events: [
            "08:00 น. เดินทางไปยัง **เกาะพีพี** โดยเรือสปีดโบ๊ท (ใช้เวลาเดินทางประมาณ 45 นาที) ดำน้ำดูปะการัง เที่ยวชมอ่าวต่างๆ บนเกาะพีพี",
            "17:00 น. เดินทางกลับที่พัก",
          ]
        },
        {
          day: "วันที่ 3",
          events: [
            "08:00 น. เดินทางไปยัง **เขาขนาบน้ำ** (ใช้เวลาเดินทางประมาณ 30 นาที) ถ่ายรูป ชมวิวทิวทัศน์ ",
            "09:00 น. เดินทางไปยัง **ทะเลแหวก** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) ชมความมหัศจรรย์ของทะเลแหวกเล่นน้ำทะเล",
            "11:00 น. เดินทางไปยัง **อ่าวโล๊ะซามะ** (ใช้เวลาเดินทางประมาณ 1 ชั่วโมง) พักผ่อนบนชายหาด",
            "13:00 น. รับประทานอาหารกลางวัน",
            "14:00 น. เดินทางกลับที่พัก"
          ]
        },
        {
          day: "วันที่ 4",
          events: [
            "08:00 น. เดินทางไปยัง **ท่าปอม คลองสองน้ำ** (ใช้เวลาเดินทางประมาณ 1.5 ชั่วโมง) ล่องเรือชมป่าโกงกางและความสวยงามของคลองสองน้ำ",
            "11:00 น. เดินทางกลับที่พัก พักผ่อน",
          ]
        },
        {
          day: "วันที่ 5",
          events: [
            "วันพักผ่อน เลือกทำกิจกรรมเพิ่มเติมตามใจชอบ เช่น นวดแผนไทย ช้อปปิ้ง หรือเที่ยวชมสถานที่ที่สนใจซ้ำอีกครั้ง",
          ]
        },
      ]
    },

    "Surat Thani": {
      1: [
        { day: "วันที่ 1", events: ["08:00 น. สักการะสิ่งศักดิ์สิทธิ์คู่บ้านคู่เมืองสุราษฎร์ธานี ชมสถาปัตยกรรมอันงดงาม(ประมาณ 2 ชั่วโมง) จากนั้นเดินทางไปสักการะ พระพุทธรูปองค์ใหญ่ (ประมาณ 1 ชั่วโมง)", "12:00 น. รับประทานอาหารกลางวันที่ร้านอาหารในตัวเมืองสุราษฎร์ธานี", "13:00 น. เยี่ยมชม ถ้ำธรรมศาลา สำรวจความสวยงามภายในถ้ำ (ประมาณ 1.5 ชั่วโมง) จากนั้นแวะชมตลาดศาลเจ้า สัมผัสวิถีชีวิตและวัฒนธรรมท้องถิ่น (ประมาณ 1.5 ชั่วโมง)"] }
      ],
      2: [
        { day: "วันที่ 1", events: ["08:00 น. สักการะสิ่งศักดิ์สิทธิ์คู่บ้านคู่เมืองสุราษฎร์ธานี ชมสถาปัตยกรรมอันงดงาม(ประมาณ 2 ชั่วโมง) จากนั้นเดินทางไปสักการะ พระพุทธรูปองค์ใหญ่ (ประมาณ 1 ชั่วโมง)", "12:00 น. รับประทานอาหารกลางวันที่ร้านอาหารในตัวเมืองสุราษฎร์ธานี", "13:00 น. เยี่ยมชม ถ้ำธรรมศาลา สำรวจความสวยงามภายในถ้ำ (ประมาณ 1.5 ชั่วโมง) จากนั้นแวะชมตลาดศาลเจ้า สัมผัสวิถีชีวิตและวัฒนธรรมท้องถิ่น (ประมาณ 1.5 ชั่วโมง)"] },
        { day: "วันที่ 2", events: ["08:00 น. เดินทางไปอุทยานแห่งชาติเขาสก ชมความงามของ น้ำตกแปดเซียน (ประมาณ 3-4 ชั่วโมง รวมเวลาเดินทาง)", "12:00 น. แวะพักผ่อนรับประทานอาหารกลางวันที่อุทยานฯ จากนั้นเดินทางกลับที่พักในเมืองสุราษฎร์ธานี"] }
      ],
      3: [
        { day: "วันที่ 1", events: ["08:00 น. สักการะสิ่งศักดิ์สิทธิ์คู่บ้านคู่เมืองสุราษฎร์ธานี ชมสถาปัตยกรรมอันงดงาม(ประมาณ 2 ชั่วโมง) จากนั้นเดินทางไปสักการะ พระพุทธรูปองค์ใหญ่ (ประมาณ 1 ชั่วโมง)", "12:00 น. รับประทานอาหารกลางวันที่ร้านอาหารในตัวเมืองสุราษฎร์ธานี", "13:00 น. เยี่ยมชม ถ้ำธรรมศาลา สำรวจความสวยงามภายในถ้ำ (ประมาณ 1.5 ชั่วโมง) จากนั้นแวะชมตลาดศาลเจ้า สัมผัสวิถีชีวิตและวัฒนธรรมท้องถิ่น (ประมาณ 1.5 ชั่วโมง)"] },
        { day: "วันที่ 2", events: ["08:00 น. เดินทางไปอุทยานแห่งชาติเขาสก ชมความงามของ น้ำตกแปดเซียน (ประมาณ 3-4 ชั่วโมง รวมเวลาเดินทาง)", "12:00 น. แวะพักผ่อนรับประทานอาหารกลางวันที่อุทยานฯ จากนั้นเดินทางกลับที่พักในเมืองสุราษฎร์ธานี"] },
        { day: "วันที่ 3", events: ["08:00 น. เดินทางไปเกาะเต่าโดยเรือเร็ว ชมความงามของจุดชมวิวจอห์น-สุวรรณและเพลิดเพลินกับกิจกรรมทางทะเลบนเกาะเต่า (ควรจองที่พักและทัวร์บนเกาะเต่าล่วงหน้า)"] }
      ],
      4: [
        { day: "วันที่ 1", events: ["08:00 น. สักการะสิ่งศักดิ์สิทธิ์คู่บ้านคู่เมืองสุราษฎร์ธานี ชมสถาปัตยกรรมอันงดงาม(ประมาณ 2 ชั่วโมง) จากนั้นเดินทางไปสักการะ พระพุทธรูปองค์ใหญ่ (ประมาณ 1 ชั่วโมง)", "12:00 น. รับประทานอาหารกลางวันที่ร้านอาหารในตัวเมืองสุราษฎร์ธานี", "13:00 น. เยี่ยมชม ถ้ำธรรมศาลา สำรวจความสวยงามภายในถ้ำ (ประมาณ 1.5 ชั่วโมง) จากนั้นแวะชมตลาดศาลเจ้า สัมผัสวิถีชีวิตและวัฒนธรรมท้องถิ่น (ประมาณ 1.5 ชั่วโมง)"] },
        { day: "วันที่ 2", events: ["08:00 น. เดินทางไปอุทยานแห่งชาติเขาสก ชมความงามของ น้ำตกแปดเซียน (ประมาณ 3-4 ชั่วโมง รวมเวลาเดินทาง)", "12:00 น. แวะพักผ่อนรับประทานอาหารกลางวันที่อุทยานฯ จากนั้นเดินทางกลับที่พักในเมืองสุราษฎร์ธานี"] },
        { day: "วันที่ 3", events: ["08:00 น. เดินทางไปเกาะเต่าโดยเรือเร็ว ชมความงามของจุดชมวิวจอห์น-สุวรรณและเพลิดเพลินกับกิจกรรมทางทะเลบนเกาะเต่า (ควรจองที่พักและทัวร์บนเกาะเต่าล่วงหน้า)"] },
        { day: "วันที่ 4", events: ["08:00 น. ล่องเรือชมธรรมชาติในคลองบางใบไมสัมผัสวิถีชีวิตริมคลอง (ประมาณ 4 ชั่วโมง รวมเวลาเดินทาง)", "12:00 น. แวะเยี่ยมชมลานหินโค้งชมความมหัศจรรย์ทางธรณีวิทยา จากนั้นเดินทางกลับ"] }
      ],
      5: [
        { day: "วันที่ 1", events: ["08:00 น. สักการะสิ่งศักดิ์สิทธิ์คู่บ้านคู่เมืองสุราษฎร์ธานี ชมสถาปัตยกรรมอันงดงาม(ประมาณ 2 ชั่วโมง) จากนั้นเดินทางไปสักการะ พระพุทธรูปองค์ใหญ่ (ประมาณ 1 ชั่วโมง)", "12:00 น. รับประทานอาหารกลางวันที่ร้านอาหารในตัวเมืองสุราษฎร์ธานี", "13:00 น. เยี่ยมชม ถ้ำธรรมศาลา สำรวจความสวยงามภายในถ้ำ (ประมาณ 1.5 ชั่วโมง) จากนั้นแวะชมตลาดศาลเจ้า สัมผัสวิถีชีวิตและวัฒนธรรมท้องถิ่น (ประมาณ 1.5 ชั่วโมง)"] },
        { day: "วันที่ 2", events: ["08:00 น. เดินทางไปอุทยานแห่งชาติเขาสก ชมความงามของ น้ำตกแปดเซียน (ประมาณ 3-4 ชั่วโมง รวมเวลาเดินทาง)", "12:00 น. แวะพักผ่อนรับประทานอาหารกลางวันที่อุทยานฯ จากนั้นเดินทางกลับที่พักในเมืองสุราษฎร์ธานี"] },
        { day: "วันที่ 3", events: ["08:00 น. เดินทางไปเกาะเต่าโดยเรือเร็ว ชมความงามของจุดชมวิวจอห์น-สุวรรณและเพลิดเพลินกับกิจกรรมทางทะเลบนเกาะเต่า (ควรจองที่พักและทัวร์บนเกาะเต่าล่วงหน้า)"] },
        { day: "วันที่ 4", events: ["08:00 น. ล่องเรือชมธรรมชาติในคลองบางใบไมสัมผัสวิถีชีวิตริมคลอง (ประมาณ 4 ชั่วโมง รวมเวลาเดินทาง)", "12:00 น. แวะเยี่ยมชมลานหินโค้งชมความมหัศจรรย์ทางธรณีวิทยา จากนั้นเดินทางกลับ"] },
        { day: "วันที่ 5", events: ["08:00 น. แวะพักผ่อนที่บ่อน้ำร้อนเขาตอก ผ่อนคลายในบรรยากาศธรรมชาติ (ประมาณ 3-4 ชั่วโมง รวมเวลาเดินทาง) ", "12:00 น. เยี่ยมชมHug Village สัมผัสประสบการณ์การท่องเที่ยวเชิงวัฒนธรรม จากนั้นเดินทางกลับ"] }
      ]
    }
  };

  // ฟังก์ชันแสดงรายละเอียดทริป
  const displayTripDetails = () => {
    // ล้างเนื้อหาก่อนเพื่อป้องกันข้อมูลซ้ำ
    tripContent.innerHTML = "";

    // ตรวจสอบข้อมูลว่ามีใน tripDetails หรือไม่
    if (tripDetails[province] && tripDetails[province][days]) {
      tripDetails[province][days].forEach(dayDetail => {
        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day");

        // เพิ่มหัวข้อวันที่
        const dayTitle = document.createElement("h3");
        dayTitle.textContent = dayDetail.day;
        dayContainer.appendChild(dayTitle);

        // แสดงรายการกิจกรรม
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
      // กรณีไม่มีข้อมูลแสดงข้อความแจ้งเตือน
      tripContent.innerHTML = "<p>ไม่มีข้อมูลสำหรับจังหวัดหรือจำนวนวันที่เลือก</p>";
    }
  };

  // เรียกฟังก์ชันหลังโหลดข้อมูลจาก URL
  displayTripDetails();

  planTripButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("Home.html"); // ใช้ assign แทน href เพื่อให้เปลี่ยนหน้า
  });

  placeDetailButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("plan_details.html"); // ใช้ assign แทน href เพื่อให้เปลี่ยนหน้า
  });

  // ตั้งค่าให้เปลี่ยน active เมื่อคลิกปุ่มอื่น
  placeDetailButton.addEventListener("click", () => {
    planTripButton.classList.remove("active");
    placeDetailButton.classList.add("active");
  });

  // เริ่มต้นแสดงเนื้อหาทริปเมื่อหน้าโหลด
  displayTripDetails(); //pv,crhpbj'cdhpbj'g]t 
});