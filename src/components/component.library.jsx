


export const TitleXl = ({children,className,...rest}) => {

    return (
        <p className={`text-white text-3xl sm:text-5xl md:text-7xl font-light transition-all ${className}`} {...rest}>
            {children}
        </p>
    )
}

export const TitleMd = ({children,className,...rest}) => {

    return (
        <p className={`text-white text-2xl md:text-4xl font-light ${className}`} {...rest}>
            {children}
        </p>
    )
}


export const SubtitleLg = ({children,className,...rest}) => {
    return (
        <p className={`text-gray-500 py-4 ${className}`} {...rest}>
            {children}
        </p>
    )
}