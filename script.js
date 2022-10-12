
const years = ["firstYear", "secondYear", "thirdYear", "fourthYear", "fifthYear"];
const subjects = [
    ["analysis", "algebra_discreteMathematics", "computersArchitecture", "logic", "operativeSystems", "programming"],
    ["algorithms_dataStructures", "automata", "dataBases", "numericalCalculation", "probability_statistics", "oopProgramming", "networks_security"],
    ["economics_businessOrganization", "operationalResearch", "webTechnologies", "open-sourceTechnologies", "softwareEngineer", "programmingConcurrentDistributed"],
    ["machineLearning", "inferentialStatistics", "searchEngines", "bioinformatics", "structuralBioinformatics", "deepLearning"],
    ["distributedSystem", "ngs_computationalGenomics", "learningFromNetworks", "advancedAlgorithmDesign"]
];


let yearIndex = 0;
for (;yearIndex < years.length; yearIndex++) {
    let indexSubject = 0;
    for (;indexSubject < subjects[yearIndex].length; indexSubject++) {
        const string_href =  "courses/" + years[yearIndex] + "/" + subjects[yearIndex][indexSubject] + ".html";			
        if (document.getElementById(years[yearIndex]).getElementsByTagName("li").length > indexSubject)
            document.getElementById(years[yearIndex]).getElementsByTagName("li")[indexSubject].getElementsByTagName("a")[0].href = string_href;
    }	
}

