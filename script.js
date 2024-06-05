document.addEventListener('DOMContentLoaded', function() {
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true
      }
    });
  
    tour.addStep({
      id: 'step-1',
      text: 'Welcome to my portfolio! This is the home page.',
      attachTo: {
        element: '.welcome-message',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
  
    tour.addStep({
      id: 'step-2',
      text: 'Here you can learn more about me.',
      attachTo: {
        element: '.about',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
  
    tour.addStep({
      id: 'step-3',
      text: 'Check out my education background.',
      attachTo: {
        element: '.education',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
  
    tour.addStep({
      id: 'step-4',
      text: 'See my portfolio of projects.',
      attachTo: {
        element: '.portfolio',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
  
    tour.addStep({
      id: 'step-5',
      text: 'Explore my training experiences.',
      attachTo: {
        element: '.training',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
  
    tour.addStep({
      id: 'step-6',
      text: 'See my design works.',
      attachTo: {
        element: '.design',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
  
    tour.addStep({
      id: 'step-7',
      text: 'Contact me for more information.',
      attachTo: {
        element: '.contact-me',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Finish',
          action: tour.complete
        }
      ]
    });
  
    document.getElementById('start-tour').addEventListener('click', function() {
      tour.start();
    });
  });
  