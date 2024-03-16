document.addEventListener('DOMContentLoaded', function () {
    var darkToggle = document.getElementById('darkToggle');
    darkToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var educationLink = document.getElementById("educationLink");
    var skillsLink = document.getElementById("skillslink");
    var professionalLink = document.getElementById("professionallink");
    var HomeLink= document.getElementById("homelink");

    var skillsData = document.querySelector(".skills_data");
    var educationCard = document.querySelector(".educationCard");
    var professionalData = document.querySelector(".professional");

    var imageSection = document.querySelector(".imag-sec");
    var datasection = document.querySelector(".data");
    HomeLink.addEventListener("click", function () {
        if (datasection.style.display === "none" || datasection.style.display === "") {
            datasection.style.display = "block";
            imageSection.style.display = "block";
            skillsData.style.display = "none";
            professionalData.style.display = "none";
            educationCard.style.display = "none";
        } else {
            datasection.style.display = "none";
            imageSection.style.display = "block";
            datasection.style.display = "block";
            skillsData.style.display = "none";
            professionalData.style.display = "none";
            educationCard.style.display = "none";
        }
    });
    educationLink.addEventListener("click", function () {
        if (educationCard.style.display === "none" || educationCard.style.display === "") {
            educationCard.style.display = "block";
            imageSection.style.display = "none";
            datasection.style.display = "none";
            skillsData.style.display = "none";
            professionalData.style.display = "none";
        } else {
            educationCard.style.display = "none";
            imageSection.style.display = "block";
            datasection.style.display = "block";
            skillsData.style.display = "none";
            professionalData.style.display = "none";
        }
    });

    skillsLink.addEventListener("click", function () {
        if (skillsData.style.display === "none" || skillsData.style.display === "") {
            skillsData.style.display = "flex";
            imageSection.style.display = "none";
            datasection.style.display = "none";
            educationCard.style.display = "none";
            professionalData.style.display = "none";
        } else {
            skillsData.style.display = "none";
            imageSection.style.display = "block";
            datasection.style.display = "block";
            educationCard.style.display = "none";
            professionalData.style.display = "none";
        }
    });

    professionalLink.addEventListener("click", function () {
        if (professionalData.style.display === "none" || professionalData.style.display === "") {
            professionalData.style.display = "flex";
            imageSection.style.display = "none";
            datasection.style.display = "none";
            educationCard.style.display = "none";
            skillsData.style.display = "none";
        } else {
            professionalData.style.display = "none";
            imageSection.style.display = "block";
            datasection.style.display = "block";
            // educationCard.style.display = "block";
            // skillsData.style.display = "flex";
        }
    });
});

function toggleContactCard() {
    var contactCard = document.getElementById("contactCard");
    var imageSection = document.querySelector(".imag-sec");

    if (contactCard.style.display === "none") {
        contactCard.style.display = "block";
        // Adjust the margin or padding to move the image down
        imageSection.style.marginTop = "20px";
        imageSection.style.marginBottom="0px";
    } else {
        contactCard.style.display = "none";
        // Reset the margin to its original value
        imageSection.style.marginTop = "0";
    }
}

