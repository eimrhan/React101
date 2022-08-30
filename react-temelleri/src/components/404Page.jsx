import {Link} from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='ortadayazi'>
      <strong>404 - Page Not Found</strong>
      <br/><hr/>
      <Link to="/"> Anasayfaya Dön</Link>
    </div>
  )
}

export default PageNotFound