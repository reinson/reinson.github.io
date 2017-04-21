var projects = {};
projects.uefa = {
    videoSource: "img/uefa.ogv",
    title: "UEFA Euro 2016 map",
    link: "http://euro2016map.appspot.com",
    visibleLink:  "euro2016map.appspot.com",
    tags: ["D3.js", "JavaScript", "Google maps API", "Python"],
    description: ""
};

projects.dgns = {
    videoSource: "img/dgns.ogv",
    title: "Overview of the Estonian specialized medical care spending",
    link: "https://www.stacc.ee/ehif-stacked-area/?lng=En",
    visibleLink: "stacc.ee/ehif-stacked-area",
    tags: ["D3.js","JavaScript", "Python", "SQL"],
    description: ""
};

projects.demographics = {
    videoSource: "img/demographics.ogv",
    title: "Demographics of Estonia",
    link: "http://bl.ocks.org/reinson/raw/4edb6d60afd451e1cfaf6369f943bd7b/",
    visibleLink: "Link to visualization",
    tags: ["D3.js", "JavaScript"],
    description: ""
};

projects.googleMaps = {
    videoSource: "img/googleMaps.ogv",
    title: "Estonian cities Google maps app",
    link: "http://reinson.github.io/Udacity_WDND_final_project/index.html",
    visibleLink: "Link to visualization",
    tags: ["D3.js", "Knockout.js", "Google maps API", "Wikipedia API", "JavaScript"],
    description: ""
};

projects.ehifBudget = {
    videoSource: "img/ehifBudget.ogv",
    title: "Budget of the Estonian Health Insurance Fund",
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
    tags: ["JavaScript", "Object-oriented JS", "Canvas"],
    description: ""
};

projects.election = {
    videoSource: "",
    title: "Estonian parliamentary election visualization",
    link: "http://bl.ocks.org/reinson/raw/740e25faa7942f25896f/",
    visibleLink: "Link to visualization",
    tags: ["JavaScript", "D3.js", "Udacity"],
    description: ""
};

projects.phd =  {

};

projects.wines = {

};

projects.firstNeuralNet = {

};

projects.machineLearning = {
    
};

$(document).ready(function() {
    var modal = $("#projectModal");
    var modalTitle = modal.find(".modal-title");
    var video = modal.find("#sampleMovie");
    var link = modal.find("#link-btn");

    $(".link-wrapper").on("click",function(){
        var id = this.getAttribute("id");
        var data = projects[id];
        modalTitle.html(data.title);
        video.attr("src",data.videoSource);
        link.html(data.visibleLink);
        link.attr("href",data.link);
        

        modal.modal("show");



    })
});
