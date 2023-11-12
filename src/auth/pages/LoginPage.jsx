import { Link, NavLink, useNavigate } from 'react-router-dom';


export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
      navigate('/home', {
          replace: true
      });
  }

  return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <h1 className="navbar-brand">Login</h1>

          <div className="navbar-collapse">
              <div className="navbar-nav">
              </div>
          </div>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
              <ul className="navbar-nav ml-auto">

                  <span className="nav-item nav-link text-primary">
                   
                  </span>

                  <button className="nav-item nav-link btn">
                    Multiview 3.0
                  </button>
                  
                      
                     
                  
              </ul>
          </div>
        </nav>
        <div>

                
                <hr/>
                <form>
                    <label >Usuario</label> 
                    <input type="text" />
                    <label >Contraseña</label>
                    <input type="text" />
                    <button className='btn btn-primary'
                    onClick= { onLogin } >Ingresar</button>
                </form>
            </div>


      </>
      


  )
}