const userAge = prompt('Введіть ваш вік', '');
const userTown = prompt('Введіть місто у якому ви живете', '');
const userSport = prompt('Введіть ваш улюблений вид спорту', '');

let alertMessage, sportAlertMessage, correctInputs = 0;

//*для віку
switch (true) {
    case parseInt(userAge) <= 0:
        alert('Вік не може бути <= 0!');
        break;
    case userAge === null:
        alert('Шкода що ви не захотіли вводити вік :(');
        break;
    case isNaN(parseInt(userAge)):
        alert('Неправильне введення віку!');
        break;
    default:
        correctInputs++;
}

//*для міста
switch (userTown) {
    case null:
        alert(`Шкода що ви не захотіли вводити місто :(`);
        break;
    case '':
        alert('Напевно ви забули ввести місто :)')
        break;
    default:
        correctInputs++;
}

//*для спорту
switch (userSport) {
    case null:
        alert(`Шкода що ви не захотіли вводити свій улюблений спорт :(`);
        break;
    case '':
        alert('Напевно ви забули ввести свій улюблений спорт :)')
        break;
    default:
        correctInputs++;
}

if (correctInputs === 3) {
    switch (userSport.trim().toLowerCase()) {
        case 'хокей':
            sportAlertMessage = 'Круто! Хочеш стати Уэйном Гретцки?';
            break;
        case 'футбол':
            sportAlertMessage = 'Круто! Хочеш стати Кріштіану Роналду?';
            break;
        case 'волейбол':
            sportAlertMessage = 'Круто! Хочеш стати Ервіном Нгапет?';
            break;
        
        default:
            sportAlertMessage = `Певен ти станеш новим чемпіоном у ${userSport.trim().toLowerCase()}`;
    }


    switch (userTown.trim().toLowerCase()) {
        case 'київ' || 'лондон' || 'вашингтон':
            alertMessage = 'Ви живете у столиці ';
            break;
        case 'москва':
            alertMessage = 'Ви живете на помійці ';
            break;
        default:
            alertMessage = 'Ви живете у місті ';
    }
    alert(`Ваш вік - ${userAge} років\n${alertMessage + userTown}\n${sportAlertMessage + 'і'}!`);
}