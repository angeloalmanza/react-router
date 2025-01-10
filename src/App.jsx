import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PostsPage from "./pages/post/PostsPage"
import ShowPage from "./pages/post/ShowPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts">
            <Route index element={<PostsPage />}/>
            {/* <Route path="create" element={<CreatePage />}/> */}
            <Route path=":id" element={<ShowPage />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
