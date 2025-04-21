import React from 'react'
import Title from '../Title';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

const priceArray = [
  { title: "Under ₱5000", value: "0-5000" } ,
  { title: "₱5000 - ₱10000", value: "5000-10000" } ,
  { title: "₱10000 - ₱15000 ", value: "10000-15000"} ,
  { title: "₱15000 - ₱20000", value: "15000-20000"} ,
  { title: "Over ₱20000", value: "20000-100000"} ,
];

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
}
const PriceList = ({selectedPrice,setSelectedPrice}:Props) => {
  return (
    <div>
      <Title className="text-base font-black">Price</Title>
      <RadioGroup className="mt-2 space-y-1" value={selectedPrice || ""}>
        {priceArray?.map((price, index) => (
         <div
         key={index}
         onClick={() => setSelectedPrice(price?.value)}
         className="flex items-center space-x-2 hover:cursor-pointer"
         >
          <RadioGroupItem
          value={price?.value}
          id={price?.value}
          className="rounded-sm"
          />
          <Label
          htmlFor={price.value}
          className={`${selectedPrice === price?.value ?
            "font-semibold text-shop_dark_green" : "font-normal"}`}
          >
            {price?.title}
          </Label>
         </div>   
        ))}
      </RadioGroup>
      {selectedPrice && (
          <button
          onClick={() => setSelectedPrice(null)}
          className="text-sm font-medium mt-2 underline underline-offset-2
          decoration-[1px] hover:text-shop_dark_red hoverEffect text-left"
          >
            Reset Selection
          </button>
        )}
    </div>
  )
}

export default PriceList;