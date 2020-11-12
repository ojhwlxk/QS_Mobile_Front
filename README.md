# Nuxt-Mobile-Front

> 이 프로젝트는 퀸스스마일 프로젝트를 추가 개선하여 포트폴리오로 사용하고자 만들어졌습니다. 


## 프로젝트 구조 설명
1. /assets  
프로젝트에서 사용되는 리소스(scss, image 등)들을 위치시킵니다.  
assets 폴더에 둔 리소스는 빌드시에 webpack에 의해서 전처리됩니다.  

2. /components  
자주 사용되는 요소를 컴포넌트로 만들어서 놓습니다.  
컴포넌트는 코드 재사용성을 높혀서 개발 효율성을 높이는데 도움이 됩니다.  
    - global : 전역적으로 사용되는 컴포넌트입니다. ex) navigation, footer 등
    - item : 리스트에서 반복적으로 사용되는 요소들을 컴포넌트화 하였습니다.
    - mixins : script 부분만 재사용 하기위해 컴포넌트화 하였습니다.
    - ui : 일반적인 UI 컴포넌트

3. /layouts
공통적인 레이아웃을 구성할 수 있습니다.

4. /pages  
페이지들을 구현합니다.  
Nuxt.js에서는 Page 폴더 하위의 폴더구조가 그대로 url 주소 체계로 반영됩니다.  

5. /plugins  
프로젝트에서 사용할 외부 라이브러리를 Nuxt 플러그인으로 등록할 때 본 폴더에 정의합니다.  

6. /static  
프로젝트에서 사용하는 정적 리소스들을 위치시킵니다.  
예를 들면, font 파일이나 이미지, robots.txt, sitemap.xml, favicon.ico 등을 static 폴더에 넣습니다.  

7. /store  
전역 상태관리를 위한 vuex 설정 폴더입니다.  
Nuxt.js의 기본 폴더구조이며, 파일을 생성하면 자동으로 vuex의 모듈로 인식됩니다.  

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:18000
$ npm run dev
```