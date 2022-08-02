const Utils = {
  checkEmail: (email) => {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exptext.test(email) === false) {
      //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우
      return false;
    }
    return true;
  },
  checkPassword: (pw) => {
    return pw?.length >= 8 || false;
  },
};

export default Utils;
