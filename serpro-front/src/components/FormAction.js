export function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text,
    className
}){
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className={className}
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}