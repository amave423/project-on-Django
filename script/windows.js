function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'block';
        document.addEventListener('mousedown', function closePopupOutside(event) {
            if (!popup.contains(event.target)) {
                popup.style.display = 'none';
                document.removeEventListener('mousedown', closePopupOutside);
            }
        });
    }
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}
  
  