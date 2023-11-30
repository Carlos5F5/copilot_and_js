const siteProps = {
    name: "Carlos Franco",
    title: "Web Designer & Content Creator",
    email: "alex@example.com",
    gitHub: "microsoft",
    instagram: "microsoft",
    linkedIn: "satyanadella",
    medium: "",
    twitter: "microsoft",
    youTube: "Code",
};

// Add an amazing animation to the social icons
const socialIcons = document.querySelectorAll(".social-icon");

socialIcons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
        icon.classList.add("animated");
    });

    icon.addEventListener("mouseout", () => {
        icon.classList.remove("animated");
    });
});
  