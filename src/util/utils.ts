export const Utils = {
  //도메인 체크
  domainCheckReturnApiType(val: string) {

    if (
      val === '' ||
      val === ''
    ) {
      return '';
    }


    if (
      val === '' ||
      val === ''
    ) {
      return '';
    }

    return '';
  },

  replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find, 'g'), replace);
  },
};
