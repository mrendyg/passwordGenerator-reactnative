export const Generator = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.-;:_{}[]´+*'¿?¡";
    let password = '';

    for (let i=0; i<16; i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }

    console.log('Your password is: ', password)

    return (
        Generator
    )
};
