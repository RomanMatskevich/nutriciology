interface PresentProps {
    imgUrl: string
}


export default function Present({imgUrl} : PresentProps){
    return(
        <div id="present" className="font-helvetica px-6 py-16 bg-yellow rounded-lg text-green">
            <h4 className="font-swift text-3xl">Present /</h4>
            <p className="w-max mx-auto text-sm font-light italic">Безкоштовна консультація</p>
            <p className="border-b border-green pb-2">Подарунок:</p>
            <div>
                На знак вдячності за вашу підтримку, дарую вам безкоштовний гайд по збалансованій тарілці.
                <br></br><br></br>
                Натискай знизу, щоб отримати його.
            </div>
            <img 
                src = {imgUrl}
                className="w-full h-full rounded-lg "
            />
            <p className="text-sm italic font-light w-max mx-auto">Твій гайд по збалансованій тарілці</p>
        </div>
    )
}