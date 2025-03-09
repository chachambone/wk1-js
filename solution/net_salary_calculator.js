function calculate_net_salary(){

    // Get in put values
    let basicSalary = prompt("Enter your salary")
    let benefits = prompt("Eneter your benefits")

    basicSalary = parseFloat(basicSalary)
    benefits = parseFloat(benefits)

    // total benefits and basic salary
    let grossSalary = basicSalary + benefits
    let taxRate
    
    // Determine the tax rate based on salary brackets
    if (grossSalary <= 24000) {
        taxRate = 10.0/100.0;
    } else if (grossSalary <= 32333) {
        taxRate = 25.0/100.0;
    } else if (grossSalary <= 500000) {
        taxRate = 30.0/100.0;
    } else if (grossSalary <= 800000) {
        taxRate = 32.5/100.0;
    } else {
        taxRate = 35.0/100.0;
    }

    // Calculate payee (i.e. Tax)

    let payee = Math.floor(grossSalary)*taxRate

    // Calculate NHIF deductions
    
    let nhifDeductions = Math.floor(basicSalary * 0.0275);

    // Calculate NSSF deductions
    let nssfDeductions = Math.floor(basicSalary * 0.6)

     //Calculate net salary
     let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

     alert(`P.A.Y.E: ${payee}\nGross in salary: ${grossSalary}\nNHIF deductions: ${nhifDeductions}\nNSSF deductions: ${nssfDeductions}\nNet salary: ${netSalary}`);

}