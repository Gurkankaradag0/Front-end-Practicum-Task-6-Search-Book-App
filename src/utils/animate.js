const root = document.getElementById('root')

const start = () => {
    root.classList.add('before:animate-flashlight','before:bg-libraryColored', 'after:animate-eyes', 'after:bg-libraryEyes')
}

const stop = () => {
    root.classList.remove('before:animate-flashlight','before:bg-libraryColored', 'after:animate-eyes', 'after:bg-libraryEyes')
}

export { start , stop }