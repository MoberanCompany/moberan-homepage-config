# 홈페이지 내용 작성 방법

1. data 내 json 수정
2. public 내 필요한 파일 추가
3. commit & push
4. Github Action 자동 수행 대기

* public/html 은 직접 수정해도 소용 없음

# 동작 구조

1. Github Action으로 dist/bundle.js 실행 (npm run run)
   * public/HTML 생성 및 public, out 폴더 NAS 업로드

# 소스 수정

1. src 내 ts 수정
2. npm run build
3. dist 포함 commit & push