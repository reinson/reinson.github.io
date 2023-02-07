var projects = {};
projects.uefa = {
    videoSource: "mp4/uefa.mp4",
    title: "UEFA Euro 2016 map",
    link: "http://euro2016map.appspot.com",
    visibleLink:  "euro2016map.appspot.com",
    tags: ["D3.js", "JavaScript", "Google maps API", "Python"],
    description: "As a football fan I created, together with a friend, this application to provide interesting insights into teams competing in the last UEFA European Championship. By selecting a country its players' home club locations are drawn on the map. I did most of the front-end work and the friend scraped and geolocated the player's data."
};

projects.dgns = {
    videoSource: "mp4/stacked-area.mp4",
    title: "Overview of the Estonian specialized medical care spending",
    link: "https://www.stacc.ee/ehif-stacked-area/?lng=En",
    visibleLink: "stacc.ee/ehif-stacked-area",
    tags: ["D3.js","JavaScript","Data analysis", "Python", "SQL"],
    description: "<p>This interactive data visualization of Estonian specialised medical care costs is based on the Estonian Health Insurance Fund (EHIF) data. Health care bills were analyzed based on the main diagnoses and patients' age. </p><p>The analysis and visualization received a lot of positive feedback through traditional <a href='http://tervis.postimees.ee/3930967/vaata-ise-jarele-kelle-peale-tegelikult-kulub-loviosa-ravirahast'>[1]</a> <a href='http://m.tervist24.ohtuleht.ee/774191/eriarstiabile-tehtud-kulutusi-saab-nuudsest-jalgida-interaktiivselt'>[2]</a> and social media and therefore turned out to be a success  for my employer (STACC) and the client (Estonian Health Insurance Fund).</p>"
};

projects.demographics = {
    videoSource: "mp4/demographics.mp4",
    title: "Demographics of Estonia",
    link: "http://bl.ocks.org/reinson/raw/4edb6d60afd451e1cfaf6369f943bd7b/",
    visibleLink: "Link to visualization",
    tags: ["D3.js", "JavaScript"],
    description: "Estonia is facing a demographic crisis with decreasing birth rates and increasing number of elderly people. I visualized demographic changes of Estonia from the beginning of 20th century up to year 2040 with 25 year forecast to give an overview of the data that describes this serious problem."
};

projects.googleMaps = {
    videoSource: "mp4/google-maps.mp4",
    title: "Estonian cities Google maps app",
    link: "http://reinson.github.io/Udacity_WDND_final_project/index.html",
    visibleLink: "Link to visualization",
    tags: ["D3.js", "Knockout.js", "Google maps API", "Wikipedia API", "JavaScript", "Udacity"],
    description: "Since there is an administrative reform going on in Estonia I chose to visualize Estonian geograpichal data as a project for the Udacity Front-End Web Developer Nanodegree. This Google maps based visualization shows all the cities and towns of Estonia. It uses Knockout.js to populate and filter the cities list in the sidebar and Wikipedia API to provide descriptions about the places."
};

projects.ehifBudget = {
    videoSource: "mp4/ehif-budget.mp4",
    title: "Budget of Estonian Health Insurance Fund",
    link: "https://www.stacc.ee/ehif-budget/",
    visibleLink: "Link to visualization",
    tags: ["D3.js", "HTML", "JavaScript"],
    description: "The goal of this project was to give an overview of the budget of Estonian Health Insurance Fund. The project visualises both the income and expense sides of the budget. It includes an interactive treemap visualization of expense hierarchy that I am especially pleased with."
};

projects.arcadeGame = {
    videoSource: "mp4/arcade.mp4",
    title: "Arcade game",
    link: "/elections",
    visibleLink: "Link to application",
    tags: ["JavaScript", "Object-oriented JS", "Canvas", "Udacity"],
    description: "This is a simple HTML5 canvas based game developed for the Udacity Front-End Web Developer Nanodegree program. Game engine, resources loading and graphics were provided by Udacity. I implemented rendering of all objects as well as game logic."
};

