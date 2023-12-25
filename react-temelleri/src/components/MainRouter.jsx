import { Route, Routes, Link, NavLink } from "react-router-dom"

import Home from "./Home"
import Components from "./1.Components"
import Giris from "./2.Giris"
import Props from "./3.Props"
import ClassNames from "./3.Props/classNames"
import LifeCycle from "./4.LifeCycle"
import States from  "./5.States"
import Counter from  "./5.States/counter"
import InputExample from  "./5.States/input"
import Todos from "./5.States/useReducer"
import Fetching from "./6.Fetching"
import AxiosExample from "./6.Fetching/axiosExample"
import FormikExample from "./7.Formik"
import FormikHandleExample from "./7.Formik/handles"
import UseFormikExample from "./7.Formik/useFormik"
import SignIn from "./7.Formik/SignIn"
import Styling from "./8.Styling"
import { Baslik } from "./8.Styling/styledComponents/baslik"
import Memoization from "./9.Memoization"
import UseMemoExample from "./9.Memoization/useMemo"
import UseCallback from "./9.Memoization/useCallback"
import ContextAPI from "./10.ContextAPI"
import Redux from "./11.Redux"
import PageNotFound from "./404Page"
import UseRef from "./12.Extra/useRef"

export default function MainRouter() {
  return (
    <>
      <div className="grid" >
        <div className={"sm:col-12 md:col-3 navbar"}>
          <div>
            <u><h3>Konu Başlıkları</h3></u>
            <ol>
              <li><NavLink to="/giris">Giriş</NavLink></li>
              <li><NavLink to="/components">Components</NavLink></li>
              <li><NavLink to="/props">Props</NavLink>
                <ul>
                  <li><NavLink to="props/class-names">ClassNames</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/states">States</NavLink>
                <ul>
                  <li><NavLink to="states/counter">Counter</NavLink></li>
                  <li><NavLink to="states/input-example">Input Example</NavLink></li>
                  <li><NavLink to="/states/reducer">useReducer</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/lifecycle">LifeCycle</NavLink></li>
              <li><NavLink to="/styling">Styling</NavLink></li>
              <li><NavLink to="/fetching">Fetching</NavLink>
                <ul>
                  <li><NavLink to="fetching/axios-example">Axios</NavLink></li>
                </ul>
							</li>
              <li><NavLink to="/formik">Formik</NavLink>
                <ul>
                  <li><NavLink to="formik/handle">FormikHandles</NavLink></li>
                  <li><NavLink to="formik/use-formik">useFormik</NavLink></li>
                  <li><NavLink to="formik/sign-in">Validation Example</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/memoization">Memoization</NavLink>
                <ul>
                  {/* <li><NavLink to="memoization/use-memo">useMemo</NavLink></li> */}
                  <li><NavLink to="memoization/use-callback">useCallback</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="context-api">ContextAPI</NavLink></li>
              <li><NavLink to="redux">Redux</NavLink></li>
							<li><NavLink to="/extra">Extra</NavLink>
                <ul>
                  <li><NavLink to="extra/useRef">useRef</NavLink></li>
                </ul>
							</li>
            </ol>
          </div>
        </div>

        <div className={"col-9 icerik"}>
          <Link to="/"><Baslik>React Temelleri</Baslik></Link> 
					{/* Yönlendirmeleri <a href> ile verirsen SPA yapısına göre hareket etmez, sayfayı yeniden yükler.
							bir elemente tıklayarak yönlendirme yaparken <Link to> kullan. */}
          <hr/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/giris" element={<Giris />}></Route>
            <Route path="/components" element={<Components />} />

            <Route path="/props"> {/* her zaman görünmesi istenen layout element'i (varsa) buraya eklenir. */}
              <Route index={true} element={<Props/>} /> {/* main path'de görünecek element index={true} ile eklenir.*/}
              <Route path="class-names" element={<ClassNames />} /> {/* alt pathler "/" kullanmadan eklenir. */}
            </Route> {/* iç içe (nested) Routing bu şekilde oluyor. */}
            
            <Route path="/states" >
              <Route index={true} element={<States/>}/>
              <Route path="counter" element={<Counter/>}/>
              <Route path="input-example" element={<InputExample/>}/>
              <Route path="reducer" element={<Todos/>}/>
            </Route>
            <Route path="/lifecycle" element={<LifeCycle/>}/>
            <Route path="/styling" element={<Styling/>}/>
            <Route path="/fetching" >
              <Route index={true} element={<Fetching/>} />
              <Route path="axios-example" element={<AxiosExample/>} />
            </Route>
            <Route path="/formik" >
              <Route index={true} element={<FormikExample/>} />
              <Route path="handle" element={<FormikHandleExample/>} />
              <Route path="use-formik" element={<UseFormikExample/>} />
              <Route path="sign-in" element={<SignIn/>} />
            </Route>
            <Route path="/memoization" >
              <Route index={true} element={<Memoization/>} />
              <Route path="use-memo" element={<UseMemoExample/>} />
              <Route path="use-callback" element={<UseCallback/>} />
            </Route>
            <Route path="/context-api" element={<ContextAPI/>}/>
            <Route path="*" element={<PageNotFound/>} />
            <Route path="/redux" element={<Redux/>} />
						<Route path="/extra" >
              <Route path="useRef" element={<UseRef/>} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  )
}
