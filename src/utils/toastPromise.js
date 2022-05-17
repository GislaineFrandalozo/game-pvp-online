import { toast } from "react-toastify";
export function toastPromise(callback, configPromise) {
    return toast.promise(callback, {
        pending: {
            render() {
                return configPromise.toastPromiseConfiguration.pending
            },
            icon: "😄",
            theme: "dark",
            delay: 100
        },
        success: {
            render() {
                return configPromise.toastPromiseConfiguration.success
            },
            icon: "👍",
            theme: "dark",
            delay: 700
        },
        error: {
            render({ data }) {
                return data.response.data.error
            },
            icon: "👎",
            theme: "dark",
            delay: 700
        }
    })
}