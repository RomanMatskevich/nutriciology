interface Props {
    buttons: {
        text: string;
        ref:  React.RefObject<HTMLDivElement>
    }[];
    scrollToSection: (ref: any) => void;
}


export default function Header({ buttons, scrollToSection }: Props) {
    return (
        <div className="font-halvetica py-4 px-7 flex gap-7 justify-between border-b border-green" id = "header">
            {buttons.map((button, i) =>
                <button key = {i} className="text-xs text-green font-light hover:font-normal" onClick={() => scrollToSection(button.ref)}>
                    {button.text}
                </button>)}
        </div>
    )
}