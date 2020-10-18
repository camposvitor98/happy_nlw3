const map = L.map('mapid').setView([-18.8964194,-41.9563347], 14)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [56, 65],
    inconAnchor: [29, 68],

})


let marker
//create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng 
    
    marker && map.removeLayer(marker)
    
    marker = L.marker([lat, lng], {icon})
    .addTo(map)

}) 



function addPhotoField() {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

   input.value = ""
    container.appendChild(newFieldContainer)

}


function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    if(fieldsContainer.length <= 1) {
        
        span.parentNode.children[0].value = ""
        return
    }

    

    span.parentNode.remove()
}

function toggleSelect(event) {
    const button = event.currentTarget


    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}


function validate(event) {
    const lat = document.querySelector('[name=lat]').value
    const lng = document.querySelector('[name=lng]').value

    if (lat == ''|| lng == '') {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
}