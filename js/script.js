
const linkFamilyLaw = document.getElementById('practice-family-law');

const linkRealEstate = document.getElementById('practice-real-estate');

const linkWillsEstate = document.getElementById('practice-wills-estate');

const linkImmigrationLaw = document.getElementById('practice-immigration-law');

const containerFamilyLaw = document.getElementById('family-law');

const containerRealEstate = document.getElementById('real-estate');

const containerWillsEstate = document.getElementById('wills-estate');

const containerImmigrationLaw = document.getElementById('immigration-law');


function setFamilyLaw() {
    containerImmigrationLaw.style.display = "none";
    containerRealEstate.style.display = "none";
    containerWillsEstate.style.display = "none";
    
    if(containerFamilyLaw.style.display === "none") {
        containerFamilyLaw.removeAttribute('style');
    }

}

function setRealEstate() {
    containerFamilyLaw.style.display = "none";
    containerImmigrationLaw.style.display = "none";
    containerWillsEstate.style.display = "none";
    
    if(containerRealEstate.style.display === "none") {
        containerRealEstate.removeAttribute('style');
    }
}

function setWillsEstate() {
    containerFamilyLaw.style.display = "none";
    containerRealEstate.style.display = "none";
    containerImmigrationLaw.style.display = "none";

    if(containerWillsEstate.style.display === "none") {
        containerWillsEstate.removeAttribute('style');
    }

}

function setimmigrationLaw() {
    containerFamilyLaw.style.display = "none";
    containerRealEstate.style.display = "none";
    containerWillsEstate.style.display = "none";
    
    if(containerImmigrationLaw.style.display === "none") {
        containerImmigrationLaw.removeAttribute('style');
    }
}

linkFamilyLaw.addEventListener('click', function(e){
    linkFamilyLaw.classList.remove('section-subheading');
    linkFamilyLaw.classList.remove('practice__subheading');

    linkRealEstate.classList.add('section-subheading');
    linkRealEstate.classList.add('practice__subheading');

    linkWillsEstate.classList.add('section-subheading');
    linkWillsEstate.classList.add('practice__subheading');

    linkImmigrationLaw.classList.add('section-subheading');
    linkImmigrationLaw.classList.add('practice__subheading');

    if(linkRealEstate.classList.contains('practice-active')){
        linkRealEstate.classList.remove('practice-active');
    }

    if(linkWillsEstate.classList.contains('practice-active')){
        linkWillsEstate.classList.remove('practice-active');
    }

    if(linkImmigrationLaw.classList.contains('practice-active')){
        linkImmigrationLaw.classList.remove('practice-active');
    }

    linkFamilyLaw.classList.add('practice-active');

    setFamilyLaw();
    e.preventDefault();
})

linkRealEstate.addEventListener('click', function(e){
    linkRealEstate.classList.remove('section-subheading');
    linkRealEstate.classList.remove('practice__subheading');

    linkFamilyLaw.classList.add('section-subheading');
    linkFamilyLaw.classList.add('practice__subheading');

    linkWillsEstate.classList.add('section-subheading');
    linkWillsEstate.classList.add('practice__subheading');

    linkImmigrationLaw.classList.add('section-subheading');
    linkImmigrationLaw.classList.add('practice__subheading');

    if(linkFamilyLaw.classList.contains('practice-active')){
        linkFamilyLaw.classList.remove('practice-active');
    }

    if(linkWillsEstate.classList.contains('practice-active')){
        linkWillsEstate.classList.remove('practice-active');
    }

    if(linkImmigrationLaw.classList.contains('practice-active')){
        linkImmigrationLaw.classList.remove('practice-active');
    }

    linkRealEstate.classList.add('practice-active');

    setRealEstate();

    e.preventDefault();
})

linkWillsEstate.addEventListener('click', function(e){
    linkWillsEstate.classList.remove('section-subheading');
    linkWillsEstate.classList.remove('practice__subheading');

    linkFamilyLaw.classList.add('section-subheading');
    linkFamilyLaw.classList.add('practice__subheading');

    linkImmigrationLaw.classList.add('section-subheading');
    linkImmigrationLaw.classList.add('practice__subheading');

    linkRealEstate.classList.add('section-subheading');
    linkRealEstate.classList.add('practice__subheading');

    if(linkFamilyLaw.classList.contains('practice-active')){
        linkFamilyLaw.classList.remove('practice-active');
    }

    if(linkRealEstate.classList.contains('practice-active')){
        linkRealEstate.classList.remove('practice-active');
    }

    if(linkImmigrationLaw.classList.contains('practice-active')){
        linkImmigrationLaw.classList.remove('practice-active');
    }

    linkWillsEstate.classList.add('practice-active');
    setWillsEstate();
    e.preventDefault();
})

linkImmigrationLaw.addEventListener('click', function(e){
    linkImmigrationLaw.classList.remove('section-subheading');
    linkImmigrationLaw.classList.remove('practice__subheading');

    linkFamilyLaw.classList.add('section-subheading');
    linkFamilyLaw.classList.add('practice__subheading');

    linkWillsEstate.classList.add('section-subheading');
    linkWillsEstate.classList.add('practice__subheading');

    linkRealEstate.classList.add('section-subheading');
    linkRealEstate.classList.add('practice__subheading');

    if(linkFamilyLaw.classList.contains('practice-active')){
        linkFamilyLaw.classList.remove('practice-active');
    }

    if(linkRealEstate.classList.contains('practice-active')){
        linkRealEstate.classList.remove('practice-active');
    }

    if(linkWillsEstate.classList.contains('practice-active')){
        linkWillsEstate.classList.remove('practice-active');
    }

    linkImmigrationLaw.classList.add('practice-active');
    setimmigrationLaw();
    e.preventDefault();
})