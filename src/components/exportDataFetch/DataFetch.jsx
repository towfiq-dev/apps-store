export const appsDataFetch= async()=>{
  const appsRes= await fetch('/data.json')
  return(appsRes.json())
}