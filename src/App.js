
import './App.css';

import images from './c1.jpg';
import c2 from './c2.jpg';
import d from './d.jpg';
import d1 from './d1.jpg';
import d2 from './d2.jpg';
import t from './t.jpg';
import Contact from './Contact';

function App() {
  return (
    <div className="App ">
   <div class="card-group  ">
 <Contact img={images}
           name="Mr Winter Stone"
           phone="378-890-765"
           email="winterst890@gmail.com"
 
 />
  <Contact img={c2}
           name="Mrs Fluffy"
           phone="444-55-7654"
           email="fluffy78@gmail.com"/>
  <Contact img={d}
           name="Mr Denom"
           phone="234-5556-7654"
           email="deno8@gmail.com"
  />
  <Contact
  img={d1}
  name="Mr Warn"
  phone="386-789-666"
  email="warm9@gmail.com"
  />
  <Contact
   img={d2}
   name="Mrs Witty"
   phone="9090-6543-7865"
   email="witty7@gmail.com"
  />
  <Contact  img={t}
   name="Mrs Turtle"
   phone="876-546-9090"
   email="tutlistic45@gmail.com"
  />
 
 
 
 
</div>
    </div>
  );
}

export default App;
