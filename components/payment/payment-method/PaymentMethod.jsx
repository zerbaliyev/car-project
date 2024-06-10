import BitcoinItem from "./BitcoinItem";
import CreditCardItem from "./CreditCardItem";
import PayPalItem from "./PayPalItem";

const PaymentMethod = () => {
  return (

    <section className='bg-white rounded lg:w-3/5 px-6 py-6 pt-6'>
      <div className='flex justify-between'>
        <div>
          <h2 className='font-bold text-xl'>Payment Method</h2>
          <span className=' text-gray-500 text-base'>Please enter your payment method</span>
        </div>
        <p>Step 3 of 4</p>
      </div>

        <div className="flex flex-col gap-y-4">
            <CreditCardItem />
            <PayPalItem />
            <BitcoinItem />
        </div>
    </section>
  )
}

export default PaymentMethod;
