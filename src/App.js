// https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing 위 링크를 보니
// github pages에서는 BrowserRouter에서 사용하는 HTML5 history API를 지원하지 않아서 React app 내 routing이 안된다고 합니다.
// 그래서 React Router v6 기준으로 쉽게 해결하는 방법은 BrowserRouter 대신 HashRouter를 사용하면 됩니다ㅎ
// 또한 package.json의 homepage 필드에 명시할 url은 Github repository > Settings > Pages > Github Pages에서 확인하고 복붙하면 됩니다~
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    // React app 내에서 route별 렌더링할 컴포넌트들은 컴포넌트 내부에 명시한다.
    // 그럼 Route들을 담는 Router 컴포넌트는 무조건 App.js 에만 있어야 할까?
    <HashRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

// 1 컴포넌트 당 1개의 .js 파일을 가질 수 있어서 모듈화가 가능하다.

// 컴포넌트별 스타일은 .module.css 파일을 생성 + import 하여 사용
// => 여기서 스타일은 className이나 id로 import한 스타일 객체의 property를 전달하여 적용된다는 것!

// 이는 기존의 "어떤 class나 id에 적용할 스타일"이 아닌 "특정 jsx element에 적용할 스타일"로 생각할 수 있다~
// react 컴파일 과정 중 random class나 id가 생성되기 때문에 .css 파일의 class, id 이름을 굳이 외울 필요없다
// create-react-app을 사용하면 React 앱 스캐폴딩을 생성해준다~
