import theImg from '../img/selfy_by_crayolajustgotbetter_d6lk534-pre.jpg'


export default function Photo():JSX.Element {
  return (
    <div className='photoContainer'>
        <img className='thePhoto' src={theImg} alt='img'/>
        <div className='Lego'>Lego</div>
      </div>
  )
}
