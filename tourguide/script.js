document.addEventListener('DOMContentLoaded', function () {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'shadow-md bg-purple-dark',
        scrollTo: { behavior: 'smooth', block: 'center' }
      }
    });
  
    tour.addStep({
      id: 'welcome',
      text: 'Welcome to my portfolio! Let me show you around.',
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
      id: 'name',
      text: 'This is my name, Amisha Choudhary.',
      attachTo: {
        element: '.name',
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
      id: 'profession',
      text: 'I am a UI/UX designer and developer.',
      attachTo: {
        element: '.profession',
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
      id: 'description',
      text: 'Here is a brief description about me.',
      attachTo: {
        element: '.description',
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
  
    // Start the tour when the button is clicked
    document.getElementById('start-tour').addEventListener('click', function() {
      tour.start();
    });
  });
   