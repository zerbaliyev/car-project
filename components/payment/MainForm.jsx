import BillingInfo from './BillingInfo'
import Confirmation from './Confirmation/Confirmation'
import RentalInfo from './RentalInfo'
import RentalSummary from './RentalSummary'
import PaymentMethod from './payment-method/PaymentMethod'

const MainForm = () => {
  return (
    <div className=''>
      <div className=' flex flex-col py-6 px-6 gap-y-4'>
        <div className='flex flex-wrap sm:flex-row gap-8'>
          <BillingInfo />
          <RentalSummary />
        </div>
        <RentalInfo />
        <PaymentMethod />
        <Confirmation />
      </div>
    </div>
  )
}

export default MainForm;
