export function validateFullName(name:string): string | null {
    if(name.length < 5){
        return 'імя повинне містити щонайменше 5 символів'
    }
    return null
}

export function validateEmail(email: string): string | null{
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) return "Імейл обов'язковий";
    if (!emailPattern.test(email)) return "Емейл не коректний";
    return null;
  };