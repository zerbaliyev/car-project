import FooterMenu from './FooterMenu'
import FooterEnd from './FooterEnd'

export default function Footer() {
  return (
    <footer className='bg-white '>
        <h2 className='text-blue-800 py-10 px-16 text-3xl font-bold '>MORENT</h2>   
        <p className='px-16 py-5'>
            Our vision is to provide convenience <br />
            and help increase your sales business.
        </p>
        <FooterMenu />
        <hr />
        <FooterEnd /> 
    </footer>
  )
}
