const map = L.map('mapid').setView([-18.8964194,-41.9563347], 14)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    inconAnchor: [29, 68],
    popupAnchor: [185, 33]

})

function addMarker({id, name, lat, lng}) {
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)

    L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup)
}

const orphanageSpan = document.querySelectorAll('.orphanages span')

orphanageSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})
