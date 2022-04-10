export const validate = (data, type) => {
    const errors = {};


    if (!data.email.trim()) {
        errors.email = "email is required"
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
        errors.email = " email is invalid"
    }

    if (!data.password) {
      errors.password = "password is required";
    } else if (data.password.length < 6) {
      errors.password = "password must contain at least 6 characters";
    } else {
        delete errors.password
    }

    

    if (type === "signup") {
      
       if (!data.name.trim()) {
         errors.name = "name is required";
       } else {
         delete errors.name;
       }

       if (!data.confirmPassword) {
         errors.confirmPassword = "confirm your password";
       } else if (data.password !== data.confirmPassword) {
         errors.confirmPassword = "passwords do not match";
       } else {
         delete errors.confirmPassword;
       }

       if (data.isAccepted) {
         delete errors.isAccepted;
       } else {
         errors.isAccepted = "please accept our policy";
       }
    }

    return errors;

}