const CAR_NAME = Object.freeze({
  INPUT: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  ERROR:
    "[ERROR] 자동차 이름은 쉼표를 기준으로 구분해야하며, 이름은 5자 이하만 가능합니다.",
});

const TRY_COUNT = Object.freeze({
  INPUT: "시도할 회수는 몇회인가요?\n",
  ERROR: "[ERROR] 시도 횟수는 숫자여야 합니다",
});

const CASE_RESULT = Object.freeze({
  MESSAGE: "\n실행 결과",
  SINGLE_MOVE: "-",
});

const FINAL_WINNER = Object.freeze({
  MESSAGE: "최종 우승자 : ",
});

module.exports = { CAR_NAME, TRY_COUNT, CASE_RESULT, FINAL_WINNER };
