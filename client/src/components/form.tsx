import { useState } from "react";
// import { PhoneInput } from 'react-international-phone';
interface FormProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}
export default function Form({isOpen, setIsOpen}: FormProps) {
  const [fullName, setFullName] = useState('')
  const [instagram, setInstagram] = useState('');
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div className="relative z-50 font-helvetica">
      {isOpen &&
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-grey p-5 rounded-lg z-10 w-full mx-4 text-green text-sm max-w-[800px]">
            <button className="w-full flex justify-end" onClick={() => { setIsOpen(false) }}>
              
            </button>
            <h1 className=" text-xl  text-left font-swift">Hello, dear!</h1>
            <h2 className="text-[10px] mt-2 mb-7 text-left">* Залишай свої дані за для зворотнього звʼязку. Протягом короткого періоду часу, я з вами звʼяжусь.</h2>

            <p className="text-start mb-2">Введіть ПІБ</p>
            <input
              className={`w-full rounded-xl border py-2 px-4 mb-4 outline-none bg-grey`}
              placeholder="Левченко Альона"
              value = {fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            {/* <p className="text-start mb-2">Номер телефону:</p> */}
            {/* <PhoneInput
                country="ua"
                className="mb-4"
                defaultCountry="ua"
                hideDropdown={true}
                countrySelectorStyleProps={{ className: "!hidden" }}
                inputClassName={`!w-full !rounded-xl py-2 px-4 !border !font-montserrat !bg-main-light bg-main-dark`}
                disableCountryGuess={true}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                placeholder="+38(000)-000-00"
              /> */}

            <p className="text-start mb-2">Нік в інстаграм</p>
            <input
              value = {instagram}
              className={`w-full rounded-xl border py-2 px-4 mb-4 outline-none  bg-grey`}
              placeholder="@levchenkoa"
              onChange={(e) => setInstagram(e.target.value)}
            />

            <p className="text-start mb-2">Пошта</p>
            <input
              value = {email}
              className={`w-full rounded-xl border py-2 px-4 mb-4 outline-none bg-grey`}
              placeholder="ex@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </div>
        </div>
      }
    </div>
  );
}