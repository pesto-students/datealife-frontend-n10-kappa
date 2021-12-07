export const getAge = (timeStamp: number): string => {
    const today = new Date();
    const birthDate = new Date(timeStamp);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age.toString();
};
