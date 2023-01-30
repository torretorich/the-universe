const AppContinueButton = ({
                               className,
                               disableBtn,
                               onClick, title
                           }: {
    className: any
    disableBtn: any
    onClick?: (e: any) => any
    title: string
}) => {
    return (
        <button
            className={className}
            type="button"
            disabled={disableBtn}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
export default AppContinueButton