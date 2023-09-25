import { Center } from './Center';
import { SideBar } from './SideBar';
import './style.css'

export const Main = () => (
  <div className='Main'>
    <SideBar/>
    <Center/>
  </div>
)