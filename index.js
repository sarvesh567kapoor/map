


function updateMap()
{
    console.log("updating map with real time data")
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp=>{
        console.log(rsp.data);
        const magDisplay = document.getElementById('mag');
const locDisplay = document.getElementById('loc');
const dateDisplay = document.getElementById('date');
        rsp.data.forEach(element => {
           var latitude =element.latitude;
           var  longitute =element.longitude;
           
           cases = element.infected;
           if (cases > 255){
            color="rgb(255,0,0)";
             }   
          else {
                color=`rgb(${cases},0,0)`
                 }          

            //mark on the map 
            new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitute, latitude])
                .addTo(map);
            
        });
    });
}

let interval =20000;

setInterval(updateMap, interval)
