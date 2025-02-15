document.addEventListener("DOMContentLoaded", () => {
    const tripContent = document.getElementById("tripContent");
    const planTripButton = document.getElementById("planTripButton");
    const placeDetailButton = document.getElementById("placeDetailButton");
});

// ดึง Element
const provinceSelect = document.getElementById("province");
const placeContainer = document.getElementById("place-container");

function changeStyle(buttonNumber) {
    // รีเซ็ตสถานะของปุ่มทั้งสอง
    document.getElementById('button1').classList.remove('active');
    document.getElementById('button2').classList.remove('active');

    // เพิ่มคลาส active ให้กับปุ่มที่กด
    if (buttonNumber === 1) {
        document.getElementById('button1').classList.add('active');
        window.location.href = 'Home.html';
    } else if (buttonNumber === 2) {
        document.getElementById('button2').classList.add('active');
        // เมื่อกดปุ่มที่ 2 ให้ไปที่หน้า plan_detail.html
        window.location.href = 'plan_detail.html';
    }
}

// ข้อมูลสถานที่ท่องเที่ยวของแต่ละจังหวัด
const placesData = {
    krabi: [
        {
            name: "สระมรกต",
            description: "เป็นแหล่งท่องเที่ยวธรรมชาติที่มีชื่อเสียงในจังหวัดกระบี่ ประเทศไทย เป็นน้ำพุร้อนธรรมชาติ ที่เกิดจากกระแสน้ำใต้ดินไหลผ่านชั้นหินปูน ทำให้น้ำมีสีเขียวมรกต ใสสะอาดและสวยงามเป็นเอกลักษณ์",
            image: "emerald_pool.jpg"
        },
        {
            name: "อ่าวไร่เลย์",
            description: "เป็นสถานที่ท่องเที่ยวชื่อดังของจังหวัดกระบี่ ประเทศไทย ขึ้นชื่อเรื่องชายหาดที่สวยงาม น้ำทะเลใสและบรรยากาศเงียบสงบ เหมาะสำหรับการเล่นน้ำทะเล พักผ่อน และปีนเขา",
            image: "railay_beach.jpg"
        },
        {
            name: "เกาะพีพี",
            description: "สวรรค์กลางทะเลอันดามัน เป็นหมู่เกาะที่มีชื่อเสียงระดับโลกตั้งอยู่ในจังหวัดกระบี่ ประเทศไทย ขึ้นชื่อเรื่องน้ำทะเลใส หาดทรายขาว และแนวปะการังที่สวยงาม ทำให้เป็นจุดหมายปลายทางยอดนิยมสำหรับการดำน้ำดูปะการังและท่องเที่ยวทางทะเล",
            image: "koh_phi_phi.jpg"
        },
        {
            name: "เขาขนาบน้ำ",
            description: "แลนด์มาร์กสำคัญของกระบี่ เป็นหนึ่งในจุดท่องเที่ยวที่โดดเด่นของ จังหวัดกระบี่ มีลักษณะเป็น ภูเขาหินปูนคู่ขนานกัน ตั้งตระหง่านขนาบสองฝั่งของแม่น้ำกระบี่ ทำให้วิวบริเวณนี้มีเอกลักษณ์และสวยงาม เหมาะสำหรับการถ่ายภาพ และชมทิวทัศน์ของแม่น้ำและทะเล",
            image: "khao_khanap_nam.jpg"
        },
        {
            name: "ทะเลแหวก",
            description: "ปรากฏการณ์ธรรมชาติสุดมหัศจรรย์ เป็นหนึ่งในไฮไลท์สำคัญของจังหวัดกระบี่ และถือเป็นหนึ่งในปรากฏการณ์ธรรมชาติที่สวยงามและหาดูได้ยาก โดยในช่วงน้ำลง น้ำทะเลจะแยกตัวออกจนเกิดเป็นสันทรายสีขาวทอดยาว เชื่อมต่อระหว่างเกาะสามเกาะ ได้แก่ เกาะไก่ เกาะทับ และเกาะหม้อ",
            image: "thale_waek.jpg"
        },
        {
            name: "สุสานหอย",
            description: "แหล่งธรณีวิทยาอายุกว่า 75 ล้านปี เป็นหนึ่งในสถานที่ท่องเที่ยวทางธรณีวิทยาที่สำคัญของจังหวัดกระบี่ โดยเป็นแหล่งซากดึกดำบรรพ์ของหอยน้ำจืดที่มีอายุประมาณ 40-75 ล้านปี จัดเป็นหนึ่งในแหล่งฟอสซิลหอยที่เก่าแก่และหายากของโลก",
            image: "fossil_shell_beach.jpg"
        },
        {
            name: "ท่าปอม คลองสองน้ำ",
            description: "ความมหัศจรรย์ของธรรมชาติ น้ำใสและป่าชายเลนที่อุดมสมบูรณ์ เป็นแหล่งท่องเที่ยวทางธรรมชาติที่สวยงามและแปลกตา ตั้งอยู่ในจังหวัดกระบี่ จุดเด่นของที่นี่คือ คลองที่มีทั้งน้ำจืดและน้ำเค็มไหลมาบรรจบกัน ทำให้เกิดระบบนิเวศที่หลากหลาย มีน้ำใสสะอาด และมีป่าชายเลนที่อุดมสมบูรณ์",
            image: "tha_pom_klong_song_nam.jpg"
        },
        {
            name: "วัดบางโทง",
            description: "วัดงดงามแห่งกระบี่ ศูนย์รวมศรัทธาและสถาปัตยกรรมอันวิจิตรหรือวัดมหาธาตุวชิรมงคล เป็นหนึ่งในวัดที่มีสถาปัตยกรรมที่งดงามและยิ่งใหญ่ที่สุดในจังหวัดกระบี่ โดดเด่นด้วยพระมหาธาตุเจดีย์ที่สูงตระหง่าน มีบรรยากาศที่เงียบสงบ เหมาะสำหรับการเยี่ยมชม ทำบุญ และปฏิบัติธรรม",
            image: "wat_bang_thong.jpg"
        },
        {
            name: "น้ำตกธารโบกขรณี",
            description: "สายน้ำใสกลางป่า บรรยากาศร่มรื่นแห่งกระบี่ เป็นน้ำตกที่มีความสวยงามและร่มรื่น ตั้งอยู่ในพื้นที่ของอุทยานแห่งชาติธารโบกขรณี จังหวัดกระบี่ จุดเด่นของน้ำตกแห่งนี้คือ สายน้ำใสสะอาด ไหลลดหลั่นลงมาตามชั้นหินปูน ท่ามกลางป่าฝนเขียวขจี เหมาะสำหรับการชมวิวธรรมชาติและเล่นน้ำคลายร้อน",
            image: "than_bok_khorani_waterfall.jpg"
        },
        {
            name: "อ่าวโล๊ะซามะ",
            description: "หาดสวยน้ำใส บรรยากาศเงียบสงบกลางหมู่เกาะพีพี เป็นอ่าวขนาดเล็กที่เงียบสงบ ตั้งอยู่ทางด้านใต้ของเกาะพีพีเล จังหวัดกระบี่ ขึ้นชื่อเรื่องหาดทรายขาว น้ำทะเลใส และธรรมชาติที่อุดมสมบูรณ์ เหมาะสำหรับนักท่องเที่ยวที่ต้องการพักผ่อนแบบเป็นส่วนตัวและดำน้ำชมปะการัง",
            image: "loh_samah_bay.jpg"
        }
    ],
    nakhonsithammarat: [
        {
            name: "วัดพระมหาธาตุวรมหาวิหาร",
            description: "วัดสำคัญแห่งจังหวัดนครศรีธรรมราช เป็นวัดที่มีความสำคัญในจังหวัดนครศรีธรรมราช โดยมีพระบรมธาตุเจดีย์เป็นศูนย์กลางของวัด ซึ่งมีสถาปัตยกรรมที่งดงามและเต็มไปด้วยประวัติศาสตร์ที่ยาวนาน เหมาะสำหรับผู้ที่ต้องการสัมผัสความสงบและความศักดิ์สิทธิ์ในสถานที่ที่มีความสำคัญทางศาสนา",
            image: "wat_phra_maha_that_woramaha_wihan.jpg"
        },
        {
            name: "วัดเจดีย์ไอ้ไข่",
            description: " วัดที่มีความสักดิ์สิทธิ์ ผู้คนนิยมเดินทางมาสักการะขอพร เป็นวัดที่มีความสำคัญทางศาสนาและความเชื่อในเรื่องของความศักดิ์สิทธิ์ โดยเฉพาะการขอพรจาก “ไอ้ไข่” ซึ่งเป็นรูปปั้นเด็กชายที่ถือเป็นสัญลักษณ์ของการขอพรในเรื่องต่างๆ ตั้งแต่โชคลาภ การงาน การเงิน ไปจนถึงความรัก",
            image: "ai_kai.jpg"
        },
        {
            name: "น้ำตกกรุงชิง",
            description: "น้ำตกกรุงชิงตั้งอยู่ในอุทยานแห่งชาติเขาหลวง จังหวัดนครศรีธรรมราช เป็นน้ำตกที่มีความสูงและสวยงาม แบ่งออกเป็นหลายชั้น น้ำใสไหลเย็น ท่ามกลางธรรมชาติที่อุดมสมบูรณ์ ล้อมรอบด้วยป่าฝนเขตร้อน เหมาะแก่การเดินป่าชมธรรมชาติและพักผ่อน",
            image: "krung_ching.jpg"
        },
        {
            name: "บ้านคีรีวง",
            description: "หมู่บ้านเล็กๆ ที่มีบรรยากาศสงบ หมู่บ้านนี้มีความเงียบสงบและอุดมสมบูรณ์ไปด้วยธรรมชาติ ที่นี่เหมาะสำหรับนักท่องเที่ยวที่ต้องการสัมผัสวิถีชีวิตของชาวบ้านและการเกษตรในพื้นที่",
            image: "kiriwong_village.jpg"
        },
        {
            name: "สะพานปลา",
            description: "สถานที่ชมการจับปลาและซื้ออาหารทะเลสด เป็นจุดที่นิยมในหลายพื้นที่ชายฝั่งทะเลของประเทศไทย ซึ่งเป็นสถานที่ที่นักท่องเที่ยวสามารถชมการจับปลาและซื้ออาหารทะเลสดๆ จากชาวประมงท้องถิ่น",
            image: "fish_brigde.jpg"
        },
        {
            name: "หาดสิชล",
            description: "หาดทรายสวยงาม เหมาะสำหรับการพักผ่อนและเล่นน้ำทะเล เป็นหาดที่ขึ้นชื่อเรื่องความสวยงามของ ทรายขาวและน้ำทะเลใส เหมาะสำหรับนักท่องเที่ยวที่ต้องการพักผ่อนในบรรยากาศเงียบสงบ ท่ามกลางธรรมชาติที่สมบูรณ์",
            image: "sichon_beach.jpg"
        },
        {
            name: "หาดขนอม",
            description: "ชายหาดที่มีความสวยงาม วิวทิวทัศน์ที่น่าประทับใจ เป็นชายหาดที่มีความสวยงามและบรรยากาศที่เงียบ สงบ เหมาะสำหรับผู้ที่ต้องการพักผ่อนและสัมผัสกับวิวทิวทัศน์ของทะเลและภูเขาที่สวยงาม",
            image: "hat_khanom.jpg"
        },
        {
            name: "อุทยานแห่งชาติเขาหลวง",
            description: "อุทยานแห่งชาติที่มีความอุดมสมบูรณ์ทางธรรมชาติ เหมาะสำหรับการเดินป่า เป็นอุทยานแห่งชาติที่มีธรรมชาติอุดมสมบูรณ์และมีความหลากหลายทางชีวภาพ ทั้งป่าเขา, น้ำตก, และสัตว์ป่าหายาก เหมาะสำหรับนักท่องเที่ยวที่ชื่นชอบการเดินป่าและสัมผัสธรรมชาติในรูปแบบที่แท้จริง",
            image: "khao_luang_national_park.jpg"
        },
        {
            name: "สวนตาสรรค์",
            description: "สวนสวยๆ ที่เหมาะสำหรับการพักผ่อน เป็นสวนสาธารณะที่เต็มไปด้วยธรรมชาติและความร่มรื่น เหมาะสำหรับผู้ที่ต้องการผ่อนคลายและพักผ่อนในบรรยากาศที่เงียบสงบ โดยมีต้นไม้ใหญ่ สวนดอกไม้ และพื้นที่ให้เดินเล่นในสภาพแวดล้อมที่สดชื่น",
            image: "suan_ta_san.jpg"
        },
        {
            name: "ตลาดย้อนยุคปากพนัง",
            description: "ตลาดที่มีบรรยากาศย้อนยุคน่าสนใจสำหรับผู้ที่ชอบถ่ายรูปและสัมผัสบรรยากาศเก่าๆ เป็นตลาดที่ยังคงรักษาบรรยากาศเก่าแก่และวิถีชีวิตดั้งเดิมของชาวบ้านในพื้นที่ โดยมีร้านค้าและบ้านเรือนที่สวยงามในสไตล์ย้อนยุค พร้อมกับการจำหน่ายสินค้าที่สะท้อนถึงวัฒนธรรมและวิถีชีวิตท้องถิ่น",
            image: "pakpanang_market.jpg"
        }
    ],
    phangnga: [
        {
            name: "เกาะยาวน้อย",
            description: "เกาะที่เงียบสงบ เหมาะสำหรับการพักผ่อนแบบชิลล์ๆ เป็นเกาะที่มีบรรยากาศเงียบสงบ เหมาะสำหรับ การพักผ่อนและหลีกหนีจากความวุ่นวายของชีวิตเมือง โดยเกาะนี้มีชายหาดที่สวยงาม น้ำทะเลใส และกิจกรรมทางน้ำมากมายที่ เหมาะสำหรับการพักผ่อนแบบช้าๆ",
            image: "koh_yao_island.jpg"
        },
        {
            name: "เกาะสุรินทร์",
            description: "เกาะที่มีความสวยงามทางทะเล เหมาะสำหรับการดำน้ำดูปะการัง เป็นเกาะที่มีความสวยงามทางธรรมชาติ โดยเฉพาะทางทะเลที่เต็มไปด้วยแนวปะการังที่สมบูรณ์และน้ำทะเลใส เหมาะสำหรับการดำน้ำตื้นและลึก เพื่อชมความ งามของโลกใต้ทะเลและพบเห็นสัตว์ทะเลหลากหลายชนิด",
            image: "mu_ko_surin.jpg"
        },
        {
            name: "จุดชมวิวเสม็ดนางชี",
            description: "จุดชมวิวที่สามารถมองเห็นวิวทิวทัศน์ของอ่าวพังงาได้อย่างสวยงาม เป็นจุดชมวิวที่มีทิวทัศน์ สวยงาม สามารถมองเห็นอ่าวพังงาและภูเขาน้อยใหญ่ที่ตั้งอยู่ท่ามกลางทะเลได้อย่างชัดเจน จุดนี้เป็นสถานที่ยอดนิยมสำหรับนักท่องเที่ยวที่ชื่นชอบการถ่ายภาพวิวทิวทัศน์ที่งดงามของทะเลและภูเขา",
            image: "samet_nangshe_viewpoint.jpg"
        },
        {
            name: "เขาหลัก",
            description: "พื้นที่ชายฝั่งที่มีชายหาดสวยงามหลายแห่ง เป็นพื้นที่ชายฝั่งที่มีความสวยงามและเงียบสงบ เหมาะสำหรับผู้ที่ต้องการพักผ่อนริมทะเล โดยมีชายหาดหลายแห่งที่มีความงดงามพร้อมน้ำทะเลใส อีกทั้งยังมีโรงแรมและรีสอร์ทหลากหลายรูปแบบให้เลือกพักพร้อมกิจกรรมทางน้ำที่หลากหลายและร้านอาหารอร่อยมากมาย",
            image: "khao_lak.jpg"
        },
        {
            name: "วัดสวรรค์คูหา",
            description: "วัดที่มีความสวยงามทางสถาปัตยกรรม ตั้งอยู่ในถ้ำเป็นวัดที่มีความงดงามทั้งในด้านสถาปัตยกรรมและ ประวัติศาสตร์ ภายในวัดตั้งอยู่ในถ้ำซึ่งให้ความรู้สึกสงบและเงียบสงบ เหมาะสำหรับผู้ที่ต้องการแสวงบุญและศึกษาความเป็นมาของสถานที่ทางศาสนา นอกจากนี้ยังมีภาพเขียนและสิ่งของโบราณที่น่าสนใจมากมาย",
            image: "wat_suwankuha.jpg"
        },
        {
            name: "น้ำตกสายรุ้ง",
            description: "น้ำตกที่สวยงาม มีน้ำตกไหลลงมาเป็นชั้นๆ เป็นน้ำตกที่มีความสวยงามและธรรมชาติที่อุดมสมบูรณ์ น้ำตกนี้ไหลลงมาเป็นชั้นๆ สร้างทิวทัศน์ที่น่าประทับใจ โดยเฉพาะในช่วงที่แสงแดดตกกระทบกับน้ำตก มักเกิดเป็นรุ้งสีสวย ทำให้มีชื่อเรียกว่าหรือ “น้ำตกสายรุ้ง” เป็นสถานที่ที่เหมาะสำหรับการพักผ่อนและสัมผัสกับธรรมชาติ",
            image: "rainbow_waterfall.jpg"
        },
        {
            name: "อุทยานแห่งชาติอ่าวพังงา",
            description: "อุทยานแห่งชาติทางทะเลที่สวยงาม เป็นอุทยานแห่งชาติทางทะเลที่มีความสวยงามและ อุดมสมบูรณ์ไปด้วยธรรมชาติที่น่าทึ่ง มีเกาะน้อยใหญ่และถ้ำที่มีความสวยงาม อีกทั้งยังมีแนวปะการังที่เต็มไปด้วยชีวิตทะเล หลากหลายสายพันธุ์ เหมาะสำหรับการล่องเรือชมธรรมชาติ ดำน้ำดูปะการัง และการศึกษาความหลากหลายทางชีวภาพในพื้นที่อนุรักษ์",
            image: "phangnga_bay_national.jpg"
        },
        {
            name: "หมู่บ้านบางพัฒน์",
            description: "หมู่บ้านชาวประมงที่ยังคงรักษาขนบธรรมเนียมประเพณี เป็นหมู่บ้านชาวประมงที่ยังคงรักษาวิถีชีวิตดั้งเดิมและขนบธรรมเนียมประเพณีของชาวบ้านเอาไว้ได้อย่างดีเยี่ยม ที่นี่ผู้มาเยี่ยมชมสามารถสัมผัสกับวิถีชีวิตของชาวประมง และเรียนรู้การดำเนินชีวิตอย่างใกล้ชิดในบรรยากาศที่เต็มไปด้วยธรรมชาติและความเรียบง่าย",
            image: "bangphat_village.jpg"
        },
        {
            name: "อ่าวพังงา",
            description: "อ่าวที่มีความสวยงาม มีเกาะน้อยใหญ่ และภูเขาหินปูน เป็นหนึ่งในอ่าวที่มีความสวยงามและเป็นที่รู้จักกันดี มีเกาะน้อยใหญ่กระจายอยู่ทั่วอ่าว พร้อมกับภูเขาหินปูนที่สูงตระหง่าน สร้างทิวทัศน์ที่น่าทึ่ง อีกทั้งยังมีสถานที่สำคัญ เช่น เกาะปันหยี ซึ่งเป็นหมู่บ้านชาวประมงที่มีชื่อเสียงและสามารถล่องเรือชมธรรมชาติ หรือสำรวจเกาะต่างๆ ได้อย่างสนุกสนาน",
            image: "phangnga_bay.jpg"
        },
        {
            name: "เกาะสิมิลัน",
            description: "กลุ่มเกาะที่มีความสวยงามทางทะเล เป็นกลุ่มเกาะที่มีความสวยงามทางทะเล โดยมีหาดทรายขาว น้ำ ทะเลใส และแนวปะการังที่สมบูรณ์ สถานที่แห่งนี้เป็นที่รู้จักในหมู่นักดำน้ำและนักท่องเที่ยวที่ต้องการพักผ่อนริมทะเล ด้วยความอุดมสมบูรณ์ของระบบนิเวศทางทะเล ทำให้เกาะสิมิลันเป็นหนึ่งในจุดดำน้ำที่ดีที่สุดในประเทศไทย",
            image: "similan_island.jpg"
        }
    ],
    phuket: [
        {
            name: "เกาะไม้ท่อน",
            description: "เกาะเล็กๆ ที่เหมาะสำหรับการดำน้ำดูปะการังและเล่นน้ำทะเล เป็นเกาะที่มีความเงียบสงบและมีธรรมชาติที่สวยงาม น้ำทะเลใสและหาดทรายขาวสะอาด เป็นสถานที่ที่เหมาะสำหรับการพักผ่อนและกิจกรรมทางน้ำ เช่น การดำ น้ำดูปะการังและการเล่นน้ำทะเล",
            image: "honeymoon_island.jpg"
        },
        {
            name: "จุดชมวิวกังหันลม",
            description: "จุดชมวิวที่สามารถมองเห็นทิวทัศน์ที่สวยงามของภูเก็ต เป็นจุดชมวิวที่มีชื่อเสียงและได้รับความนิยมจากนักท่องเที่ยวที่ต้องการชมทิวทัศน์ที่สวยงามของภูเก็ต โดยเฉพาะวิวทะเลและเกาะต่างๆ รอบๆ เกาะภูเก็ต จุดเด่นของที่นี่คือกังหันลมขนาดใหญ่ที่ตั้งอยู่บนยอดเขา ซึ่งช่วยสร้างบรรยากาศที่สดชื่นและน่าสนใจ",
            image: "windmill_viewpoint.jpg"
        },
        {
            name: "จุดชมวิวสามอ่าว",
            description: "จุดชมวิวบนเกาะภูเก็ตที่สามารถมองเห็นอ่าวป่าตอง, อ่าวกะตะ, และอ่าวกะรน เป็นจุดที่มีชื่อเสียงในหมู่นักท่องเที่ยว เหมาะสำหรับการชมวิวทะเลกว้างไกลและถ่ายภาพ บริเวณมีพื้นที่กว้างขวางและบรรยากาศธรรมชาติสวยงาม เป็นสถานที่ที่เหมาะแก่การพักผ่อน",
            image: "karon_view_point.jpg"
        },
        {
            name: "ย่านเมืองเก่าภูเก็ต",
            description: "ย่านเมืองเก่าภูเก็ตมีสถาปัตยกรรมแบบ Sino-Portuguese ที่ผสมผสานวัฒนธรรมจีนและโปรตุเกส อาคารบ้านเรือนมีสีสันสดใสและลวดลายที่โดดเด่น เป็นสถานที่สำคัญทางประวัติศาสตร์และวัฒนธรรมที่มีความงดงามเฉพาะตัว เป็นแหล่งท่องเที่ยวที่ไม่เหมือนใคร",
            image: "phuket_old_town.jpg"
        },
        {
            name: "วัดฉลอง",
            description: "วัดฉลอง หรือ วัดไชยธาราราม เป็นวัดที่สำคัญและมีชื่อเสียงที่สุดในจังหวัดภูเก็ต ขึ้นชื่อเรื่องความศักดิ์สิทธิ์และเป็นศูนย์รวมจิตใจของชาวภูเก็ต นักท่องเที่ยวและพุทธศาสนิกชนจากทั่วประเทศนิยมมา กราบไหว้หลวงพ่อแช่ม พระเกจิอาจารย์ชื่อดังแห่งภูเก็ต",
            image: "wat_chalong.jpg"
        },
        {
            name: "สถานแสดงพันธุ์สัตว์น้ำภูเก็ต",
            description: "สถานที่ที่น่าสนใจสำหรับผู้ที่ชื่นชอบสัตว์น้ำ หรือที่เรียกกันว่าภูเก็ตอควาเรียม เป็นแหล่งเรียนรู้และสถานที่ท่องเที่ยวที่เหมาะสำหรับผู้ที่สนใจในสัตว์น้ำและความหลากหลายทางชีวภาพของทะเลไทย ที่นี่มีการแสดงพันธุ์สัตว์น้ำหลากหลายชนิดจากทั้งในทะเลไทยและทะเลทั่วโลก",
            image: "phuket_aquarium.jpg"
        },
        {
            name: "หาดกล้วย",
            description: "ชายหาดที่เงียบสงบและสวยงาม เหมาะสำหรับการพักผ่อน เป็นชายหาดที่มีความเงียบสงบและมีบรรยากาศที่เป็นส่วนตัว เหมาะสำหรับผู้ที่ต้องการหลีกหนีจากความวุ่นวายและเพลิดเพลินกับการพักผ่อนท่ามกลางธรรมชาติที่ สวยงาม ชายหาดแห่งนี้มีทรายละเอียดและน้ำทะเลใส มองเห็นวิวทะเลที่สวยงามตลอดทั้งวัน",
            image: "banana_beach.jpg"
        },
        {
            name: "หาดป่าตอง",
            description: "วัดงดงามแห่งกระบี่ ศูนย์รวมศรัทธาและสถาปัตยกรรมอันวิจิตรหรือวัดมหาธาตุวชิรมงคล เป็นหนึ่งในวัดที่มีสถาปัตยกรรมที่งดงามและยิ่งใหญ่ที่สุดในจังหวัดกระบี่ โดดเด่นด้วยพระมหาธาตุเจดีย์ที่สูงตระหง่าน มีบรรยากาศที่เงียบสงบ เหมาะสำหรับการเยี่ยมชม ทำบุญ และปฏิบัติธรรม",
            image: "patong_beach.jpg"
        },
        {
            name: "หาดไม้ขาว",
            description: "ชายหาดที่เงียบสงบ เหมาะสำหรับการเล่นกีฬาทางน้ำและพักผ่อน เป็นชายหาดที่มีความเงียบสงบและมี ความเป็นส่วนตัวมากกว่าหาดที่คึกคักอย่างหาดป่าตอง เหมาะสำหรับผู้ที่ต้องการหลีกหนีจากความวุ่นวายและเพลิดเพลินกับบรรยากาศที่เงียบสงบ โดยที่ยังสามารถทำกิจกรรมทางน้ำต่างๆ เช่น การเล่นพาราเซลลิ่งหรือว่ายน้ำได้อย่างสะดวก",
            image: "white_wood_beach.jpg"
        },
        {
            name: "แหลมพรหมเทพ",
            description: "จุดชมพระอาทิตย์ตกดินที่สวยงาม เป็นสถานที่ที่สามารถชมพระอาทิตย์ตกดินได้อย่างสวยงามที่นี่ ไม่เพียงแต่เป็นจุดที่เหมาะสำหรับการชมพระอาทิตย์ตกดิน แต่ยังมีทิวทัศน์ของทะเลและภูเขาที่งดงาม มองเห็นทั้งอ่าวและเกาะต่างๆ รอบๆ ภูเก็ต",
            image: "promthep_cape.jpg"
        }
    ],
    suratthani: [
        {
            name: "พระมหาธาตุเจดีย์ภักดีประกาศ",
            description: "สิ่งศักดิ์สิทธิ์คู่บ้านคู่เมืองสุราษฎร์ธานี เป็นหนึ่งในสิ่งศักดิ์สิทธิ์คู่บ้านคู่เมืองของจังหวัด เป็นเจดีย์ที่มีความงดงามทั้งในแง่ของสถาปัตยกรรมและความสำคัญทางประวัติศาสตร์ เป็นที่เคารพของชาวจังหวัดสุราษฎร์ธานี และนักท่องเที่ยวที่แวะมาสักการะ",
            image: "phra_mahathat_chedi_phakdi_praka.jpg"
        },
        {
            name: "พระพุทธรูปองค์ใหญ่",
            description: "สถานที่ศักดิ์สิทธิ์ของจังหวัด เป็นหนึ่งในสถานที่ศักดิ์สิทธิ์ที่สำคัญของจังหวัดที่ตั้งอยู่บนยอดเขาสูง ซึ่งสามารถมองเห็นวิวทิวทัศน์ของเมืองและทะเลโดยรอบได้อย่างงดงาม พระพุทธรูปองค์ใหญ่ไม่เพียงเป็นสัญลักษณ์ทางศาสนา แต่ยังเป็นสถานที่ที่ให้ความสงบและความเป็นสิริมงคลแก่ผู้ที่มาเยือน",
            image: "the_buddha.jpg"
        },
        {
            name: "ถ้ำธรรมศาลา",
            description: "ถ้ำที่มีความสวยงามภายใน เป็นถ้ำธรรมชาติที่มีความสวยงามและเป็นสถานที่ที่มีความสำคัญทั้งในด้าน การท่องเที่ยวและการปฏิบัติธรรม ซึ่งเหมาะสำหรับผู้ที่ต้องการสัมผัสบรรยากาศที่เงียบสงบและเพลิดเพลินไปกับการชมความงาม ของธรรมชาติภายในถ้ำที่มีหินงอกหินย้อยสวยงามและบรรยากาศที่ช่วยให้จิตใจผ่อนคลาย",
            image: "thammasara_cave.jpg"
        },
        {
            name: "ลานหินโค้ง",
            description: "ความมหัศจรรย์ทางธรณีวิทยาคือแหล่งท่องเที่ยวธรรมชาติที่มีหินที่เกิดจากกระบวนการทางธรรมชาติ เช่น หินโค้งจากการกัดเซาะของน้ำและลม เป็นสถานที่ที่นักท่องเที่ยวสามารถศึกษาธรรมชาติและความสวยงามทางธรณีวิทยาได้อย่างใกล้ชิด",
            image: "curved_stone_courtyard.jpg"
        },
        {
            name: "การล่องเรือชมธรรมชาติในคลองบางใบไม้",
            description: "สัมผัสวิถีชีวิตริมคลอง เป็นกิจกรรมที่เหมาะสำหรับผู้ที่ต้องการสัมผัสกับ บรรยากาศเงียบสงบและวิถีชีวิตริมคลองที่ยังคงความเป็นธรรมชาติ เป็นสถานที่ที่นักท่องเที่ยวสามารถเรียนรู้วิถีชีวิตของชาวบ้าน และชมความงามของธรรมชาติได้อย่างใกล้ชิด",
            image: "bang_bai_mai_canal.jpg"
        },
        {
            name: "น้ำตกแปดเซียน (อุทยานแห่งชาติเขาสก)",
            description: "น้ำตกในอุทยานแห่งชาติเขาสกเป็นน้ำตกที่งดงามและได้รับความนิยมจากนักท่องเที่ยว ไหลลงมาจากหน้าผาสูงผ่านชั้นหินหลายชั้น น้ำใสสะท้อนแสงได้อย่างน่าประทับใจ เป็นสถานที่ที่เหมาะสำหรับผู้ที่ชื่นชอบธรรมชาติ",
            image: "eight_immortals_waterfal.jpg"
        },
        {
            name: "บ่อน้ำร้อนเขาตอก",
            description: "บ่อน้ำร้อนธรรมชาติ เหมาะสำหรับการพักผ่อนและผ่อนคลาย เป็นแหล่งน้ำร้อนธรรมชาติที่มีความพิเศษและได้รับความนิยมจากนักท่องเที่ยวที่ต้องการผ่อนคลายและฟื้นฟูร่างกาย บ่อน้ำร้อนแห่งนี้มีน้ำร้อนที่ไหลออกมาจากธรรมชาติอุดมไปด้วยแร่ธาตุที่ดีต่อร่างกาย เหมาะสำหรับการแช่น้ำร้อนเพื่อบำบัดและผ่อนคลายความเมื่อยล้า",
            image: "khao_sok_hot_spring.jpg"
        },
        {
            name: "จุดชมวิวจอห์น-สุวรรณ (เกาะเต่า)",
            description: "จุดชมวิวที่สวยงามบนเกาะเต่า เหมาะสำหรับการชมวิวทะเลและกิจกรรมทางทะเล เป็นจุดที่นักท่องเที่ยวต้องไม่พลาดในการขึ้นไปชมทิวทัศน์ที่สวยงามของทะเลอ่าวไทย โดยจุดนี้มีวิวที่สามารถมองเห็นทั้งท้อง ทะเลสีฟ้าใส เกาะเล็กๆ และภูเขาของเกาะเต่าอย่างชัดเจน เหมาะสำหรับการถ่ายภาพและการชมพระอาทิตย์ขึ้นหรือตก",
            image: "john_suwan_view_point_koh_tao.jpg"
        },
        {
            name: "Hug Village",
            description: "สถานที่ท่องเที่ยวเชิงวัฒนธรรมเน้นการเรียนรู้และสัมผัสกับวัฒนธรรมท้องถิ่น นักท่องเที่ยวสามารถสัมผัสวิถีชีวิตและประเพณีที่เป็นเอกลักษณ์ของพื้นที่ได้อย่างดีเยี่ยม มีหลากหลายกิจกรรมเกี่ยวกับวัฒนธรรมและงานฝีมือท้องถิ่น เหมาะสำหรับผู้ที่ต้องการเรียนรู้และสัมผัสความเป็นไทย",
            image: "hug_village.jpg"
        },
        {
            name: "ตลาดศาลเจ้า",
            description: "ตลาดศาลเจ้าเป็นสถานที่ท่องเที่ยวที่สะท้อนวิถีชีวิตและวัฒนธรรมท้องถิ่น นักท่องเที่ยวสามารถสัมผัสความหลากหลายทางวัฒนธรรมและประเพณีที่ยาวนานของพื้นที่ ที่นี่มีร้านค้าที่ขายสินค้าท้องถิ่น อาหารพื้นบ้าน และของที่ระลึกสะท้อนวิถีชีวิตชุมชน",
            image: "surat_thani_shrine_market.jpg"
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
                window.location.href = `detail_place.html?place=${encodeURIComponent(place.name)}`;
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
    if (descriptionElement.classList.contains("full")) {
        // ซ่อนคำบรรยายและแสดงปุ่ม "ดูรายละเอียด"
        descriptionElement.classList.remove("full"); // ลบคลาส full
        buttonElement.textContent = "ดูรายละเอียด"; // เปลี่ยนข้อความปุ่มเป็น "ดูรายละเอียด"
    } else {
        // แสดงข้อความทั้งหมดและแสดงปุ่ม "ซ่อนรายละเอียด"
        descriptionElement.classList.add("full"); // เพิ่มคลาส full
        buttonElement.textContent = "ซ่อนรายละเอียด"; // เปลี่ยนข้อความปุ่มเป็น "ซ่อนรายละเอียด"
    }
}

// Event Listener เมื่อมีการเปลี่ยนค่าใน dropdown
provinceSelect.addEventListener("change", function () {
    const selectedProvince = provinceSelect.value;
    displayPlaces(selectedProvince);
});


