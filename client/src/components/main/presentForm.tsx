import { IconX, IconGift } from "@tabler/icons-react"
import { useReducer } from "react"
import { validateFullName, validateEmail } from "../../validators"
import { stat } from "fs"
interface FormProps {
    isShow: boolean
    toggleShow: () => void
}
type FormStateType = {
    fullName: {
        value: string;
        error: string | null;
    };
    mail: {
        value: string;
        error: string | null;
    };
}
function reducer(state: FormStateType, action: {type: string, value: string}) {
    switch (action.type) {
        case 'set_name': {
            return {
                ...state,
                fullName: {
                    ...state.fullName,
                    value: action.value,
                }
            };
        }
        case 'set_mail': {
            return {
                ...state, 
                mail: {
                    ...state.mail,
                    value: action.value,
                }
            }
        }
        case 'validate_name': {
            return {
                ...state,
                fullName: {
                    ...state.fullName,
                    error: validateFullName(state.fullName.value)
                }
            };
        }
        case 'validate_mail': {
            return {
                ...state,
                mail: {
                    ...state.mail,
                    error: validateEmail(state.mail.value)
                }
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

const initialState = {
    fullName: {
        value: "",
        error: null
    },
    mail: {
        value: "",
        error: null
    }
}
export default function PresentForm({ isShow, toggleShow }: FormProps) {
    const [stateForm, dispatch] = useReducer(reducer, initialState);
    console.log(stateForm)
    function setFullName(e:  React.ChangeEvent<HTMLInputElement>){
        dispatch({
            type: 'set_name',
            value: e.target.value
        })
    }
    function setMail(e: React.ChangeEvent<HTMLInputElement>){
        dispatch({
            type: 'set_mail',
            value: e.target.value
        })
    }
    function validateForm() {
        dispatch({ 
            type: 'validate_name',
            value: ''
        })
        dispatch({
            type: 'validate_mail',
            value: ''
        })  
        if(stateForm.fullName.error || stateForm.mail.error){
            console.log('error')
        }
    }
    if (!isShow) {
        return null
    }
    return (
        <div className="relative z-50 font-ralleway tracking-[2.1px] leading-[27px]">
            <div className="fixed inset-0 flex items-center justify-center y">
                <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={toggleShow}></div>
                <div className="bg-grey p-5 rounded-lg z-10 w-full mx-4 text-green text-sm max-w-[800px]">
                    <div className="w-full flex justify-end text-main-blue">
                        <button className="bg-main-light text-2xl" onClick={toggleShow}>
                            <IconX className="w-6 h-6 md:w-8 md:h-8 " />
                        </button>
                    </div>
                    <div className="space-y-2.5 md:space-y-5 lg:space-y-6 mb-12 md:mb-10 lg:mb-16">
                        <p className="font-swift text-3xl md:text-4xl">Get your gift!</p>
                        <p className="text-sm md:text-lg lg:text-xl font-light font-robotoItalic">
                            Введіть свою електронну адресу, щоб отримати спеціальний гайд зі здорового харчування. Це мій подарунок вам!
                        </p>
                    </div>
                    <div className="font-light text-xs md:text-sm lg:text-base text-green">
                        <p className="mb-2.5 md:mb-4">Введіть ваш ПІБ *</p>
                        <input
                            placeholder="Тимощук Оксана"
                            className={`border bg-transparent ${stateForm.fullName.error ? 'border-red-500' : 'border-green'} w-full px-2.5 py-1.5 md:px-5 md:py-2.5 lg:px-6 lg:py-4 rounded-md`}
                            onChange={setFullName}
                            value={stateForm.fullName.value}
                        />
                        <p className="mb-2.5 md:mb-4 mt-4 md:mt-10 ">Введіть ваш Імейл *</p>
                        <input
                            placeholder="oksana.tymoshchuk@gmail.com"
                            className={`border bg-transparent w-full px-2.5 py-1.5 md:px-5 md:py-2.5 lg:px-6 lg:py-4 rounded-md ${stateForm.mail.error ? 'border-red-500' : 'border-green'}`}
                            onChange={setMail}
                            value={stateForm.mail.value}
                        />
                    </div>

                    <button
                        className="mt-7 text-yellow bg-green rounded-xl p-4 md:p-6 lg:p-8 w-max mx-auto flex"
                        onClick={validateForm}
                    >
                        <IconGift className="h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                    </button>
                </div>
            </div>
        </div>
    )
}