import React, { useState } from 'react';
import { YMaps, Map, Placemark, Polyline, GeolocationControl, ZoomControl, SearchControl, FullscreenControl } from '@pbe/react-yandex-maps';
//import './MyMap.css';
import { assets } from '../Helpers/assetsList';

const mapState = {
    center: [55.18282453907641,30.203193540317194],
    zoom: 17,
    controls: []
}

/*
    Практически всё готово. Осталось добавить панель со всеми знаками и состояниями маркеров.
    Придётся строить линию  в самом конце и она будет 1. Но её можно редактировать, так что это не критично.
*/

const myPlacemarks = [
    {}
];

/*
Чтобы начать рисовать линию когда мне надо, необходимо сперва пердавать пустую функцию и в нужный момент ее сделать для рисования
*/

/*const draw = (ref) => {
    ref.editor.startDrawing();
    /*ref.editor.events.add("vertexadd", (event) => {
        console.log(event);
    });
};*/

export default function MyMap({sign}) {

  const [placemarks, setPlacemarks] = useState(myPlacemarks);

  const draw = (ref) => {  // Добавлен 2 параметр для тетирования условия работы функции
    if (+sign === 1) {
        ref.editor.startEditing();
        ref.editor.startDrawing();
    }
  }

  const clickOnMap = (e) => {
    if (+sign > 1) {
    
        const newPlacemark = {
            coords: e.get('coords'),
            img: assets[sign].img,
            hint: assets[sign].hint
        }

        setPlacemarks(oldPlacemarks => [...oldPlacemarks, newPlacemark]);
    }
    
  }

  const dblClick = (e) => {
    const markCoords = e.get('target').geometry._coordinates;

    const oldPlacemarks = placemarks;
    const newPlacemark = oldPlacemarks.filter(mark => {
        if (mark.coords === markCoords) {
            return false;
        }
        return true;
    });

    setPlacemarks(placemarks => placemarks = newPlacemark)
  }

  return (
    <div>
        <YMaps query={{
            load: 'package.full',
            apikey: "2100283a-03bd-4335-9874-2a0d6a6a1cf9"
        }}>
            <div>
                <Map
                    style = {{
                        width: '1200px',
                        height: '600px'
                    }}
                    defaultState={mapState}

                    instanceRef={ref => { ref && ref.behaviors.disable('dblClickZoom'); }}

                    onClick={clickOnMap}
                >
                    {placemarks.map((item, index) => (
                        <Placemark 
                            key={index}
                            geometry={item.coords}
                            onDblClick={dblClick}
                            properties={{
                                hintContent: item.hint,
                            }}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: item.img,
                                iconImageSize: [40,40],
                                iconImageOffset: [-20,-45]
                            }}
                        />
                    ))}
                    
                    {/* {<Placemark 
                        defaultGeometry={[55.18282453907641,30.203193540317194]}
                        properties={{
                            balloonContentBody:
                                "This is ballon",
                            hintContent: 'Это хинт',
                        }}
                        options={{
                            draggable: true,
                        }}
                    />} */}

                    <Polyline 
                        instanceRef={(ref) => ref && draw(ref, placemarks)} // Тут добавлен 2 параметр для тестирования работы функции
                        geometry={[]}
                        options={{
                            strokeColor: '#0000FF',
                            strokeWidth: 4
                        }}
                    />

                    <ZoomControl />
                    <SearchControl options={{ float: "left" }} />
                    <GeolocationControl options={{ float: "left" }} />
                    <FullscreenControl options={{ float: "left" }}/>
                </Map>
            </div>
        </YMaps>
    </div>
    
  )
}