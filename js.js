const testimonials = [
    {
        name: "Sarah L.",
        feedback: "Absolutely amazing service! My home has never been this clean.",
        date: "November 5, 2024",
    },
    {
        name: "James P.",
        feedback: "Professional and friendly staff. Highly recommended!",
        date: "November 12, 2024",
    },
    {
        name: "Emily W.",
        feedback: "I saved so much time and effort. Worth every penny!",
        date: "November 20, 2024",
    },
];

function displayTestimonials() {
    const container = document.getElementById("testimonial-container");

    testimonials.forEach((testimonial) => {
        const testimonialDiv = document.createElement("div");
        testimonialDiv.classList.add("testimonial");
        testimonialDiv.innerHTML = `
            <p><strong>${testimonial.name}</strong> (${testimonial.date})</p>
            <p>${testimonial.feedback}</p>
        `;
        container.appendChild(testimonialDiv);
    });
}
displayTestimonials();
