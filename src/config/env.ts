const env = {
    VITE_API_URL:"",
    VITE_WEB_URL:""
}as const

export type ENV = typeof env

export default env