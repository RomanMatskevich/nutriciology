interface Props {
    buttons: {
        text: string;
    }[]
}


export default function Header({ buttons }: Props) {
    return (
        <div className="font-halvetica py-4 px-7 flex gap-7 justify-between border-b border-green" id = "header">
            {buttons.map((button) =>
                <button className="text-xs text-green font-light hover:font-normal">
                    {button.text}
                </button>)}
        </div>
    )
}