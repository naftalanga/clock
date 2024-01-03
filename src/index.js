var dayjs = require('dayjs');
var localizedFormat = require('dayjs/plugin/localizedFormat');
import MicroModal from 'micromodal';

dayjs.extend(localizedFormat);

document.addEventListener('DOMContentLoaded', function () {
    MicroModal.init();

    var localDateElement = document.getElementById('localDate');
    var calendarDateElement = document.getElementById('calendarDate');
    var timeZoneElement = document.getElementById('timeZone');

    function updateDates() {
        var localDate = dayjs().format('LTS');
        var calendarDate = dayjs().format('dddd, D MMM, YYYY');
        var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        localDateElement.textContent = localDate;
        calendarDateElement.textContent = calendarDate;
        timeZoneElement.textContent = timeZone;
    }

    updateDates();

    setInterval(updateDates, 1000);

    // Get the button and add a click event listener
    const openModalButton = document.getElementById('open-modal-button');
    openModalButton.addEventListener('click', function () {
        // Show the modal
        MicroModal.show('my-modal');
    });
});
