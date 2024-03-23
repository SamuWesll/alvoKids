export function phoneMask(telefone: string) {
    const numbers = telefone.match(/\d/g);
  
    let numberLength = 0;
    if (numbers) {
      numberLength = numbers.join('').length;
    }
  
    if (numberLength <= 10) {
      return [
        '(',
        /[0-9]/,
        /[0-9]/,
        ')',
        ' ',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        '-',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
      ];
    } else {
      return [
        '(',
        /[0-9]/,
        /[0-9]/,
        ')',
        ' ',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        '-',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
      ];
    }
  }

  export function maskAge(birthDate: string) {
    const dateBirth = new Date(birthDate)
    const age = calcAge(dateBirth.toISOString());

    return `${age}`;
    // return `${age} (${dateBirth.getDay()}/${dateBirth.getMonth()+1}/${dateBirth.getFullYear()})`;
  }

  export function calcAge(date: string) {
    var birthday = +new Date(date);
    return ~~((Date.now() - birthday) / (31557600000));
  }

  export function dayWeek(dayNumber: number) {
    let day;
    switch(dayNumber) {
      case 0:
        day = 'domingo'
        break;
      case 1:
        day = 'segunda'
        break
      case 2:
        day = 'terça'
        break
      case 3:
        day = 'quarta'
        break
      case 4:
        day = 'quinta'
        break
      case 5:
        day = 'sexta'
        break
      case 6:
        day = 'sábado'
        break
      default:
        day = '';
        break
    }

    return day;
  }