document.querySelector('.next-button').addEventListener('click', function () {
    const province = document.getElementById('province').value;
    const days = document.getElementById('days').value;

    // Construct the URL with query parameters
    const url = new URL('tripsummary.html', window.location.href);
    url.searchParams.append('province', province);
    url.searchParams.append('days', days);

    // Redirect to the tripsummary page with query parameters
    window.location.href = url;
});

function changeStyle(buttonNumber) {
    // รีเซ็ตสถานะของปุ่มทั้งสอง
    document.getElementById('button1').classList.remove('active');
    document.getElementById('button2').classList.remove('active');

    // เพิ่มคลาส active ให้กับปุ่มที่กด
    if (buttonNumber === 1) {
        document.getElementById('button1').classList.add('active');
    } else if (buttonNumber === 2) {
        document.getElementById('button2').classList.add('active');
        // เมื่อกดปุ่มที่ 2 ให้ไปที่หน้า plan_detail.html
        window.location.href = 'plan_details.html';
    }
}
