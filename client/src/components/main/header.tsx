interface Props {
    buttons: {
        text: string;
        ref:  React.RefObject<HTMLDivElement>
    }[];
    scrollToSection: (ref: any) => void;
}


export default function Header({ buttons, scrollToSection }: Props) {
    return (
        <>
        <div className="font-roboto py-4 md:py-7 px-7 md:px-16 flex gap-7 justify-between border-b border-green md:mx-16 lg:mx-24" id = "header">
            {buttons.map((button, i) =>
                <button key = {i} className="text-xs md:text-base lg:text-xl text-green font-light hover:font-normal whitespace-nowrap" onClick={() => scrollToSection(button.ref)}>
                    {button.text}
                </button>)}
        </div>
        </>
        
    )
}