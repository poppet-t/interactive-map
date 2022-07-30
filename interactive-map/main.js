const mymap = L.map('map').setView([1.544997, 103.872058],22);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(mymap);

//add marker
const marker = L.marker([1.544997, 103.872058]).addTo(mymap);


//add message
let template = `

<h1>INFECTION 1</h1>
<h2>this is a strain of the virus</h2>
<div style ="text-align:center">
    <img width="150" height="150"src="img.jpg"/>
</div>
`
marker.bindPopup(template);

//add circle 
const circle = L.circle([1.544997, 103.872058],{
    radius:300,
    color: 'red',
    fillColor:'pink',
    fillOpacity:0.7,
}).addTo(mymap)

//add polygon
const polygon = L.polygon([

    [1.549174, 103.872966],
    [1.542098, 103.880321],
    [1.541647, 103.866530],
    [1.547681, 103.872409],
],{
    color:'violet',
    fillColor:'purple',
    fillOpacity:0.3
}).addTo(mymap).bindPopup('Potential infections')

//add marker 2
const marker2 = L.marker([1.568364, 103.903988]).addTo(mymap);
// message 2
let template2 = `

<h1>INFECTION 2</h1>
<h2>this is a strain of the virus</h2>
<div style ="text-align:center">
    <img width="150" height="150"src="img.jpg"/>
</div>
`
marker.bindPopup(template);


//add circle 
const circle2 = L.circle([1.568364, 103.903988],{
    radius:300,
    color: 'red',
    fillColor:'pink',
    fillOpacity:0.7,
}).addTo(mymap)

//add polygon
const polygon2 = L.polygon([
    [1.569372, 103.908461],
    [1.570064, 103.902890],
    [1.568925, 103.900859],
    [1.565033, 103.902686],
    [1.564158, 103.914053],
],{
    color:'violet',
    fillColor:'purple',
    fillOpacity:0.3
}).addTo(mymap).bindPopup('Potential infections')


polygon.bindPopup('Potential infections')