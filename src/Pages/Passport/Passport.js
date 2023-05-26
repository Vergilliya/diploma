import React, { useState } from 'react';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import template from './../../Helpers/test.docx';

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
              console.log(JSON.stringify({ error: error }, replaceErrors));
  
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

    const [nameLeaderOVD, setNameLeaderOVD] = useState('');
    const [nameLeaderSchool, setNameLeaderSchool] = useState('');
    const [nameSchool, setNameSchool] = useState('');
    const [fullNameSchool, setFullNameSchool] = useState('');
    const [typeSchool, setTypeSchool] = useState('');
    const [logalAddress, setLogalAddress] = useState('');
    const [address, setAddress] = useState('');
    const [directorName, setDirectorName] = useState('');
    const [directorPhone, setDirectorPhone] = useState('');
    const [directorAcademicName, setDirectorAcademicName] = useState('');
    const [directorAcademicPhone, setDirectorAcademicPhone] = useState('');
    const [directorEducationalName, setDirectorEducationalName] = useState('');
    const [directorEducationalPhone, setDirectorEducationalPhone] = useState('');
    const [workerTraumatismName, setWorkerTraumatismName] = useState('');
    const [workerTraumatismPhone, setWorkerTraumatismPhone] = useState('');
    const [workerTraumatismPost, setWorkerTraumatismPost] = useState('');
    const [workerOVDName, setWorkerOVDName] = useState('');
    const [workerOVDPhone, setWorkerOVDPhone] = useState('');
    const [workerOVDPost, setWorkerOVDPost] = useState('');
    const [workerRoadNetworkName, setWorkerRoadNetworkName] = useState('');
    const [workerRoadNetworkPhone, setWorkerRoadNetworkPhone] = useState('');
    const [workerRoadTechnicianName, setWorkerRoadTechnicianName] = useState('');
    const [workerRoadTechnicianPhone, setWorkerRoadTechnicianPhone] = useState('');
    const [countStudents, setCountStudents] = useState('');
    const [placeCornerBDD, setPlaceCornerBDD] = useState('');
    const [placeOfficeBDD, setPlaceOfficeBDD] = useState('');
    const [placeCenterBDD, setPlaceCenterBDD] = useState('');
    const [placeTrafficParkBDD, setPlaceTrafficParkBDD] = useState('');
    const [stackUID, setStackUID] = useState('');
    const [leaderNameUID, setLeaderNameUID] = useState('');
    const [leaderPhoneUID, setLeaderPhoneUID] = useState('');
    const [leaderPostUID, setLeaderPostUID] = useState('');
    const [turnpike, setTurnpike] = useState('');
    const [haveBus, setHaveBus] = useState('');
    const [firstShiftStart, setFirstShiftStart] = useState('');
    const [firstShiftEnd, setFirstShiftEnd] = useState('');
    const [secondShiftStart, setSecondShiftStart] = useState('');
    const [secondShiftEnd, setSecondShiftEnd] = useState('');
    const [outClassShiftStart, setOutClassShiftStart] = useState('');
    const [outClassShiftEnd, setOutClassShiftEnd] = useState('');
    const [sixthDayStart, setSixthDayStart] = useState('');
    const [sixthDayEnd, setSixthDayEnd] = useState('');
    const [busBrand, setBusBrand] = useState('');
    const [busModel, setBusModel] = useState('');
    const [busRegSign, setBusRegSign] = useState('');
    const [busYear, setBusYear] = useState('');
    const [busSeats, setBusSeats] = useState('');
    const [busRequirement, setBusRequirement] = useState('');
    const [firstDriverName, setFirstDriverName] = useState('');
    const [firstDriverAge, setFirstDriverAge] = useState('');
    const [firstDriverDateStart, setFirstDriverDateStart] = useState('');
    const [firstDriverExperience, setFirstDriverExperience] = useState('');
    const [firstDriverDateMed, setFirstDriverDateMed] = useState('');
    const [firstDriverViolations, setFirstDriverViolations] = useState('');
    const [secondDriverName, setSecondDriverName] = useState('');
    const [secondDriverAge, setSecondDriverAge] = useState('');
    const [secondDriverDateStart, setSecondDriverDateStart] = useState('');
    const [secondDriverExperience, setSecondDriverExperience] = useState('');
    const [secondDriverDateMed, setSecondDriverDateMed] = useState('');
    const [secondDriverViolations, setSecondDriverViolations] = useState('');
    const [thirdDriverName, setThirdDriverName] = useState('');
    const [thirdDriverAge, setThirdDriverAge] = useState('');
    const [thirdDriverDateStart, setThirdDriverDateStart] = useState('');
    const [thirdDriverExperience, setThirdDriverExperience] = useState('');
    const [thirdDriverDateMed, setThirdDriverDateMed] = useState('');
    const [thirdDriverViolations, setThirdDriverViolations] = useState('');
    const [personSafetyName, setPersonSafetyName] = useState('');
    const [personSafetyDate, setPersonSafetyDate] = useState('');
    const [preMedName, setPreMedName] = useState('');
    const [preMedBasis, setPreMedBasis] = useState('');
    const [preMedDate, setPreMedDate] = useState('');
    const [techControlName, setTechControlName] = useState('');
    const [techControlBasis, setTechControlBasis] = useState('');
    const [techControlDate, setTechControlDate] = useState('');
    const [stateTechDate, setStateTechDate] = useState('');
    const [parkingPlace, setParkingPlace] = useState('');
    const [measures, setMeasures] = useState('');
    const [ownerLegalAddress, setOwnerLegalAddress] = useState('');
    const [ownerAddress, setOwnerAddress] = useState('');
    const [ownerPhone, setOwnerPhone] = useState('');
    const [headBusOrg, setHeadBusOrg] = useState('');

    const tempData = { //год добавить еще
        name_leader_OVD: nameLeaderOVD,
        name_leader_school: nameLeaderSchool,
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
    <div>
        ФИО руководителя (представителя) территориального ОВД:
        <input value={nameLeaderOVD} onInput={e => setNameLeaderOVD(e.target.value)} /><br />
        ФИО руководителя учреждения образования:
        <input value={nameLeaderSchool} onInput={e => setNameLeaderSchool(e.target.value)} /><br />

        <h1>Общие сведения</h1>
        <h2>Сведения об учреждения образования</h2>

        Наименование учреждения образования:
        <input value={nameSchool} onInput={e => setNameSchool(e.target.value)} /><br />
        Полное наименование учреждения образования:
        <input value={fullNameSchool} onInput={e => setFullNameSchool(e.target.value)} /><br />
        Тип учреждения образования:
        <input value={typeSchool} onInput={e => setTypeSchool(e.target.value)} /><br />
        Юридический адрес:
        <input value={logalAddress} onInput={e => setLogalAddress(e.target.value)} /><br />
        Физический адрес:
        <input value={address} onInput={e => setAddress(e.target.value)} /><br />

        <h2>Руководители учреждения образования</h2>

        Директор (завудующий), ФИО:
        <input value={directorName} onInput={e => setDirectorName(e.target.value)} />
        Телефон:
        <input value={directorPhone} onInput={e => setDirectorPhone(e.target.value)} /><br />
        Заместитель директора по учебной работе, ФИО:
        <input value={directorAcademicName} onInput={e => setDirectorAcademicName(e.target.value)} />
        Телефон:
        <input value={directorAcademicPhone} onInput={e => setDirectorAcademicPhone(e.target.value)} /><br />
        Заместитель директора по воспетательной работе, ФИО:
        <input value={directorEducationalName} onInput={e => setDirectorEducationalName(e.target.value)} />
        Телефон:
        <input value={directorEducationalPhone} onInput={e => setDirectorEducationalPhone(e.target.value)} /><br /><br />

        Ответственные работники за мероприятия по профилактике детского травматизма<br />
        ФИО:
        <input value={workerTraumatismName} onInput={e => setWorkerTraumatismName(e.target.value)} />
        Телефон:
        <input value={workerTraumatismPhone} onInput={e => setWorkerTraumatismPhone(e.target.value)} /><br />
        Должность:
        <input value={workerTraumatismPost} onInput={e => setWorkerTraumatismPost(e.target.value)} /><br /><br />

        Ответственные от ОВД<br />
        ФИО:
        <input value={workerOVDName} onInput={e => setWorkerOVDName(e.target.value)} />
        Телефон:
        <input value={workerOVDPhone} onInput={e => setWorkerOVDPhone(e.target.value)} /><br />
        Должность:
        <input value={workerOVDPost} onInput={e => setWorkerOVDPost(e.target.value)} /><br /><br />

        Руководитель или ответственный работник дорожно-эксплуатационной организации, осуществляющей содержание улично-дорожной сети<br />
        ФИО:
        <input value={workerRoadNetworkName} onInput={e => setWorkerRoadNetworkName(e.target.value)} />
        Телефон:
        <input value={workerRoadNetworkPhone} onInput={e => setWorkerRoadNetworkPhone(e.target.value)} /><br /><br />

        Руководитель или ответственный работник дорожно-эксплуатационной организации, осуществляющей содержание технических средств организации дорожного движения<br />                                    
        ФИО:
        <input value={workerRoadTechnicianName} onInput={e => setWorkerRoadTechnicianName(e.target.value)} />
        Телефон:
        <input value={workerRoadTechnicianPhone} onInput={e => setWorkerRoadTechnicianPhone(e.target.value)} /><br /><br />

        <h2>Дополнительные сведения</h2>

        Количество обучающихся (учащихся, воспитанников):
        <input value={countStudents} onInput={e => setCountStudents(e.target.value)} /><br />
        Местоположение уголка по БДД (если есть):
        <input value={placeCornerBDD} onInput={e => setPlaceCornerBDD(e.target.value)} /><br />
        Местоположение кабинета по БДД (если есть):
        <input value={placeOfficeBDD} onInput={e => setPlaceOfficeBDD(e.target.value)} /><br />
        Местоположение центра по БДД (если есть):
        <input value={placeCenterBDD} onInput={e => setPlaceCenterBDD(e.target.value)} /><br />
        Местоположение автогородка или автоплощадки по БДД (если есть):
        <input value={placeTrafficParkBDD} onInput={e => setPlaceTrafficParkBDD(e.target.value)} /><br />
        Наличие отряда ЮИД (количество человек):
        <input value={stackUID} onInput={e => setStackUID(e.target.value)} /><br />
        Руководитель отряда ЮИД<br />
        ФИО:
        <input value={leaderNameUID} onInput={e => setLeaderNameUID(e.target.value)} />
        Телефон:
        <input value={leaderPhoneUID} onInput={e => setLeaderPhoneUID(e.target.value)} /><br />
        Должность:
        <input value={leaderPostUID} onInput={e => setLeaderPostUID(e.target.value)} /><br />
        Наличие и состояние ограждения территории, запирающих устройств и шлагбаумов<br />
        <input value={turnpike} onInput={e => setTurnpike(e.target.value)} /><br />
        Наличие школьного автобуса в учреждении образования
        <input value={haveBus} onInput={e => setHaveBus(e.target.value)} /><br /><br />

        Время занятий в учреждении образования:<br />
        1-ая смена, начало (час:мин)
        <input value={firstShiftStart} onInput={e => setFirstShiftStart(e.target.value)} />
        окончание (час:мин)
        <input value={firstShiftEnd} onInput={e => setFirstShiftEnd(e.target.value)} /><br />
        2-ая смена, начало (час:мин)
        <input value={secondShiftStart} onInput={e => setSecondShiftStart(e.target.value)} />
        окончание (час:мин)
        <input value={secondShiftEnd} onInput={e => setSecondShiftEnd(e.target.value)} /><br />
        внеклассные занятия, начало (час:мин)
        <input value={outClassShiftStart} onInput={e => setOutClassShiftStart(e.target.value)} />
        окончание (час:мин)
        <input value={outClassShiftEnd} onInput={e => setOutClassShiftEnd(e.target.value)} /><br />
        режим работы в шестой школьный день, начало (час:мин)
        <input value={sixthDayStart} onInput={e => setSixthDayStart(e.target.value)} />
        окончание (час:мин)
        <input value={sixthDayEnd} onInput={e => setSixthDayEnd(e.target.value)} /><br />

        <h1>Информация об обеспечении безопасности перевозок детей специальным транспортным средством (автобусом).</h1>
        Заполняется при наличии у организации собственного автобуса
        <h2>Общие сведения</h2>

        Марка:
        <input value={busBrand} onInput={e => setBusBrand(e.target.value)} /><br />
        Модель:
        <input value={busModel} onInput={e => setBusModel(e.target.value)} /><br />
        Регистрационный знак:
        <input value={busRegSign} onInput={e => setBusRegSign(e.target.value)} /><br />
        Год выпуска:
        <input value={busYear} onInput={e => setBusYear(e.target.value)} /><br />
        Количество пассажирских мест:
        <input value={busSeats} onInput={e => setBusSeats(e.target.value)} /><br />
        Соответствие конструкции требованиям, предъявляемым к школьным автобусам:
        <input value={busRequirement} onInput={e => setBusRequirement(e.target.value)} /><br />

        <h2>Сведения о водителе(ях) автобуса(ов)</h2>

        Водитель 1<br />
        ФИО:
        <input value={firstDriverName} onInput={e => setFirstDriverName(e.target.value)} /><br />
        Возраст:
        <input value={firstDriverAge} onInput={e => setFirstDriverAge(e.target.value)} /><br />
        Дата принятия на работу:
        <input value={firstDriverDateStart} onInput={e => setFirstDriverDateStart(e.target.value)} /><br />
        Стаж вождения TC категории D:
        <input value={firstDriverExperience} onInput={e => setFirstDriverExperience(e.target.value)} /><br />
        Дата предстоящего медицинского осмотра:
        <input value={firstDriverDateMed} onInput={e => setFirstDriverDateMed(e.target.value)} /><br />
        Допущенные нарушения ПДД:
        <input value={firstDriverViolations} onInput={e => setFirstDriverViolations(e.target.value)} /><br /><br />

        Водитель 2<br />
        ФИО:
        <input value={secondDriverName} onInput={e => setSecondDriverName(e.target.value)} /><br />
        Возраст:
        <input value={secondDriverAge} onInput={e => setSecondDriverAge(e.target.value)} /><br />
        Дата принятия на работу:
        <input value={secondDriverDateStart} onInput={e => setSecondDriverDateStart(e.target.value)} /><br />
        Стаж вождения TC категории D:
        <input value={secondDriverExperience} onInput={e => setSecondDriverExperience(e.target.value)} /><br />
        Дата предстоящего медицинского осмотра:
        <input value={secondDriverDateMed} onInput={e => setSecondDriverDateMed(e.target.value)} /><br />
        Допущенные нарушения ПДД:
        <input value={secondDriverViolations} onInput={e => setSecondDriverViolations(e.target.value)} /><br /><br />

        Водитель 3<br />
        ФИО:
        <input value={thirdDriverName} onInput={e => setThirdDriverName(e.target.value)} /><br />
        Возраст:
        <input value={thirdDriverAge} onInput={e => setThirdDriverAge(e.target.value)} /><br />
        Дата принятия на работу:
        <input value={thirdDriverDateStart} onInput={e => setThirdDriverDateStart(e.target.value)} /><br />
        Стаж вождения TC категории D:
        <input value={thirdDriverExperience} onInput={e => setThirdDriverExperience(e.target.value)} /><br />
        Дата предстоящего медицинского осмотра:
        <input value={thirdDriverDateMed} onInput={e => setThirdDriverDateMed(e.target.value)} /><br />
        Допущенные нарушения ПДД:
        <input value={thirdDriverViolations} onInput={e => setThirdDriverViolations(e.target.value)} /><br />

        <h2>Организационно-техническое обеспечение</h2>

        Должностное лицо, ответственное за обеспечение безопасности дорожного движения и эксплуатацию TC, ФИО:
        <input value={personSafetyName} onInput={e => setPersonSafetyName(e.target.value)} />
        Дата назначения:
        <input value={personSafetyDate} onInput={e => setPersonSafetyDate(e.target.value)} /><br /><br />

        Организация проведения предрейсового медицинского обследования осуществляет, ФИО: 
        <input value={preMedName} onInput={e => setPreMedName(e.target.value)} /><br />
        На основании:
        <input value={preMedBasis} onInput={e => setPreMedBasis(e.target.value)} />
        Действительного до:
        <input value={preMedDate} onInput={e => setPreMedDate(e.target.value)} /><br /><br />

        Контроль за соответствием технического состояния и конструкции TC осуществляет, ФИО:
        <input value={techControlName} onInput={e => setTechControlName(e.target.value)} /><br />
        На основании:
        <input value={techControlBasis} onInput={e => setTechControlBasis(e.target.value)} />
        Действительного до:
        <input value={techControlDate} onInput={e => setTechControlDate(e.target.value)} /><br /><br />

        Дата очередного гостехосмотра:
        <input value={stateTechDate} onInput={e => setStateTechDate(e.target.value)} /><br /><br />

        Место стоянки автобуса в нерабочее время:
        <input value={parkingPlace} onInput={e => setParkingPlace(e.target.value)} /><br />
        Меры, исключающие несанкционированное использование:
        <input value={measures} onInput={e => setMeasures(e.target.value)} /><br />

        <h2>Сведения о владельце автобуса</h2>

        Юридический адрес собственника:
        <input value={ownerLegalAddress} onInput={e => setOwnerLegalAddress(e.target.value)} /><br />
        Фактический адрес собственника:
        <input value={ownerAddress} onInput={e => setOwnerAddress(e.target.value)} /><br />
        Телефон ответственного лица:
        <input value={ownerPhone} onInput={e => setOwnerPhone(e.target.value)} /><br /><br />

        Руководитель организации, осуществляющей перевозку детей специальным транспортом (автобусом), ФИО:
        <input value={headBusOrg} onInput={e => setHeadBusOrg(e.target.value)} /><br /><br />


        <hr />
        <button onClick={generateDocument}>Генерация паспорта</button>
    </div>
  )
}