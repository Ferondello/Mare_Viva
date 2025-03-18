document.addEventListener("DOMContentLoaded", function () {
    const donationLinks = [
        { name: "Sea Shepherd", url: "https://seashepherd.org.br/doe/" },
        { name: "WWF Brasil", url: "https://doe.wwf.org.br/ficha/manifesto-3?utm_source=google-ads&utm_medium=doacao&utm_campaign=manifesto3_doacao_keywords_search_google-ads&gad_source=1&gclid=CjwKCAiAzvC9BhADEiwAEhtlN4qau2uExuKUPmV5V05WuGIkAoWyWewq7O7pKy2h2We1Y1YbWj1a1xoCPXkQAvD_BwE" },
        { name: "Greenpeace", url: "https://doe.greenpeace.org.br/?cc=701Pm00000T8VcFIAV&entrypoint=botao_doe&gp_anonymous_id=a96fc430-4a7b-4c6f-8c3d-deb31bd53cbb" }
    ];

    const donationContainer = document.getElementById("donation-list");

    donationLinks.forEach(donation => {
        const linkElement = document.createElement("a");
        linkElement.href = donation.url;
        linkElement.target = "_blank";
        linkElement.textContent = `Doe para ${donation.name}`;
        linkElement.style.display = "block";
        linkElement.style.margin = "10px 0";
        linkElement.style.padding = "10px";
        linkElement.style.backgroundColor = "#00796b";
        linkElement.style.color = "white";
        linkElement.style.textAlign = "center";
        linkElement.style.borderRadius = "5px";
        linkElement.style.textDecoration = "none";
        
        donationContainer.appendChild(linkElement);
    });
});
