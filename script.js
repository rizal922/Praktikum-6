// Form validation and submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address'
        });
        return;
    }

    // If validation passes, show success message
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your message has been sent successfully!'
    });

    // Reset form
    this.reset();
});

// Newsletter subscription checkbox handler
document.getElementById('subscribe').addEventListener('change', function() {
    if (this.checked) {
        Swal.fire({
            title: 'Subscribe to Newsletter',
            text: 'Would you like to receive our newsletter?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, subscribe me!',
            cancelButtonText: 'No, thanks'
        }).then((result) => {
            if (!result.isConfirmed) {
                this.checked = false;
            }
        });
    }
});

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar active state on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
