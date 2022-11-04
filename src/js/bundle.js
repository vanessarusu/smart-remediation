(function() {
    const speakers = document.querySelectorAll('.speaker');


    speakers.forEach(speaker => {
        configureSpeaker(speaker);
    });

    function configureSpeaker(speaker) {
        let bioLink = speaker.querySelector('.js-speaker-bio-link');
        let abstractLink = speaker.querySelector('.js-speaker-abstract-link');

        let bioContent = speaker.querySelector('.js-speaker-bio-content');
        let abstractContent = speaker.querySelector('.js-speaker-abstract-content');

        let lightboxContainer = speaker.querySelector('.speaker-lightbox-content');
        let dismissLightbox = speaker.querySelector('.dismiss');

        bioLink.addEventListener('click', function(e) {
            e.preventDefault();
            launchLightbox(lightboxContainer);
            openBio(bioContent, abstractContent);
        }, false);

        abstractLink.addEventListener('click', function(e) {
            e.preventDefault();
            launchLightbox(lightboxContainer);
            openAbstract(bioContent, abstractContent);
        }, false);

        dismissLightbox.addEventListener('click', function(e) { 
            e.preventDefault();
            closeLightbox(lightboxContainer);
        });

    }


    function openBio(bioContent, abstractContent) {
        bioContent.style.display = "block";
        abstractContent.style.display = "none";
    }

    function openAbstract(bioContent, abstractContent) {
        bioContent.style.display = "none";
        abstractContent.style.display = "block";
    }

    function launchLightbox(lightboxContainer) {
        lightboxContainer.classList.add('open');
        document.addEventListener('keyup', function(e) {
            closeLightbox(lightboxContainer);
        }, false);
    }

    function closeLightbox(lightboxContainer) {
        lightboxContainer.classList.remove('open');
        lightboxContainer.querySelector(".js-speaker-bio-content").style.display = "none";
        lightboxContainer.querySelector(".js-speaker-abstract-content").style.display = "none";
    }

})();