function timeConversion(s: string): string {
    const splitTime = s.split(":");
    const hours = splitTime[0];
    const minutes = splitTime[1];
    const seconds = splitTime[2].replace(/AM|PM/, "");
    const isAM = s.includes("AM");
    const isPM = !isAM;

    let finalHours = hours
    if(hours === "12" && isAM){
        finalHours = "00"
    }
    if(hours === "12" && isPM){
        finalHours = "12"
    }

    if(parseInt(hours) >= 1 && isPM && hours !== "12"){
        finalHours = String(parseInt(hours) + 12);
    }

    return `${finalHours}:${minutes}:${seconds}`
  
}
