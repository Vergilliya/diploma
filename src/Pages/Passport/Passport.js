import React, { useEffect, useState } from 'react';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import template from './../../Helpers/template.docx';
import './style.css';

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}

export default function Passport() {

    const generateDocument = () => {
        loadFile(
          template,
          function (error, content) {
            if (error) {
              throw error;
            }
            var zip = new PizZip(content);
            var doc = new Docxtemplater(zip, {
              paragraphLoop: true,
              linebreaks: true,
            });
            doc.setData(tempData);
            try {
              // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
              doc.render();
            } catch (error) {
              // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
              function replaceErrors(key, value) {
                if (value instanceof Error) {
                  return Object.getOwnPropertyNames(value).reduce(function (
                    error,
                    key
                  ) {
                    error[key] = value[key];
                    return error;
                  },
                  {});
                }
                return value;
              }
              console.log({ error: error }, replaceErrors);
  
              if (error.properties && error.properties.errors instanceof Array) {
                const errorMessages = error.properties.errors
                  .map(function (error) {
                    return error.properties.explanation;
                  })
                  .join('\n');
                console.log('errorMessages', errorMessages);
                // errorMessages is a humanly readable message looking like this :
                // 'The tag beginning with "foobar" is unopened'
              }
              throw error;
            }
            var out = doc.getZip().generate({
              type: 'blob',
              mimeType:
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            }); //Output the document using Data-URI
            saveAs(out, 'Паспорт школы.docx');
          }
        );
      };

    const [nameLeaderOVD, setNameLeaderOVD] = useState(window.localStorage.getItem('nameLeaderOVD') || '');
    const [nameLeaderSchool, setNameLeaderSchool] = useState(window.localStorage.getItem('nameLeaderSchool') || '');
    const [nameSchool, setNameSchool] = useState(window.localStorage.getItem('nameSchool') || '');
    const [fullNameSchool, setFullNameSchool] = useState(window.localStorage.getItem('fullNameSchool') || '');
    const [typeSchool, setTypeSchool] = useState(window.localStorage.getItem('typeSchool') || '');
    const [logalAddress, setLogalAddress] = useState(window.localStorage.getItem('logalAddress') || '');
    const [address, setAddress] = useState(window.localStorage.getItem('address') || '');
    const [directorName, setDirectorName] = useState(window.localStorage.getItem('directorName') || '');
    const [directorPhone, setDirectorPhone] = useState(window.localStorage.getItem('directorPhone') || '');
    const [directorAcademicName, setDirectorAcademicName] = useState(window.localStorage.getItem('directorAcademicName') || '');
    const [directorAcademicPhone, setDirectorAcademicPhone] = useState(window.localStorage.getItem('directorAcademicPhone') || '');
    const [directorEducationalName, setDirectorEducationalName] = useState(window.localStorage.getItem('directorEducationalName') || '');
    const [directorEducationalPhone, setDirectorEducationalPhone] = useState(window.localStorage.getItem('directorEducationalPhone') || '');
    const [workerTraumatismName, setWorkerTraumatismName] = useState(window.localStorage.getItem('workerTraumatismName') || '');
    const [workerTraumatismPhone, setWorkerTraumatismPhone] = useState(window.localStorage.getItem('workerTraumatismPhone') || '');
    const [workerTraumatismPost, setWorkerTraumatismPost] = useState(window.localStorage.getItem('workerTraumatismPost') || '');
    const [workerOVDName, setWorkerOVDName] = useState(window.localStorage.getItem('workerOVDName') || '');
    const [workerOVDPhone, setWorkerOVDPhone] = useState(window.localStorage.getItem('workerOVDPhone') || '');
    const [workerOVDPost, setWorkerOVDPost] = useState(window.localStorage.getItem('workerOVDPost') || '');
    const [workerRoadNetworkName, setWorkerRoadNetworkName] = useState(window.localStorage.getItem('workerRoadNetworkName') || '');
    const [workerRoadNetworkPhone, setWorkerRoadNetworkPhone] = useState(window.localStorage.getItem('workerRoadNetworkPhone') || '');
    const [workerRoadTechnicianName, setWorkerRoadTechnicianName] = useState(window.localStorage.getItem('workerRoadTechnicianName') || '');
    const [workerRoadTechnicianPhone, setWorkerRoadTechnicianPhone] = useState(window.localStorage.getItem('workerRoadTechnicianPhone') || '');
    const [countStudents, setCountStudents] = useState(window.localStorage.getItem('countStudents') || '');
    const [placeCornerBDD, setPlaceCornerBDD] = useState(window.localStorage.getItem('placeCornerBDD') || '');
    const [placeOfficeBDD, setPlaceOfficeBDD] = useState(window.localStorage.getItem('placeOfficeBDD') || '');
    const [placeCenterBDD, setPlaceCenterBDD] = useState(window.localStorage.getItem('placeCenterBDD') || '');
    const [placeTrafficParkBDD, setPlaceTrafficParkBDD] = useState(window.localStorage.getItem('placeTrafficParkBDD') || '');
    const [stackUID, setStackUID] = useState(window.localStorage.getItem('stackUID') || '');
    const [leaderNameUID, setLeaderNameUID] = useState(window.localStorage.getItem('leaderNameUID') || '');
    const [leaderPhoneUID, setLeaderPhoneUID] = useState(window.localStorage.getItem('leaderPhoneUID') || '');
    const [leaderPostUID, setLeaderPostUID] = useState(window.localStorage.getItem('leaderPostUID') || '');
    const [turnpike, setTurnpike] = useState(window.localStorage.getItem('turnpike') || '');
    const [haveBus, setHaveBus] = useState(window.localStorage.getItem('haveBus') || '');
    const [firstShiftStart, setFirstShiftStart] = useState(window.localStorage.getItem('firstShiftStart') || '');
    const [firstShiftEnd, setFirstShiftEnd] = useState(window.localStorage.getItem('firstShiftEnd') || '');
    const [secondShiftStart, setSecondShiftStart] = useState(window.localStorage.getItem('secondShiftStart') || '');
    const [secondShiftEnd, setSecondShiftEnd] = useState(window.localStorage.getItem('secondShiftEnd') || '');
    const [outClassShiftStart, setOutClassShiftStart] = useState(window.localStorage.getItem('outClassShiftStart') || '');
    const [outClassShiftEnd, setOutClassShiftEnd] = useState(window.localStorage.getItem('outClassShiftEnd') || '');
    const [sixthDayStart, setSixthDayStart] = useState(window.localStorage.getItem('sixthDayStart') || '');
    const [sixthDayEnd, setSixthDayEnd] = useState(window.localStorage.getItem('sixthDayEnd') || '');
    const [busBrand, setBusBrand] = useState(window.localStorage.getItem('busBrand') || '');
    const [busModel, setBusModel] = useState(window.localStorage.getItem('busModel') || '');
    const [busRegSign, setBusRegSign] = useState(window.localStorage.getItem('busRegSign') || '');
    const [busYear, setBusYear] = useState(window.localStorage.getItem('busYear') || '');
    const [busSeats, setBusSeats] = useState(window.localStorage.getItem('busSeats') || '');
    const [busRequirement, setBusRequirement] = useState(window.localStorage.getItem('busRequirement') || '');
    const [firstDriverName, setFirstDriverName] = useState(window.localStorage.getItem('firstDriverName') || '');
    const [firstDriverAge, setFirstDriverAge] = useState(window.localStorage.getItem('firstDriverAge') || '');
    const [firstDriverDateStart, setFirstDriverDateStart] = useState(window.localStorage.getItem('firstDriverDateStart') || '');
    const [firstDriverExperience, setFirstDriverExperience] = useState(window.localStorage.getItem('firstDriverExperience') || '');
    const [firstDriverDateMed, setFirstDriverDateMed] = useState(window.localStorage.getItem('firstDriverDateMed') || '');
    const [firstDriverViolations, setFirstDriverViolations] = useState(window.localStorage.getItem('firstDriverViolations') || '');
    const [secondDriverName, setSecondDriverName] = useState(window.localStorage.getItem('secondDriverName') || '');
    const [secondDriverAge, setSecondDriverAge] = useState(window.localStorage.getItem('secondDriverAge') || '');
    const [secondDriverDateStart, setSecondDriverDateStart] = useState(window.localStorage.getItem('secondDriverDateStart') || '');
    const [secondDriverExperience, setSecondDriverExperience] = useState(window.localStorage.getItem('secondDriverExperience') || '');
    const [secondDriverDateMed, setSecondDriverDateMed] = useState(window.localStorage.getItem('secondDriverDateMed') || '');
    const [secondDriverViolations, setSecondDriverViolations] = useState(window.localStorage.getItem('secondDriverViolations') || '');
    const [thirdDriverName, setThirdDriverName] = useState(window.localStorage.getItem('thirdDriverName') || '');
    const [thirdDriverAge, setThirdDriverAge] = useState(window.localStorage.getItem('thirdDriverAge') || '');
    const [thirdDriverDateStart, setThirdDriverDateStart] = useState(window.localStorage.getItem('thirdDriverDateStart') || '');
    const [thirdDriverExperience, setThirdDriverExperience] = useState(window.localStorage.getItem('thirdDriverExperience') || '');
    const [thirdDriverDateMed, setThirdDriverDateMed] = useState(window.localStorage.getItem('thirdDriverDateMed') || '');
    const [thirdDriverViolations, setThirdDriverViolations] = useState(window.localStorage.getItem('thirdDriverViolations') || '');
    const [personSafetyName, setPersonSafetyName] = useState(window.localStorage.getItem('personSafetyName') || '');
    const [personSafetyDate, setPersonSafetyDate] = useState(window.localStorage.getItem('personSafetyDate') || '');
    const [preMedName, setPreMedName] = useState(window.localStorage.getItem('preMedName') || '');
    const [preMedBasis, setPreMedBasis] = useState(window.localStorage.getItem('preMedBasis') || '');
    const [preMedDate, setPreMedDate] = useState(window.localStorage.getItem('preMedDate') || '');
    const [techControlName, setTechControlName] = useState(window.localStorage.getItem('techControlName') || '');
    const [techControlBasis, setTechControlBasis] = useState(window.localStorage.getItem('techControlBasis') || '');
    const [techControlDate, setTechControlDate] = useState(window.localStorage.getItem('techControlDate') || '');
    const [stateTechDate, setStateTechDate] = useState(window.localStorage.getItem('stateTechDate') || '');
    const [parkingPlace, setParkingPlace] = useState(window.localStorage.getItem('parkingPlace') || '');
    const [measures, setMeasures] = useState(window.localStorage.getItem('measures') || '');
    const [ownerLegalAddress, setOwnerLegalAddress] = useState(window.localStorage.getItem('ownerLegalAddress') || '');
    const [ownerAddress, setOwnerAddress] = useState(window.localStorage.getItem('ownerAddress') || '');
    const [ownerPhone, setOwnerPhone] = useState(window.localStorage.getItem('ownerPhone') || '');
    const [headBusOrg, setHeadBusOrg] = useState(window.localStorage.getItem('headBusOrg') || '');

    useEffect(() => {
      window.localStorage.setItem('nameLeaderOVD', nameLeaderOVD);
      window.localStorage.setItem('nameLeaderSchool', nameLeaderSchool);
      window.localStorage.setItem('nameSchool', nameSchool);
      window.localStorage.setItem('fullNameSchool', fullNameSchool);
      window.localStorage.setItem('typeSchool', typeSchool);
      window.localStorage.setItem('logalAddress', logalAddress);
      window.localStorage.setItem('address', address);
      window.localStorage.setItem('directorName', directorName);
      window.localStorage.setItem('directorPhone', directorPhone);
      window.localStorage.setItem('directorAcademicName', directorAcademicName);
      window.localStorage.setItem('directorAcademicPhone', directorAcademicPhone);
      window.localStorage.setItem('directorEducationalName', directorEducationalName);
      window.localStorage.setItem('directorEducationalPhone', directorEducationalPhone);
      window.localStorage.setItem('workerTraumatismName', workerTraumatismName);
      window.localStorage.setItem('workerTraumatismPhone', workerTraumatismPhone);
      window.localStorage.setItem('workerTraumatismPost', workerTraumatismPost);
      window.localStorage.setItem('workerOVDName', workerOVDName);
      window.localStorage.setItem('workerOVDPhone', workerOVDPhone);
      window.localStorage.setItem('workerOVDPost', workerOVDPost);
      window.localStorage.setItem('workerRoadNetworkName', workerRoadNetworkName);
      window.localStorage.setItem('workerRoadNetworkPhone', workerRoadNetworkPhone);
      window.localStorage.setItem('workerRoadTechnicianName', workerRoadTechnicianName);
      window.localStorage.setItem('workerRoadTechnicianPhone', workerRoadTechnicianPhone);
      window.localStorage.setItem('countStudents', countStudents);
      window.localStorage.setItem('placeCornerBDD', placeCornerBDD);
      window.localStorage.setItem('placeOfficeBDD', placeOfficeBDD);
      window.localStorage.setItem('placeCenterBDD', placeCenterBDD);
      window.localStorage.setItem('placeTrafficParkBDD', placeTrafficParkBDD);
      window.localStorage.setItem('stackUID', stackUID);
      window.localStorage.setItem('leaderNameUID', leaderNameUID);
      window.localStorage.setItem('leaderPhoneUID', leaderPhoneUID);
      window.localStorage.setItem('leaderPostUID', leaderPostUID);
      window.localStorage.setItem('turnpike', turnpike);
      window.localStorage.setItem('haveBus', haveBus);
      window.localStorage.setItem('firstShiftStart', firstShiftStart);
      window.localStorage.setItem('firstShiftEnd', firstShiftEnd);
      window.localStorage.setItem('secondShiftStart', secondShiftStart);
      window.localStorage.setItem('secondShiftEnd', secondShiftEnd);
      window.localStorage.setItem('outClassShiftStart', outClassShiftStart);
      window.localStorage.setItem('outClassShiftEnd', outClassShiftEnd);
      window.localStorage.setItem('sixthDayStart', sixthDayStart);
      window.localStorage.setItem('sixthDayEnd', sixthDayEnd);
      window.localStorage.setItem('busBrand', busBrand);
      window.localStorage.setItem('busModel', busModel);
      window.localStorage.setItem('busRegSign', busRegSign);
      window.localStorage.setItem('busYear', busYear);
      window.localStorage.setItem('busSeats', busSeats);
      window.localStorage.setItem('busRequirement', busRequirement);
      window.localStorage.setItem('firstDriverName', firstDriverName);
      window.localStorage.setItem('firstDriverAge', firstDriverAge);
      window.localStorage.setItem('firstDriverDateStart', firstDriverDateStart);
      window.localStorage.setItem('firstDriverExperience', firstDriverExperience);
      window.localStorage.setItem('firstDriverDateMed', firstDriverDateMed);
      window.localStorage.setItem('firstDriverViolations', firstDriverViolations);
      window.localStorage.setItem('secondDriverName', secondDriverName);
      window.localStorage.setItem('secondDriverAge', secondDriverAge);
      window.localStorage.setItem('secondDriverDateStart', secondDriverDateStart);
      window.localStorage.setItem('secondDriverExperience', secondDriverExperience);
      window.localStorage.setItem('secondDriverDateMed', secondDriverDateMed);
      window.localStorage.setItem('secondDriverViolations', secondDriverViolations);
      window.localStorage.setItem('thirdDriverName', thirdDriverName);
      window.localStorage.setItem('thirdDriverAge', thirdDriverAge);
      window.localStorage.setItem('thirdDriverDateStart', thirdDriverDateStart);
      window.localStorage.setItem('thirdDriverExperience', thirdDriverExperience);
      window.localStorage.setItem('thirdDriverDateMed', thirdDriverDateMed);
      window.localStorage.setItem('thirdDriverViolations', thirdDriverViolations);
      window.localStorage.setItem('personSafetyName', personSafetyName);
      window.localStorage.setItem('personSafetyDate', personSafetyDate);
      window.localStorage.setItem('preMedName', preMedName);
      window.localStorage.setItem('preMedBasis', preMedBasis);
      window.localStorage.setItem('preMedDate', preMedDate);
      window.localStorage.setItem('techControlName', techControlName);
      window.localStorage.setItem('techControlBasis', techControlBasis);
      window.localStorage.setItem('techControlDate', techControlDate);
      window.localStorage.setItem('stateTechDate', stateTechDate);
      window.localStorage.setItem('parkingPlace', parkingPlace);
      window.localStorage.setItem('measures', measures);
      window.localStorage.setItem('ownerLegalAddress', ownerLegalAddress);
      window.localStorage.setItem('ownerAddress', ownerAddress);
      window.localStorage.setItem('ownerPhone', ownerPhone);
      window.localStorage.setItem('headBusOrg', headBusOrg);
    });

    const tempData = { //год добавить еще
        name_leader_OVD: nameLeaderOVD,
        name_leader_school: nameLeaderSchool,
        year: new Date().getFullYear(),
        name_school: nameSchool,
        full_name_school: fullNameSchool,
        type_school: typeSchool,
        logal_address: logalAddress,
        address: address,
        director_name: directorName,
        director_phone: directorPhone,
        director_academic_name: directorAcademicName,
        director_academic_phone: directorAcademicPhone,
        director_educational_name: directorEducationalName,
        director_educational_phone: directorEducationalPhone,
        worker_traumatism_name: workerTraumatismName,
        worker_traumatism_phone: workerTraumatismPhone,
        worker_traumatism_post: workerTraumatismPost,
        worker_OVD_name: workerOVDName,
        worker_OVD_phone: workerOVDPhone,
        worker_OVD_post: workerOVDPost,
        worker_road_network_name: workerRoadNetworkName,
        worker_road_network_phone: workerRoadNetworkPhone,
        worker_road_technician_name: workerRoadTechnicianName,
        worker_road_technician_phone: workerRoadTechnicianPhone,
        count_students: countStudents,
        place_corner_BDD: placeCornerBDD,
        place_office_BDD: placeOfficeBDD,
        place_center_BDD: placeCenterBDD,
        place_traffic_park_BDD: placeTrafficParkBDD,
        stack_UID: stackUID,
        leader_name_UID: leaderNameUID,
        leader_phone_UID: leaderPhoneUID,
        leader_post_UID: leaderPostUID,
        turnpike: turnpike,
        have_bus: haveBus,
        fssH: firstShiftStart.split(':')[0], //first_shift_start_H
        fssM: firstShiftStart.split(':')[1], //first_shift_start_M
        fseH: firstShiftEnd.split(':')[0], //first_shift_end_H
        fseM: firstShiftEnd.split(':')[1], //first_shift_end_M
        sssH: secondShiftStart.split(':')[0], //second_shift_start_H
        sssM: secondShiftStart.split(':')[1], //second_shift_start_M
        sseH: secondShiftEnd.split(':')[0], //second_shift_end_H
        sseM: secondShiftEnd.split(':')[1], //second_shift_end_M
        ocssH: outClassShiftStart.split(':')[0], //out_class_shift_start_H
        ocssM: outClassShiftStart.split(':')[1], //out_class_shift_start_M
        ocseH: outClassShiftEnd.split(':')[0], //out_class_shift_end_H
        ocseM: outClassShiftEnd.split(':')[1], //out_class_shift_end_M
        sdsH: sixthDayStart.split(':')[0], //sixth_day_start_H
        sdsM: sixthDayStart.split(':')[1], //sixth_day_start_M
        sdeH: sixthDayEnd.split(':')[0], //sixth_day_end_H
        sdeM: sixthDayEnd.split(':')[1], //sixth_day_end_M
        bus_brand: busBrand,
        bus_model: busModel,
        bus_reg_sign: busRegSign,
        bus_year: busYear,
        bus_seats: busSeats,
        bus_requirement: busRequirement,
        first_driver_name: firstDriverName,
        first_driver_age: firstDriverAge,
        first_driver_date_start: firstDriverDateStart,
        first_driver_experience: firstDriverExperience,
        first_driver_date_med: firstDriverDateMed,
        first_driver_violations: firstDriverViolations,
        second_driver_name: secondDriverName,
        second_driver_age: secondDriverAge,
        second_driver_date_start: secondDriverDateStart,
        second_driver_experience: secondDriverExperience,
        second_driver_date_med: secondDriverDateMed,
        second_driver_violations: secondDriverViolations,
        third_driver_name: thirdDriverName,
        third_driver_age: thirdDriverAge,
        third_driver_date_start: thirdDriverDateStart,
        third_driver_experience: thirdDriverExperience,
        third_driver_date_med: thirdDriverDateMed,
        third_driver_violations: thirdDriverViolations,
        person_safety_name: personSafetyName,
        person_safety_date: personSafetyDate,
        pre_med_name: preMedName,
        pre_med_basis: preMedBasis,
        pre_med_date: preMedDate,
        tech_control_name: techControlName,
        tech_control_basis: techControlBasis,
        tech_control_date: techControlDate,
        state_tech_date: stateTechDate,
        parking_place: parkingPlace,
        measures: measures,
        owner_legal_address: ownerLegalAddress,
        owner_address: ownerAddress,
        owner_phone: ownerPhone,
        head_bus_org: headBusOrg,
    }
    
  return (
    <div className='passport'>
        ФИО руководителя (представителя) территориального ОВД:
        <input className='full-name' value={nameLeaderOVD} onInput={e => setNameLeaderOVD(e.target.value)} />
        ФИО руководителя учреждения образования:
        <input className='full-name' value={nameLeaderSchool} onInput={e => setNameLeaderSchool(e.target.value)} />

        <h1>Общие сведения</h1>
        <h2>Сведения об учреждения образования</h2>

        Наименование учреждения образования:
        <input className='full-name' value={nameSchool} onInput={e => setNameSchool(e.target.value)} /><br />
        Полное наименование учреждения образования:
        <input className='full-name' value={fullNameSchool} onInput={e => setFullNameSchool(e.target.value)} /><br />
        Тип учреждения образования:
        <input className='full-name' value={typeSchool} onInput={e => setTypeSchool(e.target.value)} /><br />
        Юридический адрес:
        <input className='full-name' value={logalAddress} onInput={e => setLogalAddress(e.target.value)} /><br />
        Физический адрес:
        <input className='full-name' value={address} onInput={e => setAddress(e.target.value)} /><br />

        <h2>Руководители учреждения образования</h2>

        Директор (завудующий), ФИО:<br />
        <input className='first-half' value={directorName} onInput={e => setDirectorName(e.target.value)} />
        Телефон:
        <input className='last-half' value={directorPhone} onInput={e => setDirectorPhone(e.target.value)} /><br />
        Заместитель директора по учебной работе, ФИО:<br />
        <input className='first-half' value={directorAcademicName} onInput={e => setDirectorAcademicName(e.target.value)} />
        Телефон:
        <input className='last-half' value={directorAcademicPhone} onInput={e => setDirectorAcademicPhone(e.target.value)} /><br />
        Заместитель директора по воспетательной работе, ФИО:<br />
        <input className='first-half' value={directorEducationalName} onInput={e => setDirectorEducationalName(e.target.value)} />
        Телефон:
        <input className='last-half' value={directorEducationalPhone} onInput={e => setDirectorEducationalPhone(e.target.value)} /><br /><br />

        Ответственные работники за мероприятия по профилактике детского травматизма, ФИО:<br />
        <input className='first-half' value={workerTraumatismName} onInput={e => setWorkerTraumatismName(e.target.value)} />
        Телефон:
        <input className='last-half' value={workerTraumatismPhone} onInput={e => setWorkerTraumatismPhone(e.target.value)} /><br />
        Должность:
        <input className='full-name' value={workerTraumatismPost} onInput={e => setWorkerTraumatismPost(e.target.value)} /><br /><br />

        Ответственные от ОВД, ФИО:<br />
        <input className='first-half' value={workerOVDName} onInput={e => setWorkerOVDName(e.target.value)} />
        Телефон:
        <input className='last-half' value={workerOVDPhone} onInput={e => setWorkerOVDPhone(e.target.value)} /><br />
        Должность:
        <input className='full-name' value={workerOVDPost} onInput={e => setWorkerOVDPost(e.target.value)} /><br /><br />

        Руководитель или ответственный работник дорожно-эксплуатационной организации, осуществляющей содержание улично-дорожной сети, ФИО:<br />
        <input className='first-half' value={workerRoadNetworkName} onInput={e => setWorkerRoadNetworkName(e.target.value)} />
        Телефон:
        <input className='last-half' value={workerRoadNetworkPhone} onInput={e => setWorkerRoadNetworkPhone(e.target.value)} /><br /><br />

        Руководитель или ответственный работник дорожно-эксплуатационной организации, осуществляющей содержание технических средств организации дорожного движения ФИО:<br />
        <input className='first-half' value={workerRoadTechnicianName} onInput={e => setWorkerRoadTechnicianName(e.target.value)} />
        Телефон:
        <input className='last-half' value={workerRoadTechnicianPhone} onInput={e => setWorkerRoadTechnicianPhone(e.target.value)} /><br /><br />

        <h2>Дополнительные сведения</h2>

        Количество обучающихся (учащихся, воспитанников):
        <input className='full-name' value={countStudents} onInput={e => setCountStudents(e.target.value)} /><br />
        Местоположение уголка по БДД (если есть):
        <input className='full-name' value={placeCornerBDD} onInput={e => setPlaceCornerBDD(e.target.value)} /><br />
        Местоположение кабинета по БДД (если есть):
        <input className='full-name' value={placeOfficeBDD} onInput={e => setPlaceOfficeBDD(e.target.value)} /><br />
        Местоположение центра по БДД (если есть):
        <input className='full-name' value={placeCenterBDD} onInput={e => setPlaceCenterBDD(e.target.value)} /><br />
        Местоположение автогородка или автоплощадки по БДД (если есть):
        <input className='full-name' value={placeTrafficParkBDD} onInput={e => setPlaceTrafficParkBDD(e.target.value)} /><br />
        Наличие отряда ЮИД (количество человек):
        <input className='full-name' value={stackUID} onInput={e => setStackUID(e.target.value)} /><br />
        Руководитель отряда ЮИД, ФИО:<br />
        <input className='first-half' value={leaderNameUID} onInput={e => setLeaderNameUID(e.target.value)} />
        Телефон:
        <input className='last-half' value={leaderPhoneUID} onInput={e => setLeaderPhoneUID(e.target.value)} /><br />
        Должность:
        <input className='full-name' value={leaderPostUID} onInput={e => setLeaderPostUID(e.target.value)} /><br />
        Наличие и состояние ограждения территории, запирающих устройств и шлагбаумов<br />
        <input className='full-name' value={turnpike} onInput={e => setTurnpike(e.target.value)} /><br />
        Наличие школьного автобуса в учреждении образования
        <input className='full-name' value={haveBus} onInput={e => setHaveBus(e.target.value)} /><br /><br />

        Время занятий в учреждении образования:<br />
        1-ая смена, начало (час:мин)
        <input className='time' value={firstShiftStart} onInput={e => setFirstShiftStart(e.target.value)} />
        окончание (час:мин)
        <input className='time' value={firstShiftEnd} onInput={e => setFirstShiftEnd(e.target.value)} /><br />
        2-ая смена, начало (час:мин)
        <input className='time' value={secondShiftStart} onInput={e => setSecondShiftStart(e.target.value)} />
        окончание (час:мин)
        <input className='time' value={secondShiftEnd} onInput={e => setSecondShiftEnd(e.target.value)} /><br />
        внеклассные занятия, начало (час:мин)
        <input className='time' value={outClassShiftStart} onInput={e => setOutClassShiftStart(e.target.value)} />
        окончание (час:мин)
        <input className='time' value={outClassShiftEnd} onInput={e => setOutClassShiftEnd(e.target.value)} /><br />
        режим работы в шестой школьный день, начало (час:мин)
        <input className='time' value={sixthDayStart} onInput={e => setSixthDayStart(e.target.value)} />
        окончание (час:мин)
        <input className='time' value={sixthDayEnd} onInput={e => setSixthDayEnd(e.target.value)} /><br />

        <h1>Информация об обеспечении безопасности перевозок детей специальным транспортным средством (автобусом).</h1>
        Заполняется при наличии у организации собственного автобуса.
        <h2>Общие сведения</h2>

        Марка:
        <input className='full-name' value={busBrand} onInput={e => setBusBrand(e.target.value)} /><br />
        Модель:
        <input className='full-name' value={busModel} onInput={e => setBusModel(e.target.value)} /><br />
        Регистрационный знак:
        <input className='full-name' value={busRegSign} onInput={e => setBusRegSign(e.target.value)} /><br />
        Год выпуска:
        <input className='full-name' value={busYear} onInput={e => setBusYear(e.target.value)} /><br />
        Количество пассажирских мест:
        <input className='full-name' value={busSeats} onInput={e => setBusSeats(e.target.value)} /><br />
        Соответствие конструкции требованиям, предъявляемым к школьным автобусам:
        <input className='full-name' value={busRequirement} onInput={e => setBusRequirement(e.target.value)} /><br />

        <h2>Сведения о водителе(ях) автобуса(ов)</h2>

        Водитель 1<br />
        ФИО:
        <input className='driver-first-half' value={firstDriverName} onInput={e => setFirstDriverName(e.target.value)} />
        Возраст:
        <input className='driver-last-half' value={firstDriverAge} onInput={e => setFirstDriverAge(e.target.value)} /><br />
        Дата принятия на работу:
        <input className='driver' value={firstDriverDateStart} onInput={e => setFirstDriverDateStart(e.target.value)} />
        Стаж вождения TC категории D:
        <input className='driver' value={firstDriverExperience} onInput={e => setFirstDriverExperience(e.target.value)} />
        Дата предстоящего медицинского осмотра:
        <input className='driver' value={firstDriverDateMed} onInput={e => setFirstDriverDateMed(e.target.value)} /><br />
        Допущенные нарушения ПДД:
        <input className='full-name' value={firstDriverViolations} onInput={e => setFirstDriverViolations(e.target.value)} /><br /><br />

        Водитель 2<br />
        ФИО:
        <input className='driver-first-half' value={secondDriverName} onInput={e => setSecondDriverName(e.target.value)} />
        Возраст:
        <input className='driver-last-half' value={secondDriverAge} onInput={e => setSecondDriverAge(e.target.value)} /><br />
        Дата принятия на работу:
        <input className='driver' value={secondDriverDateStart} onInput={e => setSecondDriverDateStart(e.target.value)} />
        Стаж вождения TC категории D:
        <input className='driver' value={secondDriverExperience} onInput={e => setSecondDriverExperience(e.target.value)} />
        Дата предстоящего медицинского осмотра:
        <input className='driver' value={secondDriverDateMed} onInput={e => setSecondDriverDateMed(e.target.value)} /><br />
        Допущенные нарушения ПДД:
        <input className='full-name' value={secondDriverViolations} onInput={e => setSecondDriverViolations(e.target.value)} /><br /><br />

        Водитель 3<br />
        ФИО:
        <input className='driver-first-half' value={thirdDriverName} onInput={e => setThirdDriverName(e.target.value)} />
        Возраст:
        <input className='driver-last-half' value={thirdDriverAge} onInput={e => setThirdDriverAge(e.target.value)} /><br />
        Дата принятия на работу:
        <input className='driver' value={thirdDriverDateStart} onInput={e => setThirdDriverDateStart(e.target.value)} />
        Стаж вождения TC категории D:
        <input className='driver' value={thirdDriverExperience} onInput={e => setThirdDriverExperience(e.target.value)} />
        Дата предстоящего медицинского осмотра:
        <input className='driver' value={thirdDriverDateMed} onInput={e => setThirdDriverDateMed(e.target.value)} /><br />
        Допущенные нарушения ПДД:
        <input className='full-name' value={thirdDriverViolations} onInput={e => setThirdDriverViolations(e.target.value)} /><br /><br />

        <h2>Организационно-техническое обеспечение</h2>

        Должностное лицо, ответственное за обеспечение безопасности дорожного движения и эксплуатацию TC, ФИО:
        <input className='prov-first-half' value={personSafetyName} onInput={e => setPersonSafetyName(e.target.value)} />
        Дата назначения:
        <input className='prov-last-half' value={personSafetyDate} onInput={e => setPersonSafetyDate(e.target.value)} /><br /><br />

        Организация проведения предрейсового медицинского обследования осуществляет, ФИО: 
        <input className='full-name' value={preMedName} onInput={e => setPreMedName(e.target.value)} /><br />
        На основании:
        <input value={preMedBasis} onInput={e => setPreMedBasis(e.target.value)} />
        Действительного до:
        <input value={preMedDate} onInput={e => setPreMedDate(e.target.value)} /><br /><br />

        Контроль за соответствием технического состояния и конструкции TC осуществляет, ФИО:
        <input className='full-name' value={techControlName} onInput={e => setTechControlName(e.target.value)} /><br />
        На основании:
        <input value={techControlBasis} onInput={e => setTechControlBasis(e.target.value)} />
        Действительного до:
        <input value={techControlDate} onInput={e => setTechControlDate(e.target.value)} /><br /><br />
        Дата очередного гостехосмотра:
        <input value={stateTechDate} onInput={e => setStateTechDate(e.target.value)} /><br /><br />

        Место стоянки автобуса в нерабочее время:
        <input className='full-name' value={parkingPlace} onInput={e => setParkingPlace(e.target.value)} /><br />
        Меры, исключающие несанкционированное использование:
        <input className='full-name' value={measures} onInput={e => setMeasures(e.target.value)} /><br />

        <h2>Сведения о владельце автобуса</h2>

        Юридический адрес собственника:
        <input className='full-name' value={ownerLegalAddress} onInput={e => setOwnerLegalAddress(e.target.value)} /><br />
        Фактический адрес собственника:
        <input className='full-name' value={ownerAddress} onInput={e => setOwnerAddress(e.target.value)} /><br />
        Телефон ответственного лица:
        <input className='full-name' value={ownerPhone} onInput={e => setOwnerPhone(e.target.value)} /><br />
        Руководитель организации, осуществляющей перевозку детей специальным транспортом (автобусом), ФИО:
        <input className='full-name' value={headBusOrg} onInput={e => setHeadBusOrg(e.target.value)} /><br /><br />

        <button className='passport-button' onClick={generateDocument}>Генерация паспорта</button>
    </div>
  )
}