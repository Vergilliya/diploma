import React, { useEffect } from 'react';
import { YMaps, Map, Placemark, Polyline, GeolocationControl, ZoomControl, SearchControl, FullscreenControl } from '@pbe/react-yandex-maps';
import { assets } from '../../Helpers/assetsList';
import { apiKey } from '../../Helpers/key';
import './style.css';

const mapState = {
    center: [55.18282453907641,30.203193540317194],
    zoom: 17,
    controls: []
}

export default function MyMap({sign, placemarks, editPlacemarks, resetRoute}) {

  useEffect(() => {
    window.localStorage.setItem('placemarks', JSON.stringify(placemarks));
  }, [placemarks]);

  const draw = (ref) => {
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

            editPlacemarks([...placemarks, newPlacemark]);
        } 
    };

    const dblClick = (e) => {
        const markCoords = e.get('target').geometry._coordinates; 

        const oldPlacemarks = placemarks;
        const newPlacemarks = oldPlacemarks.filter(mark => {
            if (mark.coords === markCoords) {
                return false;
            }
            return true;
        });

        editPlacemarks(newPlacemarks);
    };

    const resetSign = () => {
        editPlacemarks([]);
    };

  return (
    <>
    <button className='reset-sign' onClick={resetSign}>Очистить карту от знаков</button>
    <button className='reset-route' onClick={resetRoute}>Сбросить маршрут</button>
    <div className='map'>
        <YMaps query={{
            load: 'package.full',
            apikey: apiKey
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
                                iconImageSize: [30,30],
                                iconImageOffset: [-15,-30]
                            }}
                        />
                    ))}

                    <Polyline 
                        instanceRef={(ref) => ref && draw(ref)}
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
    </>
  )
}