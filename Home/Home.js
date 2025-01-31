document.querySelector('.next-button').addEventListener('click', function() {
    const province = document.getElementById('province').value;
    const days = document.getElementById('days').value;

    // Construct the URL with query parameters
    const url = new URL('tripsummary.html', window.location.href);
    url.searchParams.append('province', province);
    url.searchParams.append('days', days);

    // Redirect to the tripsummary page with query parameters
    window.location.href = url;
});