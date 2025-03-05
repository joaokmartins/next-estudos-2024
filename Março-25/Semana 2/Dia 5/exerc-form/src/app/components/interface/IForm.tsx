export interface FormProps {
    onSubmit: (data: FormData) => void;
  }
  
  export interface FormData {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }

