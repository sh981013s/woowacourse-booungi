/**
 * 문자열을 두글자의 문자열로 쪼갠다
 * @param {string} nickName - 닉네임
 * @param {number} index - index 번호
 * @return {string}
 */
const getTemporaryWord = (nickName, index) => {
  return nickName.substring(index, index + 2);
};

/**
 * 이미 임시 단어 object 에 주어진 임시 문자열이 존재하는지 확인
 * @param {object} commonNicknameObject - 임시 단어 object
 * @param {string} temporaryWord - 임시 단어
 * @return {boolean}
 */
const isTmpWordAlreadyExists = (commonNicknameObject, temporaryWord) => {
  return commonNicknameObject[temporaryWord];
};

const problem6 = (forms) => {
  const answer = [];
  const commonNickName = {};

  return answer;
};

module.exports = problem6;
