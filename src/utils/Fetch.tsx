// RequestInfo | URL
const Fetch=async (input: any, init?: RequestInit)=>{
    return await fetch(input,init).then((resp)=>{
        return resp.json()
    })
}
export default Fetch