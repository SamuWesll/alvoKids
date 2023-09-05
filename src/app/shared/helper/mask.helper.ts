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