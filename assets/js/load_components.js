$.get("/components/navbar.html", html => {
    let tmp = $("<div>").html(html);
    let tpl = tmp.find("#navbar-template")[0];
    $("#navbar").append($(tpl.content).clone()); 
window.dispatchEvent(new Event("navbarLoaded"));
});

$.get("/components/footer.html", html => {
    let tmp = $("<div>").html(html);
    let tpl = tmp.find("#footer-template")[0];
    $("#footer").append($(tpl.content).clone()); 
});
