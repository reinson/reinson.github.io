var projects = {};
projects.uefa = {
    videoSource: "img/uefa.ogv",
    title: "UEFA Euro 2016 map",
    link: "http://euro2016map.appspot.com",
    visibleLink:  "euro2016map.appspot.com",
    tags: ["D3.js", "JavaScript", "Google maps API", "Python"],
    description: "This is an interactive visualization that shows where are the home clubs of footballers from the UEFA Euro2016 competition. Select a country and it's players are visualized on the map.  Made as a personal project with a friend. I did most of the front end work and she scraped and geolocated the player's data."
};

projects.dgns = {
    videoSource: "img/dgns.ogv",
    title: "Overview of the Estonian specialized medical care spending",
    link: "https://www.stacc.ee/ehif-stacked-area/?lng=En",
    visibleLink: "stacc.ee/ehif-stacked-area",
    tags: ["D3.js","JavaScript","Data analysis", "Python", "SQL"],
    description: "This is an interactive data visualization of Estonian specialised medical care costs. It is based on the Estonian Health Insurance Fund (EHIF) data. EHIF is the only health insurance provider in Estonia. Health care bills were analyzed based on the main diagnoses and patients' age."
};

projects.demographics = {
    videoSource: "img/demographics.ogv",
    title: "Demographics of Estonia",
    link: "http://bl.ocks.org/reinson/raw/4edb6d60afd451e1cfaf6369f943bd7b/",
    visibleLink: "Link to visualization",
    tags: ["D3.js", "JavaScript"],
    description: "A personal visualization project I made to practice D3.js. It shows demographic changes of Estonia from the beginning of 20th century up to year 2040 with 25 year forecast."
};

projects.googleMaps = {
    videoSource: "img/googleMaps.ogv",
    title: "Estonian cities Google maps app",
    link: "http://reinson.github.io/Udacity_WDND_final_project/index.html",
    visibleLink: "Link to visualization",
    tags: ["D3.js", "Knockout.js", "Google maps API", "Wikipedia API", "JavaScript", "Udacity"],
    description: "This Google maps based visualization shows all the cities and towns of Estonia. It uses Knocokout.js to populate and filter cities list in the sidebar and Wikipedia API to provide descriptions about the places."
};

projects.ehifBudget = {
    videoSource: "img/ehifBudget.ogv",
    title: "Budget of Estonian Health Insurance Fund",
    link: "https://www.stacc.ee/ehif-budget/",
    visibleLink: "Link to visualization",
    tags: ["D3.js", "HTML", "JavaScript"],
    description: ""
};

projects.arcadeGame = {
    videoSource: "",
    title: "Arcade game",
    link: "Udacity_WDND_project6/index.html",
    visibleLink: "Link to application",
    tags: ["JavaScript", "Object-oriented JS", "Canvas", "Udacity"],
    description: "This is a simple HTML5 canvas based game developed for the Udacity front end nanodegree program. Game engine, resources loading and graphics were provided by Udacity. I implemented rendering of all objects as well as game logic."
};

projects.election = {
    videoSource: "",
    title: "Estonian parliamentary election visualization",
    link: "http://bl.ocks.org/reinson/raw/740e25faa7942f25896f/",
    visibleLink: "Link to visualization",
    tags: ["JavaScript", "D3.js", "Udacity"],
    description: "D3.js based interactive bubble chart that shows the profile of a typical electronic (over the internet) voter. Viewer can change the x-axis and filter data, which results in animated transitions in bubble locations and axes."
};

projects.phd =  {
    videoSource: "",
    title: "PhD thesis in molecular virology",
    link: "https://dspace.ut.ee/bitstream/handle/10062/49900/reinson_tormi.pdf?sequence=1&isAllowed=y",
    visibleLink: "Link to thesis",
    tags: ["Science", "Data analysis", "Data visualization", "Public speaking", "Writing"],
    description: ""
};

projects.wines = {
    videoSource: "",
    title: "Exploratory analysis of wine quality",
    link: "http://htmlpreview.github.io/?https://raw.githubusercontent.com/reinson/UdacityProject3_Explore-and-Summarize-Data/master/Tormi_Reinson.html",
    visibleLink: "Link to analysis",
    tags: ["Data analysis", "Data visualization", "R", "Udacity"],
    description: "The goal of this exploratory data analysis was to determine the physicochemical determinants of wine quality. It turned out that there is no single property or a compound that determines the quality of a wine. However, some factors, like alcohol percent and volatile acidity were moderately correlated with wine quality."
};

projects.machineLearning = {
    videoSource: "",
    title: "Identifying fraud from Enron email",
    link: "https://github.com/reinson/UdacityProject4_Identifying-Fraud-from-Enron-Email",
    visibleLink: "Link to Github repo",
    tags: ["Machine learning","Data analysis","Udacity"],
    description: "The goal of this project was to use financial and email data for classifying Enron employees into two groups based on whether they were involved in the corporate fraud or not. This project was made for Udacity Data Analyst Nanodegree."
};

projects.firstNeuralNet = {
    videoSource: "",
    title: " Neural network to predict bike rentals",
    link: "https://github.com/reinson/deep-learning/blob/master/first-neural-network/DLND%20Your%20first%20neural%20network.ipynb",
    visibleLink: "Link to project",
    tags: ["Machine learning", "Deep learning", "Udacity"],
    description: ""
};


$(document).ready(function() {
    var modal = $("#projectModal");
    var modalTitle = modal.find(".modal-title");
    var video = modal.find("#sampleMovie");
    var link = modal.find("#link-btn");
    var tags = modal.find(".keywords");
    var description = modal.find(".project-description");

    $(".link-wrapper").on("click",function(){
        var id = this.getAttribute("id");
        var data = projects[id];
        modalTitle.html(data.title);
        video.attr("src",data.videoSource);
        link.html(data.visibleLink);
        link.attr("href",data.link);

        modal.modal("show");

        tags.html("");
        data.tags.forEach(function(d){
            tags.append("<div>"+d+"</div>");
        });

        description.html(data.description);

    })
});
