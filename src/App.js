import {Route, Switch, useHistory} from 'react-router-dom'
// import {Route, Switch} from 'react-router-dom'
import { useState, useEffect} from 'react'
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Missing } from "./components/Missing";
import { Nav } from "./components/Nav";
import { NewPost } from "./components/NewPosr";
import { PostPage } from "./components/PostPage";
import "./App.scss";

//! 5:12
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "March 9, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "March 9, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "March 9, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "March 9, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
const [search, setSearch]= useState('')
const [searchResults, setSearchResults]= useState([])

const handleDelete= (id) => {

}

  return (
  <div className="App">
    <Header title="React JS Blog" />
    <Nav search={search} setSearch={setSearch} />
    <Switch>
      <Route exact path="/" >
        <Home posts={posts} />
        </Route>
      <Route exact path="/post">
        <NewPost />
        </Route>
      <Route path="/post/:id">
        <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
      <Route path="/about" component={About} />
      <Route path="*" component={Missing} />
    </Switch>
    <Footer />
    </div>
  )
}

export default App;
