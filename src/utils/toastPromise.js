    // Resource
import { toast } from "react-toastify";

function toastPromise(callback, configPromise) {
  return toast.promise(callback, {
    pending: {
      render() {
        return configPromise.toastPromiseConfiguration.pending
      },
      icon: "๐",
      theme: "dark",
   
    },
    success: {
      render() {
        return configPromise.toastPromiseConfiguration.success
      },
      icon: "๐",
      theme: "dark",
      delay: 700
    },
    error: {
      render({data}) {
        
        if(data.response !== undefined ){
          return data.response.data.error
        }
        return "Erro! Falha na conexรฃo com o servidor."
      },
      icon: "๐",
      theme: "dark",
      delay: 700
    }
  })
}

export { toastPromise }
