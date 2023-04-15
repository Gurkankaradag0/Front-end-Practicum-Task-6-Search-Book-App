const SearchIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 96 960 960" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
        </svg>
    )
}

const LeftArrowIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 96 960 960" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"/>
        </svg>
    )
}

const UpArrowIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 96 960 960" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="m283 711-43-43 240-240 240 239-43 43-197-197-197 198Z"/>
        </svg>
    )
}

const Icon = ({ name, size = 24 }) => {
    const icons = {
        search: SearchIcon,
        leftArrow: LeftArrowIcon,
        upArrow: UpArrowIcon
    }

    const Component = icons[name]
    return <Component size={size} />
}

export {
    Icon
}