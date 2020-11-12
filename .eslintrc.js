module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 'indent': ['error', 2], // 2칸 들여쓰기 여부
    'semi': 1, // 세미콜론 허용 여부
    // 'no-unused-vars': 2, // 사용하지 않는 변수명 허용 여부
    'keyword-spacing': 1, // 키워드 별로 공백 허용 여부 if 문 통일할 때 쓰임
    'no-multiple-empty-lines': 1, // 여러줄 공백 허용 여부
    'space-before-function-paren': 2, // function () <- 인자값 공백 허용 여부
    'eol-last': 1, // 파일 끝 개행 여부
  },
  globals: {}
}
