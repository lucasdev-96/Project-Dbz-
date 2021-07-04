const a = async () => {
  const result =  await fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total')
   console.log(await result.json())
}
a()