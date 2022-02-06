function lastDateModified() {
    const date = new Date(document.lastModified);
    return date.toLocaleString('en-US', {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

console.log("Last modified " + lastDateModified());

document.getElementById("lastModified").innerHTML = "Last modified: " + lastDateModified();
document.getElementById("locationPage").innerHTML = "Page location: " + window.location.href;