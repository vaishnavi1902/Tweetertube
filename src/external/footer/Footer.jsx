import './footer.css'
import { AiOutlineInfoCircle , AiOutlineUnorderedList ,  AiOutlineDisconnect} from 'react-icons/ai'
const Footer = () => {
  return (
    <section id="footer" className='footer'>
      <div>
        <div className='heading-footer'><h4>About</h4> <AiOutlineInfoCircle /></div>
      </div>
      <div>
      <div className='heading-footer'><h4>Links</h4> <AiOutlineUnorderedList /></div>
      </div>
      <div>
      <div className='heading-footer'><h4>Connect us</h4><AiOutlineDisconnect/></div>
      </div>
    </section>
  )
}

export default Footer