projects.election = {
    videoSource: "mp4/elections.mp4",
    title: "Estonian parliamentary election visualization",
    link: "http://bl.ocks.org/reinson/raw/740e25faa7942f25896f/",
    visibleLink: "Link to visualization",
    tags: ["JavaScript", "D3.js", "Udacity"],
    description: "Estonia is one of the first countries to use E-voting (over the internet voting) in general elections. This D3.js based interactive bubble chart shows the profile of a typical electronic voter. The viewer can explore how the fraction of electronic votes depends on different characteristics of the candidates."
};

projects.phd =  {
    //imgSource: "img/phd_photo_2x.jpg",
    videoSource: "mp4/phd_slides.mp4",
    title: "PhD thesis in molecular virology",
    link: "https://dspace.ut.ee/bitstream/handle/10062/49900/reinson_tormi.pdf?sequence=1&isAllowed=y",
    visibleLink: "Link to thesis",
    tags: ["Science", "Data analysis", "Data visualization", "Public speaking", "Writing"],
    description: "<p>I have a PhD degree in molecular virology. During my studies I clarified important aspects of Human papillomavirus DNA replication that could play a role in causing cancer.</p><p>  I have published <a href='https://www.ncbi.nlm.nih.gov/pubmed?term=(reinson%20t)%20AND%20(%222011%2F01%2F01%22%5BDate%20-%20Publication%5D%20%3A%20%222016%2F01%2F01%22%5BDate%20-%20Publication%5D)'>four scientific articles</a> and have given several presentations in international confernces. I performed and analyzed loads of experiments and wrote up the results.</p><p> It was an interesting job and invaluable experience.</p> "
};

projects.wines = {
    imgSource: "img/wines1_2x.jpg",
    title: "Exploratory analysis of wine quality",
    link: "http://htmlpreview.github.io/?https://raw.githubusercontent.com/reinson/UdacityProject3_Explore-and-Summarize-Data/master/Tormi_Reinson.html",
    visibleLink: "Link to analysis",
    tags: ["Data analysis", "Data visualization", "R", "Udacity"],
    description: "The goal of this exploratory data analysis was to determine the physicochemical determinants of wine quality. It turned out that there is no single property or a compound that determines the quality of a wine. However, some factors, like alcohol percent (positive relationship) and volatile acidity (negative relationship) were moderately correlated with wine quality."
};

projects.machineLearning = {
    imgSource: "img/ml_cover.jpg",
    title: "Identifying fraud from Enron email",
    link: "https://github.com/reinson/UdacityProject4_Identifying-Fraud-from-Enron-Email",
    visibleLink: "Link to Github repo",
    tags: ["Machine learning","Data analysis","Udacity"],
    description: "The goal of this project was to use financial and email data for classifying Enron employees into two groups based on whether they were involved in the corporate fraud or not. This project was made for Udacity Data Analyst Nanodegree."
};

projects.firstNeuralNet = {
    imgSource: "img/deep_learning_results.png",
    title: " Neural network to predict bike rentals",
    link: "https://github.com/reinson/deep-learning/blob/master/first-neural-network/DLND%20Your%20first%20neural%20network.ipynb",
    visibleLink: "Link to project",
    tags: ["Deep learning","Machine learning","Data analysis", "Udacity"],
    description: "My first neural network that predicts daily bike rental ridership. I made this project during my ongoing Deep Learning Foundations nanodegree program, which is already my third nanodegree from Udacity."
};


$(document).ready(function() {
    var modal = $("#projectModal");
    var modalTitle = modal.find(".modal-title");
    var video = modal.find("#sampleMovie");
    var img = modal.find("#sampleImage");
    var link = modal.find("#link-btn");
    var tags = modal.find(".keywords");
    var description = modal.find(".project-description");

    $(".link-wrapper").on("click",function(){
        var id = this.getAttribute("id");
        var data = projects[id];
        modalTitle.html(data.title);

        if (data.videoSource){
            video.toggleClass("hidden",false);
            video.attr("src",data.videoSource);
            img.toggleClass("hidden",true);
        } else {
            img.toggleClass("hidden",false);
            img.attr("src",data.imgSource);
            video.toggleClass("hidden",true);

        }


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
